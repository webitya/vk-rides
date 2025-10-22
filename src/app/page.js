"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import HeroSection from "@/components/home/HeroSection"
import FeaturesSection from "@/components/home/FeaturesSection"
import SearchSection from "@/components/home/SearchSection"
import CarsPreview from "@/components/home/CarsPreview"
import StatsSection from "@/components/home/StatsSection"
import BookingSection from "@/components/home/BookingSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import FAQSection from "@/components/home/FAQSection"
import NewsletterSection from "@/components/home/NewsletterSection"
import CTASection from "@/components/home/CTASection"
import BenefitsSection from "@/components/home/BenefitsSection"
import ProcessSection from "@/components/home/ProcessSection"

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroSection />
      <FeaturesSection />
      <SearchSection />
      <CarsPreview />
      <BenefitsSection />
      <ProcessSection />
      <StatsSection />
      <BookingSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </motion.div>
  )
}
