"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock, Camera, Users, Award, Eye, Package } from "lucide-react"
import { useEffect, useState } from "react"
import { ProductGallery } from "@/components/product-gallery"

export default function ProduktFotoPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    { id: 1, src: "/professional-business-portrait.png", alt: "Produkt Foto 1" },
    { id: 2, src: "/creative-content-photography.png", alt: "Produkt Foto 2" },
    { id: 3, src: "/creative-portrait.png", alt: "Produkt Foto 3" },
    { id: 4, src: "/fashion-portrait.png", alt: "Produkt Foto 4" },
    { id: 5, src: "/outdoor-portrait.png", alt: "Produkt Foto 5" },
    { id: 6, src: "/studio-portrait-lighting.png", alt: "Produkt Foto 6" },
    { id: 7, src: "/artistic-portrait-bw.png", alt: "Produkt Foto 7" },
    { id: 8, src: "/professional-headshot.png", alt: "Produkt Foto 8" },
    { id: 9, src: "/natural-light-portrait.png", alt: "Produkt Foto 9" },
    { id: 10, src: "/corporate-portrait.png", alt: "Produkt Foto 10" },
    { id: 11, src: "/professional-photographer-portrait.png", alt: "Produkt Foto 11" },
    { id: 12, src: "/professional-photographer-studio.png", alt: "Produkt Foto 12" },
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
              Produkt Fotografie
            </h1>
            <p className="text-white/90 mb-8 max-w-4xl font-light leading-relaxed">
              Hochwertige Produktaufnahmen für E-Commerce und Marketing. Weißer Hintergrund oder Lifestyle-Settings, 
              mehrere Perspektiven und E-Commerce optimierte Formate für maximale Verkaufsstärke.
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
