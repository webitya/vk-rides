import "./globals.css"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import MobileBottomNav from "@/components/shared/MobileBottomNav"
import FloatingIcons from "@/components/shared/FloatingIcons"

export const metadata = {
  title: "VK RIDES SELF DRIVE CAR - Car Rental in Jamshedpur",
  description: "Rent self-drive cars in Jamshedpur. Affordable car rental service with multiple booking options.",
  keywords: "car rental, self drive car, Jamshedpur, car hire",
  openGraph: {
    title: "VK RIDES SELF DRIVE CAR",
    description: "Premium self-drive car rental service in Jamshedpur",
    url: "https://www.vkridesselfdrivecar.in",
    siteName: "VK RIDES",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
        <MobileBottomNav />
        <FloatingIcons />
      </body>
    </html>
  )
}
