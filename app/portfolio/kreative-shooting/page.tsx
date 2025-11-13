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
    { id: 1, src: "/content-shooting/shooting.webp", alt: "Content Shooting 1" },
    { id: 2, src: "/content-shooting/shooting-2.webp", alt: "Content Shooting 2" },
    { id: 3, src: "/content-shooting/shooting-3.webp", alt: "Content Shooting 3" },
    { id: 4, src: "/content-shooting/shooting-4.webp", alt: "Content Shooting 4" },
    { id: 5, src: "/content-shooting/shooting-5.webp", alt: "Content Shooting 5" },
    { id: 6, src: "/content-shooting/shooting-6.webp", alt: "Content Shooting 6" },
    { id: 7, src: "/content-shooting/shooting-7.webp", alt: "Content Shooting 7" },
    { id: 8, src: "/content-shooting/shooting-8.webp", alt: "Content Shooting 8" },
    { id: 9, src: "/content-shooting/shooting-9.webp", alt: "Content Shooting 9" },
    { id: 10, src: "/content-shooting/shooting-10.webp", alt: "Content Shooting 10" },
    { id: 11, src: "/content-shooting/shooting-11.webp", alt: "Content Shooting 11" },
    { id: 12, src: "/content-shooting/shooting-12.webp", alt: "Content Shooting 12" },
    { id: 13, src: "/content-shooting/shooting-13.webp", alt: "Content Shooting 13" },
    { id: 14, src: "/content-shooting/shooting-14.webp", alt: "Content Shooting 14" },
    { id: 15, src: "/content-shooting/shooting-15.webp", alt: "Content Shooting 15" },
    { id: 16, src: "/content-shooting/shooting-16.webp", alt: "Content Shooting 16" },
    { id: 17, src: "/content-shooting/shooting-17.webp", alt: "Content Shooting 17" },
    { id: 18, src: "/content-shooting/shooting-18.webp", alt: "Content Shooting 18" },
    { id: 19, src: "/content-shooting/shooting-19.webp", alt: "Content Shooting 19" },
    { id: 20, src: "/content-shooting/shooting-20.webp", alt: "Content Shooting 20" },
    { id: 21, src: "/content-shooting/shooting-21.webp", alt: "Content Shooting 21" },
    { id: 22, src: "/content-shooting/shooting-22.webp", alt: "Content Shooting 22" },
    { id: 23, src: "/content-shooting/shooting-23.webp", alt: "Content Shooting 23" },
    { id: 24, src: "/content-shooting/shooting-24.webp", alt: "Content Shooting 24" },
    { id: 25, src: "/content-shooting/shooting-25.webp", alt: "Content Shooting 25" },
    { id: 26, src: "/content-shooting/shooting-26.webp", alt: "Content Shooting 26" },
    { id: 27, src: "/content-shooting/shooting-27.webp", alt: "Content Shooting 27" },
    { id: 28, src: "/content-shooting/shooting-28.webp", alt: "Content Shooting 28" },
    { id: 29, src: "/content-shooting/shooting-29.webp", alt: "Content Shooting 29" },
    { id: 30, src: "/content-shooting/shooting-30.webp", alt: "Content Shooting 30" },
    { id: 31, src: "/content-shooting/shooting-31.webp", alt: "Content Shooting 31" },
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
