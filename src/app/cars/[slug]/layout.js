import { carsData } from "@/data/cars"

export async function generateMetadata({ params }) {
  const car = carsData.find((c) => c.slug === params.slug)

  if (!car) {
    return {
      title: "Car Not Found",
      description: "The car you are looking for is not available.",
    }
  }

  return {
    title: `${car.name} - Self Drive Car Rental in Jamshedpur | VK RIDES`,
    description: `Rent ${car.name} for ₹${car.pricePerDay}/day. ${car.description}. Book now with VK RIDES in Jamshedpur.`,
    keywords: `${car.name}, car rental, self drive, Jamshedpur, ${car.category}`,
    openGraph: {
      title: `${car.name} - VK RIDES Car Rental`,
      description: car.description,
      url: `https://www.vkridesselfdrivecar.in/cars/${car.slug}`,
      images: [{ url: car.image }],
    },
  }
}

export default function Layout({ children }) {
  return children
}
