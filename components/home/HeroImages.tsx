'use client'

import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

export default function HeroImages({ className }: { className?: string }) {
  const firstImages = useRef(null)
  const secondImages = useRef(null)
  const slider = useRef(null)
  let xPercent = 0
  let direction = -1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    })
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstImages.current, { xPercent: xPercent })
    gsap.set(secondImages.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.03 * direction
  }

  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <div ref={slider} className="flex">
        <div ref={firstImages} className="flex shrink-0">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={`${index}`}
              className="w-[80vw] md:w-96 lg:w-[700px] mr-2 flex-shrink-0"
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={`/images/breakway-gym-${index + 1}.webp`}
                  alt="gym"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 320px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
        <div ref={secondImages} className="flex shrink-0">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={`${index}`}
              className="w-[80vw] md:w-96 lg:w-[700px] mr-2 flex-shrink-0"
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={`/images/breakway-gym-${index + 1}.webp`}
                  alt="gym"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 320px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
