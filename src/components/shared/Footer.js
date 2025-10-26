"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "60px 20px 20px",
        marginTop: "80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>VK RIDES</h3>
            <p style={{ fontSize: "14px", color: "#aaa", lineHeight: "1.8" }}>
              Premium self-drive car rental service in Jamshedpur. Your trusted partner for affordable and reliable car
              rentals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/" style={{ textDecoration: "none", color: "#aaa", fontSize: "14px", transition: "color 0.3s" }}>
                Home
              </Link>
              <Link href="/cars" style={{ textDecoration: "none", color: "#aaa", fontSize: "14px", transition: "color 0.3s" }}>
                Our Fleet
              </Link>
              <Link href="/about" style={{ textDecoration: "none", color: "#aaa", fontSize: "14px", transition: "color 0.3s" }}>
                About Us
              </Link>
              <Link href="/contact" style={{ textDecoration: "none", color: "#aaa", fontSize: "14px", transition: "color 0.3s" }}>
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>Legal</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/terms" style={{ textDecoration: "none", color: "#aaa", fontSize: "14px", transition: "color 0.3s" }}>
                Terms & Conditions
              </Link>
              <Link href="/privacy" style={{ textDecoration: "none", color: "#aaa", fontSize: "14px", transition: "color 0.3s" }}>
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>Contact</h3>
            <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "10px" }}>📧 vkrides.in@gmail.com</p>
            <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "10px" }}>📱 +91 9102430174</p>
            <p style={{ fontSize: "14px", color: "#aaa" }}>📍 Jamshedpur, Jharkhand</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>Follow Us</h3>
            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="https://www.instagram.com/vkridesselfdrivecar?igsh=MWtmYmIxbXBqNm5ocw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", transition: "color 0.3s", cursor: "pointer" }}
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/vkridesselfdrivecar?igsh=MWtmYmIxbXBqNm5ocw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", transition: "color 0.3s", cursor: "pointer" }}
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.instagram.com/vkridesselfdrivecar?igsh=MWtmYmIxbXBqNm5ocw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", transition: "color 0.3s", cursor: "pointer" }}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.instagram.com/vkridesselfdrivecar?igsh=MWtmYmIxbXBqNm5ocw=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#aaa", transition: "color 0.3s", cursor: "pointer" }}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #333",
            paddingTop: "20px",
            textAlign: "center",
            color: "#aaa",
            fontSize: "14px",
          }}
        >
          <p>&copy; 2025 VK RIDES SELF DRIVE CAR. All rights reserved. | www.vkridesselfdrivecar.in</p>
        </div>
      </div>
    </motion.footer>
  )
}
