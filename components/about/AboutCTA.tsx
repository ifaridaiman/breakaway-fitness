import MaxWidthWrapper from '../MaxWidthWrapper'
import Link from 'next/link'
import Image from 'next/image'

const AboutCTA = () => {
  return (
    <section className="my-32">
      <MaxWidthWrapper>
        <div className="relative rounded-2xl xl:rounded-4xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/gym/gym12.jpg"
              alt="Join Breakaway Fitness"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover brightness-40"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 py-20 lg:py-32 px-8 lg:px-16 text-center text-white">
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              READY TO BREAKAWAY?
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto">
              Join Cyberjaya&apos;s premier fitness community and start your transformation today
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/signup"
                className="px-8 py-4 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 text-black text-xl md:text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                START YOUR FREE TRIAL
              </Link>
              <Link
                href="/packages"
                className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white text-white text-xl md:text-2xl font-bold hover:bg-white/20 transition-colors duration-300"
              >
                VIEW PACKAGES
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-2xl mb-2">📍 LOCATION</h4>
                <p className="text-lg">Cyberjaya, Selangor</p>
              </div>
              <div>
                <h4 className="text-2xl mb-2">📞 CONTACT</h4>
                <p className="text-lg">+60 12-345 6789</p>
              </div>
              <div>
                <h4 className="text-2xl mb-2">⏰ HOURS</h4>
                <p className="text-lg">Mon-Sun: 6AM - 11PM</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutCTA

