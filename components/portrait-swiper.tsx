"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Импорт стилей Swiper
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../app/portrait-swiper.css'

interface PortraitImage {
  id: number
  src: string
  alt: string
}

interface PortraitSwiperProps {
  images: PortraitImage[]
}

export default function PortraitSwiper({ images }: PortraitSwiperProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <div className="swiper-container-wrapper">
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        navigation={true}
        speed={600}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="swiper-container-two"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="slider-image">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={500}
                className="swiper-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
