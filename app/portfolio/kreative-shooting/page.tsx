"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock, Camera, Users, Award, Eye, Palette } from "lucide-react"
import { useEffect, useState } from "react"
import { PolaroidGallery } from "@/components/polaroid-gallery"

export default function KreativeShootingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    { id: 1, src: "/artistic-portrait-bw.png", alt: "Kreatives Shooting 1" },
    { id: 2, src: "/creative-portrait.png", alt: "Kreatives Shooting 2" },
    { id: 3, src: "/fashion-portrait.png", alt: "Kreatives Shooting 3" },
    { id: 4, src: "/professional-photographer-portrait.png", alt: "Kreatives Shooting 4" },
    { id: 5, src: "/outdoor-portrait.png", alt: "Kreatives Shooting 5" },
    { id: 6, src: "/studio-portrait-lighting.png", alt: "Kreatives Shooting 6" },
    { id: 7, src: "/professional-business-portrait.png", alt: "Kreatives Shooting 7" },
    { id: 8, src: "/professional-headshot.png", alt: "Kreatives Shooting 8" },
    { id: 9, src: "/natural-light-portrait.png", alt: "Kreatives Shooting 9" },
    { id: 10, src: "/corporate-portrait.png", alt: "Kreatives Shooting 10" },
    { id: 11, src: "/creative-content-photography.png", alt: "Kreatives Shooting 11" },
    { id: 12, src: "/professional-photographer-studio.png", alt: "Kreatives Shooting 12" },
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
      <section className="py-20 bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-gold rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gold rounded-full" />
        </div>

        <div className="container-cinematic relative z-10">
          <div className={`mb-8 ${isVisible ? "animate-cinematic-slide-in" : ""}`}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">PORTFOLIO</div>
            <h1 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold">
              Kreative Shootings
            </h1>
            <p className="text-white/90 mb-8 max-w-4xl font-light leading-relaxed">
              Künstlerische und konzeptuelle Fotografie für besondere Projekte. Individuelle Konzepte, kreative 
              Bildbearbeitung und künstlerische Umsetzung Ihrer Visionen.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button
                asChild
                size="lg"
                className="px-12 py-6 btn-primary text-lg"
              >
                <Link href="/kontakt"><span>Kreatives Shooting buchen</span></Link>
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
      <PolaroidGallery 
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
                  "Individuelle Konzeptentwicklung",
                  "Kreative Bildbearbeitung und Retusche",
                  "Professionelle Requisiten und Styling",
                  "Künstlerische Umsetzung Ihrer Ideen",
                  "Einzigartige, unverwechselbare Ergebnisse",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-black" />
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
                  { title: "Kreativ Basic", price: "300€", duration: "2 Stunden Shooting", images: "8 bearbeitete Bilder" },
                  { title: "Kreativ Standard", price: "500€", duration: "4 Stunden Shooting", images: "15 bearbeitete Bilder" },
                  { title: "Kreativ Premium", price: "750€", duration: "6 Stunden Shooting", images: "25 bearbeitete Bilder" },
                ].map((pkg, index) => (
                  <div
                    key={pkg.title}
                    className={`glass-dark rounded-2xl p-8 hover-gold-lift ${
                      isVisible ? "animate-cinematic-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${2.0 + index * 0.2}s` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                        <Palette className="h-6 w-6 text-black" />
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
              Kreativität ohne Grenzen
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                number: "100%",
                title: "Individuell",
                description: "Jedes Shooting ist einzigartig und auf Ihre Vision zugeschnitten"
              },
              {
                icon: Award,
                number: "50+",
                title: "Kreative Projekte",
                description: "Erfolgreich umgesetzte künstlerische Fotoprojekte"
              },
              {
                icon: Camera,
                number: "∞",
                title: "Möglichkeiten",
                description: "Unbegrenzte kreative Möglichkeiten und Ideen"
              },
            ].map((stat, index) => (
              <div
                key={stat.title}
                className={`text-center glass-dark rounded-2xl p-8 hover-gold-lift ${
                  isVisible ? "animate-cinematic-slide-up" : ""
                }`}
                style={{ animationDelay: `${2.8 + index * 0.2}s` }}
              >
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-black" />
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
              BEREIT FÜR IHR KREATIVES SHOOTING?
            </div>
            <h2 className="font-light tracking-wide mb-8 text-cinematic text-glow">
              Lassen Sie uns Ihre
              <span className="block text-gold">Kreativität entfesseln</span>
            </h2>
            <p className="text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch und verwirklichen Sie Ihre künstlerischen Visionen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="px-16 py-8 gradient-gold text-black hover:gradient-gold-dark transition-all duration-500 hover-gold-lift text-xl font-medium tracking-wide animate-gold-glow"
              >
                <Link href="/kontakt"><span>Kreatives Shooting buchen</span></Link>
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
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
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
