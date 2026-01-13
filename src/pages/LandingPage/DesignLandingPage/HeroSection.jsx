import React, { useState } from "react";
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
  "UI/UX Design",
  "Website Design",
  "Branding & Identity Design",
  "Ecommerce Design",
  "CMS Design",
];

const budgetOptions = [
  "₹5,000 – ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];

// Enhanced LeadForm component with improved UI
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

  // Enhanced glassmorphism input styles
  const inputClasses =
    "w-full rounded-2xl px-5 py-4 text-white bg-white/5 backdrop-blur-xl shadow-2xl border-2 border-white/20 focus:border-indigo-400 focus:ring-8 focus:ring-indigo-500/20 transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:shadow-indigo-500/10";

  // Enhanced button styles for selections
  const selectionButtonClasses = (isSelected) =>
    `px-6 py-4 rounded-2xl font-semibold text-sm shadow-xl border-2 transition-all duration-300 backdrop-blur-xl select-none ${
      isSelected
        ? "bg-gradient-to-r from-indigo-500 to-purple-600 border-indigo-400 text-white shadow-2xl shadow-indigo-500/25 transform scale-[1.02] ring-4 ring-indigo-500/30"
        : "bg-white/10 border-white/30 text-indigo-200 hover:bg-white/20 hover:border-indigo-300 hover:text-white hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.02]"
    }`;

  return (
    <div
      className={`relative w-full xl:min-h-[600px] max-h-[90vh] lg:min-w-[550px] bg-gradient-to-br from-slate-900/90 via-indigo-900/20 to-purple-900/30 backdrop-blur-2xl rounded-3xl p-1 shadow-2xl border border-white/10 overflow-hidden transition-all duration-500 ${
        modalMode
          ? "p-8 text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]"
          : ""
      }`}
      style={modalMode ? { color: "white" } : {}}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {modalMode && (
        <motion.button
          onClick={onClose}
          className="absolute top-6 right-6 group bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl p-3 text-white shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 border border-white/20 hover:border-white/40 transition-all duration-300 z-20 hover:scale-110"
          aria-label="Close form"
          type="button"
          disabled={isSubmitting}
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>
      )}

      <form
        onSubmit={handleSubmit}
        className="relative z-10 h-full flex flex-col bg-black/20 backdrop-blur-xl rounded-3xl overflow-hidden"
        aria-label="Multi-step lead capture form"
      >
        {/* Enhanced Header with gradient text */}
        <div className="px-8 pt-8 pb-6 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <motion.div
                className="text-xs bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-medium tracking-wider uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Let's Build Something Amazing
              </motion.div>
              <motion.h2
                className="text-2xl font-black bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent drop-shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Project Intake
              </motion.h2>
            </div>
            <motion.div
              className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-2xl backdrop-blur-xl border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-indigo-200">
                Step {Math.min(step, 7)}/7
              </span>
            </motion.div>
          </div>

          {/* Enhanced Progress bar with glow */}
          <div className="mt-8">
            <div className="w-full bg-white/10 rounded-2xl h-3 overflow-hidden backdrop-blur-xl border border-white/20">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.4)] rounded-2xl relative overflow-hidden"
                initial={{ width: 0, scaleX: 0.8 }}
                animate={{ width: `${((step - 1) / 6) * 100}%`, scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              className="mx-8 mb-6 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 text-white rounded-2xl p-5 backdrop-blur-xl shadow-2xl border border-emerald-400/50 shadow-emerald-500/25"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              role="alert"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-semibold text-lg">{notification}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Step container */}
        <div className="px-8 pb-8 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600/50 scrollbar-track-indigo-900/20">
          <AnimatePresence mode="wait">
            {/* Step 1 - Enhanced */}
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    <span>👤</span> Full Name{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClasses}
                    whileFocus={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    type="text"
                    autoComplete="name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    <span>✉️</span> Email Address{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@company.com"
                    className={inputClasses}
                    whileFocus={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2 - Enhanced */}
            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    <span>📱</span> Phone Number{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClasses}
                    whileFocus={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-indigo-400/50 transition-all duration-300">
                  <motion.input
                    id="whatsappSame"
                    type="checkbox"
                    checked={whatsappSameAsPhone}
                    onChange={() => setWhatsappSameAsPhone((v) => !v)}
                    className="w-5 h-5 accent-indigo-500 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-110 focus:scale-110"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="whatsappSame"
                    className="text-indigo-200 text-base font-semibold select-none cursor-pointer hover:text-white transition-colors"
                  >
                    WhatsApp number is same as phone
                  </label>
                </div>

                {!whatsappSameAsPhone && (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                      <span>💬</span> WhatsApp Number{" "}
                      <span className="text-rose-400">*</span>
                    </label>
                    <motion.input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber || ""}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClasses}
                      whileFocus={{ scale: 1.02, y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 3 - Enhanced */}
            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    <span>📍</span> City/Location{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Mumbai, Delhi, Bangalore..."
                    className={inputClasses}
                    whileFocus={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    <span>🏢</span> Business Name{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="Your company or brand name"
                    className={inputClasses}
                    whileFocus={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    <span>🌐</span> Website URL{" "}
                    <span className="text-rose-400">*</span>
                  </label>
                  <motion.input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder='yourwebsite.com or "No Website"'
                    className={inputClasses}
                    whileFocus={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4 - Enhanced Business Type */}
            {step === 4 && (
              <motion.div
                key="s4"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <label className="flex items-center gap-2 text-xl font-black bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  What type of business?
                  <span className="text-rose-400 text-lg">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {businessTypes.map((type) => (
                    <motion.button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData((p) => ({ ...p, businessType: type }))
                      }
                      className={selectionButtonClasses(
                        formData.businessType === type
                      )}
                      whileHover={{ y: -4, rotateX: 5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      aria-pressed={formData.businessType === type}
                      disabled={isSubmitting}
                    >
                      {formData.businessType === type && (
                        <svg
                          className="w-5 h-5 inline-block mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {type}
                    </motion.button>
                  ))}
                </div>
                {formData.businessType === "Other" && (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                      <span>✏️</span> Please specify
                    </label>
                    <motion.input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="Describe your business type"
                      className={inputClasses}
                      whileFocus={{ scale: 1.02, y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 5 - Enhanced Services */}
            {step === 5 && (
              <motion.div
                key="s5"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <label className="flex items-center gap-2 text-xl font-black bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  What services do you need?
                  <span className="text-rose-400 text-lg">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {serviceTypes.map((service) => {
                    const selected = formData.serviceType.includes(service);
                    return (
                      <motion.button
                        key={service}
                        type="button"
                        onClick={() => handleCheckboxChange(service)}
                        className={selectionButtonClasses(selected)}
                        whileHover={{ y: -4, rotateX: 5 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        aria-pressed={selected}
                        disabled={isSubmitting}
                      >
                        {selected && (
                          <svg
                            className="w-5 h-5 inline-block mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                        {service}
                      </motion.button>
                    );
                  })}
                </div>
                {formData.serviceType.length > 0 && (
                  <div className="flex flex-wrap gap-2 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
                    {formData.serviceType.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 bg-indigo-500/80 text-white text-xs font-bold rounded-full shadow-lg"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 6 - Enhanced Budget */}
            {step === 6 && (
              <motion.div
                key="s6"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <label className="flex items-center gap-2 text-xl font-black bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  💰 Monthly Budget{" "}
                  <span className="text-rose-400 text-lg">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {budgetOptions.map((budget) => (
                    <motion.button
                      key={budget}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, budget }))}
                      className={selectionButtonClasses(
                        formData.budget === budget
                      )}
                      whileHover={{ y: -4, rotateX: 5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      aria-pressed={formData.budget === budget}
                      disabled={isSubmitting}
                    >
                      {formData.budget === budget && (
                        <svg
                          className="w-5 h-5 inline-block mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {budget}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 7 - Enhanced Final Step */}
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

        {/* Enhanced Footer */}
        <div className="px-8 py-8 bg-gradient-to-t from-black/50 via-slate-900/30 to-transparent backdrop-blur-xl border-t border-white/20">
          <div className="flex items-center justify-between">
            <motion.div>
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={handleBack}
                  className="group flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 border border-white/20 hover:border-indigo-400 transition-all duration-300 hover:scale-[1.02]"
                  whileHover={{ x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <svg
                    className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </motion.button>
              )}
            </motion.div>

            <div className="flex items-center gap-4">
              {step < 7 && (
                <motion.button
                  type="button"
                  disabled={!validateStep() || isSubmitting}
                  onClick={handleNext}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 ${
                    validateStep() && !isSubmitting
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-2xl hover:shadow-indigo-500/25 hover:scale-[1.02] border border-indigo-400/50"
                      : "bg-white/10 text-white/50 border border-white/20 cursor-not-allowed"
                  }`}
                  whileHover={
                    validateStep() && !isSubmitting ? { x: 4 } : undefined
                  }
                  whileTap={
                    validateStep() && !isSubmitting
                      ? { scale: 0.98 }
                      : undefined
                  }
                >
                  Next
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              )}

              {step === 7 && (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gradient-to-r from-emerald-400 to-teal-500 cursor-not-allowed shadow-emerald-500/25"
                      : "bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:shadow-2xl hover:shadow-emerald-500/30 text-white hover:scale-[1.05] hover:-rotate-[1.5deg]"
                  }`}
                  whileHover={
                    !isSubmitting ? { scale: 1.05, rotate: -1.5 } : undefined
                  }
                  whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-7 w-7"
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
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>🚀 Launch Project</>
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

// Enhanced Modal remains the same structure but with improved backdrop
export function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
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
            className="relative w-full max-w-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// HeroSection remains exactly the same - all logic preserved
export default function HeroSection() {
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
      return;
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
        leadSourcePage: "Digital-Marketing",
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

  const stepLabels = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gradient-to-b from-black via-slate-900 to-slate-800 text-white font-sans pt-24"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left copy - unchanged */}
        <motion.div
          className="px-4 md:px-0 max-w-xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-white drop-shadow-lg">
            Design That Converts, Brands That Scale -
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Powered By Capyngen
            </span>
          </h1>

          <h4 className="text-xl md:text-2xl font-semibold mb-6 text-indigo-200 leading-snug">
            Ready to captivate your audience and convert visitors into
            customers?
          </h4>

          <p className="text-md md:text-lg xl:text-xl text-indigo-200 max-w-xl leading-relaxed selection:bg-indigo-600 selection:text-white">
            Capyngen makes jaw-dropping UX/UI, conversion-driven sites,
            memorable brands, high-functioning e-commerce sites, and a flexible
            CMS that generate actual business outcomes. Our design prowess
            brings to life ideas in the form of digital success stories in
            startups and enterprises alike.
          </p>

          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.35 }}
          >
            <button
              className="
              px-8 py-4 
              bg-gradient-to-r from-blue-400 to-cyan-400
              text-white font-black text-sm md:text-base
              rounded-xl 
              hover:opacity-90 transition
              transform hover:scale-105 active:scale-95
            "
              aria-label="Start your project with Capyngen"
              type="button"
              onClick={() => setModalOpen(true)}
            >
              Start Your Project Today → Free Consultation
            </button>
          </motion.div>
        </motion.div>

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
      </div>

      {/* Modal with enhanced form */}
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
}
