"use client"

import { motion } from "framer-motion"
import SecurityIcon from "@mui/icons-material/Security"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <SecurityIcon style={{ fontSize: "40px", color: "#6C63FF" }} />,
      title: "Comprehensive Insurance",
      description: "Full coverage protection for your peace of mind",
    },
    {
      icon: <LocalOfferIcon style={{ fontSize: "40px", color: "#6C63FF" }} />,
      title: "Best Prices",
      description: "Competitive rates with no hidden charges",
    },
    {
      icon: <SupportAgentIcon style={{ fontSize: "40px", color: "#6C63FF" }} />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
    {
      icon: <FlightTakeoffIcon style={{ fontSize: "40px", color: "#6C63FF" }} />,
      title: "Flexible Booking",
      description: "Multiple booking options for your convenience",
    },
    {
      icon: <CreditCardIcon style={{ fontSize: "40px", color: "#6C63FF" }} />,
      title: "Easy Payment",
      description: "Secure online payment and multiple options",
    },
    {
      icon: <ThumbUpIcon style={{ fontSize: "40px", color: "#6C63FF" }} />,
      title: "Quality Fleet",
      description: "Well-maintained modern vehicles",
    },
  ]

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2
            style={{ fontSize: "clamp(28px, 6vw, 40px)", fontWeight: "bold", marginBottom: "16px", color: "#1a1a1a" }}
          >
            Why Choose VK RIDES?
          </h2>
          <p style={{ fontSize: "16px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            Experience the best self-drive car rental service with our premium benefits
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: "#f8f9fa",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ marginBottom: "16px" }}>{benefit.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#1a1a1a" }}>
                {benefit.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
