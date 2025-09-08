"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { getImagePath } from "@/lib/env-config"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={getImagePath("/Logo.png")}
              alt="Logo Soto Segar Boyolali"
              className="h-10 w-10 rounded-full bg-white border border-border"
            />
            <span className="text-xl font-bold text-foreground">Soto Mbah Reso</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link href="/tentang" className="text-foreground hover:text-primary transition-colors">
              Tentang Kami
            </Link>
            <Link href="/menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/galeri" className="text-foreground hover:text-primary transition-colors">
              Galeri
            </Link>
            <Link href="/kontak" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/pesan">Pesan Sekarang</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/tentang"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                href="/menu"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/galeri"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Galeri
              </Link>
              <Link
                href="/kontak"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/pesan" onClick={() => setIsOpen(false)}>
                    Pesan Sekarang
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
