import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { AspectRatio } from "../ui/aspect-ratio";

const BriefSection = () => {
  return (
    <section className="py-64 my-10">
      <MaxWidthWrapper className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
        <div className="space-y-4 py-6 pr-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            BREAKAWAY FITNESS, CYBERJAYA
          </h3>
          <p className="text-lg leading-8">
            Discover your potential at Breakaway Fitness Cyberjaya, the premier
            fitness destination in Cyberjaya! As official HYROX Training Club
            and the very first in Cyberjaya & Putrajaya, we offer a diverse
            range of programs for every age and fitness level.
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
  );
};

export default BriefSection;
