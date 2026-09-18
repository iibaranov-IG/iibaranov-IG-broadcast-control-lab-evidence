# Expose both HOBEIAN ZG-305Z USB outputs as switches

Case: `zha-device-handlers-5329`
Issue: https://github.com/zigpy/zha-device-handlers/issues/5329
Repair PR: https://github.com/zigpy/zha-device-handlers/pull/5343

## Qualification

Source: `zigpy/zha-device-handlers@8c8e861c9bf8e4eb389fb42ecdc00cfe3a893452`
BCL revision: `a4d5af3d47ed412cbc4e545193c11c1da55360eb`
Candidate SHA-256: `214da52cfa179db869ef862c7bd4b51892770079b4e23338f4b6fbb17e22b6fe`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=1; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL verifies the exact declarative endpoint replacements and regression coverage. Upstream tests passed separately. A physical ZG-305Z is still required to confirm that endpoint 1 maps to one USB connector and endpoint 2 to the other.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
