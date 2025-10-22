"use client"

import { motion } from "framer-motion"
import SearchIcon from "@mui/icons-material/Search"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import PaymentIcon from "@mui/icons-material/Payment"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      icon: <SearchIcon style={{ fontSize: "32px", color: "#fff" }} />,
      title: "Browse Cars",
      description: "Explore our fleet of premium vehicles",
    },
    {
      number: "2",
      icon: <BookmarkIcon style={{ fontSize: "32px", color: "#fff" }} />,
      title: "Select & Book",
      description: "Choose your preferred car and dates",
    },
    {
      number: "3",
      icon: <PaymentIcon style={{ fontSize: "32px", color: "#fff" }} />,
      title: "Make Payment",
      description: "Secure payment through multiple options",
    },
    {
      number: "4",
      icon: <DirectionsCarIcon style={{ fontSize: "32px", color: "#fff" }} />,
      title: "Enjoy Ride",
      description: "Pick up your car and start your journey",
    },
  ]

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
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
            Simple Booking Process
          </h2>
          <p style={{ fontSize: "16px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
            Get your dream car in just 4 easy steps
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            position: "relative",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                textAlign: "center",
              }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: "calc(50% + 40px)",
                    right: "-50%",
                    height: "2px",
                    backgroundColor: "#6C63FF",
                    display: window.innerWidth > 768 ? "block" : "none",
                  }}
                />
              )}

              {/* Step Circle */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "linear-gradient(135deg, #6C63FF 0%, #5a52d5 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 4px 12px rgba(108, 99, 255, 0.3)",
                }}
              >
                {step.icon}
              </div>

              {/* Step Content */}
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#1a1a1a" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
