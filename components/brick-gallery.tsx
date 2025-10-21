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

interface BrickGalleryProps {
  images: ImageProps[]
  isVisible: boolean
  onImageClick: (id: number | null) => void
}

export function BrickGallery({ images, isVisible, onImageClick }: BrickGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Разбиваем изображения на строки с кирпичным смещением
  const getBrickRows = () => {
    const rows: ImageProps[][] = []
    const itemsPerRow = 3 // 3 изображения в строке
    
    for (let i = 0; i < images.length; i += itemsPerRow) {
      rows.push(images.slice(i, i + itemsPerRow))
    }
    
    return rows
  }

  // Определяем размер для каждого кирпича (чередуем для разнообразия)
  const getBrickSize = (rowIndex: number, colIndex: number) => {
    const patterns = [
      [1, 1.2, 1],    // Ряд 1: средний крупнее
      [1.2, 1, 1.2],  // Ряд 2: боковые крупнее
      [1, 1.2, 1],    // Ряд 3: средний крупнее
      [1.2, 1, 1]     // Ряд 4: левый крупнее
    ]
    
    const pattern = patterns[rowIndex % patterns.length]
    return pattern[colIndex % pattern.length]
  }

  const rows = getBrickRows()

  return (
    <div className="py-32 bg-dark relative overflow-hidden">
      {/* Фоновая текстура */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255, 215, 0, 0.1) 2px,
            rgba(255, 215, 0, 0.1) 4px
          ), repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 215, 0, 0.1) 2px,
            rgba(255, 215, 0, 0.1) 4px
          )`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container-cinematic relative z-10">
        {/* Brick Layout */}
        <div className="brick-container">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`brick-row ${rowIndex % 2 === 1 ? 'offset' : ''} ${isVisible ? 'visible' : ''}`}
              style={{
                '--row-delay': `${rowIndex * 0.15}s`,
              } as React.CSSProperties}
            >
              {row.map((image, colIndex) => {
                const globalIndex = rowIndex * 3 + colIndex
                const size = getBrickSize(rowIndex, colIndex)
                
                return (
                  <div
                    key={image.id}
                    className="brick-item"
                    style={{
                      '--brick-scale': size,
                      '--brick-delay': `${globalIndex * 0.1}s`,
                    } as React.CSSProperties}
                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => onImageClick(image.id - 1)}
                  >
                    <div className="brick-inner">
                      {/* Изображение */}
                      <div className="brick-image-wrapper">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="brick-image"
                          style={{ objectFit: 'cover' }}
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="brick-overlay">
                          <div className="brick-gradient" />
                          
                          {/* Номер кирпича */}
                          <div className="brick-number">
                            {String(image.id).padStart(2, '0')}
                          </div>
                          
                          {/* Информация */}
                          <div className="brick-info">
                            <h3 className="brick-title">{image.alt}</h3>
                            <div className="brick-meta">
                              <span>Ряд {rowIndex + 1}</span>
                              <span className="brick-dot">•</span>
                              <span>Позиция {colIndex + 1}</span>
                            </div>
                          </div>
                          
                          {/* Иконка */}
                          <div className="brick-icon">
                            <div className="glass-dark rounded-full p-3">
                              <Eye className="h-5 w-5 text-gold" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Эффект раствора (швы между кирпичами) */}
                      <div className="brick-mortar brick-mortar-top" />
                      <div className="brick-mortar brick-mortar-right" />
                      <div className="brick-mortar brick-mortar-bottom" />
                      <div className="brick-mortar brick-mortar-left" />
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
