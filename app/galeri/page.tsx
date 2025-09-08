import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const galleryImages = [
  {
    src: "/Foto1.jpg",
    alt: "Foto Tempat",
  },
  {
    src: "/Foto2.jpg",
    alt: "Pelanggan menikmati soto",
  },
  {
    src: "/Foto3.jpg",
    alt: "Suasana warung yang hangat",
  },
  {
    src: "/Foto4.jpg",
    alt: "Proses memasak soto",
  },
  {
    src: "/Foto5.jpg",
    alt: "Soto Ayam dengan pelengkap",
  },
  {
    src: "/Foto6.jpg",
    alt: "Es Teh Manis Segar",
  },
  {
    src: "/Foto7.jpg",
    alt: "",
  },
  {
    src: "/Foto8.jpg",
    alt: "",
  },
  {
    src: "/Foto9.jpg",
    alt: "",
  },
  {
    src: "/Foto10.jpg",
    alt: "",
  },
  {
    src: "/Foto11.jpg",
    alt: "",
  },
  {
    src: "/Foto12.jpg",
    alt: "",
  },
  {
    src: "/Foto13.jpg",
    alt: "",
  },
  {
    src: "/Foto14.jpg",
    alt: "",
  },
  {
    src: "/Foto15.jpg",
    alt: "",
  },

]

export default function GaleriPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Kami</h1>
          <p className="text-xl opacity-90">Lihat suasana hangat dan kelezatan soto kami</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src || "./placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg"></h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Rasakan Sendiri Kelezatannya</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Kunjungi warung kami dan nikmati pengalaman kuliner yang tak terlupakan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Kunjungi Kami
            </a>
            <a
              href="/menu"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-md hover:bg-muted transition-colors font-medium"
            >
              Lihat Menu
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
