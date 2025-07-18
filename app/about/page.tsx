import { SectionWrapper } from "@/components/section-wrapper"
import Image from "next/image"
import type { Metadata } from "next"
import { AnimatedText } from "@/components/ui/animated-text"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the history, mission, and vision of Living Faith Church, Gauta, and meet our Resident Pastor.",
  openGraph: {
    title: "About Us | Living Faith Church - Gauta",
    description:
      "Learn about the history, mission, and vision of Living Faith Church, Gauta, and meet our Resident Pastor.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-red to-red-800 text-primary-white text-center">
        <AnimatedText
          text="Our Story, Our Mission"
          el="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          stagger={0.03}
          delay={0.2}
        />
        <AnimatedText
          text="Building a community of faith, empowering lives."
          el="p"
          className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
          stagger={0.02}
          delay={0.5}
        />
      </SectionWrapper>

      <SectionWrapper className="bg-white text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-red">Our History</h2>
            <p className="text-lg leading-relaxed">
              Living Faith Church Worldwide, also known as Winners Chapel International, was founded by Dr. David
              Oyedepo in 1981. With a divine mandate to liberate the world from all oppressions of the devil through the
              preaching of the Word of Faith, the ministry has grown exponentially, establishing branches across the
              globe.
            </p>
            <p className="text-lg leading-relaxed">
              Living Faith Church, Gauta, is a vibrant branch established to serve the spiritual needs of the community
              in Gauta, Keffi, Nasarawa State, Nigeria. Since its inception, it has been a beacon of hope, faith, and
              divine encounters, impacting countless lives through powerful worship, undiluted Word, and tangible
              manifestations of God's power.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/bishop-smiling.jpg"
              alt="Church history image"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out hover:scale-105"
              unoptimized={true}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-100 text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/foreground-2.jpg"
              alt="Mission and Vision image"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out hover:scale-105"
              unoptimized={true}
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-red">Our Mission & Vision</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to preach the Word of Faith, liberating people from all oppressions of the devil. We are
              committed to raising a generation of believers who are spiritually sound, financially empowered, and
              socially relevant.
            </p>
            <p className="text-lg leading-relaxed">
              Our vision is to see lives transformed, destinies restored, and the kingdom of God advanced through the
              demonstration of God's power and love. We aim to be a church where every member discovers their purpose
              and fulfills their divine mandate.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Pastor Profile Section */}
      <SectionWrapper className="bg-white text-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-red mb-12">Meet Our Resident Pastor</h2>
        <div className="flex flex-col items-center max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
          <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary-red shadow-md">
            <Image
              src="/pastor-sam&wife.jpg"
              alt="Pastor's Photo"
              layout="fill"
              objectFit="cover"
              unoptimized={true}
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Pastor Sam</h3>
          <p className="text-lg text-gray-700 mb-4">With his amiable wife, Pastor (Mrs.) Christiana </p>
          <blockquote className="text-xl italic text-gray-600 border-l-4 border-primary-red pl-4 py-2">
            "The future belongs to those who believe in the beauty of their dreams and work towards them with faith."
          </blockquote>
          <p className="text-md text-gray-500 mt-4">
            Pastor Sam is a passionate minister of the gospel, dedicated to raising a people of power and purpose.
            Together with his beloved wife, Pastor (Mrs.) Christiana, they lead Living Faith Church, Gauta, with a deep
            commitment to seeing lives transformed by the Word of God.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
