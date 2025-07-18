import { cn } from "@/lib/utils"
import type React from "react"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ children, className, ...props }: SectionWrapperProps) {
  return (
    <section className={cn("py-12 md:py-20 lg:py-28", className)} {...props}>
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  )
}
