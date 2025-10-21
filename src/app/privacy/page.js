"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "80px" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "30px", color: "#1a1a1a" }}>
            Privacy Policy
          </h1>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              1. Information We Collect
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              We collect personal information such as name, email, phone number, and driving license details for booking
              purposes.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              2. How We Use Your Information
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              Your information is used to process bookings, send confirmations, and provide customer support. We do not
              share your information with third parties.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              3. Data Security
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              We implement industry-standard security measures to protect your personal information from unauthorized
              access.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              4. Cookies
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser
              settings.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              5. Contact Us
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              If you have any questions about our privacy policy, please contact us at vkrides.in@gmail.com or +91
              9102430174.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#999",
                marginTop: "40px",
                paddingTop: "20px",
                borderTop: "1px solid #eee",
              }}
            >
              Last updated: January 2025
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
