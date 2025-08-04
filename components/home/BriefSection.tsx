import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { AspectRatio } from '../ui/aspect-ratio'
import { Button } from '../ui/button'
import { PackageCard } from '../ui/package-card'

const BriefSection = () => {
  return (
    <section className="">
      <MaxWidthWrapper className="my-64">
        <div className="rounded-4xl grid grid-cols-1 xl:grid-cols-2 w-full gap-4 p-6 md:p-8 bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65%">
          <div className="flex flex-col justify-between lg:py-6 lg:pr-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl">
                BREAKAWAY FITNESS, CYBERJAYA
              </h3>
              <p>
                Breakaway Fitness Cyberjaya isn't just a gym - it's a a thriving
                community. As the first official HYROX Training Club in
                Cyberjaya & Putrajaya, your Centre offers a diverse menu of
                programs: Functional Strength, HYROX Class, Aero Dance, Yoga,
                Pilates, Martial Arts and even Silat Training. Certified coaches
                guide members in a supportive, non-judgemental enviroment so
                they can build strength, improve flexibility and achieve lasting
                results.
              </p>
            </div>
          </div>
          <div className="relative w-full min-h-[30vh] md:min-h-[70vh]">
            <Image
              src="/images/breakway-gym-1.webp"
              alt="gym"
              fill
              className="object-cover rounded-2xl md:rounded-4xl"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default BriefSection
