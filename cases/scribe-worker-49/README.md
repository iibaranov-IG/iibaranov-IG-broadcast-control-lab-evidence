# Ignore attached artwork when classifying audio uploads

Case: `scribe-worker-49`
Issue: https://github.com/SUNET/scribe-worker/issues/49
Repair PR: https://github.com/SUNET/scribe-worker/pull/50

## Qualification

Source: `SUNET/scribe-worker@2b4e84b3a974b6e4121a3fbe09584933488a281f`
BCL revision: `ed40895bc785843ef39ad4c7185b6b9cb71bd2fd`
Candidate SHA-256: `92c9bba5c85af8b9cdae0a77510affe06984f03195ce14f45a492cf1c2e7e92d`
Baseline regression: **EXPECTED_FAILURE**
Candidate regression: **PASS**
Upstream suite: **PASS**; total=3; skipped=0

## Verification boundary

Hardware verified: **false**
Full application verified: **false**

- BCL generates the affected MP3 structure with FFmpeg, proves the baseline misclassification, and verifies WAV and MP4 output after the repair. It does not submit a complete transcription job to the deployed SUNET service.

This public record is a sanitized projection of BCL qualification evidence. It does not expose internal selection logic, credentials, private checkout metadata or local operator state.
