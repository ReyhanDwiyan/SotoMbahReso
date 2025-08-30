import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuItems = [
  {
    category: "Makanan",
    items: [
      {
        name: "Soto Ayam",
        price: "Rp20.000",
        description: "Soto Ayam Tanpa Nasi",
        image: "/SotoAyam.jpg",
      },
      {
        name: "Soto Sapi",
        price: "Rp20.000",
        description: "Soto Sapi Tanpa Nasi",
        image: "/SotoSapi.jpg",
      },
      {
        name: "Sop Daging Sapi",
        price: "Rp25.000",
        description: "Sop Daging Sapi Tanpa Nasi",
        image: "/SopDagingSapi.jpg",
      },
      {
        name: "Sop Ayam Paha Bawah",
        price: "Rp18.000",
        description: "Sop Ayam Paha Bawah Tanpa Nasi",
        image: "/SopAyamPahaBawah.jpg",
      },
      {
        name: "Sop Ayam Paha Atas",
        price: "Rp24.000",
        description: "Sop Ayam Paha Atas Tanpa Nasi",
        image: "/SopAyamPahaAtas.jpg",
      },
      {
        name: "Sop Ayam Sayap",
        price: "Rp18.000",
        description: "Sop Ayam Sayap Tanpa Nasi",
        image: "/SopAyamSayap.jpg",
      },
      {
        name: "Sop Ayam Dada",
        price: "Rp24.000",
        description: "Sop Ayam Dada Tanpa Nasi",
        image: "/SopAyamDada.jpg",
      },
      {
        name: "Nasi Putih",
        price: "Rp6.000",
        description: "Nasi Putih Hangat",
        image: "/Nasi.jpg",
      },
    ],
  },
  {
    category: "Tambahan",
    items: [
      {
        name: "Perkedel",
        price: "Rp3.000",
        description: "Perkedel kentang ",
        image: "/Perkedel.jpg",
      },
      {
        name: "Sate Kerang",
        price: "Rp7.500",
        description: "Sate Kerang Gurih",
        image: "/SateKerang.jpg",
      },
      {
        name: "Tahu Bacem",
        price: "Rp4.000",
        description: "Tahu Bacem Gurih",
        image: "/Tahu.jpg",
      },
      {
        name: "Tempe Isi",
        price: "Rp3.000",
        description: "Tempe Isi Toge dan Wortel",
        image: "/TahuIsi.jpg",
      },
      {
        name: "Tempe Bacem",
        price: "Rp4.000",
        description: "Tempe Bacem Goreng Gurih",
        image: "/Tempe.jpg",
      },
      {
        name: "Sate Usus",
        price: "Rp8.500",
        description: "Sate Usus Bumbu Bacem",
        image: "/SateUsus.jpg",
      },
      {
        name: "Sate Paru",
        price: "Rp11.000",
        description: "Sate Paru Bumbu Bacem",
        image: "/SateParu.jpg",
      },
      {
        name: "Sate Telur Puyuh",
        price: "Rp7.500",
        description: "Sate Telur Puyuh Bumbu Bacem",
        image: "/SateTelurPuyuh.jpg",
      },
    ],
  },
  {
    category: "Minuman",
    items: [
      {
        name: "Es Lemon Tea",
        price: "Rp8.500",
        description: "Es Lemon Tea Manis",
        image: "/EsLemonTea.jpg",
      },
      {
        name: "Es Jeruk Peras",
        price: "Rp8.500",
        description: "Es Jeruk Peras Manis",
        image: "/EsJerukPeras.jpg",
      },
      {
        name: "Es Teh",
        price: "Rp7.500",
        description: "Es Teh Manis",
        image: "/EsTeh.jpg",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Menu Kami</h1>
          <p className="text-xl opacity-90">Pilihan soto terbaik dengan cita rasa autentik Indonesia</p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{category.category}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <Button className="w-full bg-primary hover:bg-primary/90">Pesan Sekarang</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Siap Memesan?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Hubungi kami sekarang untuk memesan atau kunjungi langsung toko kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/pesan">Pesan via WhatsApp</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/kontak">Lihat Lokasi</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
