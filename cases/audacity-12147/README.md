# Restore Audacity playback seek shortcuts

Case: `audacity-12147`
Issue: https://github.com/audacity/audacity/issues/12147
Repair PR: https://github.com/audacity/audacity/pull/12148

## Qualification

Source: `audacity/audacity@b51ae6bddaffd719c60686ff121e10e8f0850a0a`
BCL revision: `dbda1291e5b8ea26f4f5848a242c46760a3e3249`
Candidate SHA-256: `dd11eefd59b71e0854833ad3cb879324cbbe393ab5f393025637b55690263d89`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=4; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL verifies baseline-red/candidate-green source contracts and focused C++ test coverage. This workstation lacks the required Qt 6.10 kit, so the complete application and C++ test target rely on upstream CI; Windows runtime behavior remains an owner check.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
