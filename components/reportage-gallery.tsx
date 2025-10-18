"use client"

import Image from "next/image"
import { Eye } from "lucide-react"
import Masonry from "react-masonry-css"
import { useState, useEffect, useRef } from "react"

interface ImageProps {
  id: number
  src: string
  alt: string
  width?: number
  height?: number
}

interface ReportageGalleryProps {
  images: ImageProps[]
  isVisible: boolean
  onImageClick: (id: number | null) => void
}

export function ReportageGallery({ images, isVisible, onImageClick }: ReportageGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  // Настройки для разных размеров экрана - 4 колонки для более плотной сетки
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

  // Intersection Observer для анимаций при скролле
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    imageRefs.current.forEach((ref, imageId) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleImages((prev) => new Set(prev).add(imageId))
              }
            })
          },
          { threshold: 0.1, rootMargin: '50px' }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [images])

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

  // Определяем хаотичное направление анимации
  const getRandomAnimation = (index: number) => {
    const animations = [
      "animate-reportage-slide-in-left",
      "animate-reportage-slide-in-right", 
      "animate-reportage-slide-in-top",
      "animate-reportage-slide-in-bottom"
    ]
    return animations[index % animations.length]
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
            className="reportage-masonry-grid"
            columnClassName="reportage-masonry-column"
          >
            {images.map((image, index) => {
              const isImageVisible = visibleImages.has(image.id)
              const animationClass = getRandomAnimation(index)
              
              return (
                <div 
                  key={image.id}
                  ref={(el) => {
                    if (el) imageRefs.current.set(image.id, el)
                  }}
                  className={`reportage-masonry-item group cursor-pointer ${isImageVisible ? animationClass : "opacity-0"}`}
                  onClick={() => onImageClick(image.id - 1)}
                >
                  <div className="relative w-full h-full overflow-hidden border-none">
              <Image
                      src={image.src}
                      alt={image.alt}
                      width={getImageSize(index).width}
                      height={getImageSize(index).height}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onLoad={() => handleImageLoad(image.id)}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-sm font-light text-white mb-2 text-cinematic">{image.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
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
