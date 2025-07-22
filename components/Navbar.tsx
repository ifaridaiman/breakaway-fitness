import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  const menuItems = [
    {
      title: "Home",
      url: "/",
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
    <nav className="sticky top-0 z-40 p-2">
      <MaxWidthWrapper className=" bg-white/10 backdrop-blur-lg md:px-8 py-4 flex justify-between items-center rounded-2xl">
        <Link href="/">
          <Image
            src="/mini-logo.webp"
            alt="Breakaway Fitness"
            height={40}
            width={40}
          />
        </Link>
        <div className="lg:flex items-center gap-10 hidden">
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
    </nav>
  );
};

export default Navbar;
