# Broadcast Control Lab — Public Evidence

This repository is the public evidence surface for Broadcast Control Lab (BCL).

BCL itself is an engineering laboratory: it discovers, reproduces, repairs and qualifies software defects. The laboratory may be private. This repository deliberately exposes only the evidence needed to understand and verify a published repair claim.

## Public evidence contract

A published repair record may contain only:

- case identity and title;
- upstream issue and repair PR links;
- source repository and immutable source commit SHA;
- BCL revision that produced the qualification;
- RED → GREEN qualification result;
- focused regression and relevant upstream-suite summary;
- candidate SHA-256 (and optional tested tree identity);
- explicit verification limits;
- hardware/application verification flags;
- hashes of public-safe evidence files or logs.

It must not contain:

- credentials, tokens or secrets;
- private checkout/authentication details;
- local filesystem paths or operator state;
- internal selection heuristics or assessments;
- Workbench state;
- private capability models;
- automation internals;
- unpublished source material.

## Trust boundary

A green record here means only what its manifest says. Automated qualification does not become hardware or full-application verification unless those flags are explicitly true and supported by separate evidence.

The public evidence repository is not publication authority and does not merge or deploy upstream code. It records what BCL demonstrated for a candidate that was published upstream.

## Layout

```text
schema/public-evidence-v1.schema.json
cases/<case-id>/manifest.json
cases/<case-id>/README.md          # optional human-readable summary
cases/<case-id>/logs/...           # optional public-safe logs
index.json
```

Every manifest is validated by the repository workflow before it is accepted.

## Relationship to BCL

The private/core BCL remains the engineering system. This repository is a one-way sanitized projection:

```text
BCL core
  -> reproduce
  -> RED -> GREEN
  -> qualification
  -> upstream PR
  -> sanitize
  -> this public evidence repository
```

No public evidence record should require access to the private/core repository to understand the claimed result.
<!-- PUBLIC-RECORDS:START -->
## Published repair records

| Case | Upstream PR |
| --- | --- |
| [advanced-camera-card-2794](cases/advanced-camera-card-2794/README.md) | [PR](https://github.com/dermotduffy/advanced-camera-card/pull/2797) |
| [amical-165](cases/amical-165/README.md) | [PR](https://github.com/amicalhq/amical/pull/184) |
| [audacity-12147](cases/audacity-12147/README.md) | [PR](https://github.com/audacity/audacity/pull/12148) |
| [babyface-pro-linux-5](cases/babyface-pro-linux-5/README.md) | [PR](https://github.com/ismail-bahloul/babyface-pro-linux/pull/6) |
| [esp-osc-2](cases/esp-osc-2/README.md) | [PR](https://github.com/256dpi/esp-osc/pull/3) |
| [linux-show-player-399](cases/linux-show-player-399/README.md) | [PR](https://github.com/FrancescoCeruti/linux-show-player/pull/401) |
| [logic-pro-mcp-38](cases/logic-pro-mcp-38/README.md) | [PR](https://github.com/koltyj/logic-pro-mcp/pull/42) |
| [low-latency-audio-36](cases/low-latency-audio-36/README.md) | [PR](https://github.com/microsoft/low-latency-audio/pull/37) |
| [node-av-349](cases/node-av-349/README.md) | [PR](https://github.com/seydx/node-av/pull/350) |
| [noisy-studio-99](cases/noisy-studio-99/README.md) | [PR](https://github.com/noisy/noisy-studio/pull/103) |
| [openmixercontrol-80](cases/openmixercontrol-80/README.md) | [PR](https://github.com/OpenMixerProject/OpenMixerControl/pull/93) |
| [openterface-642](cases/openterface-642/README.md) | [PR](https://github.com/TechxArtisanStudio/Openterface_QT/pull/643) |
| [paella-984](cases/paella-984/README.md) | [PR](https://github.com/opencast/opencast/pull/8017) |
| [pipewirecontroller-19](cases/pipewirecontroller-19/README.md) | [PR](https://github.com/knightinfected/PipeWireController/pull/20) |
| [scribe-worker-49](cases/scribe-worker-49/README.md) | [PR](https://github.com/SUNET/scribe-worker/pull/50) |
| [tonepush-9](cases/tonepush-9/README.md) | [PR](https://github.com/crmne/tonepush/pull/12) |
| [yi-hack-v5-476](cases/yi-hack-v5-476/README.md) | [PR](https://github.com/alienatedsec/yi-hack-v5/pull/478) |
| [zha-device-handlers-5329](cases/zha-device-handlers-5329/README.md) | [PR](https://github.com/zigpy/zha-device-handlers/pull/5343) |
<!-- PUBLIC-RECORDS:END -->
