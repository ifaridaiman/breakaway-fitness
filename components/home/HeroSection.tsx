import MaxWidthWrapper from '../MaxWidthWrapper'
import HeroImages from './HeroImages'

const HeroSection = () => {
  return (
    <div className="space-y-10">
      <MaxWidthWrapper className="flex flex-col justify-center gap-[1.4rem] mt-8 lg:mt-0 lg:h-[60vh]">
        <h3 className="font-bold text-[10vw] md:text-[8vw] leading-[0.85] drop-shadow-xl">
          <span className="bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65% bg-clip-text text-transparent">
            BREAK AWAY
          </span>{' '}
          FROM ORDINARY FITNESS.
        </h3>
        <p className="text-base sm:text-xl lg:text-2xl font-mono leading-[1]">
          Unleash your potential at Cyberjaya&apos;s premier fitness
          destination.
        </p>
      </MaxWidthWrapper>
      <div className="relative space-y-2">
        <HeroImages />
        <HeroImages className="block md:hidden" speed={0.03} />
        {/* <div className="absolute size-[14vw] drop-shadow-xl right-1/8 -top-1/3 z-20 transition duration-600 ease-in-out rotate-6 hover:-rotate-12 hover:cursor-pointer hidden xl:block">
          <Image
            src="/assets/sticker-logo.svg"
            alt="breakaway fitness logo sticker"
            fill
          />
        </div> */}
      </div>
    </div>
  )
}

export { HeroSection }
