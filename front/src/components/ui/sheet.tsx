"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
      className
    )}
    {...props}
  />
))
SheetOverlay.displayName = "SheetOverlay"

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "top" | "bottom" | "left" | "right"
  }
>(({ side = "right", className, children, ...props }, ref) => {
  return (
    <SheetPortal>
      <SheetOverlay />

      <SheetPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 bg-background p-6 shadow-lg transition ease-in-out",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r",
          side === "top" &&
            "inset-x-0 top-0 border-b",
          side === "bottom" &&
            "inset-x-0 bottom-0 border-t",
          className
        )}
        {...props}
      >
        {children}

        <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
          <X className="h-5 w-5" />
        </SheetClose>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
})
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent, SheetClose }
