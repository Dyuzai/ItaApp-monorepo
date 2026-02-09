"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  title: string
  icon: any
}

export default function SidebarButton({ href, title, icon: Icon }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const active = pathname === href || pathname.startsWith(href + "/")

  return (
    <Button
      type="button"
      variant={active ? "secondary" : "ghost"}
      className={cn("w-full justify-start gap-3", active && "ring-1 ring-white/10")}
      onClick={() => router.push(href)}
    >
      <Icon className="h-4 w-4" />
      <span className="truncate">{title}</span>
    </Button>
  )
}
