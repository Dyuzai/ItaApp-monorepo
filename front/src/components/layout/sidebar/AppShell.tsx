import Sidebar from "@/components/layout/sidebar/Sidebar"
import MobileSidebar from "@/components/layout/sidebar/MobileSidebar"

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050814]">
      
      <Sidebar />

      
      <div className="md:pl-64">

        <div className="h-16 flex items-center px-4 border-b border-white/10 md:hidden">
          <MobileSidebar />
        </div>

        <main className="px-4 py-6">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
