# Screening Questions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render per-job screening questions (yesno/number/text) in the job application form, validate required answers, and submit them alongside the existing application payload.

**Architecture:** Job-level `screeningQuestions` already exists in the recruitment API's job payload but is dropped by `normalizeJob`. Add it to the normalized job shape, render a new section in `JobApplicationForm.jsx` driven by that array, validate required answers the same way existing fields are validated, and append the answers as one JSON field on the existing `apply-direct` multipart submission — no new endpoint, no new route.

**Tech Stack:** React 18 (function components + hooks), react-router-dom v7, Tailwind CSS v4 utility classes (no component library). No test framework is present in this repo (no Jest/Vitest/Playwright config) — verification is via `eslint`, `vite build`, and manual browser testing against the live API, matching how the rest of this codebase is verified.

## Global Constraints

- No new API endpoints or routes — screening questions ride the existing `GET /jobs/{tenantId}` response and the existing `POST /apply-direct` submission (spec: Scope).
- Unknown/future screening-question `type` values must coerce to `"text"` rather than break rendering (spec: item 1, Error Handling).
- The submitted answer field name is isolated in a single constant (`SCREENING_ANSWERS_FIELD`) since the backend doesn't document this key — must be a one-line change point, not scattered (spec: item 2).
- Do not change the hardcoded `RECRUITMENT_TENANT_ID` in `src/services/recruitmentApi.js` — production tenant config is explicitly out of scope (user decision during brainstorming).
- Screening answer state (`screeningValues`) must be a separate state object from `values`, keyed by question index, to avoid any collision with real API field names (spec: item 3).

---

### Task 1: Data layer — normalize and submit screening questions

**Files:**
- Modify: `src/services/recruitmentApi.js:101-117` (`normalizeJob`)
- Modify: `src/services/recruitmentApi.js:170-183` (constants above `fetchApplicationFields`)
- Modify: `src/services/recruitmentApi.js:212-267` (`submitApplication`)

**Interfaces:**
- Produces: `job.screeningQuestions` — array of `{ question: string, type: "yesno"|"number"|"text", required: boolean }`, present on every normalized job (empty array when the API sends none).
- Produces: `submitApplication({ jobId, config, values, files, screeningAnswers })` — `screeningAnswers` is an optional array of `{ question: string, type: string, answer: string }`; when non-empty it is appended to the outgoing `FormData` as `SCREENING_ANSWERS_FIELD` (JSON-stringified).

- [ ] **Step 1: Add screening-question normalization above `normalizeJob`**

In `src/services/recruitmentApi.js`, immediately before the `normalizeJob` function (before the line `// Map an API job document to the shape the Careers UI expects.`), add:

```js
const SCREENING_QUESTION_TYPES = ["yesno", "number", "text"];

// Normalize a job's screening questions; unknown/future `type` values fall
// back to "text" so the form always has a renderable widget.
const normalizeScreeningQuestions = (questions) =>
  (Array.isArray(questions) ? questions : []).map((q) => ({
    question: q.question || "",
    type: SCREENING_QUESTION_TYPES.includes(q.type) ? q.type : "text",
    required: !!q.required,
  }));
```

- [ ] **Step 2: Wire it into `normalizeJob`**

Find this block:

```js
const normalizeJob = (job) => ({
  id: job._id,
  jobCode: job.jobCode || "",
  title: job.title || "",
  department: job.department || "", // opaque id; not displayed by name
  category: categorizeJob(job), // derived bucket used for filtering/display
  country: detectCountry(job.location), // inferred from location ("" if unknown)
  location: job.location || "",
  type: job.type || "",
  experience: job.experienceRange || "",
  salaryRange: job.salaryRange || "",
  openings: typeof job.openings === "number" ? job.openings : null,
  description: job.description || "",
  requirements: Array.isArray(job.requirements) ? job.requirements : [],
  createdAt: job.createdAt || null,
  skills: [], // API does not provide a skills array
});
```

Add a `screeningQuestions` field so it reads:

```js
const normalizeJob = (job) => ({
  id: job._id,
  jobCode: job.jobCode || "",
  title: job.title || "",
  department: job.department || "", // opaque id; not displayed by name
  category: categorizeJob(job), // derived bucket used for filtering/display
  country: detectCountry(job.location), // inferred from location ("" if unknown)
  location: job.location || "",
  type: job.type || "",
  experience: job.experienceRange || "",
  salaryRange: job.salaryRange || "",
  openings: typeof job.openings === "number" ? job.openings : null,
  description: job.description || "",
  requirements: Array.isArray(job.requirements) ? job.requirements : [],
  createdAt: job.createdAt || null,
  skills: [], // API does not provide a skills array
  screeningQuestions: normalizeScreeningQuestions(job.screeningQuestions),
});
```

- [ ] **Step 3: Add the submission field-name constant**

Find:

```js
const DEFAULT_SUBMISSION = {
  method: "POST",
  url: `${RECRUITMENT_ROOT}/apply-direct`,
  contentType: "multipart/form-data",
  customFileFieldPrefix: "custom_",
};
```

Add immediately after it:

```js
// Multipart field name for screening-question answers on apply-direct. Not
// documented by the API's submission spec (unlike companyId/jobId/customFields) —
// change only this constant if the backend confirms a different key.
const SCREENING_ANSWERS_FIELD = "screeningAnswers";
```

- [ ] **Step 4: Accept and append `screeningAnswers` in `submitApplication`**

Find:

```js
export const submitApplication = async ({ jobId, config, values, files }) => {
```

Change to:

```js
export const submitApplication = async ({ jobId, config, values, files, screeningAnswers }) => {
```

Find the end of the `(config?.fields || []).forEach(...)` block (right before `const response = await fetch(submission.url, {`), and insert before that fetch call:

```js
  if (Array.isArray(screeningAnswers) && screeningAnswers.length > 0) {
    fd.append(SCREENING_ANSWERS_FIELD, JSON.stringify(screeningAnswers));
  }

```

- [ ] **Step 5: Verify — lint and build**

Run: `npm run lint`
Expected: no new errors from `recruitmentApi.js`.

Run: `npm run build`
Expected: build succeeds (this repo has no unit tests; a clean build catches syntax/type errors in this plain-JS codebase).

- [ ] **Step 6: Commit**

```bash
git add src/services/recruitmentApi.js
git commit -m "feat: normalize and submit job screening questions"
```

---

### Task 2: UI — render, validate, and submit screening questions

**Files:**
- Modify: `src/pages/JobApplicationForm.jsx`

**Interfaces:**
- Consumes: `job.screeningQuestions` (array, from Task 1) — read directly off the `job` object already available via `location.state.job`.
- Consumes: `submitApplication({ jobId, config, values, files, screeningAnswers })` (from Task 1).

- [ ] **Step 1: Read `screeningQuestions` off the job**

Find:

```js
  const job = location.state?.job || null;
  const branding = location.state?.branding || null;
```

Add directly after:

```js
  const screeningQuestions = job?.screeningQuestions || [];
```

- [ ] **Step 2: Add screening-answer state**

Find:

```js
  const [values, setValues] = useState({});
  const [files, setFiles] = useState({});
  const [errors, setErrors] = useState({});
```

Add a new state line so it reads:

```js
  const [values, setValues] = useState({});
  const [files, setFiles] = useState({});
  const [screeningValues, setScreeningValues] = useState({});
  const [errors, setErrors] = useState({});
```

- [ ] **Step 3: Add a screening-answer setter next to the existing ones**

Find:

```js
  const setVal = (name) => (e) => setValues((s) => ({ ...s, [name]: e.target.value }));
  const setFile = (name) => (f) => setFiles((s) => ({ ...s, [name]: f }));
```

Add after it:

```js
  const setScreeningVal = (idx) => (val) => setScreeningValues((s) => ({ ...s, [idx]: val }));
```

- [ ] **Step 4: Extend `validate()` to check required screening answers**

Find the end of `validate()` — the `fields.forEach((field) => { ... });` block followed by:

```js
    setErrors(err);
    return Object.keys(err).length === 0;
  };
```

Insert a screening-question loop between the `fields.forEach` block and `setErrors(err)`, so it reads:

```js
    screeningQuestions.forEach((q, idx) => {
      const errorKey = `screening_${idx}`;
      const value = (screeningValues[idx] ?? "").toString().trim();
      if (q.required && !value) err[errorKey] = `${q.question} is required.`;
    });

    setErrors(err);
    return Object.keys(err).length === 0;
  };
```

- [ ] **Step 5: Build `screeningAnswers` and pass them into submission in `handleSubmit`**

Find:

```js
  const handleSubmit = async () => {
    setSubmitError(null);
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onSubmitOverride) {
      onSubmitOverride({ jobId, values, files });
      return;
    }
    setSubmitting(true);
    try {
      await submitApplication({ jobId, config, values, files });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      setSubmitError(e.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
```

Replace with:

```js
  const handleSubmit = async () => {
    setSubmitError(null);
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const screeningAnswers = screeningQuestions.map((q, idx) => ({
      question: q.question,
      type: q.type,
      answer: (screeningValues[idx] ?? '').toString(),
    }));
    if (onSubmitOverride) {
      onSubmitOverride({ jobId, values, files, screeningAnswers });
      return;
    }
    setSubmitting(true);
    try {
      await submitApplication({ jobId, config, values, files, screeningAnswers });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      setSubmitError(e.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
```

- [ ] **Step 6: Add a `renderScreeningQuestion` function next to `renderField`**

Find the end of `renderField` — the closing of the function right before the `// --- Success screen ---` comment:

```js
    return (
      <Field key={name} label={label} required={required} error={error}>
        <input
          type={inputType(type)}
          value={values[name] || ''}
          onChange={setVal(name)}
          autoComplete={autocomplete}
          className={inputClass}
        />
      </Field>
    );
  };

  // --- Success screen ---
```

Insert a new function between the closing `};` of `renderField` and the `// --- Success screen ---` comment:

```js
  const renderScreeningQuestion = (q, idx) => {
    const errorKey = `screening_${idx}`;
    const error = errors[errorKey];
    const value = screeningValues[idx] ?? '';

    if (q.type === 'yesno') {
      return (
        <Field key={errorKey} label={q.question} required={q.required} error={error}>
          <div className="flex items-center gap-6">
            {['yes', 'no'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name={`screening-${idx}`}
                  value={opt}
                  checked={value === opt}
                  onChange={() => setScreeningVal(idx)(opt)}
                  className="w-4 h-4 text-[#4884f0] focus:ring-[#4884f0]"
                />
                {opt === 'yes' ? 'Yes' : 'No'}
              </label>
            ))}
          </div>
        </Field>
      );
    }

    return (
      <Field key={errorKey} label={q.question} required={q.required} error={error}>
        <input
          type={q.type === 'number' ? 'number' : 'text'}
          value={value}
          onChange={(e) => setScreeningVal(idx)(e.target.value)}
          className={inputClass}
        />
      </Field>
    );
  };

  // --- Success screen ---
```

- [ ] **Step 7: Render the Screening Questions section**

Find:

```jsx
            {/* Text / select fields */}
            {otherFields.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {otherFields.map(renderField)}
                </div>
              </div>
            )}

            {/* Submit */}
```

Insert a new section between them, so it reads:

```jsx
            {/* Text / select fields */}
            {otherFields.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {otherFields.map(renderField)}
                </div>
              </div>
            )}

            {/* Screening questions */}
            {screeningQuestions.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8">
                <h2 className="text-lg font-semibold text-[#03152c] mb-4">Screening Questions</h2>
                <div className="space-y-5">
                  {screeningQuestions.map(renderScreeningQuestion)}
                </div>
              </div>
            )}

            {/* Submit */}
```

- [ ] **Step 8: Verify — lint and build**

Run: `npm run lint`
Expected: no new errors from `JobApplicationForm.jsx`.

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 9: Manual end-to-end verification against the live API**

This repo has no test framework, and this job (with screening questions) lives under a different tenant than the one hardcoded in `recruitmentApi.js` (`RECRUITMENT_TENANT_ID`, currently `6a3bb4300657f6171d4529a0`, which has zero jobs). To test locally without touching the committed tenant:

1. Temporarily edit `RECRUITMENT_TENANT_ID` in `src/services/recruitmentApi.js` to `"6a47ab48ec2ba07354500c91"` (uncommitted, local-only change).
2. Run: `npm run dev`
3. Open the site, navigate to Careers → India → find "Full Stack Web Developer" → View Details → Apply Now.
4. Confirm 3 screening questions render: a Yes/No pair, a number input, a text input — each labeled with its question text.
5. Leave a required screening question blank, click Submit. Confirm a red inline error appears under that question and the form does not submit.
6. Fill every required field (standard fields + resume + all 3 screening questions), click Submit. Open browser devtools → Network tab → find the `apply-direct` request → confirm its form-data payload includes a `screeningAnswers` field containing a JSON array with all 3 answers.
7. Navigate to the "HRsadf" job (empty `screeningQuestions: []`) and confirm its apply page shows no Screening Questions section at all.
8. Revert the temporary `RECRUITMENT_TENANT_ID` edit — confirm `git diff src/services/recruitmentApi.js` shows no leftover tenant-ID change before committing.

- [ ] **Step 10: Commit**

```bash
git add src/pages/JobApplicationForm.jsx
git commit -m "feat: render and validate screening questions in job application form"
```
