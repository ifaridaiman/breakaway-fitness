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
      mm.add('(min-width: 1024px)', () => {
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
        <h3 className="text-[10vw] lg:text-7xl py-14 leading-[0.8]">
          FITNESS CLASES & PACKAGES
        </h3>
        <div id="container" className="w-full">
          <div className="w-full">
            <PackageCard
              title="InBody 580 Body Scan – Limited time promo"
              imageSrc="/images/breakway-gym-1.webp"
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
              title="Open Gym (Walk In)"
              imageSrc="/images/breakway-gym-2.webp"
            >
              <p>
                Cater to independent exercisers with an Open Gym option. Explain
                that the “Walk In (Open Gym)” package grants access to your
                fully equipped training space so clients can work out at their
                own pace. Pricing: RM 25 for one credit, valid for one week.
                Mention that group booking for friends or colleagues is
                available.
              </p>
            </PackageCard>
            <PackageCard
              title="HYROX Group Training"
              imageSrc="/images/breakway-gym-3.webp"
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
              imageSrc="/images/breakway-gym-4.webp"
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
              imageSrc="/images/breakway-gym-5.webp"
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
