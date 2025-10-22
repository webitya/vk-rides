"use client"

import { motion } from "framer-motion"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"

export default function FloatingIcons() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919102430174?text=Hi%20VK%20RIDES%2C%20I%20want%20to%20book%20a%20car", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+919102430174"
  }

  return (
    <>
      {/* Desktop Floating Icons - Bottom Right - Hidden on Mobile */}
      <div
        style={{
          position: "fixed",
          bottom: "100px",
          right: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          zIndex: 50,
          "@media (max-width: 768px)": { display: "none" },
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
            transition: "all 0.3s ease",
          }}
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon style={{ fontSize: "32px" }} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCall}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#1976D2",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
            transition: "all 0.3s ease",
          }}
          title="Call us"
        >
          <PhoneIcon style={{ fontSize: "32px" }} />
        </motion.button>
      </div>
    </>
  )
}
