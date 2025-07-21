import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  const menuItems = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Schedule",
      url: "/schedule",
    },
    {
      title: "FAQ",
      url: "/faq",
    },
  ];
  return (
    <MaxWidthWrapper className="py-4 flex justify-between items-center">
      <Image
        src="/mini-logo.webp"
        alt="Breakaway Fitness"
        height={40}
        width={40}
      />
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-6">
          {menuItems.map((menu) => {
            return (
              <li key={menu.title}>
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <Button variant="secondary">Contact</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
