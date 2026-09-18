# Wire the YI Dome PTZ preset buttons to their existing actions

Case: `yi-hack-v5-476`
Issue: https://github.com/alienatedsec/yi-hack-v5/issues/476
Repair PR: https://github.com/alienatedsec/yi-hack-v5/pull/478

## Qualification

Source: `alienatedsec/yi-hack-v5@d1997ae29ddeaf7d39d4d42c6da85901b7e56bcd`
BCL revision: `23350658647850f6e3fb77c73c391c088d23c8b2`
Candidate SHA-256: `c03a2c36ecd5bb8bc461559fd65928c37d13dea4798942e8136a32d2d822901c`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=1; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL executes the real PTZ module with a minimal DOM and jQuery boundary, proving the baseline has no handlers and the candidate sends all three expected CGI requests. It does not flash firmware or move a physical camera.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
