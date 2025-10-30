"use client"

import { useEffect, useState } from "react"
import { ProductGallery } from "@/components/product-gallery"

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
      <section className="py-32 bg-dark-secondary relative overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <ProductGallery 
        images={images}
        isVisible={isVisible}
        onImageClick={setSelectedImage}
        animationVariant="vertical"
      />
    </div>
  )
}
