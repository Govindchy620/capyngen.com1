import { useEffect, useState } from "react";

const COMPANY_ID = "6a3bb4300657f6171d4529a0";
const API_BASE = "https://api.orinite.com/api/v1/public/recruitment";
const WIDGET_SCRIPT = "https://api.orinite.com/careers-v1.js";

const JobOpeningsTable = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    const initWidget = (force = false) => {
      const container = document.getElementById("hrms-careers-widget");
      if (!container) return;
      window.HRMSCareersWidget?.init?.({ force });
    };

    if (window.HRMSCareersWidget?.init) {
      initWidget(true);
      return () => {
        active = false;
      };
    }

    const existingScript = document.querySelector(
      'script[src="' + WIDGET_SCRIPT + '"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => initWidget(false), { once: true });
      return () => {
        active = false;
      };
    }

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT;
    script.async = true;
    script.onload = () => initWidget(false);
    script.onerror = () => {
      if (active) setError("Failed to load careers widget");
    };

    document.body.appendChild(script);

    return () => {
      active = false;
      script.onload = null;
      script.onerror = null;
    };
  }, []);

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-12">
      {error ? <div className="text-center text-red-500 py-20 text-lg">{error}</div> : null}
      <div
        id="hrms-careers-widget"
        data-company-id={COMPANY_ID}
        data-api-base={API_BASE}
      />
    </section>
  );
};

export default JobOpeningsTable;