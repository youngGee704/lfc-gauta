"use client" // This directive is crucial for client-side hooks like useState and useEffect

import { SectionWrapper } from "@/components/section-wrapper"
import { Clock, CalendarDays, Sparkles } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function ServiceTimesClientPage() {
  const [countdown, setCountdown] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
    nextServiceDay: string
  } | null>(null)

  const services = [
    { day: 0, hour: 8, minute: 0, name: "Sunday First Service" }, // Sunday 8:00 AM
    { day: 0, hour: 10, minute: 0, name: "Sunday Second Service" }, // Sunday 10:00 AM
    { day: 3, hour: 17, minute: 0, name: "Midweek Communion Service" }, // Wednesday 5:00 PM
    { day: 1, hour: 6, minute: 0, name: "Covenant Hour of Prayer (Monday)" }, // Monday 6:00 AM
    { day: 2, hour: 6, minute: 0, name: "Covenant Hour of Prayer (Tuesday)" }, // Tuesday 6:00 AM
    { day: 3, hour: 6, minute: 0, name: "Covenant Hour of Prayer (Wednesday)" }, // Wednesday 6:00 AM
    { day: 4, hour: 6, minute: 0, name: "Covenant Hour of Prayer (Thursday)" }, // Thursday 6:00 AM
    { day: 5, hour: 6, minute: 0, name: "Covenant Hour of Prayer (Friday)" }, // Friday 6:00 AM
    { day: 6, hour: 6, minute: 0, name: "Covenant Hour of Prayer (Saturday)" }, // Saturday 6:00 AM
  ]

  const calculateCountdown = () => {
    const now = new Date()
    let nextServiceDate: Date | null = null
    let nextServiceName = ""

    // Find the very next service from the current moment
    let closestDiff = Number.POSITIVE_INFINITY

    for (const service of services) {
      const serviceTime = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      serviceTime.setDate(now.getDate() + ((service.day - now.getDay() + 7) % 7)) // Get the correct day of the week
      serviceTime.setHours(service.hour, service.minute, 0, 0)

      let currentDiff = serviceTime.getTime() - now.getTime()

      // If the service time is in the past, consider it for next week
      if (currentDiff < 0) {
        serviceTime.setDate(serviceTime.getDate() + 7)
        currentDiff = serviceTime.getTime() - now.getTime()
      }

      if (currentDiff < closestDiff) {
        closestDiff = currentDiff
        nextServiceDate = serviceTime
        nextServiceName = service.name
      }
    }

    if (!nextServiceDate || closestDiff <= 0) {
      setCountdown(null)
      return
    }

    const days = Math.floor(closestDiff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((closestDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((closestDiff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((closestDiff % (1000 * 60)) / 1000)

    setCountdown({ days, hours, minutes, seconds, nextServiceDay: nextServiceName })
  }

  useEffect(() => {
    calculateCountdown() // Initial calculation
    const timer = setInterval(calculateCountdown, 1000) // Update every second

    return () => clearInterval(timer) // Cleanup on unmount
  }, [])

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-red to-red-800 text-primary-white text-center">
        <AnimatedText
          text="Our Service Schedule"
          el="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          stagger={0.03}
          delay={0.2}
        />
        <AnimatedText
          text="Join us for a powerful encounter with God's Word and Spirit."
          el="p"
          className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
          stagger={0.02}
          delay={0.5}
        />
      </SectionWrapper>

      <SectionWrapper className="bg-white text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <CalendarDays className="h-10 w-10 text-primary-red" />
              <div>
                <h3 className="text-2xl font-bold text-primary-red">Sunday Service</h3>
                <p className="text-lg text-gray-700">
                  <Clock className="inline-block h-5 w-5 mr-2 text-gray-600" />
                  8:00 AM - 10:00 AM (First Service)
                </p>
                <p className="text-lg text-gray-700">
                  <Clock className="inline-block h-5 w-5 mr-2 text-gray-600" />
                  10:00 AM - 12:00 PM (Second Service)
                </p>
                <p className="text-md text-gray-500 mt-2">
                  A time of powerful worship, insightful teaching, and divine encounters.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CalendarDays className="h-10 w-10 text-primary-red" />
              <div>
                <h3 className="text-2xl font-bold text-primary-red">Midweek Communion Service</h3>
                <p className="text-lg text-gray-700">
                  <Clock className="inline-block h-5 w-5 mr-2 text-gray-600" />
                  Wednesdays: 5:00 PM - 6:30 PM
                </p>
                <p className="text-md text-gray-500 mt-2">
                  Experience the power of the Holy Communion and receive fresh revelations from God's Word.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CalendarDays className="h-10 w-10 text-primary-red" />
              <div>
                <h3 className="text-2xl font-bold text-primary-red">Covenant Hour of Prayer</h3>
                <p className="text-lg text-gray-700">
                  <Clock className="inline-block h-5 w-5 mr-2 text-gray-600" />
                  Mondays - Saturdays: 6:00 AM - 7:00 AM
                </p>
                <p className="text-md text-gray-500 mt-2">
                  Start your day with powerful prayers and prophetic declarations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Sparkles className="h-16 w-16 text-primary-red mb-6 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Next Service Countdown</h3>
            {countdown ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-primary-red font-bold text-3xl md:text-4xl">
                  <div className="flex flex-col items-center">
                    <span>{countdown.days}</span>
                    <span className="text-sm text-gray-600">Days</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{countdown.hours}</span>
                    <span className="text-sm text-gray-600">Hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{countdown.minutes}</span>
                    <span className="text-sm text-gray-600">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>{countdown.seconds}</span>
                    <span className="text-sm text-gray-600">Seconds</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-4">
                  Next: <span className="font-semibold text-primary-red">{countdown.nextServiceDay}</span>
                </p>
              </>
            ) : (
              <p className="text-lg text-gray-700">Calculating next service...</p>
            )}
            <p className="text-md text-gray-500 mt-6">We look forward to welcoming you! Come and be blessed.</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-100 text-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-red mb-6">What to Expect</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Image
              src="/bishop.jpg"
              alt="Worship Icon"
              width={60}
              height={60}
              className="mb-4"
              unoptimized={true}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Vibrant Worship</h3>
            <p className="text-gray-600">Experience heartfelt praise and worship that lifts your spirit.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Image
              src="/the-word.jpg"
              alt="Word Icon"
              width={60}
              height={60}
              className="mb-4"
              unoptimized={true}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Empowering Word</h3>
            <p className="text-gray-600">Receive life-transforming messages from God's anointed servants.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Image
              src="/fellowship.jpg"
              alt="Fellowship Icon"
              width={60}
              height={60}
              className="mb-4"
              unoptimized={true}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Warm Fellowship</h3>
            <p className="text-gray-600">Connect with a loving community of believers.</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
