import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../MaxWidthWrapper";
import HeroImages from "./HeroImages";
import localFont from "next/font/local";

const impact = localFont({
  src: "../../public/fonts/Impact-Font/impact.ttf",
  display: "swap",
});

const madeOuterSans = localFont({
  src: "../../public/fonts/MADE-Outer-Sans-Black-PERSONAL-USE.otf",
  display: "swap",
});

const HeroSection = () => {
  return (
    <div className={cn("space-y-10 mt-8", madeOuterSans.className)}>
      <MaxWidthWrapper>
        <h3 className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[8.5rem] 2xl:leading-32">
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
