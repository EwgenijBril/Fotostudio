"use client"

import Image from "next/image"
import { Eye } from "lucide-react"

interface ImageProps {
  id: number
  src: string
  alt: string
  width?: number
  height?: number
}

interface ProductGalleryProps {
  images: ImageProps[]
  isVisible: boolean
  onImageClick: (id: number | null) => void
}

export function ProductGallery({ images, isVisible, onImageClick }: ProductGalleryProps) {
  return (
    <div className="py-32 bg-dark relative overflow-hidden">
      <div className="container-cinematic">
        <div
          className={`grid grid-cols-6 gap-4 ${isVisible ? "animate-cinematic-slide-up" : ""}`}
          style={{ animationDelay: "0.4s" }}
        >
          {/* Row 1 - Одна большая */}
          <div 
            className={`col-span-6 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "0.6s" }}
            onClick={() => onImageClick(0)}
          >
            <div className="relative w-full aspect-[6/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[0]?.src || "/placeholder.svg"}
                alt={images[0]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[0]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>

          {/* Row 2 - Три равные */}
          <div 
            className={`col-span-2 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "0.7s" }}
            onClick={() => onImageClick(1)}
          >
            <div className="relative w-full aspect-[2/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[1]?.src || "/placeholder.svg"}
                alt={images[1]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[1]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>
          
          <div 
            className={`col-span-2 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "0.8s" }}
            onClick={() => onImageClick(2)}
          >
            <div className="relative w-full aspect-[2/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[2]?.src || "/placeholder.svg"}
                alt={images[2]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[2]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>
          
          <div 
            className={`col-span-2 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "0.9s" }}
            onClick={() => onImageClick(3)}
          >
            <div className="relative w-full aspect-[2/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[3]?.src || "/placeholder.svg"}
                alt={images[3]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[3]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>

          {/* Row 3 - Две разные */}
          <div 
            className={`col-span-3 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.0s" }}
            onClick={() => onImageClick(4)}
          >
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[4]?.src || "/placeholder.svg"}
                alt={images[4]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[4]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>
          
          <div 
            className={`col-span-3 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.1s" }}
            onClick={() => onImageClick(5)}
          >
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[5]?.src || "/placeholder.svg"}
                alt={images[5]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[5]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>

          {/* Row 4 - Одна большая */}
          <div 
            className={`col-span-6 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.2s" }}
            onClick={() => onImageClick(6)}
          >
            <div className="relative w-full aspect-[6/1] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[6]?.src || "/placeholder.svg"}
                alt={images[6]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[6]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>

          {/* Row 5 - Три равные */}
          <div 
            className={`col-span-2 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.3s" }}
            onClick={() => onImageClick(7)}
          >
            <div className="relative w-full aspect-[2/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[7]?.src || "/placeholder.svg"}
                alt={images[7]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[7]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>
          
          <div 
            className={`col-span-2 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.4s" }}
            onClick={() => onImageClick(8)}
          >
            <div className="relative w-full aspect-[2/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[8]?.src || "/placeholder.svg"}
                alt={images[8]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[8]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>
          
          <div 
            className={`col-span-2 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.5s" }}
            onClick={() => onImageClick(9)}
          >
            <div className="relative w-full aspect-[2/2] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[9]?.src || "/placeholder.svg"}
                alt={images[9]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[9]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>

          {/* Row 6 - Две большие */}
          <div 
            className={`col-span-3 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.6s" }}
            onClick={() => onImageClick(10)}
          >
            <div className="relative w-full aspect-[3/3] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[10]?.src || "/placeholder.svg"}
                alt={images[10]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[10]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>
          
          <div 
            className={`col-span-3 group cursor-pointer corner-accent ${isVisible ? "animate-cinematic-fade-in" : ""}`}
            style={{ animationDelay: "1.7s" }}
            onClick={() => onImageClick(11)}
          >
            <div className="relative w-full aspect-[3/3] overflow-hidden rounded-2xl cinematic-shadow hover-cinematic">
              <Image
                src={images[11]?.src || "/placeholder.svg"}
                alt={images[11]?.alt || "Image"}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-light text-white mb-2 text-cinematic">{images[11]?.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 glass-dark rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-4 w-4 text-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



