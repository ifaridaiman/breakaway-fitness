import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { AspectRatio } from '../ui/aspect-ratio'

const BriefSection = () => {
  return (
    <section className="py-64">
      <MaxWidthWrapper className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
        <div className="space-y-4 py-6 pr-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl">
            BREAKAWAY FITNESS, CYBERJAYA
          </h3>
          <p>
            Breakaway Fitness Cyberjaya isn't just a gym - it's a a thriving
            community. As the first official HYROX Training Club in Cyberjaya &
            Putrajaya, your Centre offers a diverse menu of programs: Functional
            Strength, HYROX Class, Aero Dance, Yoga, Pilates, Martial Arts and
            even Silat Training. Certified coaches guide members in a
            supportive, non-judgemental enviroment so they can build strength,
            improve flexibility and achieve lasting results.
          </p>
        </div>
        <div className="w-full">
          <AspectRatio ratio={3 / 2}>
            <Image
              src="/images/breakway-gym-1.webp"
              alt="gym"
              fill
              className="object-cover rounded-4xl"
            />
          </AspectRatio>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default BriefSection
