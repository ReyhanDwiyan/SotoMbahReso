import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Soto Seger Boyolali - Soto Hangat, Rasa Nusantara Sejati",
  description:
    "Toko Soto Seger Boyolali - Soto tradisional Indonesia sejak 1998 dengan resep keluarga turun-temurun. Soto ayam, soto daging, dan soto babat yang lezat dan terjangkau.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
