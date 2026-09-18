# Report MJPEG USB-camera modes as a compressed codec

Case: `node-av-349`
Issue: https://github.com/seydx/node-av/issues/349
Repair PR: https://github.com/seydx/node-av/pull/350

## Qualification

Source: `seydx/node-av@8b4e1cf4dc52a00693609ac2067fc7cfb6067e82`
BCL revision: `33fc40976cd1d952d8666510c9628ef6cf80c517`
Candidate SHA-256: `f5fe07a0cf8abd0403f2283ef7e4d3f6befa3f7e3504f53271a86ff985e516a5`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=2; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL proves the malformed baseline mapping and complete candidate API path. TypeScript library, tests and examples compile; the Linux translation unit compiles in Ubuntu 24.04. Full native linking needs the project’s prebuilt custom FFmpeg tree, and physical enumeration needs the reporter’s MJPG camera.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
