import { SectionWrapper } from "@/components/section-wrapper"
import type { Metadata } from "next"
import { Banknote, BookOpen } from "lucide-react"
import { CopyButton } from "@/components/ui/copy-button"
import { AnimatedText } from "@/components/ui/animated-text"

export const metadata: Metadata = {
  title: "Offering & Giving",
  description:
    "Information on how to give your tithes and offerings to Living Faith Church, Gauta. God bless you as you give!",
  openGraph: {
    title: "Offering & Giving | Living Faith Church - Gauta",
    description:
      "Information on how to give your tithes and offerings to Living Faith Church, Gauta. God bless you as you give!",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function OfferingPage() {
  const accountNumber = "1310739239" 
  const bankName = "Zenith Bank of Nigeria" 
  const accountName = "Living Faith Church Gauta res acct".toLocaleUpperCase() 

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-red to-red-800 text-primary-white text-center">
        <AnimatedText
          text="Give Your Offering & Tithe"
          el="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          stagger={0.03}
          delay={0.2}
        />
        <AnimatedText
          text="Sow into good ground and experience God's abundant blessings."
          el="p"
          className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
          stagger={0.02}
          delay={0.5}
        />
      </SectionWrapper>

      <SectionWrapper className="bg-white text-gray-800">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg text-center">
          <Banknote className="h-16 w-16 text-primary-red mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold text-primary-red mb-6">Bank Transfer Details</h2>

          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-lg text-gray-700">Account Name:</span>
              <span className="text-xl font-bold text-gray-900">{accountName}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-lg text-gray-700">Bank Name:</span>
              <span className="text-xl font-bold text-gray-900">{bankName}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <span className="font-semibold text-lg text-gray-700">Account Number:</span>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-extrabold text-primary-red">{accountNumber}</span>
                <CopyButton
                  value={accountNumber}
                  toastMessage="Account Number Copied!"
                  className="bg-primary-red text-primary-white hover:bg-red-700"
                />
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Please use the details above for your tithes, offerings, and other kingdom investments. God bless you
            abundantly as you give!
          </p>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Instructions for Giving</h3>
            <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2">
              <li>For Tithes: Please specify "Tithe" in the transfer description.</li>
              <li>For Offerings: You can specify "Offering" or leave it blank.</li>
              <li>For other kingdom investments (e.g., Project, Welfare): Please specify accordingly.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-100 text-gray-800 text-center">
        <BookOpen className="h-16 w-16 text-primary-red mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-primary-red mb-4">A Scripture for You</h2>
        <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto leading-relaxed">
          "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith,
          saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there
          shall not be room enough to receive it."
          <footer className="mt-4 text-lg font-semibold text-gray-900">Malachi 3:10 (KJV)</footer>
        </blockquote>
        <p className="text-lg text-gray-600 mt-6">
          We believe in the power of giving and the faithfulness of God to bless His cheerful givers.
        </p>
      </SectionWrapper>
    </>
  )
}
