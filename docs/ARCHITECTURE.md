# Public / private split

## Core

The engineering system lives in `iibaranov-IG/broadcast-control-lab`.

After migration is complete, that repository is intended to become private. It owns:

- selection and ranking logic;
- triage and campaign orchestration;
- Workbench/local state;
- capability retention;
- source acquisition/authentication boundaries;
- repair execution;
- qualification;
- tracking and automation.

## Evidence

This repository remains public. It owns only public repair evidence.

The flow is intentionally one-way:

```text
private BCL core
    |
    | qualified + published repair
    v
sanitize/export
    |
    v
public evidence manifest
```

The public repository never imports internal BCL state back into the core and never grants execution authority.

## Promotion gate

A record is eligible for public evidence only when all of these are true:

1. source is pinned to an immutable commit;
2. baseline regression produced the expected failure;
3. the candidate passes the same regression;
4. the relevant upstream suite has a non-empty passing result;
5. candidate SHA-256 is bound to the evidence;
6. BCL revision is an immutable SHA;
7. verification limitations are explicit;
8. the repair has been published as an upstream PR.

If any of these become stale after the PR changes, the public record must be superseded or refreshed rather than silently treated as current.

## Reputation boundary

This repository is intentionally conservative. It publishes evidence, not conclusions broader than the evidence supports. Hardware and full-application verification are always explicit booleans and default to false.
