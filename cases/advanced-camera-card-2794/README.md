# Render non-template camera controls during startup

Case: `advanced-camera-card-2794`
Issue: https://github.com/dermotduffy/advanced-camera-card/issues/2794
Repair PR: https://github.com/dermotduffy/advanced-camera-card/pull/2797

## Qualification

Source: `dermotduffy/advanced-camera-card@d2ce00c4deb3e978893ef3b585492bd8bde518b6`
BCL revision: `71c17c710262deb4d545e0cd3b33976b559634ce`
Candidate SHA-256: `5fe23979920933d342f66feb658f9f2a0853e11de692b2fddbb199011325e48c`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=3; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **true**

- BCL proves the exact source gate and candidate predicate. Separately, the baseline regression failed and the candidate passed in Chromium, Firefox, and WebKit; all 7,425 unit tests, 100% covered logic, build, lint, formatting, typecheck, and prune checks passed. The full browser suite has one unrelated WebKit focus failure that reproduces unchanged on the baseline. Final wall-tablet timing remains the owner check.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
