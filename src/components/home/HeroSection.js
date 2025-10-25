"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // 🖼️ Define both desktop & mobile image sets
  const slidesDesktop = [
    { image: "/c1.jpg" },
    { image: "/c2.jpg" },
    { image: "/c3.jpg" },
    { image: "/c4.jpg" },
  ]

  const slidesMobile = [
    { image: "/ca1m.jpg" },
    { image: "/ca2m.jpg" },
    { image: "/ca3m.jpg" },
  ]

  // Detect if user is on mobile (client-side only)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const slides = isMobile ? slidesMobile : slidesDesktop

  // Auto-slide
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
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "relative",
        marginTop: "60px",
        height: "65vh", // Desktop height: 65% of viewport height
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      {/* ✅ Responsive height for mobile (CHANGED HEIGHT) */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-section {
            /* Setting height to 250px to match your 320x250 canvas height */
            height: 250px !important; 
            max-height: 250px !important;
          }
        }
      `}</style>

      {/* ✅ Slide transition */}
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
            inset: 0,
            backgroundImage: `url(${slides[currentSlide].image})`,
            // 👇 This combination is CRUCIAL for filling the 320x250 mobile container
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.35)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <NavButton direction="prev" onClick={handlePrev}>
        <ChevronLeft size={22} color="#fff" strokeWidth={2.5} />
      </NavButton>

      <NavButton direction="next" onClick={handleNext}>
        <ChevronRight size={22} color="#fff" strokeWidth={2.5} />
      </NavButton>

      {/* Dots */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: "6px",
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
              width: currentSlide === index ? "24px" : "6px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor:
                currentSlide === index ? "#6C63FF" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            animate={{
              width: currentSlide === index ? "24px" : "6px",
              backgroundColor:
                currentSlide === index ? "#6C63FF" : "rgba(255,255,255,0.5)",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </motion.section>
  )
}

/* ✅ Reusable Navigation Button Component */
function NavButton({ direction, onClick, children }) {
  const isPrev = direction === "prev"
  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      style={{
        position: "absolute",
        [isPrev ? "left" : "right"]: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 20,
        backgroundColor: "rgba(255,255,255,0.25)",
        border: "none",
        borderRadius: "50%",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(8px)",
      }}
    >
      {children}
    </motion.button>
  )
}