import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import MaxWidthWrapper from './MaxWidthWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import Link from 'next/link'

const Footer = () => {
  const socials = [
    {
      icon: faFacebook,
      link: 'https://www.facebook.com/people/BreakawayFitness/61578301744703/?rdid=4ye0SvEwkiAITr6J&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LK6kJYqFa%2F',
    },
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/breakawayfitness/',
    },
    {
      icon: faWhatsapp,
      link: 'https://wa.me/60128775756',
    },
    {
      icon: faTiktok,
      link: 'https://www.tiktok.com/@breakawayfitness',
    },
  ]

  return (
    <footer className="mt-16">
      <MaxWidthWrapper>
        <div className="border-0 md:border-2 border-gray-500 rounded-[3rem] p-0 md:p-8 lg:p-12">
          <div className="border md:border-2 border-gray-500 rounded-[3rem] p-2 md:p-8 lg:p-12">
            <div className="border md:border-2 border-gray-500 rounded-[3rem] p-2 md:p-8 lg:p-12">
              <div className="border md:border-2 border-gray-500 rounded-[3rem] py-28 px-4 flex flex-col items-center gap-4">
                <h3 className="text-center text-4xl md:text-5xl">
                  BREAKAWAY FROM LIMITS!
                </h3>
                <p className="text-center">
                  Join the Breakaway community today and start your journey
                  towards a fitter, stronger you.
                </p>
                <Link href="/signup">
                  <Button className="mt-4 group" size="lg">
                    BECOME A MEMBER
                    <ArrowRight className="group-hover:translate-x-1 transition duration-75" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-black text-white py-12 mt-6">
        <MaxWidthWrapper className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-baseline gap-8">
            <Image
              src="/logo-icon.svg"
              alt="Breakaway Fitness"
              height={64}
              width={64}
            />
            <p className="text-center lg:text-left">
              Cyberview Garden, No L1-2B, <br /> The Social Ground, Persiaran
              Multimedia, <br /> 63000 Cyberjaya, Selangor
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center lg:items-end gap-2">
              <p>info@breakaway-fitness.com</p>
              <p>012-877 5756</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <Link key={social.link} href={social.link} target="_blank">
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-sm text-center lg:text-end">
              © {new Date().getFullYear()} BY BREAKAWAY FITNESS.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  )
}

export default Footer
