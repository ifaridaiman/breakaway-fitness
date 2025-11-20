'use client'

import { useLayoutEffect } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const TESTIMONIALS = [
  {
    name: 'Jessica Lee',
    role: 'Member since 2023',
    quote:
      'Breakaway changed my life. The coaches are incredible, and the community is like a second family. I\'ve never felt more confident and strong.',
    rating: 5,
  },
  {
    name: 'Ahmad Faizal',
    role: 'HYROX Athlete',
    quote:
      'As someone training for HYROX competitions, having access to official training equipment and certified coaches has been game-changing. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Michelle Tan',
    role: 'Yoga & Pilates Member',
    quote:
      'The variety of classes is amazing. I can do yoga in the morning and try a HIIT class in the evening. The instructors truly care about your progress.',
    rating: 5,
  },
  {
    name: 'Ryan Cooper',
    role: 'Personal Training Client',
    quote:
      'Lost 20kg in 6 months with the help of my trainer. The personalized attention and supportive environment made all the difference.',
    rating: 5,
  },
] as const

const STATS = [
  { number: '500+', label: 'Active Members' },
  { number: '20+', label: 'Certified Coaches' },
  { number: '50+', label: 'Weekly Classes' },
  { number: '100%', label: 'Satisfaction Rate' },
] as const

const Community = () => {
  useLayoutEffect(() => {
    const testimonials = gsap.utils.toArray('.testimonial-card')

    testimonials.forEach((card, index) => {
      gsap.from(card as HTMLElement, {
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="my-32">
      <MaxWidthWrapper>
        {/* Stats Section */}
        <div className="rounded-2xl xl:rounded-4xl bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65% p-8 lg:p-16 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-12">
            BY THE NUMBERS.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            WHAT OUR MEMBERS SAY.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Real stories from real people achieving real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="testimonial-card bg-card rounded-2xl xl:rounded-4xl p-8 lg:p-10 shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-2xl text-primary">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg md:text-xl mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="text-xl font-semibold">{testimonial.name}</p>
                <p className="text-base text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Community

