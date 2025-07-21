import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function HeroImages() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        <div className="flex shrink-0">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={`${index}`}
              className="w-[80vw] md:w-96 lg:w-[700px] mr-2 flex-shrink-0"
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={`/images/breakway-gym-${index + 1}.webp`}
                  alt="gym"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 320px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
