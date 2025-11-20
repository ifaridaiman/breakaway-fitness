import BriefSection from '@/components/home/BriefSection'
import { HeroSection } from '@/components/home/HeroSection'
import PackageSection from '@/components/home/PackageSection'
import { RectangleLine } from '@/components/ui/rectangle-line'
import PageLoader from '@/components/PageLoader'
import { HOME_PAGE_IMAGES } from '@/lib/imageUtils'

export default function Home() {
  return (
    <PageLoader imagesToPreload={[...HOME_PAGE_IMAGES]}>
      <div className="relative h-full w-full overflow-x-hidden">
        <div className="absolute -z-10 -right-68 top-20 w-auto">
          <RectangleLine />
        </div>
        <div className="absolute -z-10 -left-68 top-[1000] w-auto">
          <RectangleLine />
        </div>
        <HeroSection />
        <BriefSection />
        <PackageSection />
        {/* <LocationSection /> */}
        {/* <section className="h-96 my-96"></section> */}
      </div>
    </PageLoader>
  )
}
