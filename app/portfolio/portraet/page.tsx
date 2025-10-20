"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock, Camera, Users, Award } from "lucide-react"
import { useEffect, useState } from "react"
import PortraitSwiper from "@/components/portrait-swiper"

export default function PortraetPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    { id: 1, src: "/images/daria-portrait.jpg", alt: "Professionelles Porträt" },
    { id: 2, src: "/images/partnerin_daria.webp", alt: "Kreatives Porträt" },
    { id: 3, src: "/professional-business-portrait.png", alt: "Business Porträt" },
    { id: 4, src: "/creative-portrait.png", alt: "Kreatives Porträt" },
    { id: 5, src: "/outdoor-portrait.png", alt: "Outdoor Porträt" },
    { id: 6, src: "/studio-portrait-lighting.png", alt: "Studio Porträt" },
    { id: 7, src: "/artistic-portrait-bw.png", alt: "Künstlerisches Porträt" },
    { id: 8, src: "/professional-headshot.png", alt: "Professionelles Headshot" },
    { id: 9, src: "/natural-light-portrait.png", alt: "Natürliches Licht Porträt" },
    { id: 10, src: "/fashion-portrait.png", alt: "Fashion Porträt" },
    { id: 11, src: "/corporate-portrait.png", alt: "Corporate Porträt" },
  ]

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
              Porträt Fotografie
            </h1>
            <p className="text-white/90 mb-8 max-w-4xl font-light leading-relaxed">
              Authentische Porträts, die Ihre Persönlichkeit zum Ausdruck bringen. Von Business-Headshots bis hin zu 
              kreativen Porträts - ich fange Ihre einzigartige Ausstrahlung ein.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button
                asChild
                size="lg"
                className="px-12 py-6 btn-primary text-lg"
              >
                <Link href="/kontakt"><span>Porträt-Shooting buchen</span></Link>
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

      {/* Portfolio Gallery - 3D Swiper */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div
            className={`text-center mb-16 ${isVisible ? "animate-cinematic-slide-up" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="font-light tracking-wide text-white text-cinematic accent-line-gold mb-8">
              Unsere Porträt-Galerie
            </h2>
            <p className="text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              Entdecken Sie unsere vielfältigen Porträt-Stile und lassen Sie sich von der Qualität unserer Arbeit überzeugen.
            </p>
          </div>
          
          <div className={`${isVisible ? "animate-cinematic-fade-in" : ""}`} style={{ animationDelay: "0.6s" }}>
            <PortraitSwiper images={images} />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`${isVisible ? "animate-cinematic-slide-in" : ""}`} style={{ animationDelay: "1.6s" }}>
              <h2 className="text-4xl font-light mb-8 text-white text-cinematic accent-line-gold">Was Sie erwartet</h2>
              <ul className="space-y-6 text-white/80 font-light">
                {[
                  "Professionelle Studio- oder Outdoor-Aufnahmen",
                  "Individuelle Beratung zu Styling und Outfit",
                  "Entspannte und professionelle Atmosphäre",
                  "Hochwertige Bildbearbeitung inklusive",
                  "Digitale Galerie mit allen finalen Bildern",
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
                  { title: "Basic Paket", price: "150€", duration: "30 Min Shooting", images: "5 bearbeitete Bilder" },
                  { title: "Standard Paket", price: "250€", duration: "60 Min Shooting", images: "10 bearbeitete Bilder" },
                  { title: "Premium Paket", price: "350€", duration: "90 Min Shooting", images: "15 bearbeitete Bilder" },
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
                        <Camera className="h-6 w-6 text-black" />
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
              Warum mich wählen?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                number: "10+",
                title: "Jahre Erfahrung",
                description: "Langjährige Expertise in professioneller Porträtfotografie"
              },
              {
                icon: Users,
                number: "500+",
                title: "Zufriedene Kunden",
                description: "Empfehlungen durch herausragende Ergebnisse"
              },
              {
                icon: Camera,
                number: "1000+",
                title: "Porträts erstellt",
                description: "Von Business-Headshots bis zu kreativen Porträts"
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
              BEREIT FÜR IHR PORTRÄT-SHOOTING?
            </div>
            <h2 className="font-light tracking-wide mb-8 text-cinematic text-glow">
              Lassen Sie uns Ihre
              <span className="block text-gold">Individualität festhalten</span>
            </h2>
            <p className="text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch und planen Sie Ihr perfektes Porträt-Shooting.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="px-16 py-6 gradient-gold text-black hover:gradient-gold-dark transition-all duration-500 hover-gold-lift text-xl font-medium tracking-wide animate-gold-glow"
              >
                <Link href="/kontakt"><span>Porträt-Shooting buchen</span></Link>
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
    </div>
  )
}