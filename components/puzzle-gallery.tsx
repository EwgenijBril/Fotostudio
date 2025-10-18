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

interface PuzzleGalleryProps {
  images: ImageProps[]
  isVisible: boolean
  onImageClick: (id: number | null) => void
}

export function PuzzleGallery({ images, isVisible, onImageClick }: PuzzleGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Паттерны размеров для пазла (как в журнальной вёрстке)
  const puzzlePatterns = [
    // Паттерн 1: большой + 2 маленьких
    [
      { span: 2, height: 2 }, // большой квадрат
      { span: 1, height: 1 }, // маленький
      { span: 1, height: 1 }, // маленький
    ],
    // Паттерн 2: 2 вертикальных + 1 горизонтальный
    [
      { span: 1, height: 2 }, // вертикальный
      { span: 1, height: 2 }, // вертикальный
      { span: 2, height: 1 }, // горизонтальный
    ],
    // Паттерн 3: горизонтальный + 2 квадрата
    [
      { span: 2, height: 1 }, // горизонтальный
      { span: 1, height: 1 }, // квадрат
      { span: 1, height: 1 }, // квадрат
    ],
    // Паттерн 4: 3 равных
    [
      { span: 1, height: 1 },
      { span: 1, height: 1 },
      { span: 1, height: 1 },
    ],
  ]

  // Получаем размер для каждого изображения
  const getPuzzleSize = (index: number) => {
    const patternIndex = Math.floor(index / 3) % puzzlePatterns.length
    const pattern = puzzlePatterns[patternIndex]
    const positionInPattern = index % 3
    return pattern[positionInPattern] || { span: 1, height: 1 }
  }

  return (
    <div className="py-32 bg-dark relative overflow-hidden">
      {/* Фоновая атмосфера */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/3 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-gold/2 rounded-full filter blur-3xl" />
      </div>

      <div className="container-cinematic relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="text-gold text-sm font-light tracking-[0.3em] mb-3 text-dramatic uppercase">
              Репортажная галерея
            </div>
            <h2 className="text-4xl font-light text-white mb-4 text-cinematic">
              Мозаика моментов
            </h2>
            <p className="text-white/60 font-light text-sm max-w-2xl mx-auto mb-6">
              Каждый кадр — часть большой истории, сложенной из мгновений
            </p>
            <div className="h-0.5 w-64 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>

        {/* Puzzle Grid */}
        <div className="puzzle-grid">
          {images.map((image, index) => {
            const size = getPuzzleSize(index)
            return (
              <div
                key={image.id}
                className={`puzzle-piece ${isVisible ? 'visible' : ''}`}
                style={{
                  '--puzzle-span': size.span,
                  '--puzzle-height': size.height,
                  '--puzzle-delay': `${index * 0.08}s`,
                } as React.CSSProperties}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onImageClick(image.id - 1)}
              >
                <div className="puzzle-inner">
                  {/* Изображение */}
                  <div className="puzzle-image-wrapper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="puzzle-image"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="puzzle-overlay">
                      <div className="puzzle-gradient" />
                      
                      {/* Индекс элемента */}
                      <div className="puzzle-index">
                        <span className="puzzle-index-number">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="puzzle-index-icon">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 2L2 6v8l8 4 8-4V6l-8-4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                            <path d="M10 10L2 6M10 10l8-4M10 10v8" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Информация */}
                      <div className="puzzle-info">
                        <h3 className="puzzle-title">{image.alt}</h3>
                        <div className="puzzle-meta">
                          <span className="puzzle-size">
                            {size.span}×{size.height}
                          </span>
                        </div>
                      </div>
                      
                      {/* Иконка просмотра */}
                      <div className="puzzle-icon">
                        <div className="glass-dark rounded-full p-3">
                          <Eye className="h-5 w-5 text-gold" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Borders (швы пазла) */}
                  <div className="puzzle-border puzzle-border-top" />
                  <div className="puzzle-border puzzle-border-right" />
                  <div className="puzzle-border puzzle-border-bottom" />
                  <div className="puzzle-border puzzle-border-left" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Статистика */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-8 text-white/50 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-gold/50" />
              <span>{images.length} элементов</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold/50">
                <path d="M8 1L1 4v6l7 3 7-3V4l-7-3z" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
              <span>Нерегулярная сетка</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
