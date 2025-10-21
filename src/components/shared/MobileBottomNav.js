"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import HomeIcon from "@mui/icons-material/Home"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import InfoIcon from "@mui/icons-material/Info"
import ContactMailIcon from "@mui/icons-material/ContactMail"

export default function MobileBottomNav() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navItems = [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/cars", icon: DirectionsCarIcon, label: "Fleet" },
    { href: "/about", icon: InfoIcon, label: "About" },
    { href: "/contact", icon: ContactMailIcon, label: "Contact" },
  ]

  if (!isMobile) return null

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1a1a1a",
        borderTop: "1px solid #333",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0 20px",
        zIndex: 100,
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
              color: isActive ? "#6C63FF" : "#aaa",
              fontSize: "12px",
              padding: "10px 15px",
              transition: "color 0.3s",
            }}
          >
            <Icon style={{ fontSize: "24px" }} />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </motion.div>
  )
}
