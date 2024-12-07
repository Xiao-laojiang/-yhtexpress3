'use client'

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carouselItems = [
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022030719203976.jpg-APicOJ0d0GS4k5RMotXuhhJF50zA1i.jpeg", 
    alt: "Matson集装箱船" 
  },
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-pqWqGFTfyUiPdHpKtwiKKnS2xLxpht.jpeg", 
    alt: "COSCO集装箱船" 
  },
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DHL%E5%BF%AB%E9%80%92.jpg-n73QIgVLQEq0BQRdRdeVGz4ssHTXz3.jpeg", 
    alt: "DHL货运机队" 
  },
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UPS%E5%BF%AB%E9%80%92.jpg-nteL9hsNYF3b36tXGnVr5YzjYJrcYq.jpeg", 
    alt: "UPS货运飞机" 
  },
  { 
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6379374358678776607416969.jpg-uA2laqFYEPNyW03Q41okbDRUMciZJH.jpeg", 
    alt: "航空货物装卸" 
  }
]

export function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-[1980px] mx-auto">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 group">
              <Card>
                <CardContent className="flex aspect-[33/16] items-center justify-center p-6 relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

