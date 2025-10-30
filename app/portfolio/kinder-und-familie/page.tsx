"use client"

import { useEffect, useState } from "react"
import { ProductGallery } from "@/components/product-gallery"

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
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <ProductGallery
        images={images}
        isVisible={isVisible}
        onImageClick={setSelectedImage}
      />
    </div>
  )
}
