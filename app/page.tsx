import Footer from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import LocationSection from "@/components/home/LocationSection";

export default function Home() {
  return (
    <>
      <img
        className="absolute -right-3/5 md:-right-2/3 lg:-right-1/2 -z-10 top-0 mt-16 md:mt-24 w-auto"
        src="/assets/rectangle-line-3.svg"
      />
      <HeroSection />
      <LocationSection />
      <section className="h-96 my-96"></section>
    </>
  );
}
