"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation"
import SpeedIcon from "@mui/icons-material/Speed"
import StarIcon from "@mui/icons-material/Star"

export default function CarCard({ car }) {
  return (
    <Link href={`/cars/${car.slug}`} style={{ textDecoration: "none" }}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ position: "relative", height: "250px", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
          <img
            src={car.image || "/placeholder.svg"}
            alt={car.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#6C63FF",
              color: "#fff",
              padding: "5px 15px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {car.category}
          </div>
        </div>

        <div style={{ padding: "20px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}>{car.name}</h3>

          <div style={{ display: "flex", gap: "5px", marginBottom: "15px" }}>
            {[...Array(Math.floor(car.rating))].map((_, i) => (
              <StarIcon key={i} style={{ color: "#FFB800", fontSize: "16px" }} />
            ))}
            <span style={{ fontSize: "14px", color: "#666", marginLeft: "5px" }}>({car.reviews})</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "15px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <DirectionsCarIcon style={{ fontSize: "18px" }} />
              <span>{car.seating} Seater</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <LocalGasStationIcon style={{ fontSize: "18px" }} />
              <span>{car.fuelType}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <SpeedIcon style={{ fontSize: "18px" }} />
              <span>{car.mileage}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span>{car.transmission}</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "15px",
              borderTop: "1px solid #eee",
            }}
          >
            <div>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "5px" }}>From</p>
              <p style={{ fontSize: "24px", fontWeight: "bold", color: "#6C63FF" }}>₹{car.pricePerDay}</p>
              <p style={{ fontSize: "12px", color: "#999" }}>per day</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "10px 20px",
                backgroundColor: "#6C63FF",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              View Details
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
