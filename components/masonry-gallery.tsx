"use client"

import Image from "next/image"
import Masonry from "react-masonry-css"
import { useState, useEffect } from "react"

interface ImageProps {
  id: number
  src: string
  alt: string
  width?: number
  height?: number
}

interface MasonryGalleryProps {
  images: ImageProps[]
  isVisible: boolean
  onImageClick: (id: number | null) => void
}

export function MasonryGallery({ images, isVisible, onImageClick }: MasonryGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  // Настройки для разных размеров экрана
  const breakpointColumnsObj = {
    default: 4,  // 4 колонки по умолчанию
    1200: 3,     // 3 колонки на больших экранах
    900: 2,      // 2 колонки на планшетах
    600: 1       // 1 колонка на мобильных
  }

  // Функция для обработки загрузки изображения
  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set(prev).add(imageId))
  }

  // Генерируем случайные высоты для более естественного masonry эффекта
  const getRandomHeight = (index: number) => {
    const heights = [300, 400, 500, 600, 350, 450, 550, 380, 420, 480, 520]
    return heights[index % heights.length]
  }

  // Получаем случайный размер для изображения
  const getImageSize = (index: number) => {
    const sizes = [
      { width: 400, height: 300 },
      { width: 400, height: 400 },
      { width: 400, height: 500 },
      { width: 400, height: 600 },
      { width: 400, height: 350 },
      { width: 400, height: 450 },
      { width: 400, height: 550 },
      { width: 400, height: 380 },
      { width: 400, height: 420 },
      { width: 400, height: 480 },
      { width: 400, height: 520 }
    ]
    return sizes[index % sizes.length]
  }

  return (
    <div className="py-32 bg-dark relative overflow-hidden">
      <div className="container-cinematic">
        <div 
          className={`${isVisible ? "animate-cinematic-slide-up" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {images.map((image, index) => {
              // Первые 8 изображений загружаются сразу, остальные - лениво
              const shouldLoadEagerly = index < 8
              
              return (
              <div 
                key={image.id}
                className={`masonry-item group cursor-pointer ${isVisible ? "animate-cinematic-fade-in" : ""}`}
                style={{ 
                  animationDelay: `${0.6 + index * 0.1}s`,
                  // minHeight: `${getRandomHeight(index)}px`
                }}
                onClick={() => onImageClick(image.id - 1)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={getImageSize(index).width}
                    height={getImageSize(index).height}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onLoad={() => handleImageLoad(image.id)}
                    loading={shouldLoadEagerly ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {/* <h3 className="text-sm font-light text-white mb-2 text-cinematic">{image.alt}</h3> */}
                  </div>
                  {/* <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-4 w-4 text-gold" />
                  </div> */}
                </div>
              </div>
              )
            })}
          </Masonry>
        </div>
      </div>
    </div>
  )
}
