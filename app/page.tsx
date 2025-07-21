import { HeroSection } from "@/components/home/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <img
        className="absolute -right-3/5 md:-right-2/3 lg:-right-1/2 -z-10 top-0 mt-16 md:mt-24 w-[1000px]"
        src="/assets/rectangle-line-3.svg"
      />
      <HeroSection />
      <section className="h-96 my-96"></section>
    </>
  );
}
