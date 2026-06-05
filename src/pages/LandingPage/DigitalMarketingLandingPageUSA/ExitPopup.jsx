import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Modal, LeadForm } from "./Hero";
import { Gift, Sparkles, X, ArrowRight, CheckCircle2 } from "lucide-react";

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
      // Trigger only once per session typically, but leaving your logic intact
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] px-4 py-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-full max-w-lg bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden text-center group"
            >
              {/* --- BACKGROUND EFFECTS --- */}
              {/* Dot Pattern Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

              {/* Ambient Glows */}
              <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[250px] h-[250px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110" />

              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-full p-2 transition-all z-20"
              >
                <X size={18} />
              </button>

              {/* --- CONTENT --- */}
              <div className="relative z-10 flex flex-col items-center">

                {/* 1. Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Wait! Before you leave
                </div>

                {/* 2. Headline */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                  Don't leave without your <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 drop-shadow-sm">
                    Exclusive Package
                  </span>
                </h2>

                {/* 3. Subtitle */}
                <p className="text-slate-300 mb-8 text-sm sm:text-base leading-relaxed max-w-md">
                  We want to help your business scale. Grab a free expert consultation or lock in your special discount right now.
                </p>

                {/* 4. Mini Benefit Checklist (Builds desire) */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10 text-xs sm:text-sm font-medium text-slate-300">
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Audit
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Custom Strategy
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Obligation
                  </span>
                </div>

                {/* 5. CTA Buttons */}
                <div className="w-full flex flex-col gap-4">
                  {/* Primary Glowing Button */}
                  <div className="relative w-full group/btn">
                    {/* Animated Glow behind button */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur opacity-40 group-hover/btn:opacity-70 transition duration-500"></div>

                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setShowPopup(false);
                      }}
                      className="relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform group-hover/btn:-translate-y-0.5"
                    >
                      <Gift className="w-5 h-5" />
                      Claim My Offer Now
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Secondary/Ghost Button */}
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-slate-500 hover:text-slate-300 text-sm py-2 font-medium transition-colors hover:underline underline-offset-4"
                  >
                    No thanks, I'll pay full price later
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal with SAME design from HeroSection */}
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
        />
      </Modal>
    </>
  );
}