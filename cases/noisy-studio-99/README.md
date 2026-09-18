# Keep browser-tab audio out of the native desktop app

Case: `noisy-studio-99`
Issue: https://github.com/noisy/noisy-studio/issues/99
Repair PR: https://github.com/noisy/noisy-studio/pull/103

## Qualification

Source: `noisy/noisy-studio@55024b577cbcb015b2979785160b3f74e047ee65`
BCL revision: `4e58c839ed60ceace7063dbbb4b14448137b3f55`
Candidate SHA-256: `e4810686b12c707710d8c7ce597e0c79618e01d532c4b87f85aaae5a842439b3`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=350; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL proves native/web policy at startup helpers, HTTP settings, hardware-failure fallback and Vue rendering, then runs both complete automated suites. A packaged Electron build on the owner's microphone remains the final application check.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
