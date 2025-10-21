"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What documents do I need to rent a car?",
      answer: "You need a valid driving license, ID proof, and a credit card for security deposit.",
    },
    {
      question: "What is the minimum age to rent a car?",
      answer: "The minimum age is 21 years with a valid driving license.",
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel up to 24 hours before pickup for a full refund.",
    },
    {
      question: "Is fuel included in the rental price?",
      answer: "No, fuel is not included. You need to return the car with a full tank.",
    },
    {
      question: "What if the car breaks down?",
      answer: "We provide 24/7 roadside assistance. Call us immediately and we will help.",
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, all charges are transparent and mentioned upfront. No hidden fees.",
    },
  ]

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "18px", color: "#666" }}>
            Find answers to common questions about our car rental service
          </p>
        </motion.div>

        <div style={{ display: "grid", gap: "15px" }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #eee",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: "100%",
                  padding: "20px",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#1a1a1a", margin: 0 }}>{faq.question}</h3>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ExpandMoreIcon style={{ color: "#6C63FF" }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      borderTop: "1px solid #eee",
                      overflow: "hidden",
                    }}
                  >
                    <p style={{ padding: "20px", margin: 0, color: "#666", fontSize: "16px", lineHeight: "1.6" }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
