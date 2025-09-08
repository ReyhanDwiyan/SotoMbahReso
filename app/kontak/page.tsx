import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontak & Lokasi</h1>
          <p className="text-xl opacity-90">Hubungi kami atau kunjungi langsung warung kami</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Informasi Kontak</h2>

              <div className="space-y-6">
                <Card className="p-6 border-border">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Alamat</h3>
                        <p className="text-muted-foreground">
                          blok G no, Jl. Jend. Sudirman No.114, Baros, Kec. Cimahi Tengah, Kota Cimahi, 40521
                          <br />
                          Jawa Barat, Indonesia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-border">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Telepon & WhatsApp</h3>
                        <p className="text-muted-foreground mb-3">0882-1848-3729</p>
                        <a
                          href="https://wa.me/6288218483729"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Chat WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-border">
                  <CardContent className="pt-0">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Senin - Minggu: 08:00 - 21:00 WIB</p>
                          <p className="text-sm text-green-600 font-medium">Buka setiap hari</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-border">
                  <CardContent className="pt-0">
                  <div className="flex items-start space-x-4">
                    <img
                    src="./gofood-logo.png"
                    alt="GoFood"
                    className="h-6 w-6 mt-1 flex-shrink-0 rounded"
                    />
                    <div>
                    <h3 className="font-semibold text-foreground mb-2">GoFood</h3>
                    <p className="text-muted-foreground mb-3">Ssb Soto Seger Boyolali Mbah Reso Cimahi, Jl. Jend. Sudirman</p>
                      <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                        <a href="https://gofood.link/a/QZudouL">
                        Buka GoFood
                        </a>
                      </Button>
                    </div>
                  </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Lokasi Kami</h2>

              <Card className="overflow-hidden border-border">
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
                <CardContent className="p-6">
                  <a
                    href="https://maps.app.goo.gl/az9NcFrmry2RVNoa8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Buka di Google Maps
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* <div className="mt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Cara Menuju Lokasi</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Dari Stasiun Bandung: 10 menit berkendara</p>
                  <p>• Dari Terminal Leuwi Panjang: 15 menit berkendara</p>
                  <p>• Dekat dengan Alun-alun Bandung</p>
                  <p>• Tersedia parkir motor dan mobil</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      {/* <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Spesial Jumat!</h2>
          <p className="text-lg text-muted-foreground mb-8">
            50 Porsi Soto 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <MessageCircle className="h-5 w-5 mr-2" />
              Pesan via WhatsApp
            </Button>
            <Button size="lg" variant="outline">
              Lihat Menu Lengkap
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
