"use client"

import { motion } from "framer-motion"
import StarIcon from "@mui/icons-material/Star"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Great service! The car was in perfect condition and the booking process was smooth.",
      rating: 5,
    },
    {
      name: "Priya Singh",
      text: "Affordable prices and excellent customer support. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      text: "Best car rental service in Jamshedpur. Will definitely book again.",
      rating: 4.5,
    },
  ]

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>
            What Our Customers Say
          </h2>
          <p style={{ fontSize: "18px", color: "#666" }}>Real reviews from real customers</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                backgroundColor: "#f8f9fa",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ display: "flex", gap: "5px", marginBottom: "15px" }}>
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <StarIcon key={i} style={{ color: "#FFB800", fontSize: "20px" }} />
                ))}
              </div>
              <p style={{ fontSize: "16px", color: "#555", marginBottom: "15px", fontStyle: "italic" }}>
                {testimonial.text}
              </p>
              <p style={{ fontSize: "16px", fontWeight: "bold", color: "#1a1a1a" }}>- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
