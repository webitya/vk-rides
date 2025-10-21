"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "80px 20px",
        backgroundColor: "#6C63FF",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px" }}
        >
          Subscribe to Our Newsletter
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ fontSize: "16px", marginBottom: "30px", color: "#e0e0e0" }}
        >
          Get exclusive offers and updates about our latest cars and promotions
        </motion.p>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              minWidth: "200px",
              padding: "12px 15px",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "inherit",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              padding: "12px 30px",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Subscribe
          </motion.button>
        </motion.form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginTop: "15px", color: "#e0e0e0", fontSize: "14px" }}
          >
            ✓ Thank you for subscribing!
          </motion.p>
        )}
      </div>
    </motion.section>
  )
}
