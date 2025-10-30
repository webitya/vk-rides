"use client"
import { motion } from "framer-motion"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import PeopleIcon from "@mui/icons-material/People"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import VerifiedIcon from "@mui/icons-material/Verified"

export default function AboutPage() {
  const values = [
    {
      icon: <VerifiedIcon style={{ fontSize: "32px", color: "#6C63FF" }} />,
      title: "Reliability",
      desc: "Dependable service you can trust",
    },
    {
      icon: <PeopleIcon style={{ fontSize: "32px", color: "#6C63FF" }} />,
      title: "Customer First",
      desc: "Your satisfaction is our priority",
    },
    {
      icon: <DirectionsCarIcon style={{ fontSize: "32px", color: "#6C63FF" }} />,
      title: "Quality Fleet",
      desc: "Well-maintained modern vehicles",
    },
    {
      icon: <EmojiEventsIcon style={{ fontSize: "32px", color: "#6C63FF" }} />,
      title: "Excellence",
      desc: "Best service in the industry",
    },
  ]

  const achievements = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Premium Cars" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        paddingTop: "80px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          backgroundColor: "#6C63FF",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Car on Rent in Jamshedpur – About VK RIDES
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          VK RIDES offers premium <strong>self drive car rental in Jamshedpur</strong> with flexible booking options,
          affordable pricing, and reliable service. Rent your favorite car easily and explore the city on your own terms.
        </motion.p>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        {/* Mission & Vision */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            marginBottom: "60px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "16px",
                color: "#1a1a1a",
              }}
            >
              Our Mission
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555" }}>
              To provide affordable, reliable, and hassle-free <strong>self-drive car rental</strong> solutions that empower
              travelers to explore Jamshedpur and beyond at their own pace. We believe in making premium car rental
              accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "16px",
                color: "#1a1a1a",
              }}
            >
              Our Vision
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555" }}>
              To become the most trusted and preferred <strong>car rental service in Jamshedpur</strong>, known for
              exceptional customer service, quality vehicles, and innovative booking solutions that make travel convenient
              and enjoyable.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "40px",
              color: "#1a1a1a",
              textAlign: "center",
            }}
          >
            Our Core Values
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: "#fff",
                  padding: "30px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ marginBottom: "16px" }}>{value.icon}</div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    color: "#1a1a1a",
                  }}
                >
                  {value.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#666" }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEO Section */}
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "40px 20px",
            borderRadius: "12px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "16px",
              color: "#1a1a1a",
            }}
          >
            Car on Rent & Self Drive Car Rental in Jamshedpur
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Whether you're a local resident or visiting the city, VK RIDES and{" "}
            <strong>VK Self Ride Car Rental Jharkhand</strong> provide the best options for{" "}
            <strong>car on rent in Jamshedpur</strong> and{" "}
            <strong>affordable self drive cars in Jamshedpur</strong>. Choose from a wide range of vehicles, enjoy 24/7
            support, and experience smooth, reliable, and comfortable rides across Jharkhand.
          </p>
        </div>

        {/* Achievements */}
        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "40px",
              color: "#1a1a1a",
              textAlign: "center",
            }}
          >
            Our Achievements
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
            }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: "linear-gradient(135deg, #f8f9fa 0%, #eaeaea 100%)",
                  color: "#000",
                  padding: "40px 20px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(28px, 6vw, 48px)",
                    fontWeight: "bold",
                    margin: "0 0 8px 0",
                    color: "#000",
                  }}
                >
                  {achievement.number}
                </p>
                <p style={{ fontSize: "16px", margin: "0", color: "#333" }}>{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "24px",
              color: "#1a1a1a",
            }}
          >
            Why Choose VK RIDES?
          </h2>
          <ul
            style={{
              fontSize: "16px",
              lineHeight: "2",
              color: "#555",
              paddingLeft: "20px",
            }}
          >
            <li>Wide selection of well-maintained vehicles</li>
            <li>Competitive and transparent pricing</li>
            <li>24/7 customer support and assistance</li>
            <li>Flexible booking options (online, WhatsApp, email, call)</li>
            <li>Comprehensive insurance coverage</li>
            <li>No hidden charges or surprise fees</li>
            <li>Free cancellation policy</li>
            <li>Professional and courteous staff</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
