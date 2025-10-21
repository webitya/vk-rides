"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import NavDrawer from "./NavDrawer"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#1a1a1a",
          color: "#fff",
          padding: "15px 20px",
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "1px" }}>VK RIDES</div>
          </Link>

          {/* Desktop Menu */}
          <div
            style={{
              display: "none",
              "@media (min-width: 768px)": { display: "flex" },
              gap: "30px",
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              style={{ textDecoration: "none", color: "#fff", fontSize: "16px", transition: "color 0.3s" }}
            >
              Home
            </Link>
            <Link
              href="/cars"
              style={{ textDecoration: "none", color: "#fff", fontSize: "16px", transition: "color 0.3s" }}
            >
              Our Fleet
            </Link>
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "#fff", fontSize: "16px", transition: "color 0.3s" }}
            >
              About
            </Link>
            <Link
              href="/contact"
              style={{ textDecoration: "none", color: "#fff", fontSize: "16px", transition: "color 0.3s" }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.nav>

      <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}
