"use client"

import { motion } from "framer-motion"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import CreditCardIcon from "@mui/icons-material/CreditCard"

export default function BookingOptionCard({ option }) {
  const getIcon = (action) => {
    switch (action) {
      case "whatsapp":
        return <WhatsAppIcon style={{ fontSize: "48px" }} />
      case "email":
        return <EmailIcon style={{ fontSize: "48px" }} />
      case "call":
        return <PhoneIcon style={{ fontSize: "48px" }} />
      case "razorpay":
        return <CreditCardIcon style={{ fontSize: "48px" }} />
      default:
        return null
    }
  }

  const handleClick = () => {
    if (option.action === "whatsapp") {
      window.open("https://wa.me/919102430174?text=Hi%20VK%20RIDES%2C%20I%20want%20to%20book%20a%20car", "_blank")
    } else if (option.action === "call") {
      window.location.href = "tel:+919102430174"
    } else if (option.action === "email") {
      window.location.href = "mailto:vkrides.in@gmail.com"
    }
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      style={{
        backgroundColor: "#fff",
        padding: "40px 30px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: `2px solid ${option.color}20`,
      }}
    >
      <div style={{ color: option.color, marginBottom: "20px" }}>{getIcon(option.action)}</div>
      <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}>{option.title}</h3>
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "15px" }}>{option.description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "10px 20px",
          backgroundColor: option.color,
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {option.action === "razorpay" ? "Pay Now" : "Contact"}
      </motion.button>
    </motion.div>
  )
}
