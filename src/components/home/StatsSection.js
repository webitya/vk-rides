"use client"

import { motion } from "framer-motion"
import CountUp from "@/components/utils/CountUp"

export default function StatsSection() {
  const stats = [
    { label: "Happy Customers", value: 500 },
    { label: "Cars Available", value: 50 },
    { label: "Years Experience", value: 5 },
    { label: "Bookings Completed", value: 1200 },
  ]

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#1a1a1a", color: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <div style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "10px", color: "#6C63FF" }}>
                <CountUp end={stat.value} />+
              </div>
              <p style={{ fontSize: "16px", color: "#aaa" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
