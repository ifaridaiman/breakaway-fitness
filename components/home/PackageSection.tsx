'use client'

import { useEffect } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { PackageCard } from '../ui/package-card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const PackageSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const cards = gsap.utils.toArray('#card')
    const mm = gsap.matchMedia()

    cards.forEach((card, i) => {
      mm.add('(min-width: 1440px)', () => {
        gsap.to(card as HTMLElement, {
          scale: 0.8 + 0.2 * (i / (cards.length - 1)),
          yPercent: -4,
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
    })
  }, [])

  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center">
        <h3 className="text-center text-[6.5vw] lg:text-7xl py-14 leading-[0.8]">
          FITNESS CLASES & PACKAGES
        </h3>
        <div id="container" className="w-full">
          <div className="w-full">
            <PackageCard
              title="InBody 580 Body Scan – Limited time promo"
              imageSrc="/images/package/580-body-scan.jpg"
            >
              <p>
                Get a complete breakdown of your body composition in just
                minutes!
              </p>
              <ul className="list-disc pl-10">
                <li>Muscle mass, body fat %, visceral fat </li>
                <li>Body water levels & metabolic rate </li>
              </ul>
              <ul className="list-disc pl-10">
                <li>Promotional price: RM 80 (normal walk in RM 150)</li>
                <li>Includes 1 credit valid for 3 months</li>
              </ul>
              <p>
                Perfect for tracking your fitness journey and measuring
                progress.
              </p>
            </PackageCard>
            <PackageCard
              title="Open Gym (Walk In)"
              imageSrc="/images/package/open-gym.jpg"
            >
              <p>
                Prefer training on your own? Our Open Gym option is perfect for
                independent exercisers.
              </p>
              <ul className="list-disc pl-10">
                <li>Full access to all training equipment </li>
                <li>Exercise at your own pace, your own way </li>
                <li>
                  Invite friends or colleagues – group bookings available!{' '}
                </li>
              </ul>
              <p>Price: RM 25 (1 Credit – valid for 1 week)</p>
              <p>Reserve your Open Gym session today through VibeFam. </p>
            </PackageCard>
            <PackageCard
              title="HYROX Group Training"
              imageSrc="/images/package/hyrox-group-training.jpg"
            >
              <p>
                Offer a standalone section promoting your body composition scan.
                Describe how the InBody 580 Body Scan gives a detailed breakdown
                of muscle mass, body fat percentage, visceral fat, body water
                and metabolic rate in minutes. Emphasize the promotional price
                (RM 80, normal walk in RM 150) and note that the purchase gives
                1 credit valid for three months. Encourage prospective members
                to use the scan to set baselines and track progress. Followed by
                CTA button to VibeFam Booking system to purchase.
              </p>
            </PackageCard>
            <PackageCard
              title="Group Classes"
              imageSrc="/images/package/group-classes.jpg"
            >
              <p>
                Offer a standalone section promoting your body composition scan.
                Describe how the InBody 580 Body Scan gives a detailed breakdown
                of muscle mass, body fat percentage, visceral fat, body water
                and metabolic rate in minutes. Emphasize the promotional price
                (RM 80, normal walk in RM 150) and note that the purchase gives
                1 credit valid for three months. Encourage prospective members
                to use the scan to set baselines and track progress. Followed by
                CTA button to VibeFam Booking system to purchase.
              </p>
            </PackageCard>
            <PackageCard
              title="Personal Training"
              imageSrc="/images/package/personal-training.jpg"
            >
              <div>
                <p>
                  Explain that single personal training packages give clients
                  one on one coaching tailored to their goals. Outline the
                  options:
                </p>
                <ul className="list-disc pl-10">
                  <li>10 sessions – Valid 45 days – RM 1 800</li>
                  <li>20 sessions – Valid 90 days – RM 3 400</li>
                  <li>30 sessions – Valid 135 days – RM 4 800</li>
                </ul>
              </div>
            </PackageCard>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default PackageSection
