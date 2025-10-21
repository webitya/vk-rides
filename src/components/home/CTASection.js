"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: "url(/placeholder.svg?height=400&width=1200&query=modern car interior dashboard)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          color: "#fff",
        }}
      >
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Ready to Drive?
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ fontSize: "18px", marginBottom: "30px", color: "#e0e0e0" }}
        >
          Book your car today and experience the freedom of self-drive travel
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
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
              Book Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
