import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper>
        <div className="border-0 md:border-2 border-gray-500 rounded-[3rem] p-0 md:p-8 lg:p-12">
          <div className="border-2 border-gray-500 rounded-[3rem] p-2 md:p-8 lg:p-12">
            <div className="border-2 border-gray-500 rounded-[3rem] p-2 md:p-8 lg:p-12">
              <div className="border-2 border-gray-500 rounded-[3rem] py-28 px-4 flex flex-col items-center gap-4">
                <h3 className="text-center font-bold text-3xl md:text-5xl">
                  BREAKAWAY FROM LIMITS!
                </h3>
                <p className="text-center">
                  Ready to take control of your health and transform your body?
                  <br />
                  Sign up now and unlock your potential with a membership built
                  for serious progress.
                </p>
                <Button className="mt-4" size="lg">
                  Breakaway Now!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="bg-black text-white py-12 mt-6">
        <MaxWidthWrapper className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-baseline gap-8">
            <Image
              src="/mini-logo.webp"
              alt="Breakaway Fitness"
              height={64}
              width={64}
            />
            <p className="text-center lg:text-left">
              Cyberview Garden, No L1-2B, <br /> The Social Ground, Persiaran
              Multimedia, <br /> 63000 Cyberjaya, Selangor
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center lg:items-end gap-2">
              <p>contact@breakaway-fitness.com</p>
              <p>012-877 5756</p>
              <div className="flex gap-2">
                <Instagram />
                <Facebook />
              </div>
            </div>
            <p className="text-sm text-center lg:text-end">
              © {new Date().getFullYear()} BY BREAKAWAY FITNESS.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
};

export default Footer;
