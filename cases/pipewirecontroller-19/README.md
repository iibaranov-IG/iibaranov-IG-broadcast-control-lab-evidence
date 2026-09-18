# Refresh device volume and mute changed outside the app

Case: `pipewirecontroller-19`
Issue: https://github.com/knightinfected/PipeWireController/issues/19
Repair PR: https://github.com/knightinfected/PipeWireController/pull/20

## Qualification

Source: `knightinfected/PipeWireController@6784365f91872586bc09cf65d9ab192abea6d824`
BCL revision: `ae29b7e348125c39d878fc062c65848f8dca67a7`
Candidate SHA-256: `68be07a11dc6cf3a14987660dc14dbd13840021ad1b23bf2060271932eaf684f`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=3; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL proves baseline-red/candidate-green reconciliation with production code, checks Python syntax, and runs the focused unit suite. GTK rendering and a live PipeWire graph are not available in the container; the reporter remains the final Bluetooth/GNOME validation.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
