"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function NavDrawer({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 999,
            }}
          />
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "280px",
              height: "100vh",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              zIndex: 1000,
              padding: "80px 20px 20px",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Link href="/" onClick={onClose} style={{ textDecoration: "none", color: "#fff", fontSize: "18px" }}>
                Home
              </Link>
              <Link href="/cars" onClick={onClose} style={{ textDecoration: "none", color: "#fff", fontSize: "18px" }}>
                Our Fleet
              </Link>
              <Link href="/about" onClick={onClose} style={{ textDecoration: "none", color: "#fff", fontSize: "18px" }}>
                About
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                style={{ textDecoration: "none", color: "#fff", fontSize: "18px" }}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
