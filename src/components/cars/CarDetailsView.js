"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import StarIcon from "@mui/icons-material/Star"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation"
import SpeedIcon from "@mui/icons-material/Speed"
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra"
import LuggageIcon from "@mui/icons-material/Luggage"

export default function CarDetailsView({ car, onBookClick }) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div style={{ height: "90vh", display: "flex", flexDirection: "column", backgroundColor: "#f8f9fa" }}>
      <div style={{ padding: "16px 20px", borderBottom: "1px solid #e0e0e0", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: "0 0 4px 0", color: "#1a1a1a" }}>{car.name}</h1>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              {[...Array(Math.floor(car.rating))].map((_, i) => (
                <StarIcon key={i} style={{ color: "#FFB800", fontSize: "16px" }} />
              ))}
              <span style={{ fontSize: "12px", color: "#666", marginLeft: "6px" }}>
                {car.rating} ({car.reviews})
              </span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "12px", color: "#999", margin: "0 0 4px 0" }}>Price per day</p>
            <p style={{ fontSize: "28px", fontWeight: "bold", color: "#6C63FF", margin: "0" }}>₹{car.pricePerDay}</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "16px 20px" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
            height: "100%",
          }}
        >
          {/* Left: Image Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: "8px" }}>
              <div
                style={{
                  flex: 1,
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  border: "1px solid #e0e0e0",
                }}
              >
                <img
                  src={car.images[selectedImage] || "/placeholder.svg"}
                  alt={car.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
                {car.images.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                    style={{
                      cursor: "pointer",
                      borderRadius: "6px",
                      overflow: "hidden",
                      border: selectedImage === index ? "2px solid #6C63FF" : "1px solid #ddd",
                      height: "60px",
                    }}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${car.name} ${index}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Middle: Specs and Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%", overflowY: "auto" }}>
              {/* Description */}
              <div
                style={{ backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #e0e0e0" }}
              >
                <p style={{ fontSize: "13px", color: "#666", margin: "0", lineHeight: "1.4" }}>{car.description}</p>
              </div>

              {/* Quick Specs */}
              <div
                style={{ backgroundColor: "#fff", padding: "12px", borderRadius: "8px", border: "1px solid #e0e0e0" }}
              >
                <h4
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    margin: "0 0 8px 0",
                    color: "#1a1a1a",
                    textTransform: "uppercase",
                  }}
                >
                  Specs
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                    <AirlineSeatReclineExtraIcon style={{ fontSize: "16px", color: "#6C63FF" }} />
                    <span>{car.seating} Seats</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                    <LocalGasStationIcon style={{ fontSize: "16px", color: "#6C63FF" }} />
                    <span>{car.fuelType}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                    <DirectionsCarIcon style={{ fontSize: "16px", color: "#6C63FF" }} />
                    <span>{car.transmission}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                    <SpeedIcon style={{ fontSize: "16px", color: "#6C63FF" }} />
                    <span>{car.mileage}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                    <LuggageIcon style={{ fontSize: "16px", color: "#6C63FF" }} />
                    <span>{car.luggage} Bags</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e0e0e0",
                  flex: 1,
                }}
              >
                <h4
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    margin: "0 0 8px 0",
                    color: "#1a1a1a",
                    textTransform: "uppercase",
                  }}
                >
                  Features
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#555" }}
                    >
                      <span style={{ color: "#6C63FF", fontWeight: "bold", fontSize: "10px" }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Booking Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%" }}>
              {/* Pricing Card */}
              <div
                style={{
                  backgroundColor: "linear-gradient(135deg, #6C63FF 0%, #5a52d5 100%)",
                  padding: "16px",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              >
                <p style={{ fontSize: "11px", margin: "0 0 4px 0", opacity: 0.9 }}>DAILY RATE</p>
                <p style={{ fontSize: "32px", fontWeight: "bold", margin: "0 0 8px 0" }}>₹{car.pricePerDay}</p>
                <p style={{ fontSize: "11px", margin: "0", opacity: 0.8 }}>Unlimited kilometers</p>
              </div>

              {/* Booking Info */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e0e0e0",
                  flex: 1,
                }}
              >
                <h4 style={{ fontSize: "12px", fontWeight: "bold", margin: "0 0 8px 0", color: "#1a1a1a" }}>
                  Why Book With Us?
                </h4>
                <ul style={{ margin: "0", padding: "0 0 0 16px", fontSize: "11px", color: "#666", lineHeight: "1.6" }}>
                  <li>24/7 Customer Support</li>
                  <li>Free Cancellation</li>
                  <li>Comprehensive Insurance</li>
                  <li>No Hidden Charges</li>
                  <li>Flexible Booking Options</li>
                </ul>
              </div>

              {/* Book Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookClick}
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "#6C63FF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Book This Car
              </motion.button>

              {/* Contact Info */}
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "10px",
                  borderRadius: "6px",
                  textAlign: "center",
                  fontSize: "10px",
                  color: "#666",
                }}
              >
                <p style={{ margin: "0 0 4px 0" }}>Need Help?</p>
                <p style={{ margin: "0", fontWeight: "bold" }}>📞 9102430174</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
