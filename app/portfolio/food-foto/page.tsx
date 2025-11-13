"use client"

import { useEffect, useState } from "react"
import { StaggeredGallery } from "@/components/staggered-gallery"

export default function FoodFotoPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const images = [
    { id: 1, src: "/food/food.webp", alt: "Food Foto 1" },
    { id: 2, src: "/food/food_2.webp", alt: "Food Foto 2" },
    { id: 3, src: "/food/food_3.webp", alt: "Food Foto 3" },
    { id: 4, src: "/food/food_4.webp", alt: "Food Foto 4" },
    { id: 5, src: "/food/food_5.webp", alt: "Food Foto 5" },
    { id: 6, src: "/food/food_6.webp", alt: "Food Foto 6" },
    { id: 7, src: "/food/food_7.webp", alt: "Food Foto 7" },
    { id: 8, src: "/food/food_8.webp", alt: "Food Foto 8" },
    { id: 9, src: "/food/food_9.webp", alt: "Food Foto 9" },
    { id: 10, src: "/food/food_10.webp", alt: "Food Foto 10" },
    { id: 11, src: "/food/food_11.webp", alt: "Food Foto 11" },
    { id: 12, src: "/food/food_12.webp", alt: "Food Foto 12" },
    { id: 13, src: "/food/food_13.webp", alt: "Food Foto 13" },
    { id: 14, src: "/food/food_14.webp", alt: "Food Foto 14" },
    { id: 15, src: "/food/food_15.webp", alt: "Food Foto 15" },
    { id: 16, src: "/food/food_16.webp", alt: "Food Foto 16" },
    { id: 17, src: "/food/food_17.webp", alt: "Food Foto 17" },
    { id: 18, src: "/food/food_18.webp", alt: "Food Foto 18" },
    { id: 19, src: "/food/food_19.webp", alt: "Food Foto 19" },
    { id: 20, src: "/food/food_20.webp", alt: "Food Foto 20" },
    { id: 21, src: "/food/food_21.webp", alt: "Food Foto 21" },
    { id: 22, src: "/food/food_22.webp", alt: "Food Foto 22" },
    { id: 23, src: "/food/food_23.webp", alt: "Food Foto 23" },
    { id: 24, src: "/food/food_24.webp", alt: "Food Foto 23" },
    { id: 25, src: "/food/food_25.webp", alt: "Food Foto 25" },
    { id: 26, src: "/food/food_26.webp", alt: "Food Foto 26" },
    { id: 27, src: "/food/food_27.webp", alt: "Food Foto 27" },
    { id: 28, src: "/food/food_28.webp", alt: "Food Foto 28" },
    { id: 29, src: "/food/food_29.webp", alt: "Food Foto 29" },
    { id: 30, src: "/food/food_30.webp", alt: "Food Foto 30" },
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
              Food Fotografie
            </h1>
            <p className="text-white/90 mb-8 max-w-4xl font-light leading-relaxed">
              Appetitliche Aufnahmen für Restaurants, Cafés und Food-Blogger. Professionelle Food-Styling und 
              appetitliche Präsentation, die das Verlangen nach einem Kauf weckt.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <StaggeredGallery
        images={images}
        isVisible={isVisible}
        onImageClick={setSelectedImage}
      />
    </div>
  )
}
