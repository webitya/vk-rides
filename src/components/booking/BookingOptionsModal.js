"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CloseIcon from "@mui/icons-material/Close"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import CreditCardIcon from "@mui/icons-material/CreditCard"

export default function BookingOptionsModal({ car, onClose, onSelectOption }) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const bookingMethods = [
    {
      id: "call",
      title: "Call Us",
      description: "Speak with our team",
      icon: PhoneIcon,
      color: "#4CAF50",
      bgColor: "#E8F5E9",
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Quick booking",
      icon: WhatsAppIcon,
      color: "#25D366",
      bgColor: "#E8F5E9",
    },
    {
      id: "email",
      title: "Email Booking",
      description: "Detailed form",
      icon: EmailIcon,
      color: "#FF6B6B",
      bgColor: "#FFE8E8",
    },
    {
      id: "payment",
      title: "Online Payment",
      description: "Instant booking",
      icon: CreditCardIcon,
      color: "#6C63FF",
      bgColor: "#F0EBFF",
    },
  ]

  const modalContent = (
    <div style={{ padding: isMobile ? "16px" : "24px" }}>
      <div style={{ marginBottom: isMobile ? "16px" : "20px" }}>
        <h2
          style={{
            fontSize: isMobile ? "18px" : "22px",
            fontWeight: "bold",
            marginBottom: "4px",
            color: "#1a1a1a",
          }}
        >
          Book {car.name}
        </h2>
        <p style={{ fontSize: "12px", color: "#999" }}>₹{car.pricePerDay} per day</p>
      </div>

      <p
        style={{
          fontSize: "13px",
          color: "#666",
          marginBottom: isMobile ? "14px" : "18px",
          textAlign: "center",
        }}
      >
        Choose your booking method
      </p>

      <div style={{ display: "grid", gap: isMobile ? "10px" : "12px" }}>
        {bookingMethods.map((method, index) => {
          const IconComponent = method.icon
          return (
            <motion.button
              key={method.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectOption(method.action || method.id)}
              style={{
                padding: isMobile ? "14px" : "16px",
                backgroundColor: method.bgColor,
                border: `2px solid ${method.color}`,
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "12px" : "14px",
                transition: "all 0.3s ease",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: isMobile ? "40px" : "45px",
                  height: isMobile ? "40px" : "45px",
                  backgroundColor: method.color,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <IconComponent style={{ fontSize: isMobile ? "20px" : "24px" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: isMobile ? "14px" : "15px",
                    fontWeight: "bold",
                    color: "#1a1a1a",
                  }}
                >
                  {method.title}
                </div>
                <div style={{ fontSize: "11px", color: "#666", marginTop: "2px" }}>
                  {method.description}
                </div>
              </div>
              <div style={{ fontSize: "18px", color: method.color }}>→</div>
            </motion.button>
          )
        })}
      </div>

      <p
        style={{
          fontSize: "11px",
          color: "#999",
          marginTop: isMobile ? "14px" : "18px",
          textAlign: "center",
        }}
      >
        All methods are secure
      </p>
    </div>
  )

  // ============================
  // ✅ MOBILE DRAWER VERSION
  // ============================
  if (isMobile) {
    return (
      <AnimatePresence>
        <motion.div
          key="mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 3000,
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={onClose}
        >
          <motion.div
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "85%",
              maxWidth: "340px",
              height: "100%",
              backgroundColor: "#fff",
              boxShadow: "-4px 0 20px rgba(0,0,0,0.2)",
              overflowY: "auto",
              position: "relative",
              paddingBottom: "20px",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "none",
                border: "none",
                fontSize: "26px",
                cursor: "pointer",
                color: "#999",
                zIndex: 10,
              }}
            >
              <CloseIcon />
            </button>

            <div style={{ marginTop: "40px" }}>{modalContent}</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // ============================
  // ✅ DESKTOP MODAL VERSION
  // ============================
  return (
    <AnimatePresence>
      <motion.div
        key="desktop-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
          padding: "20px",
        }}
      >
        <motion.div
          key="desktop-modal"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            maxWidth: "420px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #6C63FF 0%, #5A52D5 100%)",
              padding: "20px",
              color: "#fff",
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(255,255,255,0.2)",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                transition: "all 0.3s ease",
              }}
            >
              <CloseIcon />
            </button>

            <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "0 0 6px 0" }}>
              Book {car.name}
            </h2>
            <p style={{ fontSize: "13px", margin: "0", opacity: 0.9 }}>
              ₹{car.pricePerDay} per day
            </p>
          </div>

          {modalContent}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
