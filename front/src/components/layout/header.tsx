import Link from "next/link"
import { Bell, Search, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050814]/80 backdrop-blur">
      <div className="flex h-16 items-center gap-6 px-6">
        
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 text-white font-bold">
            &gt;_
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">
            DEVLINK
          </span>
        </Link>

        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
            <input
              placeholder="Buscar no DevLink..."
              className="h-10 w-full rounded-full border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="gap-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            <Sun className="h-4 w-4 text-yellow-400" />
            <span className="text-xs tracking-wide">LIGHTSIDE</span>
          </Button>

          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            className="flex items-center gap-2 rounded-full bg-white/5 px-3 text-white hover:bg-white/10"
          >
            <div className="h-7 w-7 rounded-full bg-linear-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-bold">
              P
            </div>
            <span className="text-sm">Perfil</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
