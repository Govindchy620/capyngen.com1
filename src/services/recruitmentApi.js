// Public recruitment API (Orinite HRMS) used by the Careers section.
// Returns active jobs + branding so the site can render the job list dynamically.
// Base is configurable so dev can point at a local backend (e.g.
// http://localhost:3000/api/v1/public/recruitment) where the fields endpoint
// is reachable; defaults to the public production API.
const RECRUITMENT_ROOT =
  import.meta.env.VITE_RECRUITMENT_API_BASE ||
  "https://api.orinite.com/api/v1/public/recruitment";
const RECRUITMENT_BASE = `${RECRUITMENT_ROOT}/jobs`;
const RECRUITMENT_TENANT_ID = "6a3bb4300657f6171d4529a0";

// Filters supported by the API (sent as query params).
const FILTER_KEYS = [
  "country",
  "region",
  "jobCategory",
  "location",
  "experienceRange",
  "type",
  "search",
];

// The API only returns an opaque `department` ObjectId (no name) and does not
// resolve it anywhere, so we classify each job into the same department buckets
// the Careers site uses (see CountryCareers) from the job title. This is what
// lets us keep, e.g., an HR role out of the Engineering listing.
export const DEPARTMENTS = [
  "Engineering",
  "Design",
  "AI & Data",
  "Marketing",
  "Business",
];

const DEPARTMENT_KEYWORDS = {
  Engineering: [
    "engineer", "developer", "software", "frontend", "front-end", "backend",
    "back-end", "full stack", "fullstack", "devops", "qa", "sdet", "tester",
    "programmer", "architect", "cloud", "sre", "mobile", "android", "ios",
  ],
  Design: ["designer", "ux", "ui", "product design", "graphic", "creative"],
  "AI & Data": [
    "ai ", "artificial intelligence", "machine learning", " ml", "ml ",
    "data scien", "data analyst", "data engineer", "nlp", "llm", "analytics",
  ],
  Marketing: [
    "marketing", "seo", "smm", "ppc", "content", "growth", "social media",
    "brand", "copywriter",
  ],
  Business: [
    "hr", "human resource", "recruit", "talent", "people", "sales",
    "business development", "account", "operation", "finance", "accountant",
    "manager", "customer success", "support", "product manager", "product owner",
    "executive", "analyst",
  ],
};

// Classify a job into one of DEPARTMENTS (or "Other") from its title.
export const categorizeJob = (job) => {
  const text = `${job.title || ""}`.toLowerCase();
  for (const dept of DEPARTMENTS) {
    if (DEPARTMENT_KEYWORDS[dept].some((kw) => text.includes(kw))) return dept;
  }
  return "Other";
};

// The API has no country field on jobs, so we infer it from the location
// (a city or an explicit country name). Keys are matched against the location
// string; values are the country names used by the Careers region list.
const COUNTRY_KEYWORDS = {
  India: [
    "india", "gurugram", "gurgaon", "delhi", "new delhi", "noida", "mumbai",
    "bengaluru", "bangalore", "hyderabad", "pune", "chennai", "kolkata",
    "ahmedabad", "jaipur", "indore", "kochi",
  ],
  USA: ["usa", "united states", "new york", "san francisco", "seattle", "austin", "boston", "chicago"],
  Canada: ["canada", "toronto", "vancouver", "montreal", "ottawa"],
  UK: ["uk", "united kingdom", "england", "london", "manchester"],
  Germany: ["germany", "berlin", "munich", "frankfurt"],
  France: ["france", "paris"],
  UAE: ["uae", "united arab emirates", "dubai", "abu dhabi", "sharjah"],
  Singapore: ["singapore"],
  Australia: ["australia", "sydney", "melbourne", "brisbane"],
  Japan: ["japan", "tokyo", "osaka"],
  "South Africa": ["south africa", "johannesburg", "cape town"],
  Brazil: ["brazil", "sao paulo", "rio de janeiro"],
  Mexico: ["mexico", "mexico city", "guadalajara"],
};

// Infer the country for a job from its location. Returns "" when unknown.
export const detectCountry = (location) => {
  const text = `${location || ""}`.toLowerCase();
  if (!text) return "";
  for (const [country, keywords] of Object.entries(COUNTRY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) return country;
  }
  return "";
};

const SCREENING_QUESTION_TYPES = ["yesno", "number", "text"];

// Normalize a job's screening questions; unknown/future `type` values fall
// back to "text" so the form always has a renderable widget.
const normalizeScreeningQuestions = (questions) =>
  (Array.isArray(questions) ? questions : []).map((q) => ({
    question: q.question || "",
    type: SCREENING_QUESTION_TYPES.includes(q.type) ? q.type : "text",
    required: !!q.required,
  }));

// Map an API job document to the shape the Careers UI expects.
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

/**
 * Fetch active jobs, optionally filtered by country / region / location / etc.
 * @param {Object} filters - any subset of FILTER_KEYS
 * @param {AbortSignal} [signal]
 * @returns {Promise<{ jobs: Array, branding: Object|null }>}
 */
export const fetchRecruitmentJobs = async (filters = {}, signal) => {
  const params = new URLSearchParams();
  FILTER_KEYS.forEach((key) => {
    const value = filters[key];
    if (value) params.set(key, value);
  });

  const query = params.toString();
  const url = `${RECRUITMENT_BASE}/${RECRUITMENT_TENANT_ID}${query ? `?${query}` : ""}`;

  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Failed to load jobs (${response.status})`);
  }

  const json = await response.json();
  if (!json?.success) {
    throw new Error("Failed to load jobs");
  }

  const data = json.data || {};

  // jobCode may live on the job itself or only inside the SEO JobPosting schema
  // (the public payload doesn't always include the top-level field yet).
  const codeByTitle = {};
  (Array.isArray(data.seoSchema) ? data.seoSchema : []).forEach((s) => {
    const code = s?.identifier?.value;
    if (s?.title && code) codeByTitle[s.title] = code;
  });

  const jobs = (Array.isArray(data.jobs) ? data.jobs : []).map((job) => {
    const normalized = normalizeJob(job);
    if (!normalized.jobCode && codeByTitle[normalized.title]) {
      normalized.jobCode = codeByTitle[normalized.title];
    }
    return normalized;
  });

  return { jobs, branding: data.branding || null };
};

// ---------------------------------------------------------------------------
// Application form (dynamic fields + submission)
// ---------------------------------------------------------------------------

// The apply-direct endpoint only accepts these custom-field types; anything
// else (e.g. a "file"-type custom field like a cover letter) is rejected by its
// validator with "expected one of text|number|select|checkbox".
const APPLY_CUSTOM_FIELD_TYPES = ["text", "number", "select", "checkbox"];

const isSubmittableField = (field) =>
  field.source !== "custom" || APPLY_CUSTOM_FIELD_TYPES.includes(field.type);

const DEFAULT_SUBMISSION = {
  method: "POST",
  url: `${RECRUITMENT_ROOT}/apply-direct`,
  contentType: "multipart/form-data",
  customFileFieldPrefix: "custom_",
};

// Multipart field name for screening-question answers on apply-direct. Not
// documented by the API's submission spec (unlike companyId/jobId/customFields) —
// change only this constant if the backend confirms a different key.
const SCREENING_ANSWERS_FIELD = "screeningAnswers";

// Fetch the dynamic application-form field config for the company.
export const fetchApplicationFields = async (signal) => {
  const response = await fetch(
    `${RECRUITMENT_ROOT}/fields/${RECRUITMENT_TENANT_ID}`,
    { signal },
  );
  if (!response.ok) throw new Error(`Failed to load form (${response.status})`);
  const json = await response.json();
  if (!json?.success || !json?.data) throw new Error("Failed to load form");

  const data = json.data;
  // Drop custom fields the apply endpoint can't accept (e.g. file-type custom
  // fields), so the form never renders or submits something that 400s.
  const fields = (Array.isArray(data.fields) ? data.fields : []).filter(
    isSubmittableField,
  );
  return {
    fields,
    resume: data.resume || null,
    labels: data.labels || {},
    submission: { ...DEFAULT_SUBMISSION, ...(data.submission || {}) },
    requiredFieldNames: data.requiredFieldNames || [],
  };
};

// Submit an application as multipart/form-data per the submission spec.
// values: { [fieldName]: string }, files: { [fieldName]: File }
export const submitApplication = async ({ jobId, config, values, files, screeningAnswers }) => {
  const submission = config?.submission || DEFAULT_SUBMISSION;
  const filePrefix = submission.customFileFieldPrefix || "custom_";

  const fd = new FormData();
  fd.append("companyId", RECRUITMENT_TENANT_ID);
  if (jobId) fd.append("jobId", jobId);

  (config?.fields || []).forEach((field) => {
    // Skip custom fields the apply endpoint rejects (only text/number/select/checkbox).
    if (!isSubmittableField(field)) return;
    const isFile = field.type === "file";
    if (field.source === "custom") {
      // The apply-direct endpoint takes every custom field (text or file) as a
      // flat `custom_<name>` form field (e.g. custom_linkedin, custom_cover_letter).
      const fieldName = field.multipartFieldName || `${filePrefix}${field.name}`;
      if (isFile) {
        if (files[field.name]) fd.append(fieldName, files[field.name]);
      } else {
        const v = values[field.name];
        if (v !== undefined && v !== "") fd.append(fieldName, v);
      }
    } else if (isFile) {
      if (files[field.name]) fd.append(field.submitAs || field.name, files[field.name]);
    } else {
      const v = values[field.name];
      if (v !== undefined) fd.append(field.submitAs || field.name, v);
    }
  });

  if (Array.isArray(screeningAnswers) && screeningAnswers.length > 0) {
    fd.append(SCREENING_ANSWERS_FIELD, JSON.stringify(screeningAnswers));
  }

  const response = await fetch(submission.url, {
    method: submission.method || "POST",
    body: fd,
  });

  if (!response.ok) {
    let message = `Submission failed (${response.status})`;
    try {
      const err = await response.json();
      // Backend may return { message }, { errors: [...] }, or a raw Zod error array.
      const issues = Array.isArray(err) ? err : err?.errors || err?.issues;
      if (Array.isArray(issues) && issues.length > 0) {
        message = issues
          .map((i) => i.message || `${(i.path || []).join(".")} is invalid`)
          .join("; ");
      } else if (err?.message) {
        message = err.message;
      }
    } catch {
      /* ignore */
    }
    throw new Error(message);
  }

  return response.json().catch(() => ({ success: true }));
};
