'use client'

import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

export default function HeroImages({
  className,
  speed = 0.015,
  seed = 1,
  direction = -1,
}: {
  className?: string
  speed?: number
  seed?: number
  direction?: -1 | 1
}) {
  const firstImages = useRef(null)
  const secondImages = useRef(null)
  const slider = useRef(null)
  let xPercent = 0

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
    xPercent += speed * direction
  }

  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <div ref={slider} className="flex">
        <div ref={firstImages} className="flex shrink-0">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={`${index}`}
              className="w-[56vw] md:w-[64vw] lg:w-[700px] mr-2 flex-shrink-0"
            >
              <AspectRatio ratio={16 / 10}>
                <Image
                  src={`/images/gym/gym${index + seed}.jpg`}
                  alt="gym"
                  fill
                  className="object-cover rounded-lg"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
        <div ref={secondImages} className="flex shrink-0">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={`${index}`}
              className="w-[56vw] md:w-[64vw] lg:w-[700px] mr-2 flex-shrink-0"
            >
              <AspectRatio ratio={16 / 10}>
                <Image
                  src={`/images/gym/gym${index + seed}.jpg`}
                  alt="gym"
                  fill
                  className="object-cover rounded-lg"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
