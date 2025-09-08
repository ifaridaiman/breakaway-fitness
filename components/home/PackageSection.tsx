'use client'

import { useEffect } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { PackageCard } from '../ui/package-card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import Link from 'next/link'

const PackageSection = () => {
  const packages = [
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
  ]
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const cards = gsap.utils.toArray('#card')
    const mm = gsap.matchMedia()
    ScrollTrigger.normalizeScroll(true)
    ScrollTrigger.config({ ignoreMobileResize: true })

    cards.forEach((card, i) => {
      gsap.to(card as HTMLElement, {
        scale: 0.8 + 0.2 * (i / (cards.length - 1)),
        yPercent: -8,
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top ' + 30 * (i + 1),
          endTrigger: '#container',
          end: 'bottom bottom',
          scrub: 0.5,
          pin: card as HTMLElement,
          pinSpacing: false,
        },
      })
    })
  }, [])

  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center">
        <div id="container" className="w-full ">
          <div className="w-full">
            {packages.map((i) => (
              <div
                key={i.title}
                id="card"
                className="relative w-full h-[80vh] mb-4"
              >
                <Link href="/packages">
                  <Image
                    src={i.imageSrc}
                    alt={i.title}
                    fill
                    className="object-cover rounded-2xl xl:rounded-4xl brightness-70"
                  />
                  <h4 className="absolute p-8 text-white text-4xl lg:text-[8vw] underline">
                    {i.title}.
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
