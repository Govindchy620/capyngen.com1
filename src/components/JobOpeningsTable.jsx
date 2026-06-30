import { useEffect, useState } from "react";

const COMPANY_ID = "6a3bb4300657f6171d4529a0";
const API_BASE = "http://localhost:3000/api/v1/public/recruitment";
const WIDGET_SCRIPT = "https://test-hrms.orinite.com/careers-v1.js";

export default function JobOpeningsTable() {
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

    const existingScript = document.querySelector('script[src="' + WIDGET_SCRIPT + '"]');
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
    <section style={{ width: "100%" }}>
      {error ? <div style={{ color: "#dc2626", padding: "48px 0", textAlign: "center" }}>{error}</div> : null}
      <div
        id="hrms-careers-widget"
        data-company-id={COMPANY_ID}
        data-api-base={API_BASE}
      />
    </section>
  );
}