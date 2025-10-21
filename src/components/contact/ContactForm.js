"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "grid", gap: "20px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#1a1a1a" }}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#1a1a1a" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#1a1a1a" }}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "inherit",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#1a1a1a" }}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              fontFamily: "inherit",
              boxSizing: "border-box",
              resize: "vertical",
            }}
          />
        </div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundColor: "#d4edda",
              color: "#155724",
              padding: "12px",
              borderRadius: "6px",
              textAlign: "center",
            }}
          >
            Message sent successfully!
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          style={{
            padding: "15px",
            backgroundColor: "#6C63FF",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  )
}
