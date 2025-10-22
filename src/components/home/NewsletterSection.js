"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.")
      setTimeout(() => setError(""), 5000)
    } finally {
      setLoading(false)
    }
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
            disabled={loading}
            style={{
              flex: 1,
              minWidth: "200px",
              padding: "12px 15px",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "inherit",
              opacity: loading ? 0.7 : 1,
            }}
          />
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            type="submit"
            disabled={loading}
            style={{
              padding: "12px 30px",
              backgroundColor: loading ? "#999" : "#1a1a1a",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.form>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              marginTop: "15px",
              padding: "12px 15px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "6px",
              fontSize: "14px",
              color: "#e0e0e0",
            }}
          >
            ✓ Thank you for subscribing! Check your email for a welcome message.
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              marginTop: "15px",
              padding: "12px 15px",
              backgroundColor: "rgba(255, 100, 100, 0.3)",
              borderRadius: "6px",
              fontSize: "14px",
              color: "#ffcccc",
            }}
          >
            ✗ {error}
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
