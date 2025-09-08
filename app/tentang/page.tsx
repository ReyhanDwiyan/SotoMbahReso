import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl opacity-90">Cerita di balik kelezatan soto tradisional kami</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Sejarah Kami</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Toko Soto Mbah Reso berdiri sejak 1998 dengan resep keluarga turun-temurun yang telah diwariskan dari
                  generasi ke generasi. Dimulai dari sebuah warung kecil di pinggir jalan, kami bertekad untuk
                  menyajikan soto dengan cita rasa autentik Indonesia.
                </p>
                <p>
                  Pak Budi, pendiri kami, memulai usaha ini dengan modal seadanya namun dengan semangat yang besar untuk
                  memperkenalkan kelezatan soto tradisional kepada masyarakat Bandung. Dengan dedikasi dan kerja keras,
                  warung kecil kami berkembang menjadi tempat favorit para pecinta kuliner.
                </p>
                <p>
                  Hingga kini, lebih dari 25 tahun kemudian, kami tetap mempertahankan resep asli dan kualitas
                  bahan-bahan terbaik untuk setiap mangkuk soto yang kami sajikan.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <img src="/SotoMbahReso/Foto1.jpg" alt="Pak Budi di dapur" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visi & Misi Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-border">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-foreground">Visi</h3>
                </div>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Menjadi warung soto terdepan di Bandung yang dikenal karena kelezatan, kualitas, dan pelayanan
                  terbaik, sambil melestarikan cita rasa tradisional Indonesia untuk generasi mendatang.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-border">
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-foreground">Misi</h3>
                </div>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Menyajikan soto yang lezat, higienis, dan ramah di kantong dengan menggunakan bahan-bahan berkualitas
                  tinggi dan resep tradisional yang telah teruji waktu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-muted-foreground">Prinsip yang kami pegang teguh dalam melayani pelanggan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🍲</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Kualitas</h3>
              <p className="text-muted-foreground">Kami tidak pernah berkompromi dengan kualitas bahan dan cita rasa</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Pelayanan</h3>
              <p className="text-muted-foreground">Melayani setiap pelanggan dengan ramah dan penuh perhatian</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tradisi</h3>
              <p className="text-muted-foreground">Melestarikan resep dan tradisi kuliner Indonesia yang autentik</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
