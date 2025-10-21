"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useSearchParams, useRouter } from "next/navigation"
import { carsData } from "@/data/cars"
import CarCard from "@/components/cars/CarCard"
import CarFilter from "@/components/cars/CarFilter"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"

export default function CarsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialSearch = searchParams.get("search") || ""

  const [filteredCars, setFilteredCars] = useState(carsData)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    let filtered = carsData

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((car) => car.category === selectedCategory)
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (car) =>
          car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    setFilteredCars(filtered)
  }, [selectedCategory, searchQuery])

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.trim()) {
      const filtered = carsData.filter(
        (car) =>
          car.name.toLowerCase().includes(value.toLowerCase()) ||
          car.category.toLowerCase().includes(value.toLowerCase()) ||
          car.features.some((feature) => feature.toLowerCase().includes(value.toLowerCase())),
      )
      setSuggestions(filtered.slice(0, 5))
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (car) => {
    setSearchQuery(car.name)
    setShowSuggestions(false)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    setSuggestions([])
    setShowSuggestions(false)
  }

  const handleFilter = (category) => {
    setSelectedCategory(category)
  }

  const categories = ["All", ...new Set(carsData.map((car) => car.category))]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}>Our Fleet</h1>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "30px" }}>
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : "Choose from our wide range of premium self-drive cars"}
          </p>
        </motion.div>

        {/* Powerful Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            position: "relative",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "12px",
              border: "2px solid #e0e0e0",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#6C63FF"
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(108, 99, 255, 0.15)"
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#e0e0e0"
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"
            }}
          >
            <SearchIcon style={{ fontSize: "20px", color: "#999", marginLeft: "14px" }} />
            <input
              type="text"
              placeholder="Search by car name, category, or features..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery && setShowSuggestions(true)}
              style={{
                flex: 1,
                padding: "12px 14px",
                border: "none",
                fontSize: "14px",
                fontFamily: "inherit",
                outline: "none",
              }}
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#999",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#666")}
                onMouseLeave={(e) => (e.target.style.color = "#999")}
              >
                <CloseIcon style={{ fontSize: "18px" }} />
              </button>
            )}
          </div>

          {/* Search Suggestions Dropdown */}
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
                borderRadius: "0 0 12px 12px",
                border: "2px solid #6C63FF",
                borderTop: "none",
                marginTop: "-2px",
                zIndex: 100,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            >
              {suggestions.map((car, index) => (
                <motion.button
                  key={car.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleSuggestionClick(car)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "none",
                    backgroundColor: index === 0 ? "#f8f9fa" : "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                    borderBottom: index < suggestions.length - 1 ? "1px solid #f0f0f0" : "none",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = index === 0 ? "#f8f9fa" : "#fff")}
                >
                  <SearchIcon style={{ fontSize: "16px", color: "#999" }} />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#1a1a1a" }}>{car.name}</div>
                    <div style={{ fontSize: "11px", color: "#999" }}>
                      {car.category} • ₹{car.pricePerDay}/day
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </motion.div>

        <CarFilter categories={categories} selectedCategory={selectedCategory} onFilter={handleFilter} />

        {filteredCars.length > 0 ? (
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: "center",
              padding: "60px 20px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              marginTop: "40px",
            }}
          >
            <p style={{ fontSize: "16px", color: "#999" }}>No cars found matching your search criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
