import Footer from "@/components/Footer";
import BriefSection from "@/components/home/BriefSection";
import { HeroSection } from "@/components/home/HeroSection";
import LocationSection from "@/components/home/LocationSection";
import { RectangleLine } from "@/components/ui/rectangle-line";

export default function Home() {
  return (
    <>
      <div className="absolute -z-10 -right-68 top-10 md:top-0 mt-16 md:mt-24 w-auto">
        <RectangleLine />
      </div>
      {/* <img
        className="absolute -right-3/5 md:-right-2/3 lg:-right-1/2 -z-10 top-0 mt-16 md:mt-24 w-auto"
        src="/assets/rectangle-line-3.svg"
      /> */}
      <HeroSection />
      <BriefSection />
      <LocationSection />
      <section className="h-96 my-96"></section>
    </>
  );
}
