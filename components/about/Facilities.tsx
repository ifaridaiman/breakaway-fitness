'use client'

import { useLayoutEffect } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const FACILITIES = [
  {
    title: 'TRAINING FLOOR',
    description: 'State-of-the-art equipment and spacious training areas',
    imageSrc: '/images/gym/gym12.jpg',
  },
  {
    title: 'HYROX ZONE',
    description: 'Official HYROX training equipment and dedicated space',
    imageSrc: '/images/gym/gym12.jpg',
  },
  {
    title: 'GROUP STUDIOS',
    description: 'Specialized studios for classes, yoga, and martial arts',
    imageSrc: '/images/gym/gym12.jpg',
  },
  {
    title: 'RECOVERY AREA',
    description: 'Relax and recover in our resort-style amenities',
    imageSrc: '/images/gym/gym12.jpg',
  },
  {
    title: 'PERSONAL TRAINING',
    description: 'Private spaces for one-on-one coaching sessions',
    imageSrc: '/images/gym/gym12.jpg',
  },
  {
    title: 'LOCKER ROOMS',
    description: 'Premium facilities with showers and amenities',
    imageSrc: '/images/gym/gym12.jpg',
  },
] as const

const Facilities = () => {
  useLayoutEffect(() => {
    const facilities = gsap.utils.toArray('.facility-card')

    facilities.forEach((facility, index) => {
      gsap.from(facility as HTMLElement, {
        scrollTrigger: {
          trigger: facility as HTMLElement,
          start: 'top bottom-=50',
          end: 'top center',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        delay: index * 0.15, // Stagger effect - each card appears 0.15s after the previous
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="my-32">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            WORLD-CLASS FACILITIES.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.title}
              className="facility-card group relative h-80 rounded-2xl xl:rounded-4xl overflow-hidden cursor-pointer"
            >
              <Image
                src={facility.imageSrc}
                alt={facility.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl mb-2">{facility.title}</h3>
                <p className="text-base md:text-lg opacity-90">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Facilities

