import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(new URL('..', import.meta.url).pathname)
const indexFile = path.join(root, 'index.json')
const index = JSON.parse(fs.readFileSync(indexFile, 'utf8'))
if (index.schemaVersion !== 1 || !Array.isArray(index.cases)) throw new Error('Invalid index.json')

const forbiddenKeys = /^(token|secret|credential|password|privateKey|assessment|selection|workbench|localPath|privateSource)$/i
const sha40 = /^[a-f0-9]{40}$/
const sha64 = /^[a-f0-9]{64}$/
const caseId = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const repoName = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/

function walk(value, trail = []) {
  if (Array.isArray(value)) return value.forEach((item, i) => walk(item, [...trail, i]))
  if (!value || typeof value !== 'object') return
  for (const [key, item] of Object.entries(value)) {
    if (forbiddenKeys.test(key)) throw new Error(`Forbidden public evidence key: ${[...trail, key].join('.')}`)
    walk(item, [...trail, key])
  }
}

const seen = new Set()
for (const entry of index.cases) {
  if (!caseId.test(entry.id || '') || seen.has(entry.id)) throw new Error('Invalid or duplicate case in index')
  seen.add(entry.id)
  if (entry.manifest !== `cases/${entry.id}/manifest.json`) throw new Error(`${entry.id}: non-canonical manifest path`)
  const file = path.join(root, entry.manifest)
  if (!fs.existsSync(file)) throw new Error(`${entry.id}: manifest missing`)
  const m = JSON.parse(fs.readFileSync(file, 'utf8'))
  walk(m)
  if (m.schemaVersion !== 1 || m.case?.id !== entry.id || !m.case?.title) throw new Error(`${entry.id}: invalid identity`)
  if (!repoName.test(m.source?.repository || '') || !sha40.test(m.source?.commit || '')) throw new Error(`${entry.id}: invalid immutable source`)
  if (!sha40.test(m.bcl?.revision || '')) throw new Error(`${entry.id}: invalid BCL revision`)
  if (m.qualification?.kind !== 'RED_GREEN' || m.qualification?.baseline?.status !== 'EXPECTED_FAILURE' || m.qualification?.candidate?.status !== 'PASS' || m.qualification?.candidate?.exitCode !== 0 || m.qualification?.suite?.status !== 'PASS') throw new Error(`${entry.id}: invalid RED→GREEN qualification`)
  if (!(Number.isInteger(m.qualification?.suite?.total) && m.qualification.suite.total > m.qualification.suite.skipped && Number.isInteger(m.qualification.suite.skipped) && m.qualification.suite.skipped >= 0)) throw new Error(`${entry.id}: suite must contain at least one executed test`)
  if (!sha64.test(m.candidate?.sha256 || '') || (m.candidate?.tree != null && !sha40.test(m.candidate.tree))) throw new Error(`${entry.id}: invalid candidate identity`)
  if (typeof m.verification?.hardwareVerified !== 'boolean' || typeof m.verification?.applicationVerified !== 'boolean' || !Array.isArray(m.verification?.limitations)) throw new Error(`${entry.id}: invalid verification boundary`)
  if (!/^https:\/\/github\.com\/.+\/issues\/\d+$/.test(m.upstream?.issue || '') || !/^https:\/\/github\.com\/.+\/pull\/\d+$/.test(m.upstream?.pr || '')) throw new Error(`${entry.id}: invalid upstream links`)
  for (const a of m.artifacts || []) {
    if (!sha64.test(a.sha256 || '') || !['log','report','summary'].includes(a.kind) || typeof a.path !== 'string' || a.path.startsWith('/') || a.path.includes('..')) throw new Error(`${entry.id}: invalid artifact record`)
    if (!fs.existsSync(path.join(root, 'cases', entry.id, a.path))) throw new Error(`${entry.id}: referenced artifact missing: ${a.path}`)
  }
}
console.log(`Validated ${index.cases.length} public BCL evidence record(s)`)
