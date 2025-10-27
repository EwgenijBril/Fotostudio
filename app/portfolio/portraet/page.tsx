"use client"
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
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - 3D Swiper */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container-cinematic">
          <div className={`${isVisible ? "animate-cinematic-fade-in" : ""}`} style={{ animationDelay: "0.6s" }}>
            <PortraitSwiper images={images} />
          </div>
        </div>
      </section>
    </div>
  )
}