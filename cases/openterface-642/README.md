# Persist CH9329 baudrate across a power cycle

Case: `openterface-642`
Issue: https://github.com/TechxArtisanStudio/Openterface_QT/issues/642
Repair PR: https://github.com/TechxArtisanStudio/Openterface_QT/pull/643

## Qualification

Source: `TechxArtisanStudio/Openterface_QT@7be8db841fe8ffa27e8adcbbcd654230846994c1`
BCL revision: `cf3f900ec177dbc1fcce68461e9ef2063cf04054`
Candidate SHA-256: `263cb4d430d8b46af0012bcd0839292b2923eee91fe2aeedf56104aa052c3ef8`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=2; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL proves the invalid baseline packet, writable candidate packet, and strict response gates. A separate Ubuntu 24.04 qmake build compiled the complete application and five focused Qt tests passed. Only the reporter can prove nonvolatile persistence on a physical CH9329 power cycle.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
