"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import SearchIcon from "@mui/icons-material/Search"
import { carsData } from "@/data/cars"

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSearch = (value) => {
    setSearchQuery(value)

    if (value.trim().length > 0) {
      const filtered = carsData.filter(
        (car) =>
          car.name.toLowerCase().includes(value.toLowerCase()) ||
          car.category.toLowerCase().includes(value.toLowerCase()) ||
          car.description.toLowerCase().includes(value.toLowerCase()) ||
          car.features.some((feature) => feature.toLowerCase().includes(value.toLowerCase())),
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (carName) => {
    setSearchQuery(carName)
    setShowSuggestions(false)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "60px 20px",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #eee",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>
            Find Your Perfect Car
          </h2>
          <p style={{ fontSize: "16px", color: "#666" }}>Search from our wide range of vehicles</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: "flex",
            gap: "10px",
            maxWidth: "600px",
            margin: "0 auto",
            flexWrap: "wrap",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "250px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "12px 15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <SearchIcon style={{ color: "#999", marginRight: "10px" }} />
            <input
              type="text"
              placeholder="Search cars by name, type, or features..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => searchQuery && setShowSuggestions(true)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "14px",
                fontFamily: "inherit",
              }}
            />

            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  marginTop: "8px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  zIndex: 100,
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
              >
                {suggestions.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSuggestionClick(car.name)}
                    style={{
                      padding: "12px 15px",
                      borderBottom: index < suggestions.length - 1 ? "1px solid #f0f0f0" : "none",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                  >
                    <div style={{ fontSize: "14px", fontWeight: "500", color: "#1a1a1a", marginBottom: "4px" }}>
                      {car.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "#999" }}>
                      {car.category} • ₹{car.pricePerDay}/day
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {showSuggestions && suggestions.length === 0 && searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  marginTop: "8px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  zIndex: 100,
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "14px", color: "#999" }}>No cars found matching {searchQuery}</p>
              </motion.div>
            )}
          </div>

          <Link href={`/cars?search=${encodeURIComponent(searchQuery)}`} style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "12px 30px",
                backgroundColor: "#6C63FF",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Search
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
