import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../../../ui/Reveal";
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
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click Advertising (PPC)",
  "Social Media Marketing (SMM)",
  "Performance Marketing",
  "Content Marketing",
  "Website Design & Optimization",
  "Email & WhatsApp Marketing",
  "Not Sure - Need Guidance",
];

const budgetOptions = [
  "₹5,000 – ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];

// Reusable full LeadForm component with all props needed for state and handlers
export function LeadForm({
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
  isSubmitting,
}) {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [tempDateTime, setTempDateTime] = useState("");

  // Shared input classes with visible indigo borders and transparent background for theme consistency
  const inputClasses =
    "w-full rounded-xl px-4 py-3 text-white bg-transparent shadow-inner border border-blue-600 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition";

  return (
    <div
      className={`relative w-full xl:min-h-[550px] max-h-[90vh] lg:min-w-[500px] bg-white/10 backdrop-blur-lg rounded-md p-2 shadow-2xl border border-blue-600/40 overflow-y-auto transition-shadow duration-300 ${
        modalMode ? "p-8 text-white" : ""
      }`}
      style={modalMode ? { color: "white" } : {}}
    >
      {modalMode && (
        <button
          onClick={onClose}
          className="absolute top-1 right-1 sm:top-3 sm:right-3 text-white bg-blue-700 rounded-md p-2 text-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 z-20"
          aria-label="Close form"
          type="button"
          disabled={isSubmitting}
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
            <div className="text-sm text-blue-300 select-none">Let's talk</div>
            <div className="font-semibold text-white">Quick intake form</div>
          </div>
          <div className="text-sm text-blue-200 select-none">
            Step {Math.min(step, 7)}/7
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-0 md:px-8 mb-4">
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full bg-blue-500 shadow-[0_8px_24px_rgba(99,102,241,0.12)]"
              initial={{ width: 0 }}
              animate={{ width: `${((step - 1) / 6) * 100}%` }}
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
        <div className="px-0 md:px-8 pt-0 md:pt-6 pb-6 overflow-auto flex-1 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-900">
          <AnimatePresence mode="wait">
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <label className="block mb-1 font-semibold text-blue-300">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <motion.input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClasses}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 8px #6366f1",
                  }}
                  type="text"
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                />
                <div>
                  <label className="block mb-1 font-semibold text-blue-300">
                    Email <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClasses}
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
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
                  <label className="block mb-1 font-semibold text-blue-300">
                    Phone / WhatsApp Number{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                    className={inputClasses}
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="whatsappSame"
                    type="checkbox"
                    checked={whatsappSameAsPhone}
                    onChange={() => setWhatsappSameAsPhone((v) => !v)}
                    className="accent-blue-500"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="whatsappSame"
                    className="text-blue-300 text-sm select-none cursor-pointer"
                  >
                    WhatsApp number is same as phone number
                  </label>
                </div>

                {!whatsappSameAsPhone && (
                  <div>
                    <label className="block mb-1 font-semibold text-blue-300">
                      WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <motion.input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber || ""}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      className={inputClasses}
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 8px #6366f1",
                      }}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 3 */}
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
                  <label className="block mb-1 font-semibold text-blue-300">
                    City / Location <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Mumbai, Delhi, etc."
                    className={inputClasses}
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-blue-300">
                    Business / Brand Name{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="Capyngen, The MediClub"
                    className={inputClasses}
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-blue-300">
                    Website Name / URL <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder='If no website → Write "No Website"'
                    className={inputClasses}
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 8px #6366f1",
                    }}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4 */}
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
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                          : "bg-white/10 border-white/20 text-blue-200 hover:bg-blue-700 hover:border-blue-500"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      aria-pressed={formData.businessType === type}
                      disabled={isSubmitting}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
                {formData.businessType === "Other" && (
                  <div className="mt-3">
                    <label className="block mb-1 font-semibold text-blue-300">
                      Please Mention your business
                    </label>
                    <motion.input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="Enter your business name"
                      className={inputClasses}
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 8px #6366f1" }}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 5 */}
            {step === 5 && (
              <motion.div
                key="s5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <label className="block mb-2 font-semibold text-blue-300">
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
                            ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                            : "bg-white/10 border-white/20 text-blue-200 hover:bg-blue-700 hover:border-blue-500"
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        aria-pressed={selected}
                        disabled={isSubmitting}
                      >
                        {service}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 6 */}
            {step === 6 && (
              <motion.div
                key="s6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <label className="block mb-1 font-semibold text-blue-300">
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
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                          : "bg-white/10 border-white/20 text-blue-200 hover:bg-blue-700 hover:border-blue-500"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      aria-pressed={formData.budget === budget}
                      disabled={isSubmitting}
                    >
                      {budget}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 7 */}
            {step === 7 && (
              <motion.div
                key="s7"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="relative max-w-[90vw]">
                  <label className="block mb-1 font-semibold text-blue-300">
                    Best Time To Call / Talk{" "}
                    <span className="text-rose-400">*</span>
                  </label>

                  <div className="relative">
                    <input
                      type="datetime-local"
                      name="bestTime"
                      value={
                        formData.bestTime
                          ? new Date(formData.bestTime)
                              .toISOString()
                              .slice(0, 16)
                          : ""
                      }
                      onChange={(e) => {
                        const rawValue = e.target.value;
                        if (!rawValue) {
                          handleChange({
                            target: { name: "bestTime", value: "" },
                          });
                          return;
                        }
                        const dt = new Date(rawValue);
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
                      }}
                      className={`${inputClasses} text-white appearance-none`}
                      disabled={isSubmitting}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-white w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-blue-300">
                    Additional Requirements / Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Additional details..."
                    className={`${inputClasses} resize-none`}
                    disabled={isSubmitting}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer / navigation */}
        <div className="px-0 md:px-8 py-4 border-t border-white/10 bg-gradient-to-t from-transparent to-white/10">
          <div className="flex items-center justify-between">
            <div>
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 rounded-xl bg-white/6 hover:bg-white/8 text-sm font-semibold transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  Back
                </motion.button>
              )}
            </div>

            <div className="flex items-center gap-3">
              {step < 7 && (
                <motion.button
                  type="button"
                  disabled={!validateStep() || isSubmitting}
                  onClick={handleNext}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
                    validateStep() && !isSubmitting
                      ? "bg-blue-500 hover:bg-blue-600 text-white shadow"
                      : "bg-blue-300/60 text-white/80 cursor-not-allowed"
                  }`}
                  whileHover={
                    validateStep() && !isSubmitting
                      ? { scale: 1.05 }
                      : undefined
                  }
                  whileTap={
                    validateStep() && !isSubmitting
                      ? { scale: 0.95 }
                      : undefined
                  }
                >
                  Next
                </motion.button>
              )}

              {step === 7 && (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-xl font-bold shadow-lg transition-transform flex items-center gap-2 ${
                    isSubmitting
                      ? "bg-emerald-400 cursor-not-allowed"
                      : "bg-emerald-500 hover:bg-emerald-600 text-white"
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : undefined}
                  whileTap={!isSubmitting ? { scale: 0.95 } : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Finish & Submit"
                  )}
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Hero = () => {
  const [step, setStep] = useState(1);
  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(true);
  const [notification, setNotification] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  React.useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);
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

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

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
        leadSourcePage: "digital-marketing",
      };

      const res = await fetch("https://api.capyngen.com/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      if (res.ok || data.ok) {
        console.log(data);
        navigate("/greetings", { replace: true });
      } else {
        setNotification(
          data.message || "Something went wrong. Please try again later."
        );
        setIsSubmitting(false);
        setTimeout(() => {
          setNotification("");
        }, 5000);
      }
    } catch (error) {
      setNotification("Failed to send request. Please check your connection.");
      setIsSubmitting(false);
      setTimeout(() => {
        setNotification("");
      }, 5000);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const stepLabels = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-brand-dark">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-glow/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <Reveal delay={0.1}>
            <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Capyngen –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-500 animate-gradient">
                A Result-Driven Digital Marketing Agency for Growth-Focused
                Brands
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              Capyngen assists brands in expanding their use of digital
              performance marketing. Not clicks and impressions, but{" "}
              <span className="text-white font-semibold">real customers</span>,{" "}
              <span className="text-white font-semibold">
                quantifiable outcomes
              </span>
              , and <span className="text-white font-semibold">ROI</span> in the
              long-term.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
              <button
                onClick={() => setModalOpen(true)}
                className="group relative px-8 py-4 bg-white text-brand-dark font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
              >
                <div className="absolute inset-0 w-full h-full bg-brand-glow opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  Free Strategy Session{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a
                href="#services"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all hover:border-white/40 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                View Services
              </a>
            </div>
          </Reveal>
        </div>

        {/* Hero Image/Graphic */}
        <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative hidden md:block">
          {/* Right form */}
          <motion.div
            className="hidden md:flex w-full max-w-full justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
              isSubmitting={isSubmitting}
            />
          </motion.div>

          {/* Background glow for image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/10 blur-3xl -z-10 rounded-full" />
        </div>
      </div>
      {/* Modal with same form inside */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
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
          isSubmitting={isSubmitting}
        />
      </Modal>
    </section>
  );
};

export default Hero;
