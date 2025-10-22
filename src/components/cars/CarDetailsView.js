"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import StarIcon from "@mui/icons-material/Star"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation"
import SpeedIcon from "@mui/icons-material/Speed"
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra"
import LuggageIcon from "@mui/icons-material/Luggage"
import CloseIcon from "@mui/icons-material/Close"

export default function CarDetailsView({ car, onBookClick }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isMobile = isMounted && typeof window !== "undefined" && window.innerWidth < 768

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "60px" }}>
      {/* Header */}
      <div
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "#fff",
          position: "sticky",
          top: "60px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div>
            <h1
              style={{ fontSize: "clamp(18px, 5vw, 28px)", fontWeight: "bold", margin: "0 0 4px 0", color: "#1a1a1a" }}
            >
              {car.name}
            </h1>
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
            <p style={{ fontSize: "clamp(20px, 5vw, 28px)", fontWeight: "bold", color: "#6C63FF", margin: "0" }}>
              ₹{car.pricePerDay}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {/* Left: Image Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  border: "1px solid #e0e0e0",
                  aspectRatio: "16/9",
                  cursor: "pointer",
                }}
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={car.images[selectedImage] || "/placeholder.svg"}
                  alt={car.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))", gap: "8px" }}>
                {car.images.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                    style={{
                      cursor: "pointer",
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: selectedImage === index ? "3px solid #6C63FF" : "1px solid #ddd",
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
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Description */}
              <div
                style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e0e0e0" }}
              >
                <p style={{ fontSize: "14px", color: "#666", margin: "0", lineHeight: "1.6" }}>{car.description}</p>
              </div>

              {/* Quick Specs */}
              <div
                style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e0e0e0" }}
              >
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    margin: "0 0 12px 0",
                    color: "#1a1a1a",
                    textTransform: "uppercase",
                  }}
                >
                  Specifications
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                    <AirlineSeatReclineExtraIcon style={{ fontSize: "18px", color: "#6C63FF" }} />
                    <span>{car.seating} Seats</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                    <LocalGasStationIcon style={{ fontSize: "18px", color: "#6C63FF" }} />
                    <span>{car.fuelType}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                    <DirectionsCarIcon style={{ fontSize: "18px", color: "#6C63FF" }} />
                    <span>{car.transmission}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                    <SpeedIcon style={{ fontSize: "18px", color: "#6C63FF" }} />
                    <span>{car.mileage}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                    <LuggageIcon style={{ fontSize: "18px", color: "#6C63FF" }} />
                    <span>{car.luggage} Bags</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div
                style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e0e0e0" }}
              >
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    margin: "0 0 12px 0",
                    color: "#1a1a1a",
                    textTransform: "uppercase",
                  }}
                >
                  Features
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#555" }}
                    >
                      <span style={{ color: "#6C63FF", fontWeight: "bold" }}>✓</span>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                position: isMobile ? "relative" : "sticky",
                top: isMobile ? "auto" : "100px",
              }}
            >
              {/* Pricing Card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #6C63FF 0%, #5a52d5 100%)",
                  padding: "20px",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              >
                <p style={{ fontSize: "12px", margin: "0 0 6px 0", opacity: 0.9 }}>DAILY RATE</p>
                <p style={{ fontSize: "clamp(24px, 6vw, 36px)", fontWeight: "bold", margin: "0 0 10px 0" }}>
                  ₹{car.pricePerDay}
                </p>
                <p style={{ fontSize: "12px", margin: "0", opacity: 0.8 }}>Unlimited kilometers included</p>
              </div>

              {/* Booking Info */}
              <div
                style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e0e0e0" }}
              >
                <h4 style={{ fontSize: "13px", fontWeight: "bold", margin: "0 0 12px 0", color: "#1a1a1a" }}>
                  Why Book With Us?
                </h4>
                <ul style={{ margin: "0", padding: "0 0 0 18px", fontSize: "12px", color: "#666", lineHeight: "1.8" }}>
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
                  padding: "16px",
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
                  padding: "12px",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontSize: "11px",
                  color: "#666",
                }}
              >
                <p style={{ margin: "0 0 4px 0" }}>Need Help?</p>
                <p style={{ margin: "0", fontWeight: "bold", fontSize: "13px" }}>📞 9102430174</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
          >
            <img
              src={car.images[selectedImage] || "/placeholder.svg"}
              alt={car.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "8px" }}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 1001,
              }}
            >
              <CloseIcon />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
