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
