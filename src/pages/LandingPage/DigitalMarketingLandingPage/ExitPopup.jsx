import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const businessTypes = [
  "E-commerce / Online Store",
  "Local Business / Shop",
  "Clinic / Hospital / Healthcare",
  "Real Estate / Builder",
  "Education / Coaching",
  "Finance / Insurance",
  "IT Services",
  "Other",
];

const serviceTypes = [
  "Social Media Marketing",
  "Meta (Facebook / Instagram) Ads",
  "Google Ads",
  "Website Design",
  "SEO (Google Ranking)",
  "Branding & Graphics",
  "Not Sure — Need Guidance",
];

const budgetOptions = [
  "₹5,000 – ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];

// LeadForm component as in the original code, unchanged functional logic
function LeadForm({
  step,
  setStep,
  whatsappSameAsPhone,
  setWhatsappSameAsPhone,
  notification,
  setNotification,
  formData,
  setFormData,
  validateStep,
  handleNext,
  handleBack,
  handleChange,
  handleCheckboxChange,
  handleSubmit,
  stepLabels,
  onClose,
  modalMode = false,
}) {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  return (
    <div
      className={`relative w-full xl:min-h-[550px] max-h-[90vh] lg:min-w-[500px] bg-white/6 backdrop-blur-lg rounded-3xl shadow-2xl border border-indigo-600/30 overflow-hidden transition-shadow duration-300 ${
        modalMode ? "p-8 text-white" : ""
      }`}
      style={modalMode ? { color: "white" } : {}}
    >
      {modalMode && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-indigo-700 rounded-full p-2 text-lg shadow-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 z-20"
          aria-label="Close form"
          type="button"
        >
          ×
        </button>
      )}

      <form
        onSubmit={handleSubmit}
        className="relative z-10 h-full flex flex-col"
        aria-label="Multi-step lead capture form"
      >
        {/* Header */}
        <div className="px-0 md:px-8 pt-0 md:pt-8 pb-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-indigo-300 select-none">
              Let's talk
            </div>
            <div className="font-semibold text-white">Quick intake form</div>
          </div>
          <div className="text-sm text-indigo-200 select-none">
            Step {Math.min(step, 7)}/7
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-0 md:px-8 mb-4">
          <div className="w-full bg-white/6 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full bg-indigo-500 shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
              initial={{ width: 0 }}
              animate={{ width: `${((step - 1) / 7) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Notification */}
        {notification && (
          <motion.div
            className="px-8 py-3 bg-emerald-600 text-white rounded-xl mt-2 mb-4 text-center font-semibold select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="alert"
          >
            {notification}
          </motion.div>
        )}

        {/* Step container */}
        <div className="px-0 md:px-8 pt-0 md:pt-6 pb-6 overflow-auto flex-1 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-900">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <label className="block mb-1 font-semibold text-indigo-300">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <motion.input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl px-4 py-3 text-white md:text-white font-medium shadow-inner bg-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 8px #6366f1",
                  }}
                  type="text"
                  autoComplete="name"
                  required
                />
                <div>
                  <label className="block mb-1 font-semibold text-indigo-300">
                    Email <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl px-4 py-3 text-white md:text-white font-medium shadow-inner bg-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    autoComplete="email"
                    required
                  />
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <label className="block mb-1 font-semibold text-indigo-300">
                    Phone / WhatsApp Number{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                    className="w-full rounded-xl px-4 py-3 text-white md:text-white font-medium shadow-inner bg-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    required
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="whatsappSame"
                    type="checkbox"
                    checked={whatsappSameAsPhone}
                    onChange={() => setWhatsappSameAsPhone((v) => !v)}
                    className="accent-indigo-500"
                  />
                  <label
                    htmlFor="whatsappSame"
                    className="text-indigo-300 text-sm select-none cursor-pointer"
                  >
                    WhatsApp number is same as phone number
                  </label>
                </div>

                {!whatsappSameAsPhone && (
                  <div>
                    <label className="block mb-1 font-semibold text-indigo-300">
                      WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <motion.input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber || ""}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      className="w-full rounded-xl px-4 py-3 text-white md:text-white font-medium shadow-inner bg-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 8px #6366f1",
                      }}
                      required
                    />
                  </div>
                )}
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <label className="block mb-1 font-semibold text-indigo-300">
                    City / Location <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Mumbai, Delhi, etc."
                    className="w-full rounded-xl px-4 py-3 text-white md:text-white font-medium shadow-inner bg-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-indigo-300">
                    Business / Brand Name{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="Capyngen, The MediClub"
                    className="w-full rounded-xl px-4 py-3 text-white md:text-white font-medium shadow-inner bg-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-indigo-300">
                    Website Name / URL <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder='If no website → Write "No Website"'
                    className="w-full rounded-xl px-4 py-3 text-white md:text-white font-medium shadow-inner bg-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    required
                  />
                </div>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div
                key="s4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <label className="block mb-1 font-semibold text-indigo-300">
                  What Type of Business Do You Have?{" "}
                  <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {businessTypes.map((type) => (
                    <motion.button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData((p) => ({ ...p, businessType: type }))
                      }
                      className={`py-3 px-5 rounded-xl border transition font-medium text-sm shadow-inner focus:outline-none select-none ${
                        formData.businessType === type
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                          : "bg-white/10 border-white/20 text-indigo-200 hover:bg-indigo-700 hover:border-indigo-500"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      aria-pressed={formData.businessType === type}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
                {formData.businessType === "Other" && (
                  <div className="mt-3">
                    <label className="block mb-1 font-semibold text-indigo-300">
                      Please Mention your business
                    </label>
                    <motion.input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="Enter your business name"
                      className="w-full rounded-xl px-4 py-3 text-white bg-transparent shadow-inner border border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #6366f1" }}
                      required
                    />
                  </div>
                )}
              </motion.div>
            )}
            {step === 5 && (
              <motion.div
                key="s5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <label className="block mb-2 font-semibold text-indigo-300">
                  What Service Are You Looking For?{" "}
                  <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3 pr-2">
                  {serviceTypes.map((service) => {
                    const selected = formData.serviceType.includes(service);
                    return (
                      <motion.button
                        key={service}
                        type="button"
                        onClick={() => handleCheckboxChange(service)}
                        className={`py-3 px-4 rounded-xl border font-medium text-sm shadow-inner select-none transition ${
                          selected
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                            : "bg-white/10 border-white/20 text-indigo-200 hover:bg-indigo-700 hover:border-indigo-500"
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        aria-pressed={selected}
                      >
                        {service}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
            {step === 6 && (
              <motion.div
                key="s6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <label className="block mb-1 font-semibold text-indigo-300">
                  Monthly Marketing Budget{" "}
                  <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {budgetOptions.map((budget) => (
                    <motion.button
                      key={budget}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, budget }))}
                      className={`py-3 px-5 rounded-xl border font-medium text-sm shadow-inner select-none transition ${
                        formData.budget === budget
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                          : "bg-white/10 border-white/20 text-indigo-200 hover:bg-indigo-700 hover:border-indigo-500"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      aria-pressed={formData.budget === budget}
                    >
                      {budget}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 7 && (
              <motion.div
                key="s7"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <label className="block mb-1 font-semibold text-indigo-300">
                    Best Time To Call / Talk{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="bestTime"
                    value={formData.bestTime}
                    placeholder="Select date and time"
                    readOnly
                    onClick={() => setShowDateTimePicker(true)}
                    className="w-full rounded-xl px-4 py-3 text-white bg-transparent shadow-inner border border-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition cursor-pointer"
                  />
                  {showDateTimePicker && (
                    <div className="mt-2 bg-slate-800 p-4 rounded-xl">
                      <input
                        type="datetime-local"
                        onChange={(e) => {
                          const dt = new Date(e.target.value);
                          const formatted = dt.toLocaleString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          });
                          handleChange({
                            target: { name: "bestTime", value: formatted },
                          });
                          setShowDateTimePicker(false);
                        }}
                        className="w-full rounded-xl p-2 text-black"
                        autoFocus
                      />
                      <button
                        type="button"
                        className="mt-2 px-4 py-2 bg-red-600 rounded text-white"
                        onClick={() => setShowDateTimePicker(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-indigo-300">
                    Additional Requirements / Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Additional details..."
                    className="w-full rounded-xl px-4 py-3 text-white md:text-white font-medium shadow-inner bg-transparent focus:outline-none focus:ring-4 focus:ring-indigo-500 transition resize-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer / navigation */}
        <div className="px-0 md:px-8 py-4 border-t border-white/6 bg-gradient-to-t from-transparent to-white/10">
          <div className="flex items-center justify-between">
            <div>
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 rounded-xl bg-white/6 hover:bg-white/8 text-sm font-semibold transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back
                </motion.button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {step < 7 && (
                <motion.button
                  type="button"
                  disabled={!validateStep()}
                  onClick={handleNext}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
                    validateStep()
                      ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow"
                      : "bg-indigo-300/60 text-white/80 cursor-not-allowed"
                  }`}
                  whileHover={validateStep() ? { scale: 1.05 } : {}}
                  whileTap={validateStep() ? { scale: 0.95 } : {}}
                >
                  Next
                </motion.button>
              )}

              {step === 7 && (
                <motion.button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Finish & Submit
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(true);
  const [notification, setNotification] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsappNumber: "",
    city: "",
    brandName: "",
    website: "",
    businessType: "",
    serviceType: [],
    budget: "",
    bestTime: "",
    notes: "",
  });

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep = (s = step) => {
    switch (s) {
      case 1:
        return formData.fullName.trim() !== "" && isValidEmail(formData.email);
      case 2:
        return (
          (formData.phone.trim() !== "" && whatsappSameAsPhone) ||
          formData.whatsappNumber.trim() !== ""
        );
      case 3:
        return (
          formData.city.trim() !== "" &&
          formData.brandName.trim() !== "" &&
          formData.website.trim() !== ""
        );
      case 4:
        return formData.businessType !== "";
      case 5:
        return formData.serviceType.length > 0;
      case 6:
        return formData.budget !== "";
      case 7:
        return formData.bestTime.trim() !== "";
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step === 1 && !isValidEmail(formData.email)) {
      setNotification("Invalid email address");
      setTimeout(() => setNotification(""), 3000);
      return; // prevent step increment
    }
    if (validateStep()) {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const exists = prev.serviceType.includes(service);
      const updated = exists
        ? prev.serviceType.filter((s) => s !== service)
        : [...prev.serviceType, service];
      return { ...prev, serviceType: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        whatsappNumber: whatsappSameAsPhone
          ? formData.phone
          : formData.whatsappNumber,
        city: formData.city,
        brandName: formData.brandName,
        website: formData.website,
        businessType: formData.businessType,
        services: formData.serviceType,
        budget: formData.budget,
        bestTime: formData.bestTime,
        notes: formData.notes,
      };

      const res = await fetch("https://api.capyngen.com/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setNotification("Request received, we will connect with you shortly.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          whatsappNumber: "",
          city: "",
          brandName: "",
          website: "",
          businessType: "",
          serviceType: [],
          budget: "",
          bestTime: "",
          notes: "",
        });
        setStep(1);
        setWhatsappSameAsPhone(true);

        setTimeout(() => {
          setNotification("");
          setModalOpen(false);
          navigate("/");
        }, 5000);
      } else {
        setNotification(
          data.message || "Something went wrong. Please try again later."
        );
        setTimeout(() => setNotification(""), 5000);
      }
    } catch (error) {
      setNotification("Failed to send request. Please check your connection.");
      setTimeout(() => setNotification(""), 5000);
    }
  };

  const stepLabels = ["1", "2", "3", "4", "5", "6", "7"];

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showPopup && !modalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          >
            <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-xl border border-gray-200/50">
              {/* Heading */}
              <motion.h2
                className="text-3xl font-bold text-gray-800 mb-2 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              >
                Wait! Don't Miss Out 🚀
              </motion.h2>
              {/* Subtitle */}
              <motion.p
                className="text-gray-600 mb-6 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              >
                Get a{" "}
                <strong className="text-indigo-600">special discount</strong> /{" "}
                <strong className="text-indigo-600">free consultation</strong>{" "}
                before you go!
              </motion.p>
              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                {/* Leave Offer Button */}
                <motion.button
                  onClick={() => setShowPopup(false)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl font-semibold shadow-md transition-transform transition-shadow"
                >
                  Leave Offer
                </motion.button>
                {/* Grab Offer Button */}
                <motion.button
                  onClick={() => {
                    setModalOpen(true);
                    setShowPopup(false);
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md transition-transform transition-shadow"
                >
                  Grab Offer 🎁
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal with LeadForm inside for the offer */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <LeadForm
                step={step}
                setStep={setStep}
                whatsappSameAsPhone={whatsappSameAsPhone}
                setWhatsappSameAsPhone={setWhatsappSameAsPhone}
                notification={notification}
                setNotification={setNotification}
                formData={formData}
                setFormData={setFormData}
                validateStep={validateStep}
                handleNext={handleNext}
                handleBack={handleBack}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handleSubmit={handleSubmit}
                stepLabels={stepLabels}
                onClose={() => setModalOpen(false)}
                modalMode={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
