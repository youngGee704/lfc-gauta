"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AnimatedText } from "@/components/ui/animated-text"

export default function GalleryClientPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    "/foreground.jpg",
    "/foreground-2.jpg",
    "/foreground-3.jpg",
    "/foreground-4.jpg",
    "/foreground-5.jpg",
    "/foreground-6.jpg",
    "/foreground-7.jpg",
    "/foreground-8.jpg",
    "/foreground-9.jpg",
    "/foreground-10.jpg",
    "/foreground-11.jpg",
    "/foreground-12.jpg"
  ]

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-red to-red-800 text-primary-white text-center">
        <AnimatedText
          text="Our Photo Gallery"
          el="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          stagger={0.03}
          delay={0.2}
        />
        <AnimatedText
          text="Relive moments of worship, fellowship, and impact."
          el="p"
          className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
          stagger={0.02}
          delay={0.5}
        />
      </SectionWrapper>

      <SectionWrapper className="bg-white text-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
          {selectedImage && (
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Selected gallery image"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain max-h-[80vh]"
              unoptimized={true}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
