import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { AspectRatio } from "../ui/aspect-ratio";
import HeroImages from "./HeroImages";

const HeroSection = () => {
  return (
    <div className="space-y-10 mt-8">
      <MaxWidthWrapper>
        <h3 className="font-black text-5xl md:text-7xl lg:text-9xl xl:text-[8.8rem] xl:leading-32">
          BREAK FREE. <br />
          BREAK THROUGH. <br />
          <span className="bg-gradient-to-tr from-lime-400 from-15% to-emerald-500 to-65% bg-clip-text text-transparent">
            BREAKAWAY.
          </span>
        </h3>
      </MaxWidthWrapper>
      <HeroImages />
    </div>
  );
};

export { HeroSection };
