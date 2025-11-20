'use client'

import { useLayoutEffect } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const VALUES = [
  {
    title: 'COMMUNITY FIRST',
    description:
      'We believe fitness is better together. Our supportive community celebrates every victory and lifts each other through challenges.',
    icon: '🤝',
  },
  {
    title: 'EXCELLENCE IN TRAINING',
    description:
      'Certified coaches, cutting-edge programs, and proven methodologies ensure you get the results you deserve.',
    icon: '🏆',
  },
  {
    title: 'INCLUSIVE ENVIRONMENT',
    description:
      'No judgment, no intimidation. Whether you\'re a beginner or elite athlete, you belong here.',
    icon: '💚',
  },
  {
    title: 'HOLISTIC WELLNESS',
    description:
      'True fitness encompasses mind, body, and spirit. We offer programs that nurture all aspects of your well-being.',
    icon: '🧘',
  },
] as const

const MissionValues = () => {
  useLayoutEffect(() => {
    const cards = gsap.utils.toArray('.value-card')

    cards.forEach((card, index) => {
      gsap.from(card as HTMLElement, {
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="my-32 bg-gradient-to-b from-background to-secondary/20 py-20">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            OUR VALUES.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            These pillars guide everything we do at Breakaway Fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="value-card bg-card rounded-2xl xl:rounded-4xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-6xl mb-4">{value.icon}</div>
              <h3 className="text-2xl md:text-3xl mb-4">{value.title}</h3>
              <p className="text-lg md:text-xl">{value.description}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default MissionValues

