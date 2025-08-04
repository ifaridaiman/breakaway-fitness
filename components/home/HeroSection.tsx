import MaxWidthWrapper from '../MaxWidthWrapper'
import HeroImages from './HeroImages'

const HeroSection = () => {
  return (
    <div className="space-y-10 mt-[4vh]">
      <MaxWidthWrapper className="flex flex-col justify-center gap-[1.4rem] lg:h-[50vh]">
        <h3 className="font-bold text-[10vw] md:text-[8vw] leading-[0.85]">
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
      <div className="space-y-2">
        <HeroImages />
        <HeroImages className="block md:hidden" speed={0.03} />
      </div>
    </div>
  )
}

export { HeroSection }
