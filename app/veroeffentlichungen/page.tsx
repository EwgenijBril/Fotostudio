"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Star } from "lucide-react"
import { useEffect, useState } from "react"

export default function VeroeffentlichungenPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    { id: 1, src: "/publications/public.webp", alt: "public" },
    { id: 2, src: "/publications/public_2.webp", alt: "public 2" },
    { id: 3, src: "/publications/public_3.webp", alt: "public 3" },
    { id: 4, src: "/publications/public_4.webp", alt: "public 4" },
    { id: 5, src: "/publications/public_5.webp", alt: "public 5" },
    { id: 6, src: "/publications/public_6.webp", alt: "public 6" },
    { id: 7, src: "/publications/public_7.webp", alt: "public 7" },
    { id: 8, src: "/publications/public_8.webp", alt: "public 8" },
    { id: 9, src: "/publications/public_9.webp", alt: "public 9" },
    { id: 10, src: "/publications/public_10.webp", alt: "public 10" },
    { id: 11, src: "/publications/public_11.webp", alt: "public 11" },
  ]

  return (
    <div className="pt-24 bg-dark">
      {/* Hero Section */}
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`}>
            <div className="text-gold text-lg font-light tracking-[0.2em] mb-4 text-dramatic">PUBLIKATIONEN</div>
            <h1 className="font-light tracking-wide mb-8 text-white text-cinematic accent-line-gold inline-block">
              Veröffentlichungen
            </h1>
            <p className="text-white/90 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
              Kreative Shootings, die in internationalen Zeitschriften veröffentlicht wurden
            </p>
            <div className="flex items-center justify-center gap-12 text-white/80">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-gold" />
                <span className="font-light">Internationale Magazine</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-gold" />
                <span className="font-light">Anerkannte Arbeiten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Gallery */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic relative">
          {/* Desktop: слева/справа по очереди, без обрезки */}
          <div className="hidden lg:flex flex-col max-w-7xl m-auto gap-16 lg:gap-0">
            {images.map((img, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={img.id}
                  className={`w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  <figure
                    className={`group max-w-[900px] w-full ${
                      isVisible ? "animate-cinematic-fade-in" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative w-full aspect-[16/9] rounded-2xl corner-accent overflow-hidden">
                      <Image
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.02] p-2"
                        sizes="(min-width: 1024px) 900px, 100vw"
                        priority={index < 2}
                      />
                    </div>
                  </figure>
                </div>
              )
            })}
          </div>

          {/* Mobile/Tablet: просто в рядок, уменьшенные, без обрезки */}
          <div className="lg:hidden grid grid-cols-1 gap-8">
            {images.map((img, index) => (
              <div
                key={img.id}
                className={`group ${isVisible ? "animate-cinematic-slide-up" : ""}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-32 gradient-cinematic text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gold/5 to-transparent" />
        </div>

        <div className="container-cinematic text-center relative z-10">
          <div className={`${isVisible ? "animate-cinematic-slide-up" : ""}`} style={{ animationDelay: "1.6s" }}>
            <h2 className="font-light tracking-wide mb-8 text-cinematic text-glow accent-line-gold inline-block">
              Branchenanerkennung
            </h2>
            <p className="text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Meine Arbeiten wurden in verschiedenen internationalen Magazinen und Publikationen veröffentlicht. Diese
              Anerkennung bestätigt meine Leidenschaft für kreative und künstlerische Fotografie.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {[
                { number: "15+", label: "Magazine" },
                { number: "50+", label: "Veröffentlichungen" },
                { number: "3", label: "Jahre" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`glass-dark rounded-2xl p-8 hover-gold-lift ${
                    isVisible ? "animate-cinematic-fade-in" : ""
                  }`}
                  style={{ animationDelay: `${1.8 + index * 0.2}s` }}
                >
                  <div className="text-5xl font-light mb-4 text-gold text-cinematic">{stat.number}</div>
                  <div className="text-white/80 font-light tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="px-12 py-6 btn-primary text-lg">
              <Link href="/kontakt"><span>Für Ihr Magazin anfragen</span></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
