# Preserve JACK routes while configured ports are unavailable

Case: `linux-show-player-399`
Issue: https://github.com/FrancescoCeruti/linux-show-player/issues/399
Repair PR: https://github.com/FrancescoCeruti/linux-show-player/pull/401

## Qualification

Source: `FrancescoCeruti/linux-show-player@79f7efa4684c3cad6013e1cd2a0400d7122f542c`
BCL revision: `1e55be430d3a87c71cd7335f21de4b761288d7d0`
Candidate SHA-256: `b3e248e07bb1c1a9de9824a8f1ef551d101b300fdceacba9d14c03103ec791a7`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=3; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL exercises route reconciliation and JACK failures with deterministic doubles. A live JACK graph and hot-unplugged client remain owner-validated.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
