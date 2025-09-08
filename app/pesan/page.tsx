import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react"

export default function PesanPage() {
  const whatsappMessage = encodeURIComponent(
    "Halo Soto Mbah Reso! Saya ingin memesan soto. Mohon info menu dan harga terbaru. Terima kasih!",
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pesan Sekarang</h1>
          <p className="text-xl opacity-90">Nikmati kelezatan soto kami dengan mudah</p>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Cara Memesan</h2>
            <p className="text-lg text-muted-foreground">Pilih cara yang paling mudah untuk Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp Order */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-0 text-center">
                <div className="text-5xl mb-6">📱</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Pesan via WhatsApp</h3>
                <p className="text-muted-foreground mb-6">
                  Cara tercepat dan termudah untuk memesan. Chat langsung dengan kami untuk konfirmasi pesanan dan
                  pengantaran.
                </p>
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a
                    href={`https://wa.me/6288218483729?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone Order */}
            <Card className="p-8 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-0 text-center">
                <img src="./Gofood-Emblem.png" alt="Gofood Emblem" className="w-30 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Pesan via GoFood</h3>
                <p className="text-muted-foreground mb-6">
                  Pesan melalui aplikasi GoFood untuk pengantaran cepat dan mudah.
                </p>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="https://gofood.link/a/QZudouL">
                    <Phone className="h-5 w-5 mr-2" />
                    Buka GoFood
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Atau Kunjungi Langsung</h2>
            <p className="text-lg text-muted-foreground">Nikmati pengalaman makan langsung di warung kami</p>
          </div>

          <Card className="p-8 border-border">
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                      <p className="text-muted-foreground">blok G no, Jl. Jend. Sudirman No.114, Baros, Kec. Cimahi Tengah, Kota Cimahi, 40521</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Jam Buka</h3>
                      <p className="text-muted-foreground">08:00 - 21:00 WIB</p>
                      <p className="text-sm text-green-600 font-medium">Buka setiap hari</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏪</div>
                    <p className="text-muted-foreground">Suasana hangat dan nyaman menanti Anda</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Menu Favorit</h2>
            <p className="text-lg text-muted-foreground">Pilihan terpopuler dari pelanggan kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-border">
              <img src="./indonesian-soto-ayam-chicken-soup-with-clear-broth.png" alt="Soto Ayam" className="w-full h-48 object-cover" />
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Soto Ayam</h3>
                <p className="text-2xl font-bold text-primary mb-3">Rp.000</p>
                <p className="text-muted-foreground text-sm">Soto khas dengan kuah bening</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border">
              <img src="./indonesian-soto-daging-beef-soup-with-rich-broth.png" alt="Soto Daging" className="w-full h-48 object-cover" />
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Soto Daging</h3>
                <p className="text-2xl font-bold text-primary mb-3">Rp20.000</p>
                <p className="text-muted-foreground text-sm">Daging sapi pilihan</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border">
              <img src="./indonesian-soto-babat-tripe-soup-with-spices.png" alt="Soto Babat" className="w-full h-48 object-cover" />
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Soto Babat</h3>
                <p className="text-2xl font-bold text-primary mb-3">Rp22.000</p>
                <p className="text-muted-foreground text-sm">Babat empuk + kuah gurih</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
