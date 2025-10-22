"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const slides = [
    {
      image: "/luxury-car-on-road-sunset.jpg",
    },
    {
      image: "/modern-car-interior-dashboard.jpg",
    },
    {
      image: "/car-driving-on-highway.jpg",
    },
    {
      image: "/family-car-travel-adventure.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "relative",
        marginTop: "60px",
        height: "clamp(190px, 65vh, 100vh)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.35)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.6)" }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          backgroundColor: "rgba(255,255,255,0.25)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(8px)",
          transition: "all 0.3s ease",
        }}
      >
        <ChevronLeft size={28} color="#fff" strokeWidth={2.5} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.6)" }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          backgroundColor: "rgba(255,255,255,0.25)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backdropFilter: "blur(8px)",
          transition: "all 0.3s ease",
        }}
      >
        <ChevronRight size={28} color="#fff" strokeWidth={2.5} />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: currentSlide === index ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: currentSlide === index ? "#6C63FF" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              border: "none",
              padding: 0,
            }}
            animate={{
              width: currentSlide === index ? "28px" : "8px",
              backgroundColor: currentSlide === index ? "#6C63FF" : "rgba(255,255,255,0.5)",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </motion.section>
  )
}
