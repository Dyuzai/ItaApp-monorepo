import SidebarContent from "./SidebarContent"

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#070A13] border-r border-white/10">
      <SidebarContent />
    </aside>
  )
}
