import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Modal, LeadForm } from "./Hero";

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
