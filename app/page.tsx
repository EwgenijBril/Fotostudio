"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook} from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="pt-0 bg-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with cinematic overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-section.jpg"
            alt="Fotograf Studio"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 gradient-overlay" />
        </div>

        <div className="relative z-20 container-cinematic mt-20">
          <div className="flex items-center py-40 lg:pb-14">
            <div className="space-y-8">
              <div className={`${isVisible ? "animate-cinematic-slide-in" : ""}`}>
                <div className="flex justify-center space-x-6 py-10">
                  <a
                    href="https://www.facebook.com/share/1A5NFYNaM6/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-7 w-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://www.instagram.com/daria_golovchenko?igsh=Ym02ZG44OHZ2eWgy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-7 w-7 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
                <h1 className="text-center  font-light tracking-wider text-white text-cinematic leading-none">
                  <span className="block animate-text-reveal text-5xl sm:text-8xl">Daria</span>
                  <span className="block text-glow text-5xl sm:text-8xl" style={{ animationDelay: "0.5s" }}>
                    Golovchenko
                  </span>
                </h1>
                <h2 className="block text-center text-gold font-light tracking-[0.2em] my-4 text-dramatic">
                  FOTOGRAFIE
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-4 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
            <div className={`${isVisible ? "animate-cinematic-slide-in" : ""}`} style={{ animationDelay: "2.6s" }}>
              <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">ÜBER MICH</div>
              <h2 className=" font-light tracking-wide text-white text-cinematic accent-line-gold inline-block">
                Leidenschaft für Perfektion
              </h2>
              <p className="text-white/80 mb-12 leading-relaxed font-light mt-8">
                Seit über einem Jahrzehnt verwandle ich Visionen in unvergessliche Bilder. Jedes Projekt ist eine neue
                Geschichte, die darauf wartet, erzählt zu werden.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-12">
                {[
                  { src: "/professional-portrait.png", alt: "Portrait Foto" },
                  { src: "/creative-content-photography.png", alt: "Content Foto" },
                  { src: "/happy-family-outdoors.png", alt: "Familie Foto" },
                ].map((photo, index) => (
                  <div
                    key={photo.alt}
                    className={`group cursor-pointer ${
                      isVisible ? "animate-cinematic-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${2.8 + index * 0.2}s` }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden cinematic-shadow hover-cinematic">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="px-12 py-6 btn-primary text-lg"
              >
                <Link href="/about-mich"><span>Meine Geschichte</span></Link>
              </Button>
            </div>

            <div className={`flex justify-center ${isVisible ? "animate-cinematic-slide-in-right" : ""}`} style={{ animationDelay: "3s" }}>
              <div className="relative inline-block corner-accent group">
                <div className="relative overflow-hidden cinematic-shadow">
                  <Image 
                    src="/heroDaria.png" 
                    alt="Daria - Fotografin" 
                    width={512} 
                    height={600}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 h-[600px]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Services Section */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">

        <div className="container-cinematic relative z-10">
          <div
            className={`text-center mb-20 ${isVisible ? "animate-cinematic-slide-up" : ""}`}
            style={{ animationDelay: "1.6s" }}
          >
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">MEINE EXPERTISE</div>
            <h2 className=" font-light tracking-wide text-white text-cinematic accent-line-gold inline-block">
              Leistungen
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto mt-8 font-light">
              Von intimen Porträts bis zu großen Produktionen - jedes Projekt wird mit derselben Leidenschaft und
              Präzision umgesetzt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                image: "/professional-portrait.png",
                title: "Porträt",
                description: "Authentische Charakterstudien, die die Essenz der Person einfangen",
                delay: "1.8s",
                animation: "animate-cinematic-slide-in",
              },
              {
                image: "/creative-content-photography.png",
                title: "Content",
                description: "Strategische visuelle Inhalte für moderne Marken und Unternehmen",
                delay: "2s",
                animation: "animate-cinematic-slide-up",
              },
              {
                image: "/happy-family-outdoors.png",
                title: "Familie",
                description: "Emotionale Familiengeschichten in natürlicher, entspannter Atmosphäre",
                delay: "2.2s",
                animation: "animate-cinematic-slide-in-right",
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`group ${isVisible ? service.animation : ""}`}
                style={{ animationDelay: service.delay }}
              >
                <div className="relative h-96 mb-8 overflow-hidden cinematic-shadow corner-accent">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-light text-white mb-2 text-cinematic">{service.title}</h3>
                    <div className="w-12 h-0.5 bg-gold mb-3" />
                    <p className="text-white/80 font-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-16 ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "2.4s" }}
          >
            <Button
              asChild
              size="lg"
              className="px-12 py-6 btn-primary text-lg"
            >
              <Link href="/leistungen"><span>Alle Leistungen entdecken</span></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-cinematic relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold/5 to-transparent" />
        </div>

        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`} style={{ animationDelay: "3.2s" }}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-6 text-dramatic">
              BEREIT FÜR IHR PROJEKT?
            </div>
            <h2 className="font-light tracking-wide text-white text-cinematic mb-8 text-glow">
              Lassen Sie uns
              <span className="block text-gold">Geschichte schreiben</span>
            </h2>
            <p className="text-white/80 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Jedes großartige Bild beginnt mit einer Idee. Teilen Sie Ihre Vision mit mir und lassen Sie uns gemeinsam
              etwas Außergewöhnliches schaffen.
            </p>
            <Button
              asChild
              size="lg"
              className="px-16 py-6 btn-primary text-xl animate-gold-glow"
            >
              <Link href="/kontakt">
                <span>Projekt starten</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
