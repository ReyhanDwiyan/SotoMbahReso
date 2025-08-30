import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Star, Clock, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          src="/steaming-bowl-of-indonesian-soto-soup-with-herbs-a.png"
          alt="Soto Hangat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Harga Murah, Rasa Bintang Lima</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Nikmati kelezatan soto tradisional dengan resep keluarga turun-temurun sejak 1998
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link href="/menu">Lihat Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Link href="/pesan">Pesan Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mengapa Memilih Soto Mbah Reso?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lebih dari 25 tahun melayani dengan dedikasi dan cita rasa autentik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Resep Turun-Temurun</h3>
                <p className="text-muted-foreground">
                  Resep rahasia keluarga yang telah diwariskan selama puluhan tahun
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🥄</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Bahan Berkualitas</h3>
                <p className="text-muted-foreground">
                  Menggunakan bahan-bahan segar dan berkualitas tinggi setiap hari
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Harga Terjangkau</h3>
                <p className="text-muted-foreground">Cita rasa premium dengan harga yang ramah di kantong</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Menu Favorit Kami</h2>
            <p className="text-lg text-muted-foreground">Pilihan soto terbaik dengan cita rasa yang tak terlupakan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Link href="https://gofood.link/a/QZudouL" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow cursor-pointer">
                <img src="/SotoAyam.jpg" alt="Soto Ayam" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Soto Ayam</h3>
                  <p className="text-muted-foreground mb-3">Soto khas dengan kuah bening dan ayam empuk</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">Rp20.000</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://gofood.link/a/QZudouL" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <img src="/SotoSapi.jpg" alt="Soto Daging" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Soto Sapi</h3>
                <p className="text-muted-foreground mb-3">Daging sapi pilihan dengan kuah yang kaya rasa</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">Rp20.000</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>

            <Link href="https://gofood.link/a/QZudouL" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <img src="/SateParu.jpg" alt="Soto Babat" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Sate Paru</h3>
                <p className="text-muted-foreground mb-3">Sate paru yang empuk dengan bumbu rempah yang khas</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">Rp11.000</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/menu">Lihat Menu Lengkap</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kata Pelanggan Kami</h2>
            <p className="text-lg text-muted-foreground">Testimoni dari pelanggan setia Soto Mbah Reso</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-border">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Rasa sotonya bikin nagih, porsinya pas, harganya ramah banget. Sudah jadi langganan keluarga kami!"
                </p>
                <p className="font-semibold text-foreground">- Andi, Pelanggan Setia</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Tempatnya sederhana tapi bersih, cocok buat makan siang. Soto ayamnya juara!"
                </p>
                <p className="font-semibold text-foreground">- Sari, Karyawan Kantor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Spesial Jumat!</h2>
          <p className="text-xl mb-8 opacity-90">50 Porsi Soto Mbah Reso Gratis Setiap Jumat! Jangan lewatkan kesempatan untuk menikmati</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-lg">
              <Clock className="h-5 w-5 mr-2" />
              <span>Berlaku setiap hari Jumat</span>
            </div>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link href="/pesan">Pesan Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kunjungi Kami</h2>
            <p className="text-lg text-muted-foreground">Lokasi strategis di jantung kota Bandung</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="p-6 border-border">
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                        <p className="text-muted-foreground">blok G no, Jl. Jend. Sudirman No.114, Baros, Kec. Cimahi Tengah, Kota Cimahi, 40521</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Jam Buka</h3>
                        <p className="text-muted-foreground">08:00 - 21:00 WIB</p>
                        <p className="text-sm text-muted-foreground">Buka setiap hari</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/kontak">Hubungi Kami</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative w-full h-96">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63319.23262599244!2d107.541934!3d-6.8729776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e1e5e7b6e8e3%3A0x7e4e6c7e6b7e6e7e!2sJl.%20Jend.%20Sudirman%20No.114%2C%20Baros%2C%20Kec.%20Cimahi%20Tengah%2C%20Kota%20Cimahi%2C%20Jawa%20Barat%2040521!5e0!3m2!1sid!2sid!4v1718000000000!5m2!1sid!2sid"
                  width="100%"
                  height="384"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                  />
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
