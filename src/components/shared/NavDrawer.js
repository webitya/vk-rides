"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"

export default function NavDrawer({ isOpen, onClose }) {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919102430174?text=Hi%20VK%20RIDES%2C%20I%20want%20to%20book%20a%20car", "_blank")
    onClose()
  }

  const handleCall = () => {
    window.location.href = "tel:+919102430174"
    onClose()
  }

  const handleEmail = () => {
    window.location.href = "mailto:vkrides.in@gmail.com?subject=Car%20Booking%20Inquiry"
    onClose()
  }

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

              <div style={{ borderTop: "1px solid #333", paddingTop: "20px", marginTop: "20px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#aaa",
                    marginBottom: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Contact Us
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsApp}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    marginBottom: "10px",
                    backgroundColor: "#25D366",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <WhatsAppIcon style={{ fontSize: "20px" }} />
                  WhatsApp
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCall}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    marginBottom: "10px",
                    backgroundColor: "#1976D2",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <PhoneIcon style={{ fontSize: "20px" }} />
                  Call Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmail}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    backgroundColor: "#FF6B6B",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <EmailIcon style={{ fontSize: "20px" }} />
                  Email Us
                </motion.button>

                <p style={{ fontSize: "12px", color: "#aaa", marginTop: "15px", textAlign: "center" }}>
                  vkrides.in@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
