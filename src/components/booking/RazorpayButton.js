"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function RazorpayButton({ car, bookingData, onSuccess }) {
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    setLoading(true)
    try {
      const totalAmount = car.pricePerDay * bookingData.days

      // Create order
      const orderResponse = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,
          currency: "INR",
          receipt: `booking_${Date.now()}`,
          notes: {
            carName: car.name,
            customerName: bookingData.name,
            customerEmail: bookingData.email,
            customerPhone: bookingData.phone,
            pickupDate: bookingData.pickupDate,
            returnDate: bookingData.returnDate,
            days: bookingData.days,
          },
        }),
      })

      const order = await orderResponse.json()

      // Load Razorpay script
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: totalAmount * 100,
          currency: "INR",
          name: "VK RIDES",
          description: `Booking for ${car.name}`,
          order_id: order.id,
          handler: async (response) => {
            // Verify payment
            const verifyResponse = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                bookingData: {
                  ...bookingData,
                  carName: car.name,
                  carPrice: car.pricePerDay,
                  totalAmount,
                },
              }),
            })

            const result = await verifyResponse.json()
            if (result.success) {
              onSuccess(response)
            } else {
              alert("Payment verification failed")
            }
          },
          prefill: {
            name: bookingData.name,
            email: bookingData.email,
            contact: bookingData.phone,
          },
          theme: {
            color: "#6C63FF",
          },
        }

        const rzp = new window.Razorpay(options)
        rzp.open()
      }
      document.body.appendChild(script)
    } catch (error) {
      console.error("Payment error:", error)
      alert("Error initiating payment")
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handlePayment}
      disabled={loading}
      style={{
        width: "100%",
        padding: "15px",
        backgroundColor: loading ? "#ccc" : "#6C63FF",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: loading ? "not-allowed" : "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {loading ? "Processing..." : "Pay with Razorpay"}
    </motion.button>
  )
}
