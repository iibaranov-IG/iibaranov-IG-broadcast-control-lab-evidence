# Build tinyosc cleanly with strict aliasing enabled

Case: `esp-osc-2`
Issue: https://github.com/256dpi/esp-osc/issues/2
Repair PR: https://github.com/256dpi/esp-osc/pull/3

## Qualification

Source: `256dpi/esp-osc@e8aa93aa1b27d06d8b1e6a7c20c7e3bec9291c2c`
BCL revision: `5c94e6888d0d983abdadff69300e38f592f57078`
Candidate SHA-256: `4bcfea946751b4b5c895236a22a16294e17cb1863e06a6fa1ee941b30769ec7c`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=1; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **true**

- BCL reproduces the reported GCC diagnostic and verifies exact OSC float/double serialization on Linux. It does not run the complete ESP-IDF 6.1 firmware build or flash an ESP device.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
