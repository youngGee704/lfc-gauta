"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string | string[]
  el?: keyof JSX.IntrinsicElements
  className?: string
  once?: boolean
  stagger?: number
  delay?: number
  duration?: number
}

export function AnimatedText({
  text,
  el: Wrapper = "div",
  className,
  once = true,
  stagger = 0.05,
  delay = 0,
  duration = 0.5,
}: AnimatedTextProps) {
  const textArray = Array.isArray(text) ? text : [text]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  }

  return (
    <Wrapper className={cn("overflow-hidden", className)}>
      {textArray.map((line, lineIndex) => (
        <motion.span
          key={lineIndex}
          className="block"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: once, amount: 0.8 }}
        >
          {line.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-1">
              {word.split("").map((char, charIndex) => (
                <motion.span key={charIndex} className="inline-block" variants={itemVariants}>
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.span>
      ))}
    </Wrapper>
  )
}
