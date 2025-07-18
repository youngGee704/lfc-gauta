"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service Times", href: "/service-times" },
    { name: "Gallery", href: "/gallery" },
    { name: "Offering", href: "/offering" },
    { name: "Contact", href: "/contact" },
    { name: "Pastor's Profile", href: "/pastor" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm transition-all duration-300 ease-in-out">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/lfc-logo.jpg"
            alt="Living Faith Church Gauta Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            style={{ borderRadius: "999px" }}
            unoptimized={true} // Keep unoptimized for preview environment compatibility
          />
          <span className="text-lg font-bold text-primary-red hidden sm:block">Living Faith Church</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(229, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={cn(
                "px-4 py-2 rounded-full transition-colors duration-200 ease-in-out",
                pathname === link.href
                  ? "bg-primary-red !text-primary-black shadow-md" // Added !text-primary-white
                  : "text-black-700 hover:text-primary-red hover:bg-black-50",
              )}
            >
              <Link href={link.href} className="text-sm font-medium block">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-primary-red" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Image
                  src="/lfc-logo.jpg"
                  alt="Living Faith Church Gauta Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  unoptimized={true}
                />
                <span className="text-lg font-bold text-primary-red">LFC Gauta</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="grid gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-base font-medium py-2 px-3 rounded-lg transition-colors duration-200 ease-in-out",
                    pathname === link.href
                      ? "bg-primary-red text-primary-white"
                      : "text-gray-800 hover:text-primary-red hover:bg-red-50",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
