'use client'

import { useLayoutEffect } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const AboutHero = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    tl.to('#hero-image', {
      scale: 1.2,
      opacity: 0.6,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="about-hero" className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      <div id="hero-image" className="absolute inset-0">
        <Image
          src="/images/gym/gym12.jpg"
          alt="Breakaway Fitness Gym"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover brightness-50"
        />
      </div>
      
      <MaxWidthWrapper className="relative h-full flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] text-white leading-[0.9] mb-6">
          OUR STORY.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl">
          Where fitness meets community in Cyberjaya&apos;s premier training destination
        </p>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutHero

