import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import MissionValues from '@/components/about/MissionValues'
import Facilities from '@/components/about/Facilities'
import Team from '@/components/about/Team'
import Community from '@/components/about/Community'
import AboutCTA from '@/components/about/AboutCTA'
import { RectangleLine } from '@/components/ui/rectangle-line'

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -z-10 -right-68 top-20 w-auto">
        <RectangleLine />
      </div>
      <div className="absolute -z-10 -left-68 top-[1500px] w-auto">
        <RectangleLine />
      </div>
      <div className="absolute -z-10 -right-68 top-[3000px] w-auto">
        <RectangleLine />
      </div>

      {/* Page Sections */}
      <AboutHero />
      <OurStory />
      {/* <MissionValues /> */}
      <Facilities />
      {/* <Team /> */}
      {/* <Community /> */}
      <AboutCTA />
    </div>
  )
}
