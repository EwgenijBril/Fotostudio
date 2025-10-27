"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock, Camera, Users, Award, Eye, FileText } from "lucide-react"
import { useEffect, useState } from "react"
import { ReportageGallery } from "@/components/reportage-gallery"

export default function ReportagePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    { id: 1, src: "/professional-photographer-studio.png", alt: "Reportage 1" },
    { id: 2, src: "/professional-photographer-portrait.png", alt: "Reportage 2" },
    { id: 3, src: "/studio-portrait-lighting.png", alt: "Reportage 3" },
    { id: 4, src: "/professional-business-portrait.png", alt: "Reportage 4" },
    { id: 5, src: "/corporate-portrait.png", alt: "Reportage 5" },
    { id: 6, src: "/professional-headshot.png", alt: "Reportage 6" },
    { id: 7, src: "/natural-light-portrait.png", alt: "Reportage 7" },
    { id: 8, src: "/outdoor-portrait.png", alt: "Reportage 8" },
    { id: 9, src: "/creative-portrait.png", alt: "Reportage 9" },
    { id: 10, src: "/artistic-portrait-bw.png", alt: "Reportage 10" },
    { id: 11, src: "/fashion-portrait.png", alt: "Reportage 11" },
    { id: 12, src: "/creative-content-photography.png", alt: "Reportage 12" },
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
              Reportage
            </h1>
            <p className="text-white/90 mb-8 max-w-4xl font-light leading-relaxed">
              Dokumentarische Fotografie für Events, Hochzeiten und besondere Anlässe. Diskret und professionell 
              dokumentiere ich Ihre wichtigsten Momente mit natürlichen, ungestellten Aufnahmen.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <ReportageGallery
        images={images}
        isVisible={isVisible}
        onImageClick={setSelectedImage}
      />
    </div>
  )
}
