import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const menuItems = [
    {
      title: 'HOME',
      url: '/',
    },
    {
      title: 'ABOUT',
      url: '/about',
    },
    {
      title: 'SCHEDULE',
      url: '/schedule',
    },
    {
      title: 'FAQ',
      url: '/faq',
    },
    {
      title: 'CONTACT',
      url: '/contact',
    },
    {
      title: 'SIGN UP',
      url: '/signup',
    },
  ]

  return (
    <nav className="sticky top-0 z-40 px-4">
      <MaxWidthWrapper className=" flex justify-between items-center py-2">
        <Link href="/">
          <Image
            src="/logo-stroke.svg"
            alt="Breakaway Fitness"
            height={200}
            width={200}
            className="hidden xl:block"
          />
          <Image
            src="/assets/sticker-logo.svg"
            alt="Breakaway Fitness"
            height={52}
            width={52}
            className="block xl:hidden"
          />
        </Link>
        <Menu className="size-10 lg:hidden" />
        <div className="lg:flex items-center gap-10 hidden p-4 backdrop-blur-md bg-background/60 rounded-2xl">
          <ul className="flex items-center gap-6 font-made-outer-sans-medium tracking-wider font-bold">
            {menuItems.map((menu) => {
              return (
                <li key={menu.title}>
                  <Link href={menu.url}>{menu.title}</Link>
                </li>
              )
            })}
          </ul>
          {/* <div className="flex items-center gap-2">
            <Button className="font-mono font-bold" variant="secondary">
              CONTACT
            </Button>
            <Button className="font-mono font-bold">SIGN UP</Button>
          </div> */}
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
