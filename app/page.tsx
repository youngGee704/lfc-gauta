"use client"

import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import Image from "next/image"
import Link from "next/link"
import { AnimatedText } from "@/components/ui/animated-text"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gradient-to-br from-primary-red to-red-800 text-primary-white overflow-hidden py-16 md:py-24 lg:py-32">
        {" "}
        {/* Changed h- to min-h- and adjusted padding */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/foreground.jpg"
            alt="Church interior"
            layout="fill"
            objectFit="cover"
            priority
            unoptimized={true}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          {" "}
          {/* Removed vertical padding here */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <Image
              src="/lfc-logo.jpg"
              alt="Living Faith Church Gauta Logo"
              width={150}
              height={150}
              className="h-32 w-32 md:h-40 md:w-40 object-contain drop-shadow-lg"
              unoptimized={true}
              style={{ borderRadius: "999px" }}
            />
          </motion.div>
          <AnimatedText
            text="Welcome to Living Faith Church, Gauta"
            el="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
            stagger={0.03}
            delay={0.5}
          />
          <AnimatedText
            text="Where Faith Works Wonders!"
            el="p"
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-10 drop-shadow-md"
            stagger={0.02}
            delay={1.0}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-primary-white text-primary-red hover:bg-gray-200 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/offering">
                Give Offering <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-red px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 bg-transparent"
            >
              <Link href="/service-times">
                Service Times <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper className="bg-white text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-red">About Living Faith Church Gauta</h2>
            <p className="text-lg leading-relaxed">
              Living Faith Church, also known as Winners Chapel International, is a global ministry with a mandate to
              liberate the world from all oppressions of the devil through the preaching of the Word of Faith. Our
              branch in Gauta, Keffi, Nasarawa State, Nigeria, is a vibrant community dedicated to fostering spiritual
              growth, empowering believers, and impacting our local community with the love and power of God.
            </p>
            <p className="text-lg leading-relaxed">
              We believe in the power of God's Word to transform lives, heal the sick, and prosper His people. Join us
              as we experience the reality of God's presence and power together.
            </p>
            <Button
              asChild
              className="bg-primary-red text-primary-white hover:bg-red-700 px-6 py-3 text-md font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/foreground.jpg"
              alt="Church building"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out hover:scale-105"
              unoptimized={true}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Call to Action / Quick Links Section */}
      <SectionWrapper className="bg-gray-100 text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-red mb-4">Explore Our Community</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover more about our services, events, and how you can be a part of what God is doing at Living Faith
            Church Gauta.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <Image
              src="/service-time.jpg"
              alt="Service Times Icon"
              width={80}
              height={80}
              className="mb-4"
              unoptimized={true}
            />
            <h3 className="text-xl font-semibold text-primary-red mb-2">Service Times</h3>
            <p className="text-gray-600 mb-4">
              Join us for our powerful worship services and receive a fresh Word from God.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary-red text-primary-red hover:bg-primary-red hover:text-primary-white rounded-full bg-transparent"
            >
              <Link href="/service-times">View Schedule</Link>
            </Button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <Image
              src="/foreground-2.jpg"
              alt="Gallery Icon"
              width={80}
              height={80}
              className="mb-4"
              unoptimized={true}
            />
            <h3 className="text-xl font-semibold text-primary-red mb-2">Our Gallery</h3>
            <p className="text-gray-600 mb-4">See moments from our services, events, and community outreach.</p>
            <Button
              asChild
              variant="outline"
              className="border-primary-red text-primary-red hover:bg-primary-red hover:text-primary-white rounded-full bg-transparent"
            >
              <Link href="/gallery">Browse Photos</Link>
            </Button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
            <Image
              src="/offering.jpg"
              alt="Offering Icon"
              width={80}
              height={80}
              className="mb-4"
              unoptimized={true}
            />
            <h3 className="text-xl font-semibold text-primary-red mb-2">Give Offering</h3>
            <p className="text-gray-600 mb-4">Support the work of God and sow into good ground. God bless you!</p>
            <Button asChild className="bg-primary-red text-primary-white hover:bg-red-700 rounded-full">
              <Link href="/offering">Give Now</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonies Section (Bonus) */}
      <SectionWrapper className="bg-primary-red text-primary-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear What God Is Doing</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Read inspiring testimonies from members of our church who have experienced God's faithfulness.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
            <p className="italic mb-4">
              "I was healed of a chronic illness after attending a service at LFC Gauta. To God be the glory!"
            </p>
            <p className="font-semibold">- Sister Grace A.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
            <p className="italic mb-4">
              "My business experienced a supernatural turnaround after I applied the principles taught in church."
            </p>
            <p className="font-semibold">- Brother John O.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
            <p className="italic mb-4">
              "The teachings on faith have transformed my perspective and brought peace to my family."
            </p>
            <p className="font-semibold">- Deaconess Mary S.</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
