import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import HeroImages from './HeroImages'

const HeroSection = () => {
  return (
    <div className="space-y-12">
      <MaxWidthWrapper className="flex flex-col justify-center gap-[1.4rem] mt-8 lg:mt-0 lg:h-[60vh]">
        <h3 className="font-black text-[9.8vw] md:text-[7.4vw] text-center lg:text-left leading-[0.9] drop-shadow-xl">
          BREAK FREE. <br />
          BREAK THROUGH. <br />
          <span className="bg-gradient-to-tr from-lime-500  to-emerald-500 bg-clip-text text-transparent">
            BREAKAWAY.
          </span>
        </h3>
        {/* <h3 className="font-bold text-[10vw] md:text-[8vw] leading-[0.85] drop-shadow-xl">
          <span className="bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65% bg-clip-text text-transparent">
            BREAK AWAY
          </span>{' '}
          FROM ORDINARY FITNESS.
        </h3>
        <p className="text-base sm:text-xl lg:text-2xl font-mono leading-[1]">
          Unleash your potential at Cyberjaya&apos;s premier fitness
          destination.
        </p> */}
      </MaxWidthWrapper>
      <div className="relative space-y-2">
        <div className="drop-shadow-xl right-10 -top-20 z-20 hover:cursor-pointer flex justify-center lg:absolute lg:block">
          <div className="p-3 rounded-xl lg:p-6 lg:-rotate-10 bg-gradient-to-bl from-primary to-lime-400 lg:rounded-3xl border-4 border-white flex justify-center items-center hover:scale-105 transition">
            <h3 className="text-[3vw] xl:text-[2vw] text-center">
              START BREAKAWAY NOW!
            </h3>
          </div>
        </div>
        <HeroImages className="rotate-5 scale-110 pt-10" speed={0.02} />
        <HeroImages
          className="lg:hidden scale-110 pt-4"
          seed={5}
          direction={1}
          speed={0.05}
        />
      </div>
    </div>
  )
}

export { HeroSection }
