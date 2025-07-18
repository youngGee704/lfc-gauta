"use client"

import { cn } from "@/lib/utils"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  toastMessage?: string
}

export function CopyButton({ value, toastMessage = "Copied!", className, ...props }: CopyButtonProps) {
  const { toast } = useToast()
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setHasCopied(true)
    toast({
      title: toastMessage,
      description: "God bless you!",
      duration: 2000,
    })
  }

  return (
    <Button variant="outline" size="sm" className={cn("relative", className)} onClick={handleCopy} {...props}>
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <Check className="h-4 w-4 transition-all duration-300 ease-in-out" />
      ) : (
        <Copy className="h-4 w-4 transition-all duration-300 ease-in-out" />
      )}
    </Button>
  )
}
