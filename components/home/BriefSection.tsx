import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'

const BriefSection = () => {
  return (
    <section className="my-32">
      <MaxWidthWrapper>
        <div className="rounded-2xl xl:rounded-4xl grid grid-cols-1 xl:grid-cols-2 w-full gap-4 p-6 md:p-12 bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65%">
          <div className="flex flex-col justify-between lg:pr-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl">
                BREAKAWAY FITNESS, CYBERJAYA
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl max-w-3xl">
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
            <div className="flex justify-center items-center bg-gray-300/80 min-h-64 h-full mt-10">
              <h4 className="text-center">
                Placeholder for content (e.g. Reviews, Logo and some coool
                sticker)
              </h4>
            </div>
          </div>
          <div className="relative w-full min-h-64 hidden xl:block">
            <Image
              src="/images/gym/gym12.jpg"
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
