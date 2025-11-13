"use client"

import Image from "next/image"
import { Eye } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface ImageProps {
  id: number
  src: string
  alt: string
  width?: number
  height?: number
}

interface StaggeredGalleryProps {
  images: ImageProps[]
  isVisible: boolean
  onImageClick: (id: number | null) => void
}

export function StaggeredGallery({ images, isVisible, onImageClick }: StaggeredGalleryProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Отслеживаем скролл для параллакс эффекта с throttling
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (galleryRef.current) {
            const rect = galleryRef.current.getBoundingClientRect()
            const scrollPosition = window.scrollY
            const elementTop = rect.top + scrollPosition
            const elementHeight = rect.height
            const windowHeight = window.innerHeight
            
            // Вычисляем позицию элемента относительно viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              const scrollProgress = (scrollPosition - elementTop + windowHeight) / (elementHeight + windowHeight)
              setScrollY(scrollProgress * 100) // Нормализуем для использования
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Разделяем изображения на две колонки для десктопа
  // На мобильных все изображения будут в одной колонке через CSS
  const leftColumn = images.filter((_, index) => index % 2 === 0)
  const rightColumn = images.filter((_, index) => index % 2 === 1)

  // Вычисляем параллакс для каждой колонки
  const getParallaxStyle = (columnIndex: number) => {
    const parallaxAmount = columnIndex === 0 ? scrollY * 0.15 : scrollY * 0.3
    return {
      transform: `translateY(${parallaxAmount}px)`,
      transition: 'transform 0.1s ease-out'
    }
  }

  return (
    <div className="py-32 bg-dark relative overflow-hidden">
      <div className="container-cinematic">
        {/* Staggered Gallery */}
        <div 
          ref={galleryRef}
          className="staggered-gallery-container"
        >
          <div className="staggered-grid">
            {/* Левая колонка */}
            <div 
              className="staggered-column staggered-column-left"
              style={getParallaxStyle(0)}
            >
              {leftColumn.map((image, index) => (
                <div
                  key={image.id}
                  className={`staggered-item ${isVisible ? "animate-staggered-fade-in" : ""}`}
                  style={{
                    animationDelay: `${0.4 + index * 0.15}s`
                  }}
                  onClick={() => onImageClick(image.id - 1)}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="staggered-card group cursor-pointer">
                    {/* Изображение */}
                    <div className="staggered-image-wrapper">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={600}
                        className="staggered-image"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Оверлей */}
                      <div className="staggered-overlay">
                        {/* Градиент */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Правая колонка (со смещением вниз) */}
            <div 
              className="staggered-column staggered-column-right"
              style={getParallaxStyle(1)}
            >
              {rightColumn.map((image, index) => (
                <div
                  key={image.id}
                  className={`staggered-item ${isVisible ? "animate-staggered-fade-in-right" : ""}`}
                  style={{
                    animationDelay: `${0.6 + index * 0.15}s`
                  }}
                  onClick={() => onImageClick(image.id - 1)}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="staggered-card group cursor-pointer">
                    {/* Изображение */}
                    <div className="staggered-image-wrapper">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={600}
                        className="staggered-image"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Оверлей */}
                      <div className="staggered-overlay">
                        {/* Градиент */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные фоновые элементы */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  )
}

