# Restart the Babyface Pro USB session after a coalesced STOP/START

Case: `babyface-pro-linux-5`
Issue: https://github.com/ismail-bahloul/babyface-pro-linux/issues/5
Repair PR: https://github.com/ismail-bahloul/babyface-pro-linux/pull/6

## Qualification

Source: `ismail-bahloul/babyface-pro-linux@1d4f36af468615c803e0ad8f05e0c24503cbe063`
BCL revision: `71bc2ed14594c604b320f418e68d215bd4cf36ff`
Candidate SHA-256: `93eb8ed3115d09d8562caf20389b71bf6ff283e43be7b75fa0a083a39d5f300c`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=2; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL verifies the exact source wiring and five lifecycle transitions. The changed module also builds against Ubuntu Linux 7.0 headers; audible recovery still requires the reporter’s Babyface Pro FS.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
