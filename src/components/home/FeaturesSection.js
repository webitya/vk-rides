"use client"

import { motion } from "framer-motion"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"

export default function FeaturesSection() {
  const features = [
    {
      icon: DirectionsCarIcon,
      title: "Wide Fleet",
      description: "Choose from our diverse range of well-maintained vehicles",
    },
    {
      icon: LocalOfferIcon,
      title: "Best Prices",
      description: "Competitive rates with transparent pricing",
    },
    {
      icon: VerifiedUserIcon,
      title: "Verified Cars",
      description: "All vehicles are regularly serviced and insured",
    },
    {
      icon: SupportAgentIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support for your peace of mind",
    },
  ]

  return (
    <section style={{ padding: "80px 20px", backgroundColor: "#f8f9fa" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "15px", color: "#1a1a1a" }}>
            Why Choose VK RIDES?
          </h2>
          <p style={{ fontSize: "18px", color: "#666" }}>We provide the best car rental experience in Jamshedpur</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{
                  backgroundColor: "#fff",
                  padding: "40px 30px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ y: -10, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              >
                <div style={{ fontSize: "48px", marginBottom: "20px", color: "#6C63FF" }}>
                  <Icon style={{ fontSize: "48px" }} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#1a1a1a" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "16px", color: "#666" }}>{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
