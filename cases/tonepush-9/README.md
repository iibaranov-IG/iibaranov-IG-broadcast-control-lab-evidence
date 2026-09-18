# Use four-slot bank labels for HX Effects presets

Case: `tonepush-9`
Issue: https://github.com/crmne/tonepush/issues/9
Repair PR: https://github.com/crmne/tonepush/pull/12

## Qualification

Source: `crmne/tonepush@9c5fe357c563da8d3ac971ea1e9231c665884cdd`
BCL revision: `3598b098684d8932c381376f6610e2c28943e71e`
Candidate SHA-256: `71ee0cbe4f6696dd2d4a45b41e7ca7589475bcc3e11df5b5b9c02f5bb1077383`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=179; skipped=1

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL proves the reported index/label mapping against production Rust code, preserves HX Stomp behavior and the old public struct-literal shapes, rejects unknown backup geometry, compiles the CLI and GUI, and runs the pure protocol and backup suites. It cannot operate the reporter’s physical HX Effects; the final front-panel selection check remains with its owner.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
