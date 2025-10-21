"use client"

import { motion } from "framer-motion"

export default function CarFilter({ categories, selectedCategory, onFilter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "30px" }}
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilter(category)}
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
            backgroundColor: selectedCategory === category ? "#6C63FF" : "#fff",
            color: selectedCategory === category ? "#fff" : "#1a1a1a",
            boxShadow:
              selectedCategory === category ? "0 4px 12px rgba(108, 99, 255, 0.3)" : "0 2px 8px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}
