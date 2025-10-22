"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { image: "/luxury-car-on-road-sunset.jpg" },
    { image: "/modern-car-interior-dashboard.jpg" },
    { image: "/car-driving-on-highway.jpg" },
    { image: "/family-car-travel-adventure.jpg" },
  ]

  // Auto-slide effect (safe for SSR)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mt-[60px] flex items-center justify-center overflow-hidden"
      style={{
        height: "clamp(180px, 60vh, 100vh)",
      }}
    >
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: typeof window !== "undefined" && window.innerWidth > 768 ? "fixed" : "scroll",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      {/* Left Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border-none bg-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/50 cursor-pointer"
      >
        <ChevronLeft size={24} color="#fff" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border-none bg-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/50 cursor-pointer"
      >
        <ChevronRight size={24} color="#fff" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer transition-all duration-300"
            style={{
              width: currentSlide === index ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor:
                currentSlide === index ? "#6C63FF" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </motion.section>
  )
}
