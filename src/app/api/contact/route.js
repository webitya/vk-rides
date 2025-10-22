"use client"

import { motion } from "framer-motion"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import ContactForm from "@/components/contact/ContactForm"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <LocationOnIcon style={{ fontSize: "32px", color: "#6C63FF" }} />,
      title: "Location",
      details: "Jamshedpur, Jharkhand, India",
      subtext: "Serving the entire Jamshedpur region",
    },
    {
      icon: <EmailIcon style={{ fontSize: "32px", color: "#6C63FF" }} />,
      title: "Email",
      details: "vkrides.in@gmail.com",
      subtext: "Response within 2 hours",
    },
    {
      icon: <PhoneIcon style={{ fontSize: "32px", color: "#6C63FF" }} />,
      title: "Phone",
      details: "+91 9102430174",
      subtext: "Available 24/7",
    },
    {
      icon: <AccessTimeIcon style={{ fontSize: "32px", color: "#6C63FF" }} />,
      title: "Hours",
      details: "24/7 Available",
      subtext: "Round the clock service",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "80px" }}
    >
      {/* Hero Section */}
      <div style={{ backgroundColor: "#6C63FF", color: "#fff", padding: "60px 20px", textAlign: "center" }}>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: "bold", marginBottom: "16px" }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}
        >
          Have questions? We are here to help. Contact us anytime!
        </motion.p>
      </div>

      {/* Contact Info Cards */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {contactInfo.map((info, index) => (
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
                border: "1px solid #e0e0e0",
              }}
            >
              <div style={{ marginBottom: "16px" }}>{info.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#1a1a1a" }}>
                {info.title}
              </h3>
              <p style={{ fontSize: "16px", fontWeight: "bold", color: "#6C63FF", marginBottom: "4px" }}>
                {info.details}
              </p>
              <p style={{ fontSize: "13px", color: "#999", margin: "0" }}>{info.subtext}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "30px",
              color: "#1a1a1a",
              textAlign: "center",
            }}
          >
            Send us a Message
          </h2>
          <ContactForm />
        </motion.div>

        {/* FAQ Section */}
        <div style={{ marginTop: "60px" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "30px",
              color: "#1a1a1a",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              {
                q: "What documents do I need to book a car?",
                a: "Valid driving license, ID proof, and credit card for booking confirmation.",
              },
              { q: "Can I cancel my booking?", a: "Yes, free cancellation up to 24 hours before pickup." },
              { q: "Is insurance included?", a: "Yes, comprehensive insurance is included in all bookings." },
              {
                q: "What is your minimum rental period?",
                a: "Minimum rental period is 24 hours. Hourly rentals available on request.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #e0e0e0",
                }}
              >
                <h4 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px", color: "#1a1a1a" }}>{faq.q}</h4>
                <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
