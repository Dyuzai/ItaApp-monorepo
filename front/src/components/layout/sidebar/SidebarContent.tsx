"use client"

import { Home, PlusSquare, Hash } from "lucide-react"
import SidebarButton from "./SidebarButton"

const MAIN = [
  { title: "Página inicial", href: "/feed", icon: Home },
  { title: "Criar postagem", href: "/post/new", icon: PlusSquare },
]

const POPULAR = [
  { title: "REACT", href: "/tags/react", icon: Hash },
  { title: "RUST", href: "/tags/rust", icon: Hash },
  { title: "TYPESCRIPT", href: "/tags/typescript", icon: Hash },
  { title: "DEVOPS", href: "/tags/devops", icon: Hash },
]

export default function SidebarContent() {
  return (
    <>
      <div className="h-16 px-5 flex items-center gap-3 border-b border-white/10">
        <div className="h-9 w-9 rounded-xl bg-indigo-600/20 grid place-items-center ring-1 ring-indigo-500/30">
          <span className="text-indigo-200 font-semibold">{">"}</span>
        </div>
        <span className="text-white font-semibold tracking-wide">DEVLINK</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-6 overflow-y-auto">
        <div className="space-y-2">
          {MAIN.map((item) => (
            <SidebarButton key={item.href} {...item} />
          ))}
        </div>

        <div className="pt-2">
          <p className="px-2 text-[11px] font-semibold tracking-widest text-slate-500">
            POPULARES
          </p>
          <div className="mt-2 space-y-2">
            {POPULAR.map((item) => (
              <SidebarButton key={item.href} {...item} />
            ))}
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
          <p className="text-xs text-slate-300">Logado como</p>
          <p className="text-sm text-white font-medium truncate">Perfil</p>
        </div>
      </div>
    </>
  )
}
