# Make the raw fader value type consistent

Case: `openmixercontrol-80`
Issue: https://github.com/OpenMixerProject/OpenMixerControl/issues/80
Repair PR: https://github.com/OpenMixerProject/OpenMixerControl/pull/93

## Qualification

Source: `OpenMixerProject/OpenMixerControl@6838286c6fb2eefc16a71aaacf091f4dda40a629`
BCL revision: `a8ccbf77c45ca7de27e3508f1a179d10f0d9840f`
Candidate SHA-256: `75f181943f0f0d26517d1c408e684757c2a3a0987f84e0102a3a60ded1b440e5`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=4; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL proves the API mismatch on the pinned baseline and the consistent raw fader type after the repair. The repository's full build requires external libraries and Linux headers; GitHub's target builds remain authoritative.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
