"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "80px" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "30px", color: "#1a1a1a" }}>
            About VK RIDES
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            VK RIDES SELF DRIVE CAR is a premium car rental service based in Jamshedpur, dedicated to providing
            affordable and reliable self-drive car rental solutions.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }}>
            With a fleet of well-maintained vehicles and flexible booking options, we ensure that your travel experience
            is smooth and hassle-free.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#555" }}>
            Our mission is to make self-drive car rental accessible to everyone, whether you're traveling for business
            or leisure.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
