'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { Button } from './ui/button'
import MaxWidthWrapper from './MaxWidthWrapper'

// Static data moved outside component to prevent recreation on every render
const SOCIALS = [
  {
    icon: faFacebook,
    link: 'https://www.facebook.com/people/BreakawayFitness/61578301744703/?rdid=4ye0SvEwkiAITr6J&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LK6kJYqFa%2F',
    label: 'Facebook',
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/breakawayfitness/',
    label: 'Instagram',
  },
  {
    icon: faWhatsapp,
    link: 'https://wa.me/60128775756',
    label: 'WhatsApp',
  },
  {
    icon: faTiktok,
    link: 'https://www.tiktok.com/@breakawayfitness',
    label: 'TikTok',
  },
] as const

const CONTACT_INFO = {
  address: {
    line1: 'Cyberview Garden, No L1-2B,',
    line2: 'The Social Ground, Persiaran Multimedia,',
    line3: '63000 Cyberjaya, Selangor',
  },
  email: 'info@breakaway-fitness.com',
  phone: '012-877 5756',
} as const

const Footer = () => {
  const pathname = usePathname()

  // Hide CTA section on pages that have their own CTA
  const hideCTA = pathname === '/about'

  return (
    <footer className="mt-16">
      {/* Call-to-Action Section */}
      {!hideCTA && (
        <MaxWidthWrapper>
          <div className="border-0 md:border-2 border-gray-500 rounded-[3rem] p-0 md:p-8 lg:p-12">
            <div className="border md:border-2 border-gray-500 rounded-[3rem] p-2 md:p-8 lg:p-12">
              <div className="border md:border-2 border-gray-500 rounded-[3rem] p-2 md:p-8 lg:p-12">
                <div className="border md:border-2 border-gray-500 rounded-[3rem] py-20 md:py-28 px-6 md:px-4 flex flex-col items-center gap-4">
                  <h3 className="text-center text-3xl md:text-4xl lg:text-5xl">
                    BREAKAWAY FROM LIMITS!
                  </h3>
                  <p className="text-center text-base md:text-lg lg:text-xl max-w-2xl">
                    Join the Breakaway community today and start your journey
                    towards a fitter, stronger you.
                  </p>
                  <Link href="/signup">
                    <Button 
                      className="mt-4 group hover:scale-105 transition-transform" 
                      size="lg"
                      aria-label="Become a member of Breakaway Fitness"
                    >
                      BECOME A MEMBER
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      )}

      {/* Main Footer Section */}
      <div className="bg-black text-white py-12 mt-6">
        <MaxWidthWrapper className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {/* Logo & Address */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            <Link href="/" aria-label="Breakaway Fitness Home">
              <Image
                src="/logo-icon.svg"
                alt="Breakaway Fitness Logo"
                height={64}
                width={64}
                className="hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <address className="text-center lg:text-left not-italic leading-relaxed">
              {CONTACT_INFO.address.line1} <br />
              {CONTACT_INFO.address.line2} <br />
              {CONTACT_INFO.address.line3}
            </address>
          </div>

          {/* Contact Info & Social Links */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col items-center lg:items-end gap-3">
              <Link 
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-primary transition-colors"
                aria-label={`Email us at ${CONTACT_INFO.email}`}
              >
                {CONTACT_INFO.email}
              </Link>
              <Link 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="hover:text-primary transition-colors"
                aria-label={`Call us at ${CONTACT_INFO.phone}`}
              >
                {CONTACT_INFO.phone}
              </Link>
              
              {/* Social Media Links */}
              <div className="flex gap-4 mt-2">
                {SOCIALS.map((social) => (
                  <Link 
                    key={social.link} 
                    href={social.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
                  >
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-center lg:text-end text-white/70">
              © {new Date().getFullYear()} BY BREAKAWAY FITNESS. ALL RIGHTS RESERVED.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  )
}

export default Footer
