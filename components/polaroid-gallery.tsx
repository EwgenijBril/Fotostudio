"use client"

import Image from "next/image"
import { Eye } from "lucide-react"
import { useState } from "react"

interface ImageProps {
  id: number
  src: string
  alt: string
  width?: number
  height?: number
}

interface PolaroidGalleryProps {
  images: ImageProps[]
  isVisible: boolean
  onImageClick: (id: number | null) => void
}

export function PolaroidGallery({ images, isVisible, onImageClick }: PolaroidGalleryProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  // Генерируем случайные повороты и позиции для полароидов
  const getPolaroidStyle = (index: number) => {
    const rotations = [-12, -8, -4, 2, 6, -6, 3, -2, 5, -3, 4, -5, 1, -1, 7, -7, 9, -9]
    const zIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    
    const rotation = rotations[index % rotations.length]
    const zIndex = zIndexes[index % zIndexes.length]
    
    return {
      transform: `rotate(${rotation}deg)`,
      zIndex: zIndex,
      transformOrigin: 'center center'
    }
  }

  // Получаем случайные размеры для полароидов
  const getPolaroidSize = (index: number) => {
    const sizes = [
      { width: 280, height: 350 },
      { width: 300, height: 380 },
      { width: 260, height: 320 },
      { width: 320, height: 400 },
      { width: 240, height: 300 },
      { width: 340, height: 420 },
      { width: 250, height: 310 },
      { width: 310, height: 390 },
      { width: 270, height: 340 },
      { width: 290, height: 360 }
    ]
    return sizes[index % sizes.length]
  }

  return (
    <div className="py-32 bg-dark relative overflow-hidden">
      <div className="container-cinematic">
        <div 
          className={`polaroid-container ${isVisible ? "animate-cinematic-slide-up" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          {images.map((image, index) => {
            const polaroidStyle = getPolaroidStyle(index)
            const polaroidSize = getPolaroidSize(index)
            const isHovered = hoveredImage === image.id
            
            return (
              <div
                key={image.id}
                className={`polaroid-item group cursor-pointer ${isVisible ? "animate-cinematic-fade-in" : ""}`}
                style={{
                  ...polaroidStyle,
                  animationDelay: `${0.6 + index * 0.15}s`,
                  width: `${polaroidSize.width}px`,
                  height: `${polaroidSize.height}px`
                }}
                onClick={() => onImageClick(image.id - 1)}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="polaroid-card">
                  {/* Фотография */}
                  <div className="polaroid-photo">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={polaroidSize.width - 20}
                      height={polaroidSize.height - 80}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    
                    {/* Overlay эффекты */}
                    <div className="polaroid-overlay">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-3 left-3 right-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xs font-light text-white mb-1 text-cinematic">{image.alt}</h3>
                      </div>
                      <div className="absolute top-3 right-3 glass-dark rounded-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="h-3 w-3 text-gold" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Белая рамка снизу (как у полароида) */}
                  <div className="polaroid-frame">
                    <div className="polaroid-text">
                      <span className="text-gray-600 text-xs font-light">{image.alt}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
