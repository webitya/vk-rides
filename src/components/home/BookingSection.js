"use client"

import { motion } from "framer-motion"
import { bookingOptions } from "@/data/bookingOptions"
import BookingOptionCard from "@/components/booking/BookingOptionCard"

export default function BookingSection() {
  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>
            Book Your Car
          </h2>
          <p style={{ fontSize: "18px", color: "#666" }}>Choose your preferred booking method</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          {bookingOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <BookingOptionCard option={option} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
