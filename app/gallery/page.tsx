import type { Metadata } from "next"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore photos from our services, events, and community activities at Living Faith Church, Gauta.",
  openGraph: {
    title: "Gallery | Living Faith Church - Gauta",
    description: "Explore photos from our services, events, and community activities at Living Faith Church, Gauta.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function GalleryPage() {
  return <GalleryClientPage />
}
