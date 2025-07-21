import { HeroSection } from "@/components/home/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <img
        className="absolute -right-1/2 -z-10 top-0 mt-24 w-auto"
        src="/assets/rectangle-line-2.svg"
      ></img>
      <HeroSection />
      <section className="h-96 my-96"></section>
    </>
  );
}
