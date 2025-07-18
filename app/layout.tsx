import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "Living Faith Church - Gauta",
    template: "%s | Living Faith Church - Gauta",
  },
  description:
    "Official website for Living Faith Church, Gauta, Keffi, Nasarawa State, Nigeria. Join us for powerful services and spiritual growth.",
  keywords: [
    "Living Faith Church",
    "Winners Chapel",
    "Gauta",
    "Keffi",
    "Nasarawa",
    "Church",
    "Nigeria",
    "Christian",
    "Faith",
  ],
  authors: [{ name: "Innocent Goodness" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://livingfaithchurchgauta.vercel.app", // Placeholder URL
    title: "Living Faith Church - Gauta",
    description:
      "Official website for Living Faith Church, Gauta, Keffi, Nasarawa State, Nigeria. Join us for powerful services and spiritual growth.",
    images: [
      {
        url: "/public/lfc-logo.jpg", // Using the provided logo
        width: 1200,
        height: 630,
        alt: "Living Faith Church Gauta Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Living Faith Church - Gauta",
    description:
      "Official website for Living Faith Church, Gauta, Keffi, Nasarawa State, Nigeria. Join us for powerful services and spiritual growth.",
    images: ["/logo.png"], // Using the provided logo
  },
  icons: {
    icon: "/logo.png", // Using the provided logo for favicon
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
