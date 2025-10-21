"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock, Camera, Users, Award, Eye, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { BrickGallery } from "@/components/brick-gallery"

export default function KinderUndFamiliePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    { id: 1, src: "/happy-family-outdoors.png", alt: "Familie 1" },
    { id: 2, src: "/natural-light-portrait.png", alt: "Familie 2" },
    { id: 3, src: "/outdoor-portrait.png", alt: "Familie 3" },
    { id: 4, src: "/professional-photographer-portrait.png", alt: "Familie 4" },
    { id: 5, src: "/creative-portrait.png", alt: "Familie 5" },
    { id: 6, src: "/studio-portrait-lighting.png", alt: "Familie 6" },
    { id: 7, src: "/artistic-portrait-bw.png", alt: "Familie 7" },
    { id: 8, src: "/professional-headshot.png", alt: "Familie 8" },
    { id: 9, src: "/professional-business-portrait.png", alt: "Familie 9" },
    { id: 10, src: "/corporate-portrait.png", alt: "Familie 10" },
    { id: 11, src: "/fashion-portrait.png", alt: "Familie 11" },
    { id: 12, src: "/professional-photographer-studio.png", alt: "Familie 12" },
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="pt-24 bg-dark">
      {/* Hero Section */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic relative z-10">
          <div className={`mb-8 ${isVisible ? "animate-cinematic-slide-in" : ""}`}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">PORTFOLIO</div>
            <h1 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold">
              Kinder & Familie
            </h1>
            <p className="text-white/90 mb-8 max-w-4xl font-light leading-relaxed">
              Liebevolle Familienporträts und Kinderfotos in entspannter Atmosphäre. Natürliche Familienmomente, 
              in denen sich alle wohlfühlen und authentisch sein können.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button
                asChild
                size="lg"
                className="px-12 py-6 btn-primary text-lg"
              >
                <Link href="/kontakt"><span>Familien-Shooting buchen</span></Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="px-12 py-6 btn-primary text-lg"
              >
                <Link href="/leistungen"><span>Alle Leistungen</span></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <BrickGallery
        images={images}
        isVisible={isVisible}
        onImageClick={setSelectedImage}
      />

      {/* Info Section */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`${isVisible ? "animate-cinematic-slide-in" : ""}`} style={{ animationDelay: "1.6s" }}>
              <h2 className="text-4xl font-light mb-8 text-white text-cinematic accent-line-gold">Was Sie erwartet</h2>
              <ul className="space-y-6 text-white/80 font-light">
                {[
                  "Natürliche Familienmomente in entspannter Atmosphäre",
                  "Kinderfreundliche Umgebung und geduldiges Vorgehen",
                  "Spielerische Herangehensweise für authentische Bilder",
                  "Verschiedene Locations: Studio, Outdoor oder zu Hause",
                  "Hochwertige Bildbearbeitung inklusive",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 border border-gold/40 rounded-md flex items-center justify-center mt-1 flex-shrink-0 bg-gold/5">
                      <Check className="h-4 w-4 text-gold stroke-[2]" />
                    </div>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={`${isVisible ? "animate-cinematic-slide-in-right" : ""}`} style={{ animationDelay: "1.8s" }}>
              <h2 className="text-4xl font-light mb-8 text-white text-cinematic accent-line-gold">Preise & Pakete</h2>
              <div className="space-y-6">
                {[
                  { title: "Familie Basic", price: "200€", duration: "1.5 Stunden Shooting", images: "15 bearbeitete Bilder" },
                  { title: "Familie Standard", price: "350€", duration: "2.5 Stunden Shooting", images: "25 bearbeitete Bilder" },
                  { title: "Familie Premium", price: "500€", duration: "3.5 Stunden Shooting", images: "40 bearbeitete Bilder" },
                ].map((pkg, index) => (
                  <div
                    key={pkg.title}
                    className={`group glass-dark rounded-2xl p-8 hover-gold-lift ${
                      isVisible ? "animate-cinematic-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${2.0 + index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 border border-gold/30 rounded-lg flex items-center justify-center group-hover:border-gold/60 transition-all duration-500">
                        <Heart className="h-6 w-6 text-gold/70 stroke-[1.5] group-hover:text-gold/90 transition-colors duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-lg group-hover:from-gold/10 transition-all duration-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-white text-cinematic">{pkg.title}</h3>
                        <div className="text-2xl font-light text-gold">{pkg.price}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 font-light">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 font-light mt-2">
                      <Users className="h-4 w-4" />
                      <span>{pkg.images}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div
            className={`text-center mb-16 ${isVisible ? "animate-cinematic-slide-around" : ""}`}
            style={{ animationDelay: "2.6s" }}
          >
            <h2 className="font-light tracking-wide text-white text-cinematic accent-line-gold">
              Familienmomente für die Ewigkeit
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                number: "100%",
                title: "Natürlich",
                description: "Authentische Momente ohne gestellte Posen"
              },
              {
                icon: Users,
                number: "200+",
                title: "Glückliche Familien",
                description: "Zufriedene Familien mit wunderschönen Erinnerungen"
              },
              {
                icon: Camera,
                number: "∞",
                title: "Emotionen",
                description: "Unvergessliche Momente voller Liebe und Freude"
              },
            ].map((stat, index) => (
              <div
                key={stat.title}
                className={`group text-center glass-dark rounded-2xl p-8 hover-gold-lift ${
                  isVisible ? "animate-cinematic-slide-up" : ""
                }`}
                style={{ animationDelay: `${2.8 + index * 0.2}s` }}
              >
                <div className="relative w-16 h-16 border border-gold/30 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:border-gold/60 transition-all duration-500">
                  <stat.icon className="h-7 w-7 text-gold/70 stroke-[1.5] group-hover:text-gold/90 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-lg group-hover:from-gold/10 transition-all duration-500" />
                </div>
                <div className="text-4xl font-light text-gold mb-4 text-cinematic">{stat.number}</div>
                <h3 className="text-xl font-light mb-4 text-white text-cinematic">{stat.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-cinematic text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold/5 to-transparent" />
        </div>

        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`} style={{ animationDelay: "3.4s" }}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-6 text-dramatic">
              BEREIT FÜR IHR FAMILIEN-SHOOTING?
            </div>
            <h2 className="font-light tracking-wide mb-8 text-cinematic text-glow">
              Lassen Sie uns Ihre
              <span className="block text-gold">Familienmomente festhalten</span>
            </h2>
            <p className="text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch und planen Sie Ihr perfektes Familien-Shooting.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="px-16 py-6 btn-primary text-xl"
              >
                <Link href="/kontakt"><span>Familien-Shooting buchen</span></Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="px-12 py-6 btn-primary text-lg"
              >
                <Link href="/leistungen"><span>Alle Leistungen</span></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-white hover:glass-gold transition-all duration-300"
            >
              ×
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-white hover:glass-gold transition-all duration-300"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-white hover:glass-gold transition-all duration-300"
            >
              ›
            </button>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-white/80 font-light">{images[selectedImage].alt}</p>
              <p className="text-gold text-sm font-light mt-2">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
