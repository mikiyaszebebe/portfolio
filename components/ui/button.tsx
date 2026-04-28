import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[#d1cfc5] focus-visible:ring-[rgba(209,207,197,0.5)] focus-visible:ring-[3px] aria-invalid:ring-[rgba(181,51,51,0.2)] aria-invalid:border-[#b53333]",
  {
    variants: {
      variant: {
        default: "bg-[#141413] text-[#faf9f5] hover:bg-[#30302e]",
        destructive:
          "bg-[#b53333] text-white hover:bg-[#9f2c2c]",
        outline:
          "border border-[#e8e6dc] bg-[#faf9f5] text-[#141413] shadow-xs hover:bg-[#f0eee6]",
        secondary:
          "bg-[#f0eee6] text-[#4d4c48] hover:bg-[#e8e6dc]",
        ghost:
          "hover:bg-[#f0eee6] hover:text-[#141413]",
        link: "text-[#c96442] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
