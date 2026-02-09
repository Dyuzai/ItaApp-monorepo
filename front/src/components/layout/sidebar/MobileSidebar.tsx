"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarContent from "./SidebarContent"

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-0 w-72 bg-[#070A13] border-r border-white/10"
      >
        <div className="h-full flex flex-col">
          <SidebarContent />
        </div>
      </SheetContent>
    </Sheet>
  )
}
