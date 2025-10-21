"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/contact/ContactForm"

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "80px" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}>Contact Us</h1>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
            Get in touch with us for any queries or bookings
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>
              📍 Location
            </h3>
            <p style={{ fontSize: "16px", color: "#666" }}>Jamshedpur, Jharkhand, India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>📧 Email</h3>
            <p style={{ fontSize: "16px", color: "#666" }}>vkrides.in@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>📱 Phone</h3>
            <p style={{ fontSize: "16px", color: "#666" }}>+91 9102430174</p>
          </motion.div>
        </div>

        <ContactForm />
      </div>
    </motion.div>
  )
}
