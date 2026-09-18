# Keep USB audio inputs without connector detection available

Case: `low-latency-audio-36`
Issue: https://github.com/microsoft/low-latency-audio/issues/36
Repair PR: https://github.com/microsoft/low-latency-audio/pull/37

## Qualification

Source: `microsoft/low-latency-audio@7af4ddaec3e930a029a3e27750fe181b03a7ea2a`
BCL revision: `1228d56bf3135b61e909c002f7257366fff0bce9`
Candidate SHA-256: `6f1b6b17700d96d09eb3b3e0920af97601c0f9a42688582db677bc8bd7313253`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=1; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL verifies the pinned production source is red before the change and green after it, and that connector-controlled jacks retain detection. The Windows kernel driver has not been built or installed by BCL; the final UI and meter behavior require the reporter's Sound Blaster G3.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
