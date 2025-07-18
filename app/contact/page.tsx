import { SectionWrapper } from "@/components/section-wrapper"
import type { Metadata } from "next"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "@/components/ui/animated-text"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Living Faith Church, Gauta. Find our address, phone number, email, and social media links.",
  openGraph: {
    title: "Contact Us | Living Faith Church - Gauta",
    description:
      "Get in touch with Living Faith Church, Gauta. Find our address, phone number, email, and social media links.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function ContactPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-red to-red-800 text-primary-white text-center">
        <AnimatedText
          text="Get In Touch"
          el="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          stagger={0.03}
          delay={0.2}
        />
        <AnimatedText
          text="We'd love to hear from you! Reach out to us with your inquiries."
          el="p"
          className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
          stagger={0.02}
          delay={0.5}
        />
      </SectionWrapper>

      <SectionWrapper className="bg-white text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-primary-red flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-primary-red mb-2">Our Location</h3>
                <p className="text-lg text-gray-700">
                  Living Faith Church, Gauta,
                  <br />
                  Keffi, Nasarawa State,
                  <br />
                  Nigeria.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-primary-red flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-primary-red mb-2">Call Us / WhatsApp</h3>
                <p className="text-lg text-gray-700">
                  <Link href="tel:+234 806 693 8825" className="hover:underline">
                    +234 806 693 8825
                  </Link>{" "}
                  (General Inquiries)
                </p>
                <p className="text-lg text-gray-700">
                  <Link href="tel:+234 803 742 2665" className="hover:underline">
                    +234 803 742 2665
                  </Link>{" "}
                  (Prayer Line)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-8 w-8 text-primary-red flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-primary-red mb-2">Email Us</h3>
                <p className="text-lg text-gray-700">
                  <Link href="mailto:lfcgauta@gmail.com" className="hover:underline">
                    lfcgauta@gmail.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-red mb-2">Connect on Social Media</h3>
              <div className="flex gap-6">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-700 hover:text-primary-red transition-colors duration-200"
                >
                  <Facebook className="h-8 w-8" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-700 hover:text-primary-red transition-colors duration-200"
                >
                  <Twitter className="h-8 w-8" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-700 hover:text-primary-red transition-colors duration-200"
                >
                  <Instagram className="h-8 w-8" />
                </Link>
                <Link
                  href="#"
                  aria-label="YouTube"
                  className="text-gray-700 hover:text-primary-red transition-colors duration-200"
                >
                  <Youtube className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            {/* Embedded Google Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.7900000000005!2d7.760000000000001!3d8.840000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104f1d0000000001%3A0x1000000000000001!2sKeffi%2C%20Nasarawa%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Keffi"
            ></iframe>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
