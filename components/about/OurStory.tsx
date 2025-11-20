import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'

const OurStory = () => {
  return (
    <section className="my-32">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Story Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                BORN FROM PASSION.
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl">
                Breakaway Fitness was founded with a simple vision: to create more 
                than just a gym. We wanted to build a sanctuary where people could 
                escape the ordinary and discover their extraordinary potential.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl mb-4">
                THE BREAKAWAY DIFFERENCE
              </h3>
              <p className="text-lg md:text-xl">
                Located in the heart of Cyberjaya, we&apos;ve become the first 
                official HYROX Training Club in Cyberjaya & Putrajaya. Our 
                resort-style facility combines world-class fitness equipment 
                with a welcoming, judgment-free atmosphere.
              </p>
            </div>

            <div className="rounded-2xl xl:rounded-4xl bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65% p-8 lg:p-12">
              <h4 className="text-2xl md:text-3xl mb-4">OUR MISSION</h4>
              <p className="text-lg md:text-xl">
                To empower every individual to break free from limitations, 
                break through barriers, and breakaway from ordinary fitness. 
                We&apos;re not just building bodies—we&apos;re building a 
                community of champions.
              </p>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/gym/gym12.jpg"
                alt="Gym facility"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative h-64 lg:h-80 mt-12">
              <Image
                src="/images/gym/gym12.jpg"
                alt="Training session"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative h-64 lg:h-80 -mt-12">
              <Image
                src="/images/gym/gym12.jpg"
                alt="Group class"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/gym/gym12.jpg"
                alt="Coaching"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default OurStory

