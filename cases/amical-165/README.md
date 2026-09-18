# Capture the active microphone channel on multichannel interfaces

Case: `amical-165`
Issue: https://github.com/amicalhq/amical/issues/165
Repair PR: https://github.com/amicalhq/amical/pull/184

## Qualification

Source: `amicalhq/amical@0d82ae797c4562ed0c7f10d2fb06fa7724c541c0`
BCL revision: `6802a73896621b82ceb900ced463761c7dce2f8f`
Candidate SHA-256: `aeb21e9db255ab39e576c9cc5a4fc7fe6e920eedc7a030531ab36370882ca464`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=5; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **true**

- BCL executes the real AudioWorklet with deterministic multichannel buffers and verifies its capture policy. The complete upstream desktop suite passed locally. A physical Apollo Twin or BlackHole system test remains owner-operated.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
