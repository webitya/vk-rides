"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { carsData } from "@/data/cars"
import CarCard from "@/components/cars/CarCard"

export default function CarsPreview() {
  const featuredCars = carsData.slice(0, 3)

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
            Featured Vehicles
          </h2>
          <p style={{ fontSize: "18px", color: "#666" }}>Check out our most popular cars</p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
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
              View All Cars
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
