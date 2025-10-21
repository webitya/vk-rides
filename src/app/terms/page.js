"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "80px" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 20px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "30px", color: "#1a1a1a" }}>
            Terms & Conditions
          </h1>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              1. Rental Agreement
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              By renting a car from VK RIDES, you agree to these terms and conditions. The renter must be at least 21
              years old with a valid driving license.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              2. Payment Terms
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              Payment must be made in full at the time of booking. A security deposit is required and will be refunded
              after the rental period.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              3. Cancellation Policy
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              Cancellations made 24 hours before pickup are eligible for a full refund. Cancellations within 24 hours
              will incur a 50% cancellation fee.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              4. Vehicle Condition
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              The renter is responsible for any damage to the vehicle during the rental period. The vehicle must be
              returned in the same condition as received.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              5. Fuel Policy
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              The vehicle must be returned with a full tank of fuel. If not, a fuel charge will be applied.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              6. Insurance
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              All vehicles are insured. However, the renter is responsible for the deductible in case of an accident.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              7. Late Return
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              Late returns will be charged at ₹500 per hour or part thereof.
            </p>

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "30px",
                marginBottom: "15px",
                color: "#1a1a1a",
              }}
            >
              8. Liability
            </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              VK RIDES is not responsible for any personal belongings left in the vehicle. The renter assumes all
              liability for traffic violations and accidents.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#999",
                marginTop: "40px",
                paddingTop: "20px",
                borderTop: "1px solid #eee",
              }}
            >
              Last updated: January 2025
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
