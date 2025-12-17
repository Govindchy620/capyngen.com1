const COUNTRY_API_URL =
  "https://restcountries.com/v3.1/all?fields=name,cca2,flag";
const SUBMIT_API_URL = "https://api.capyngen.com/api/careers/apply";

export const fetchCountries = async () => {
  try {
    const response = await fetch(COUNTRY_API_URL);
    if (!response.ok) throw new Error("Failed to fetch countries");

    const data = await response.json();

    // Sort alphabetically by country name
    return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const submitApplication = async (formData) => {
  const response = await fetch(SUBMIT_API_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Submission failed");
  }
};
