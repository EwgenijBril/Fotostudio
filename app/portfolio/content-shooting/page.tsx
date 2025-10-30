"use client"

import { useEffect, useState } from "react"
import { MasonryGallery } from "@/components/masonry-gallery"

export default function ContentShootingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    { id: 1, src: "/creative-content-photography.png", alt: "Content Shooting 1" },
    { id: 2, src: "/professional-business-portrait.png", alt: "Content Shooting 2" },
    { id: 3, src: "/creative-portrait.png", alt: "Content Shooting 3" },
    { id: 4, src: "/fashion-portrait.png", alt: "Content Shooting 4" },
    { id: 5, src: "/outdoor-portrait.png", alt: "Content Shooting 5" },
    { id: 6, src: "/studio-portrait-lighting.png", alt: "Content Shooting 6" },
    { id: 7, src: "/artistic-portrait-bw.png", alt: "Content Shooting 7" },
    { id: 8, src: "/professional-headshot.png", alt: "Content Shooting 8" },
    { id: 9, src: "/natural-light-portrait.png", alt: "Content Shooting 9" },
    { id: 10, src: "/corporate-portrait.png", alt: "Content Shooting 10" },
    { id: 11, src: "/professional-photographer-portrait.png", alt: "Content Shooting 11" },
    { id: 12, src: "/professional-photographer-studio.png", alt: "Content Shooting 12" },
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
              Content Shooting
            </h1>
            <p className="text-white/90 mb-8 max-w-4xl font-light leading-relaxed">
              Hochwertige visuelle Inhalte für Social Media, Websites und Marketing. Strategische Content-Erstellung, 
              die Aufmerksamkeit erregt und Ihre Marke authentisch präsentiert.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <MasonryGallery
        images={images}
        isVisible={isVisible}
        onImageClick={setSelectedImage}
      />
    </div>
  )
}
