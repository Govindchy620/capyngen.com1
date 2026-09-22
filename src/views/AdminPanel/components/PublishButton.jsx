import { useState } from "react";

const PublishButton = () => {
  const [loading, setLoading] = useState(false);

  // 1. Paste your Vercel Hook URL here
  // Ideally, store this in a .env file: import.meta.env.VITE_VERCEL_HOOK_URL
  const VERCEL_HOOK_URL =
    "https://api.vercel.com/v1/integrations/deploy/prj_Quac4yTF3kcqTqc5PwlWwyoECJJ0/Udq0rvQ5Fo";

  const handlePublish = async () => {
    // Safety check: Prevent accidental clicks
    if (
      !window.confirm(
        "This will rebuild the live website to include new blog posts. It takes about 2 minutes. Continue?",
      )
    ) {
      return;
    }

    setLoading(true);

    try {
      // 2. Trigger the Webhook
      const response = await fetch(VERCEL_HOOK_URL, {
        method: "POST",
      });

      if (response.ok) {
        alert("Build started! Your changes will be live in ~2 minutes.");
      } else {
        alert("Error: Failed to trigger build. Check console.");
        console.error("Vercel response:", response);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error: Could not reach Vercel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePublish}
      disabled={loading}
      className={`px-4 py-2 rounded font-bold text-white transition-colors 
        ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        }`}
    >
      {loading ? "Triggering Build..." : "Publish to Live Site"}
    </button>
  );
};

export default PublishButton;
