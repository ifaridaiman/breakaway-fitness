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
        <h3 className="text-center text-[6.5vw] lg:text-7xl py-14 leading-[0.8]">
          FITNESS CLASES & PACKAGES
        </h3>
        <div id="container" className="w-full">
          <div className="w-full">
            <PackageCard
              title="InBody 580 Body Scan"
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
              <p>Price: RM150 (1 credit - valid for 3 months)</p>
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
                  Invite friends or colleagues - group bookings available!
                </li>
              </ul>
              <p>Price: RM25 (1 Credit - valid for 1 week)</p>
              <p>Reserve your Open Gym session today through VibeFam. </p>
            </PackageCard>
            <PackageCard
              title="HYROX Group Training"
              imageSrc="/images/package/hyrox-group-training.jpg"
            >
              <p>
                Train smarter, push harder, and prepare for the ultimate
                challenge with our signature HYROX classes - a dynamic mix of
                strength and endurance.
              </p>
              <ul className="list-disc pl-10">
                <li>
                  High-energy workouts designed to build strength & stamina
                </li>
                <li>Train alongside a supportive community </li>
                <li>
                  Ideal preparation for HYROX competitions or personal
                  milestones
                </li>
              </ul>
              <div>
                <p>Packages: </p>
                <ul className="list-disc pl-10">
                  <li>1 Session: 1 Credit - RM 80 (valid 1 week)</li>
                  <li>5 Sessions: 5 Credits - RM 300 (valid 1 month) </li>
                  <li>10 Sessions: 10 Credits - RM 400 (valid 2 months)</li>
                </ul>
              </div>
              <p>
                Take your training to the next level - join the HYROX community
                today.
              </p>
            </PackageCard>
            <PackageCard
              title="Group Classes"
              imageSrc="/images/package/group-classes.jpg"
            >
              <p>
                Looking for motivation, energy, and community? Our Group Classes
                bring people together to sweat, move, and grow stronger under
                the guidance of expert instructors. With a wide variety of
                classes, there's something for everyone - from yoga to dance to
                functional strength.
              </p>
              <p>
                Choose from: <br />
                Aero Dance • Gentle Yoga • Pilates • Dance Fitness • Dong Stick
                Yoga • Intro to Exercise Regime • Line Dance • Marathon Runner
                (outdoor) • Martial Art • Stronger Legs & Longer Miles • Silat •
                Functional Strength
              </p>
              <div>
                <p>Packages: </p>
                <ul className="list-disc pl-10">
                  <li>
                    3-Month Unlimited Membership - RM 900 (unlimited classes)
                  </li>
                  <li>1 Class - RM 50 (1 credit, valid 1 week) </li>
                  <li>5 Classes - RM 200 (5 credits, valid 1 month)</li>
                  <li>10 Classes - RM 300 (10 credits, valid 2 months)</li>
                </ul>
              </div>
            </PackageCard>
            <PackageCard
              title="Personal Training"
              imageSrc="/images/package/personal-training.jpg"
            >
              <p>
                Achieve your goals with the guidance of certified trainers.
                Whether you prefer focused one-on-one coaching or the
                accountability of training with a partner, we've got a plan for
                you.
              </p>
              <p>
                SINGLE TRAINING <br />
                Tailored one-on-one sessions designed to match your fitness
                goals.
              </p>
              <p>
                COUPLE TRAINING <br />
                Train together with a friend or partner to stay motivated and
                build progress side by side.
              </p>
              <div>
                <p>Packages: </p>
                <ul className="list-disc pl-10">
                  <li>
                    10 sessions - Valid 45 days - (Single: RM1800, Couple:
                    RM2200)
                  </li>
                  <li>
                    20 sessions - Valid 90 days - (Single: RM3400, Couple:
                    RM4200)
                  </li>
                  <li>
                    30 sessions - Valid 135 days - (Single: RM4800, Couple:
                    RM6000)
                  </li>
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
