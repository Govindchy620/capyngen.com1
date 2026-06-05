import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, ChevronDown, AlertCircle, Globe, X } from "lucide-react";
import { Reveal } from "../../../ui/Reveal"; // Adjust path if needed
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getExampleNumber, isValidPhoneNumber } from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";

// --- Enhanced Validation Helpers ---
const validateName = (name) => {
  const trimmed = name.trim();
  if (trimmed.length < 2) return false;
  // Allows letters, spaces, hyphens, and apostrophes. No numbers.
  const hasValidChars = /^[a-zA-Z\s\-']+$/.test(trimmed);
  const hasNoConsecutive = !/([\s\-'])\1/.test(trimmed);
  return hasValidChars && hasNoConsecutive;
};

const validateLocation = (text) => {
  const trimmed = text.trim();
  if (trimmed.length < 2) return false;
  // Allows only letters, spaces, and hyphens for City/State
  return /^[a-zA-Z\s\-]+$/.test(trimmed);
};

const validateEmail = (email) => {
  // Robust standard email regex
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
};

const validateUrl = (url) => {
  const trimmed = url.trim();
  // Accepts 'example.com', 'www.example.com', 'http://...', 'https://...'
  return /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i.test(trimmed);
};

// --- Enhanced Dropdown Component ---
const Dropdown = ({ label, options, value, onChange, placeholder, isObject = false, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((opt) => {
    const text = isObject ? opt.name : opt;
    return text.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = isObject ? options.find(o => o.name === value) : null;
  const displayValue = selectedOption ? selectedOption.name : (value || placeholder);

  return (
    <div className="flex flex-col gap-1.5 relative w-full" ref={dropdownRef}>
      <label className="text-xs sm:text-[13px] font-medium text-slate-300">
        {label} <span className="text-rose-400">*</span>
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`w-full text-left bg-white/[0.03] border rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all flex justify-between items-center ${error
            ? "border-rose-500/70 bg-rose-500/5 ring-1 ring-rose-500/30"
            : isOpen
              ? "border-indigo-500 ring-1 ring-indigo-500/50 bg-white/[0.05]"
              : "border-white/10 hover:border-white/20 text-white"
            }`}
        >
          <span className={value ? "text-white flex items-center gap-2.5" : "text-slate-500 truncate block"}>
            {isObject && selectedOption?.flagUrl && (
              <img src={selectedOption.flagUrl} alt="" className="w-4 h-3 object-cover rounded-[2px] shadow-sm shrink-0" />
            )}
            <span className="truncate">{displayValue}</span>
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 shrink-0 text-slate-400 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 w-full mt-1.5 max-h-60 overflow-hidden bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl z-50"
            >
              <div className="p-2 border-b border-white/5">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-2 bg-black/20 rounded-md text-xs text-white border border-transparent focus:border-indigo-500/50 placeholder:text-slate-500 outline-none transition-colors"
                />
              </div>
              <ul className="max-h-48 overflow-y-auto p-1.5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {filteredOptions.length ? (
                  filteredOptions.map((opt, idx) => {
                    const optName = isObject ? opt.name : opt;
                    const isSelected = value === optName;
                    return (
                      <li
                        key={idx}
                        onClick={() => {
                          onChange(isObject ? opt : optName);
                          setIsOpen(false);
                          setSearch("");
                        }}
                        className={`px-3 py-2 text-[13px] rounded-md cursor-pointer transition-colors duration-150 flex items-center justify-between ${isSelected ? "bg-indigo-500/20 text-indigo-300 font-medium" : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {isObject && opt.flagUrl && (
                            <img src={opt.flagUrl} alt="" className="w-4 h-3 object-cover rounded-[2px] shadow-sm shrink-0" />
                          )}
                          <span className="truncate">{optName}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-indigo-400" />}
                      </li>
                    );
                  })
                ) : (
                  <li className="px-3 py-4 text-center text-slate-500 text-xs">No matches found</li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {error && <span className="text-rose-400 text-[11px] flex items-center gap-1 mt-0.5"><AlertCircle className="w-3 h-3" /> {error}</span>}
    </div>
  );
};

// --- Single Step Lead Form Component ---
export function LeadForm({ onClose, modalMode = false }) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState("");
  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [errors, setErrors] = useState({});

  const services = [
    "Complete Digital Marketing Solutions",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    state: "",
    country: "",
    countryCodeIso: "",
    dialCode: "",
    phone: "",
    email: "",
    service: "",
    hasWebsite: null,
    websiteUrl: "",
  });

  const getDynamicClasses = (fieldName) => {
    const base = "w-full rounded-lg px-3.5 py-2.5 text-sm text-white bg-white/[0.03] placeholder-slate-500 focus:outline-none transition-all";
    if (errors[fieldName]) {
      return `${base} border border-rose-500/70 bg-rose-500/5 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/50`;
    }
    return `${base} border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:bg-white/[0.05]`;
  };

  const labelClasses = "block text-xs sm:text-[13px] font-medium text-slate-300 mb-1.5";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags");
        const data = await res.json();
        const formattedCountries = data.map((c) => {
          let code = "";
          if (c.idd && c.idd.root) {
            code = c.idd.suffixes && c.idd.suffixes.length === 1 ? `${c.idd.root}${c.idd.suffixes[0]}` : c.idd.root;
          }
          return {
            name: c.name.common,
            code: c.cca2,
            dialCode: code,
            flagUrl: c.flags?.svg || c.flags?.png
          };
        }).sort((a, b) => a.name.localeCompare(b.name));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Failed to fetch countries");
      } finally {
        setLoadingCountries(false);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleCountrySelect = (countryObj) => {
    setFormData((prev) => ({
      ...prev,
      country: countryObj.name,
      countryCodeIso: countryObj.code,
      dialCode: countryObj.dialCode,
      phone: "",
    }));
    setErrors(prev => ({ ...prev, country: "", phone: "" }));
  };

  const getPhonePlaceholder = () => {
    if (!formData.countryCodeIso) return "99999 99999";
    try {
      const example = getExampleNumber(formData.countryCodeIso, examples);
      return example ? example.formatNational() : "99999 99999";
    } catch (e) {
      return "99999 99999";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Apply strict validations
    if (!validateName(formData.fullName)) {
      newErrors.fullName = "Please enter a valid full name (letters only).";
    }
    if (!validateLocation(formData.city)) {
      newErrors.city = "Please enter a valid city (letters only).";
    }
    if (!validateLocation(formData.state)) {
      newErrors.state = "Please enter a valid state (letters only).";
    }
    if (!formData.countryCodeIso) {
      newErrors.country = "Please select a country.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.countryCodeIso && !isValidPhoneNumber(formData.phone, formData.countryCodeIso)) {
      newErrors.phone = "Invalid phone number format for the selected country.";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }
    if (formData.hasWebsite === null) {
      newErrors.hasWebsite = "Please select Yes or No.";
    }
    if (formData.hasWebsite && !validateUrl(formData.websiteUrl)) {
      newErrors.websiteUrl = "Please enter a valid website URL (e.g., example.com).";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setNotification("Please fix the highlighted errors.");
      setTimeout(() => setNotification(""), 4000);
      return;
    }

    setIsSubmitting(true);
    setNotification("");

    try {
      const nameParts = formData.fullName.trim().split(" ");
      const parsedFirstName = nameParts[0];
      const parsedLastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : ".";

      const payload = {
        firstName: parsedFirstName,
        lastName: parsedLastName,
        city: formData.city.trim(),
        state: formData.state.trim(),
        country: formData.country,
        phoneCode: formData.dialCode,
        phoneNumber: formData.phone.trim(),
        email: formData.email.trim(),
        service: formData.service,
        hasWebsite: formData.hasWebsite ? "Yes" : "No",
        websiteUrl: formData.hasWebsite ? formData.websiteUrl.trim() : "",
        leadSourcePage: "digital-marketing",
      };

      const res = await fetch("https://api.capyngen.com/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (window.fbq) window.fbq("track", "Lead");

      if (res.ok || data.ok) {
        navigate("/greetings-offer", { replace: true });
      } else {
        setNotification(data.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      setNotification("Failed to send request. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(""), 5000);
    }
  };

  return (
    <div className={`relative w-full max-w-xl mx-auto bg-[#0a0f1c]/90 backdrop-blur-2xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-indigo-500/10 transition-all ${modalMode ? "p-5 pt-12 sm:p-8 sm:pt-12" : "p-6 sm:p-8"}`}>
      {modalMode && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors z-20"
          type="button"
          disabled={isSubmitting}
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-3">

        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2 bg-rose-500/10 border border-rose-500/30 text-rose-300 rounded-lg text-xs flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 shrink-0" /> {notification}
          </motion.div>
        )}

        {/* --- FORM GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

          {/* Row 1: Full Name */}
          <div className="sm:col-span-2">
            <label className={labelClasses}>Full Name <span className="text-rose-400">*</span></label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" className={getDynamicClasses("fullName")} disabled={isSubmitting} />
            {errors.fullName && <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.fullName}</span>}
          </div>

          {/* Row 2: Location */}
          <div>
            <label className={labelClasses}>City <span className="text-rose-400">*</span></label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Mumbai" className={getDynamicClasses("city")} disabled={isSubmitting} />
            {errors.city && <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.city}</span>}
          </div>
          <div>
            <label className={labelClasses}>State <span className="text-rose-400">*</span></label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Maharashtra" className={getDynamicClasses("state")} disabled={isSubmitting} />
            {errors.state && <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.state}</span>}
          </div>

          {/* Row 3: Country & Phone */}
          <Dropdown
            label="Country"
            options={countries}
            value={formData.country}
            onChange={handleCountrySelect}
            placeholder={loadingCountries ? "Loading..." : "Select Country"}
            isObject={true}
            error={errors.country}
          />
          <div>
            <label className={labelClasses}>Phone Number <span className="text-rose-400">*</span></label>
            <div className="flex relative">
              <div className={`flex items-center justify-center bg-white/[0.02] border border-r-0 rounded-l-lg px-2.5 min-w-[50px] text-slate-300 select-none text-xs transition-colors ${errors.phone ? 'border-rose-500/70 bg-rose-500/5' : 'border-white/10'}`}>
                {formData.dialCode || "+"}
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`${getDynamicClasses("phone")} rounded-l-none pl-2`}
                placeholder={getPhonePlaceholder()}
                disabled={!formData.countryCodeIso || isSubmitting}
              />
            </div>
            {errors.phone && <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.phone}</span>}
          </div>
        </div>

        {/* Row 4: Email & Service */}
        <div className="w-full">
          <label className={labelClasses}>Email Address <span className="text-rose-400">*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={getDynamicClasses("email")} disabled={isSubmitting} />
          {errors.email && <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.email}</span>}
        </div>

        <div className="w-full">
          <Dropdown
            label="Select Service"
            options={services}
            value={formData.service}
            onChange={(val) => {
              setFormData(prev => ({ ...prev, service: val }));
              if (errors.service) setErrors(prev => ({ ...prev, service: "" }));
            }}
            placeholder="Choose a service"
            error={errors.service}
          />
        </div>

        {/* Row 5: Website Toggle */}
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-white/[0.02] border transition-colors mt-1 ${errors.hasWebsite ? 'border-rose-500/70' : 'border-white/5'}`}>
          <div className="mb-2 sm:mb-0">
            <span className="text-xs sm:text-[13px] font-medium text-slate-300">Do you have a business website? <span className="text-rose-400">*</span></span>
            {errors.hasWebsite && <span className="text-rose-400 text-[11px] block mt-0.5">{errors.hasWebsite}</span>}
          </div>
          <div className="flex gap-1 bg-black/40 p-1 rounded-md border border-white/5 shrink-0">
            <button
              type="button"
              onClick={() => {
                setFormData(prev => ({ ...prev, hasWebsite: true }));
                if (errors.hasWebsite) setErrors(prev => ({ ...prev, hasWebsite: "" }));
              }}
              className={`px-4 py-1.5 text-xs font-semibold rounded transition-all ${formData.hasWebsite === true ? "bg-indigo-500 text-white shadow-md" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData(prev => ({ ...prev, hasWebsite: false, websiteUrl: "" }));
                if (errors.hasWebsite) setErrors(prev => ({ ...prev, hasWebsite: "" }));
                if (errors.websiteUrl) setErrors(prev => ({ ...prev, websiteUrl: "" }));
              }}
              className={`px-4 py-1.5 text-xs font-semibold rounded transition-all ${formData.hasWebsite === false ? "bg-slate-700 text-white shadow-md" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
            >
              No
            </button>
          </div>
        </div>

        {/* Row 6: Conditional Website Input */}
        <AnimatePresence>
          {formData.hasWebsite && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: -10 }}
              animate={{ opacity: 1, height: "auto", marginTop: 0 }}
              exit={{ opacity: 0, height: 0, marginTop: -10 }}
              className="overflow-hidden"
            >
              <label className={labelClasses}>Website URL <span className="text-rose-400">*</span></label>
              <div className="relative">
                <Globe className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${errors.websiteUrl ? 'text-rose-400' : 'text-slate-500'}`} />
                <input
                  type="text"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  placeholder="e.g., www.yourdomain.com"
                  className={`${getDynamicClasses("websiteUrl")} pl-9`}
                  disabled={isSubmitting}
                />
              </div>
              {errors.websiteUrl && <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.websiteUrl}</span>}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white font-bold py-3.5 rounded-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              Claim My $299 Digital Marketing Package
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form >
    </div >
  );
}

// --- Fully Responsive Modal Wrapper ---
export function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center p-4 py-8 sm:p-6 w-full">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl my-auto"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Hero Section ---
const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [modalOpen]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-2 lg:py-24 overflow-hidden bg-[#030712]">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-6">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                Limited-Time Offer
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.15]">
                Get  <span className="relative line-through bg-rose-500/10 decoration-rose-500 decoration-[3px] sm:decoration-[5px]">
                  $2,999
                </span> Worth of Complete Digital Marketing Services
                <span className="inline-block relative whitespace-nowrap">
                  <span className="absolute -inset-1 bg-rose-500/10 -skew-y-2 rounded-sm"></span>
                </span>
                <br className="hidden lg:block mt-2" />
                <span className="block mt-4 sm:mt-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400">
                  For Just{" "}
                  <span className="inline-block text-5xl sm:text-6xl lg:text-[72px] text-white drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] font-black pb-2">
                    $299!
                  </span>
                </span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-indigo-100/90 font-medium leading-relaxed">
                Do you want to grow your business online without spending a fortune? Here’s a special digital marketing offer you shouldn’t miss.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 flex w-full justify-center lg:justify-start">
            <Reveal delay={0.3}>
              <button
                onClick={() => setModalOpen(true)}
                className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Claim My $299 Package
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Reveal>
          </div>
        </div>

        {/* Right Form (Visible on Desktop) */}
        <div className="w-full max-w-[550px] lg:w-[500px] shrink-0 relative">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>

      {/* Mobile Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <LeadForm modalMode={true} onClose={() => setModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;