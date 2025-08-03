import { cn } from '@/lib/utils'
import MaxWidthWrapper from '../MaxWidthWrapper'
import HeroImages from './HeroImages'
import localFont from 'next/font/local'
import { Button } from '../ui/button'

const madeOuterSans = localFont({
  src: '../../public/fonts/MADE-Outer-Sans-Black-PERSONAL-USE.otf',
  display: 'swap',
})

const HeroSection = () => {
  return (
    <div className="space-y-10 mt-8">
      <MaxWidthWrapper className="flex flex-col justify-center gap-8 lg:h-[60vh]">
        <h3
          className={cn(
            'font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[9rem] 2xl:leading-32',
            madeOuterSans.className
          )}
        >
          <span className="bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65% bg-clip-text text-transparent">
            BREAK AWAY
          </span>{' '}
          FROM ORDINARY FITNESS.
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl font-mono">
          Unleash your potential at Cyberjaya&apos;s premier fitness
          destination.
        </p>
      </MaxWidthWrapper>
      <div className="space-y-2">
        <HeroImages />
      </div>
    </div>
  )
}

export { HeroSection }
