# Deliver audio-only playback support to Opencast 21

Case: `paella-984`
Issue: https://github.com/polimediaupv/paella/issues/984
Repair PR: https://github.com/opencast/opencast/pull/8017

## Qualification

Source: `opencast/opencast@c2ddb4ea73b063534349a890551c9340a9e4303c`
BCL revision: `192fd2050532a660993f9ae8b7da83f9affa0231`
Candidate SHA-256: `2c1f89a84b8a5b6049679d18b9d27f96231ba56a04b79eb2f19e72e8548eb079`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=1; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL executes the exact issue payload against the locked dependency before and after the repair and builds both Paella bundles. It does not ingest media into a complete Opencast server or exercise browser audio output.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
