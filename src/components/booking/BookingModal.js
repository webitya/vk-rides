"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CloseIcon from "@mui/icons-material/Close"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import RazorpayButton from "./RazorpayButton"

export default function BookingModal({ car, onClose, bookingMethod }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    returnDate: "",
    days: 1,
  })

  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const calculateDays = () => {
    if (formData.pickupDate && formData.returnDate) {
      const pickup = new Date(formData.pickupDate)
      const returnDate = new Date(formData.returnDate)
      const days = Math.ceil((returnDate - pickup) / (1000 * 60 * 60 * 24))
      setFormData((prev) => ({ ...prev, days: Math.max(1, days) }))
    }
  }

  const totalPrice = car.pricePerDay * formData.days

  const sendBookingToAdmin = async (bookingDetails) => {
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingDetails),
      })
    } catch (error) {
      console.error("Error sending booking:", error)
    }
  }

  const handleBooking = async () => {
    setLoading(true)

    const bookingDetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      carName: car.name,
      pickupDate: formData.pickupDate,
      returnDate: formData.returnDate,
      days: formData.days,
      totalAmount: totalPrice,
      bookingMethod: bookingMethod,
    }

    if (bookingMethod === "whatsapp") {
      const message = `Hi VK RIDES, I want to book ${car.name} for ${formData.days} days.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPickup: ${formData.pickupDate}\nReturn: ${formData.returnDate}\nTotal: ₹${totalPrice}`
      await sendBookingToAdmin(bookingDetails)
      window.open(`https://wa.me/919102430174?text=${encodeURIComponent(message)}`, "_blank")
      setBookingSuccess(true)
    } else if (bookingMethod === "email") {
      const subject = `Booking Request for ${car.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCar: ${car.name}\nPickup Date: ${formData.pickupDate}\nReturn Date: ${formData.returnDate}\nDays: ${formData.days}\nTotal Price: ₹${totalPrice}`
      await sendBookingToAdmin(bookingDetails)
      window.location.href = `mailto:vkrides.in@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setBookingSuccess(true)
    } else if (bookingMethod === "call") {
      await sendBookingToAdmin(bookingDetails)
      window.location.href = "tel:+919102430174"
      setBookingSuccess(true)
    }

    setLoading(false)
    setTimeout(() => onClose(), 2000)
  }

  const handleRazorpaySuccess = async () => {
    const bookingDetails = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      carName: car.name,
      pickupDate: formData.pickupDate,
      returnDate: formData.returnDate,
      days: formData.days,
      totalAmount: totalPrice,
      bookingMethod: "payment",
    }
    await sendBookingToAdmin(bookingDetails)
    setBookingSuccess(true)
    setTimeout(() => onClose(), 2000)
  }

  return (
    <AnimatePresence>
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
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
          padding: "20px",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            maxWidth: "450px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#999",
              zIndex: 10,
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CloseIcon />
          </button>

          <div style={{ padding: "24px 20px" }}>
            {bookingSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "16px 0" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                  style={{ marginBottom: "16px" }}
                >
                  <CheckCircleIcon style={{ fontSize: "56px", color: "#10b981" }} />
                </motion.div>
                <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px", color: "#1a1a1a" }}>
                  Thank You!
                </h2>
                <p style={{ fontSize: "13px", color: "#666", marginBottom: "16px", lineHeight: "1.5" }}>
                  Your booking request has been received. We will contact you shortly.
                </p>

                <div
                  style={{
                    backgroundColor: "#f0f9ff",
                    borderLeft: "4px solid #6C63FF",
                    padding: "12px",
                    borderRadius: "8px",
                    textAlign: "left",
                    marginBottom: "16px",
                  }}
                >
                  <h3 style={{ fontSize: "12px", fontWeight: "bold", color: "#1a1a1a", marginBottom: "8px" }}>
                    Booking Details:
                  </h3>
                  <div style={{ fontSize: "12px", color: "#555", lineHeight: "1.6" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontWeight: "500" }}>Name:</span>
                      <span>{formData.name}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontWeight: "500" }}>Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontWeight: "500" }}>Phone:</span>
                      <span>{formData.phone}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontWeight: "500" }}>Car:</span>
                      <span>{car.name}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontWeight: "500" }}>Pickup:</span>
                      <span>{formData.pickupDate}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontWeight: "500" }}>Return:</span>
                      <span>{formData.returnDate}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontWeight: "500" }}>Days:</span>
                      <span>{formData.days}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "6px",
                        borderTop: "1px solid #ddd",
                        marginTop: "6px",
                      }}
                    >
                      <span style={{ fontWeight: "bold", color: "#1a1a1a" }}>Total:</span>
                      <span style={{ fontWeight: "bold", color: "#6C63FF", fontSize: "13px" }}>₹{totalPrice}</span>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: "11px", color: "#999" }}>
                  Confirmation sent to <strong>{formData.email}</strong>
                </p>
              </motion.div>
            ) : (
              <>
                <div style={{ marginBottom: "16px" }}>
                  <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "2px", color: "#1a1a1a" }}>
                    Book {car.name}
                  </h2>
                  <p style={{ fontSize: "12px", color: "#999" }}>₹{car.pricePerDay} per day</p>
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <h3
                    style={{
                      fontSize: "11px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                      color: "#1a1a1a",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Your Details
                  </h3>
                  <div style={{ display: "grid", gap: "8px" }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        padding: "9px 10px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                      onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        padding: "9px 10px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                      onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      style={{
                        padding: "9px 10px",
                        border: "1px solid #ddd",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                      onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <h3
                    style={{
                      fontSize: "11px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                      color: "#1a1a1a",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Rental Dates
                  </h3>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div style={{ flex: 1 }}>
                      <label
                        style={{
                          fontSize: "11px",
                          color: "#666",
                          display: "block",
                          marginBottom: "3px",
                          fontWeight: "500",
                        }}
                      >
                        Pickup
                      </label>
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={(e) => {
                          handleInputChange(e)
                          calculateDays()
                        }}
                        required
                        style={{
                          width: "100%",
                          padding: "9px 10px",
                          border: "1px solid #ddd",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontFamily: "inherit",
                          boxSizing: "border-box",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label
                        style={{
                          fontSize: "11px",
                          color: "#666",
                          display: "block",
                          marginBottom: "3px",
                          fontWeight: "500",
                        }}
                      >
                        Return
                      </label>
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={(e) => {
                          handleInputChange(e)
                          calculateDays()
                        }}
                        required
                        style={{
                          width: "100%",
                          padding: "9px 10px",
                          border: "1px solid #ddd",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontFamily: "inherit",
                          boxSizing: "border-box",
                          transition: "border-color 0.3s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
                        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "6px", marginBottom: "14px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}
                  >
                    <span style={{ color: "#666" }}>Days:</span>
                    <span style={{ fontWeight: "600", color: "#1a1a1a" }}>{formData.days}</span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}
                  >
                    <span style={{ color: "#666" }}>Rate:</span>
                    <span style={{ fontWeight: "600", color: "#1a1a1a" }}>₹{car.pricePerDay}/day</span>
                  </div>
                  <div
                    style={{
                      borderTop: "1px solid #ddd",
                      paddingTop: "6px",
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                    }}
                  >
                    <span style={{ fontWeight: "bold", color: "#1a1a1a" }}>Total:</span>
                    <span style={{ fontSize: "14px", fontWeight: "bold", color: "#6C63FF" }}>₹{totalPrice}</span>
                  </div>
                </div>

                {bookingMethod === "payment" ? (
                  <RazorpayButton car={car} bookingData={formData} onSuccess={handleRazorpaySuccess} />
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBooking}
                    disabled={
                      loading ||
                      !formData.name ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.pickupDate ||
                      !formData.returnDate
                    }
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor:
                        loading ||
                        !formData.name ||
                        !formData.email ||
                        !formData.phone ||
                        !formData.pickupDate ||
                        !formData.returnDate
                          ? "#ccc"
                          : "#6C63FF",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      cursor:
                        loading ||
                        !formData.name ||
                        !formData.email ||
                        !formData.phone ||
                        !formData.pickupDate ||
                        !formData.returnDate
                          ? "not-allowed"
                          : "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {loading ? "Processing..." : "Confirm Booking"}
                  </motion.button>
                )}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
