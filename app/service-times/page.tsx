import type { Metadata } from "next"
import ServiceTimesClientPage from "./ServiceTimesClientPage"

export const metadata: Metadata = {
  title: "Service Times",
  description:
    "Find the days and times of our powerful worship services at Living Faith Church, Gauta. Join us for an encounter with God!",
  openGraph: {
    title: "Service Times | Living Faith Church - Gauta",
    description:
      "Find the days and times of our powerful worship services at Living Faith Church, Gauta. Join us for an encounter with God!",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function ServiceTimesPage() {
  return <ServiceTimesClientPage />
}
