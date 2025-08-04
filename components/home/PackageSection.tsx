'use client'

import { useEffect, useRef } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { PackageCard } from '../ui/package-card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const PackageSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const cards = gsap.utils.toArray('#card')

    cards.forEach((card, i) => {
      gsap.to(card as HTMLElement, {
        scale: 0.8 + 0.2 * (i / (cards.length - 1)),
        ease: 'none',
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top ' + 20 * (i + 1),
          end: 'bottom +=500',
          endTrigger: '#container',
          scrub: true,
          pin: card as HTMLElement,
          pinSpacing: false,
        },
      })
    })
  }, [])

  return (
    <section>
      <MaxWidthWrapper className="flex justify-center">
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
              title="Personal Training – Single"
              imageSrc="/images/breakway-gym-5.webp"
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
              title="Personal Training – Couple"
              imageSrc="/images/breakway-gym-6.webp"
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
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default PackageSection
