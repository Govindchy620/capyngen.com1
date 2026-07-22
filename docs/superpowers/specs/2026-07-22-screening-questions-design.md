# Screening Questions in Job Application Form

## Problem

The recruitment API (`https://api.orinite.com/api/v1/public/recruitment`) returns a per-job `screeningQuestions` array (e.g. `{"question": "...", "type": "yesno"|"number"|"text", "required": true}`). The Capyngen careers site currently ignores this array entirely — it isn't read, rendered, validated, or submitted anywhere in the codebase. Applicants for jobs that define screening questions never see them, and the answers are never collected.

## Scope

Add screening-question support to the existing single-job apply flow at `/careers/:country/jobs/:jobId/apply` (`JobApplicationForm.jsx`). No new routes, no new API endpoints — screening questions ride along with the existing job data and the existing `apply-direct` submission call.

Out of scope: changing the production `RECRUITMENT_TENANT_ID`, changes to the job listing/detail pages beyond what's needed to carry the data through, and the orphaned `ApplyJobModal.jsx` / legacy `src/services/api.js` apply path (neither is wired to any route today).

## Data Flow

```
GET /jobs/{tenantId} → job.screeningQuestions
  → normalizeJob() (recruitmentApi.js)
    → job.screeningQuestions (normalized)
      → location.state.job (set by CareerJobDetail, unchanged)
        → JobApplicationForm renders "Screening Questions" section
          → validate() checks required answers
            → submitApplication() appends `screeningAnswers` (JSON) to the existing multipart POST to apply-direct
```

Both ways `JobApplicationForm` can get a `job` object today — via router state from the listing page, or via `CareerJobDetail`'s own fallback re-fetch of the job list — already go through `normalizeJob`, so no changes are needed outside the three files below for the data to flow through correctly.

## Changes

### 1. `src/services/recruitmentApi.js` — `normalizeJob` (~line 101)

Add a `screeningQuestions` field to the normalized job:

```js
screeningQuestions: normalizeScreeningQuestions(job.screeningQuestions),
```

```js
const SCREENING_QUESTION_TYPES = ["yesno", "number", "text"];

const normalizeScreeningQuestions = (questions) =>
  (Array.isArray(questions) ? questions : []).map((q) => ({
    question: q.question || "",
    type: SCREENING_QUESTION_TYPES.includes(q.type) ? q.type : "text",
    required: !!q.required,
  }));
```

Unknown/future question types coerce to `"text"` so the form never breaks on a backend-added type it doesn't know about yet.

### 2. `src/services/recruitmentApi.js` — `submitApplication` (~line 212)

- Accept a new `screeningAnswers` argument (array, same shape as the normalized questions plus an `answer` field).
- Append it to the outgoing `FormData` as a single JSON-stringified field, only when non-empty:

```js
const SCREENING_ANSWERS_FIELD = "screeningAnswers"; // adjust here if backend confirms a different key

export const submitApplication = async ({ jobId, config, values, files, screeningAnswers }) => {
  ...
  if (Array.isArray(screeningAnswers) && screeningAnswers.length > 0) {
    fd.append(SCREENING_ANSWERS_FIELD, JSON.stringify(screeningAnswers));
  }
  ...
};
```

The key name is isolated in one constant, per the decision to ship against the best-guess convention now and adjust later if the backend team confirms a different field name — no other code changes needed if it turns out wrong.

### 3. `src/pages/JobApplicationForm.jsx`

- New state: `screeningValues` (object keyed by question index → answer string), kept separate from `values` (which is keyed by field `name`) so there's no risk of key collision.
- `screeningQuestions = job?.screeningQuestions || []`, read once from the already-available `job` object (no new fetch).
- New section rendered between the existing "Text / select fields" card and the Submit button, matching the same white rounded-2xl card style:
  - Heading: "Screening Questions" (only rendered when `screeningQuestions.length > 0`).
  - Each question rendered via the existing `Field` wrapper (label + required asterisk + error message), full-width rows (`space-y-5`), not the 2-column grid used for regular fields, since question text can run long.
  - `type === "yesno"` → two radio buttons, "Yes" / "No", no default checked value (so a required yes/no question can't pass validation by accident).
  - `type === "number"` → `<input type="number">` using the existing `inputClass`.
  - `type === "text"` (or any other value, post-normalization always one of these three) → `<input type="text">` using `inputClass`.
- `validate()` extended with a loop over `screeningQuestions`: if `required` and the corresponding `screeningValues[idx]` is empty/unset, set an error keyed the same way the section reads it (e.g. `screening_${idx}`), rendered through the same `Field` `error` prop already used elsewhere.
- `handleSubmit` builds the payload array before calling `submitApplication`:

```js
const screeningAnswers = screeningQuestions.map((q, idx) => ({
  question: q.question,
  type: q.type,
  answer: screeningValues[idx] ?? "",
}));
...
await submitApplication({ jobId, config, values, files, screeningAnswers });
```

## Error Handling

- Unknown screening-question `type` values are coerced to `"text"` at the normalization layer (item 1), so the form always has a renderable widget.
- Required-field validation reuses the existing inline error pattern (`Field`'s `error` prop) — no new error UI component.
- Submission failures (network error, non-2xx from `apply-direct`) continue to surface through the existing `submitError` banner at the top of the form — unchanged.

## Testing

No automated test suite exists in this repo (no Jest/Vitest/Playwright config found). Verification is manual:

1. Temporarily point local dev at tenant `6a47ab48ec2ba07354500c91` (which has the "Full Stack Web Developer" job with 3 screening questions: yesno/required, number/required, text/required) — a local-only change, reverted before calling the work done.
2. Run the dev server, navigate to that job's apply page.
3. Confirm all 3 screening questions render with the correct widget per type.
4. Confirm submitting with a required screening question left blank shows a validation error and blocks submission.
5. Confirm a fully-filled submission successfully POSTs to `apply-direct` (200 response) with `screeningAnswers` present in the multipart payload (verified via browser devtools network tab).
6. Confirm a job with an empty `screeningQuestions` array (e.g. "HRsadf") renders the form with no screening section at all.
