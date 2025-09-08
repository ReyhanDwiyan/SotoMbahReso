import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="./logo.png" alt="Soto Mbah Reso" className="h-10" />
              <span className="text-xl font-bold text-foreground">Soto Mbah Reso</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Soto tradisional Indonesia sejak 1998 dengan resep keluarga turun-temurun. Menyajikan soto yang lezat,
              higienis, dan ramah di kantong.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <img src="./gofood-logo.png" alt="Soto Mbah Reso" className="h-5 w-5" />
              <span>Soto Seger Boyolali Mbah Reso</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-muted-foreground hover:text-primary transition-colors">
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>blok G no, Jl. Jend. Sudirman No.114, Baros, Kec. Cimahi Tengah, Kota Cimahi, 40521</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>0882-1848-3729</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>08:00 - 21:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Soto Mbah Reso. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
