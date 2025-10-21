"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: "url(/placeholder.svg?height=600&width=1200&query=luxury car on road sunset)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "#fff",
          maxWidth: "800px",
          padding: "20px",
        }}
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: "bold", marginBottom: "20px", lineHeight: "1.2" }}
        >
          Premium Self-Drive Car Rental
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ fontSize: "clamp(16px, 4vw, 24px)", marginBottom: "40px", color: "#e0e0e0" }}
        >
          Experience the freedom of driving your own car in Jamshedpur
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link href="/cars" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "15px 40px",
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "#6C63FF",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Browse Fleet
            </motion.button>
          </Link>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "15px 40px",
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
