'use client'

import { useLayoutEffect } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import Link from 'next/link'

// Register GSAP plugin once at module level
gsap.registerPlugin(ScrollTrigger)

// Static data moved outside component to prevent recreation on every render
const PACKAGES = [
  {
    title: 'INBODY 580 SCAN',
    imageSrc: '/images/package/580-body-scan.jpg',
  },
  {
    title: 'HYROX GROUP TRAINING',
    imageSrc: '/images/package/hyrox-group-training.jpg',
  },
  {
    title: 'PERSONAL TRAINING',
    imageSrc: '/images/package/personal-training.jpg',
  },
  {
    title: 'GROUP CLASSES',
    imageSrc: '/images/package/group-classes.jpg',
  },
  {
    title: 'OPEN GYM',
    imageSrc: '/images/package/open-gym.jpg',
  },
] as const

const PackageSection = () => {
  useLayoutEffect(() => {
    const cards = gsap.utils.toArray('.package-card')
    
    // Only normalize scroll on non-touch devices to avoid issues
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: coarse)').matches) {
      ScrollTrigger.normalizeScroll(true)
    }
    
    ScrollTrigger.config({ ignoreMobileResize: true })

    const triggers: ScrollTrigger[] = []

    cards.forEach((card, i) => {
      const tween = gsap.to(card as HTMLElement, {
        scale: 0.8 + 0.2 * (i / (cards.length - 1)),
        yPercent: -10,
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top ' + 30 * (i + 1),
          endTrigger: '#package-container',
          end: 'bottom bottom',
          scrub: 0.5,
          pin: card as HTMLElement,
          pinSpacing: false,
        },
      })
      
      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger)
      }
    })

    // Cleanup function to prevent memory leaks
    return () => {
      triggers.forEach(trigger => trigger.kill())
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center my-8">
        <div id="package-container" className="w-full">
          <div className="w-full">
            {PACKAGES.map((pkg, index) => (
              <div
                key={pkg.title}
                className="package-card relative w-full h-[80vh] mb-4"
              >
                <Link href="/packages">
                  <Image
                    src={pkg.imageSrc}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                    quality={85}
                    priority={index === 0}
                    className="object-cover rounded-2xl xl:rounded-4xl brightness-70"
                  />
                  <h4 className="absolute p-8 text-white text-4xl lg:text-[8vw] underline">
                    {pkg.title}.
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default PackageSection
