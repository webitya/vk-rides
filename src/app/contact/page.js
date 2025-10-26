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
        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}>Contact Us</h1>
          <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
            Get in touch with us for any queries or bookings
          </p>
        </motion.div>

        {/* Contact Info Cards */}
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
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>📍 Location</h3>
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

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Full-Width Google Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          width: "100%",
          marginTop: "60px",
          borderTop: "1px solid #ddd",
          backgroundColor: "#fff",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxHeight: "550px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.1049756800576!2d86.20790780000002!3d22.7985738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3acdb0c33a9%3A0x174d5c2e7b731b3!2svk%20rides%20self%20drive%20jamshedpur!5e0!3m2!1sen!2sin!4v1761472564562!5m2!1sen!2sin"
            width="100%"
            height="550"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  )
}
