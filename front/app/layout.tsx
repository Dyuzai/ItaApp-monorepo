import type { Metadata } from "next"
import "./globals.css"
import AppShell from "@/components/layout/sidebar/AppShell"

export const metadata: Metadata = {
  title: "DevLink",
  description: "DevLink - feed de devs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
