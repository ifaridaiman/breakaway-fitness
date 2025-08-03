import MaxWidthWrapper from '../MaxWidthWrapper'
import HeroImages from './HeroImages'

const HeroSection = () => {
  return (
    <div className="space-y-10 mt-8">
      <MaxWidthWrapper className="flex items-center h-[50vh]">
        <h3 className="font-black text-[7vw] leading-[0.9]">
          BREAK FREE. <br />
          BREAK THROUGH. <br />
          <span className="bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65% bg-clip-text text-transparent">
            BREAKAWAY.
          </span>
        </h3>
      </MaxWidthWrapper>
      <HeroImages />
    </div>
  )
}

export { HeroSection }
