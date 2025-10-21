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

  // Разделяем изображения на две колонки
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
                        height={500}
                        className="staggered-image"
                        loading="lazy"
                      />
                      
                      {/* Оверлей */}
                      <div className="staggered-overlay">
                        {/* Градиент */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Информация */}
                        <div className="absolute bottom-6 left-6 right-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <h3 className="text-lg font-light text-white mb-2 text-cinematic">
                            {image.alt}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-gold/80">
                            <Eye className="h-3 w-3" />
                            <span>Посмотреть подробнее</span>
                          </div>
                        </div>
                        
                        {/* Иконка просмотра */}
                        <div className="absolute top-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                          <Eye className="h-4 w-4 text-gold" />
                        </div>
                        
                        {/* Номер изображения */}
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 border border-gold/40 rounded-lg flex items-center justify-center text-gold text-xs font-medium backdrop-blur-sm bg-black/30">
                            {image.id}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Декоративная граница */}
                    <div className="staggered-border opacity-0 group-hover:opacity-100" />
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
                        height={500}
                        className="staggered-image"
                        loading="lazy"
                      />
                      
                      {/* Оверлей */}
                      <div className="staggered-overlay">
                        {/* Градиент */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Информация */}
                        <div className="absolute bottom-6 left-6 right-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <h3 className="text-lg font-light text-white mb-2 text-cinematic">
                            {image.alt}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-gold/80">
                            <Eye className="h-3 w-3" />
                            <span>Посмотреть подробнее</span>
                          </div>
                        </div>
                        
                        {/* Иконка просмотра */}
                        <div className="absolute top-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                          <Eye className="h-4 w-4 text-gold" />
                        </div>
                        
                        {/* Номер изображения */}
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 border border-gold/40 rounded-lg flex items-center justify-center text-gold text-xs font-medium backdrop-blur-sm bg-black/30">
                            {image.id}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Декоративная граница */}
                    <div className="staggered-border opacity-0 group-hover:opacity-100" />
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

