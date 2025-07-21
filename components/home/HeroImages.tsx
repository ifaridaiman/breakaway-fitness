import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function HeroImages() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        <ul className="flex shrink-0 gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <li key={index} className="w-[700px] shrink-0">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={`/images/breakway-gym-${index + 1}.webp`}
                  alt="gym"
                  fill
                  className="rounded-lg object-cover pointer-events-none"
                  draggable={false}
                />
              </AspectRatio>
            </li>
          ))}
        </ul>

        {/* Duplicate set for seamless loop */}
        <ul className="flex shrink-0 gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <li key={index} className="w-[700px] shrink-0">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={`/images/breakway-gym-${index + 1}.webp`}
                  alt="gym"
                  fill
                  className="rounded-lg object-cover pointer-events-none"
                  draggable={false}
                />
              </AspectRatio>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
