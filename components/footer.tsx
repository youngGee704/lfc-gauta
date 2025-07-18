import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary-red text-primary-white py-8 md:py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/lfc-logo.jpg" // Using the provided logo
              alt="Living Faith Church Gauta Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              unoptimized={true}
            />
            <span className="text-xl font-bold">Living Faith Church Gauta</span>
          </Link>
          <p className="text-sm max-w-xs">
            Empowering lives through faith and the Word of God. Join us and experience divine transformation.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="/service-times" className="text-sm hover:underline underline-offset-4">
              Service Times
            </Link>
            <Link href="/gallery" className="text-sm hover:underline underline-offset-4">
              Gallery
            </Link>
            <Link href="/offering" className="text-sm hover:underline underline-offset-4">
              Offering
            </Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <p className="text-sm mb-2">Gauta, Keffi, Nasarawa State, Nigeria</p>
          <p className="text-sm mb-2">Phone: +234 806 693 8825</p> {/* Placeholder number */}
          <p className="text-sm mb-4">Email: lfcgauta@gmail.com</p> {/* Placeholder email */}
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook" className="hover:text-gray-300 transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-gray-300 transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-gray-300 transition-colors duration-200">
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-primary-white/20 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Living Faith Church Gauta. All rights reserved.</p>
      </div>
    </footer>
  )
}
