import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ExitPopup() {
  const [showPopup, setShowPopup] = useState(false);

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
      {showPopup && (
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
    </>
  );
}
