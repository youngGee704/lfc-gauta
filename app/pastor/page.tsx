import { SectionWrapper } from "@/components/section-wrapper"
import type { Metadata } from "next"
import Image from "next/image"
import { AnimatedText } from "@/components/ui/animated-text"
import { Heart, Lightbulb, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Pastor's Profile",
  description:
    "Learn more about Pastor Sam and Pastor (Mrs.) Christiana, the Resident Pastors of Living Faith Church, Gauta.",
  openGraph: {
    title: "Pastor's Profile | Living Faith Church - Gauta",
    description:
      "Learn more about Pastor Sam and Pastor (Mrs.) Christiana, the Resident Pastors of Living Faith Church, Gauta.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function PastorProfilePage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-red to-red-800 text-primary-white text-center">
        <AnimatedText
          text="Meet Our Anointed Leaders"
          el="h1"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg"
          stagger={0.03}
          delay={0.2}
        />
        <AnimatedText
          text="Pastor Sam & Pastor (Mrs.) Christiana"
          el="p"
          className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
          stagger={0.02}
          delay={0.5}
        />
      </SectionWrapper>

      <SectionWrapper className="bg-white text-gray-800">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-4xl mx-auto">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary-red shadow-xl">
            <Image
              src="/pastor-sam.jpg"
              alt="Pastor Sam"
              layout="fill"
              objectFit="cover"
              unoptimized={true}
            />
          </div>
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-red">Pastor Sam</h2>
            <p className="text-lg leading-relaxed">
              Pastor Sam is the Resident Pastor of Living Faith Church, Gauta. He is a dynamic preacher and teacher
              of the Word of Faith, with a passion for seeing lives transformed by the power of God. Called into
              ministry under the tutelage of Bishop David Oyedepo, he has served faithfully in various capacities,
              impacting many through his practical and revelatory teachings.
            </p>
            <p className="text-lg leading-relaxed">
              His ministry is marked by a strong emphasis on faith, divine prosperity, and the supernatural. He believes
              that every believer is destined for greatness and is committed to equipping them to fulfill their
              God-given purpose.
            </p>
            <blockquote className="text-xl italic text-gray-600 border-l-4 border-primary-red pl-4 py-2">
              "Faith is the master key to a world of endless possibilities."
            </blockquote>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12 max-w-4xl mx-auto mt-16">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary-red shadow-xl">
            <Image
              src="/mrs-sam.jpg"
              alt="Pastor (Mrs.) Christiana"
              layout="fill"
              objectFit="cover"
              unoptimized={true}
            />
          </div>
          <div className="text-center md:text-right space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-red">Pastor (Mrs.) Christiana</h2>
            <p className="text-lg leading-relaxed">
              Pastor (Mrs.) Christiana is the amiable wife of Pastor Sam and co-pastor of Living Faith Church, Gauta.
              She is a woman of grace and wisdom, with a deep love for God and His people. Her ministry focuses on
              family life, women's empowerment, and spiritual development.
            </p>
            <p className="text-lg leading-relaxed">
              She is a strong pillar of support to her husband and a mother to the congregation, providing guidance,
              comfort, and inspiration. Her teachings are practical and relatable, helping many to build successful
              homes and live victorious Christian lives.
            </p>
            <blockquote className="text-xl italic text-gray-600 border-r-4 border-primary-red pr-4 py-2">
              "A strong family is the foundation of a strong church and a strong society."
            </blockquote>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-100 text-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-red mb-12">Their Calling & Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Heart className="h-12 w-12 text-primary-red mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion for Souls</h3>
            <p className="text-gray-600">
              Driven by a deep love for God and humanity, they are committed to soul winning and discipleship.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <Lightbulb className="h-12 w-12 text-primary-red mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Empowering Teachings</h3>
            <p className="text-gray-600">
              Their messages are practical, empowering, and rooted in the Word of God, leading to tangible results.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <BookOpen className="h-12 w-12 text-primary-red mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship & Guidance</h3>
            <p className="text-gray-600">
              They provide spiritual guidance and mentorship, raising leaders and champions for Christ.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline of Service (Optional - Placeholder) */}
      <SectionWrapper className="bg-white text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-red text-center mb-12">Timeline of Service</h2>
        <div className="relative border-l-2 border-primary-red pl-8 md:pl-16">
          <div className="mb-8 relative">
            <div className="absolute -left-4 md:-left-8 top-0 h-4 w-4 bg-primary-red rounded-full border-2 border-white shadow-md"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">2021 - Called to Ministry</h3>
            <p className="text-gray-700">
              Pastor Sam received a divine call to ministry under the prophetic anointing of Bishop David Oyedepo.
            </p>
          </div>
          <div className="mb-8 relative">
            <div className="absolute -left-4 md:-left-8 top-0 h-4 w-4 bg-primary-red rounded-full border-2 border-white shadow-md"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">2022 - Pastoral Appointment</h3>
            <p className="text-gray-700">
              Appointed as Resident Pastor of Living Faith Church, Goshen, embarking on a new chapter of impact.
            </p>
          </div>
          <div className="mb-8 relative">
            <div className="absolute -left-4 md:-left-8 top-0 h-4 w-4 bg-primary-red rounded-full border-2 border-white shadow-md"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Present - Continual Impact</h3>
            <p className="text-gray-700">
              Leading the church to new heights of glory, with testimonies of salvation, healing, and breakthroughs.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
