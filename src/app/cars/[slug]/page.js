"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { carsData } from "@/data/cars"
import CarDetailsView from "@/components/cars/CarDetailsView"
import BookingOptionsModal from "@/components/booking/BookingOptionsModal"
import BookingModal from "@/components/booking/BookingModal"

export default function CarDetailsPage({ params }) {
  const [showOptionsModal, setShowOptionsModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [selectedBookingMethod, setSelectedBookingMethod] = useState(null)
  const car = carsData.find((c) => c.slug === params.slug)

  if (!car) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
        }}
      >
        <h1 style={{ fontSize: "24px", color: "#666" }}>Car not found</h1>
      </div>
    )
  }

  const handleSelectOption = (method) => {
    setSelectedBookingMethod(method)
    setShowOptionsModal(false)
    setShowBookingModal(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop: "80px" }}
    >
      <CarDetailsView car={car} onBookClick={() => setShowOptionsModal(true)} />
      {showOptionsModal && (
        <BookingOptionsModal car={car} onClose={() => setShowOptionsModal(false)} onSelectOption={handleSelectOption} />
      )}
      {showBookingModal && (
        <BookingModal car={car} onClose={() => setShowBookingModal(false)} bookingMethod={selectedBookingMethod} />
      )}
    </motion.div>
  )
}
