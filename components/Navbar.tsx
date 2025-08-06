import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'
import Image from 'next/image'

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
  ]

  return (
    <nav className="sticky top-0 z-40">
      <MaxWidthWrapper className="py-4 flex justify-between items-center bg-background">
        <Link href="/">
          <Image
            src="/logo-icon-wordmark.svg"
            alt="Breakaway Fitness"
            height={180}
            width={180}
            className="hidden xl:block"
          />
          <Image
            src="/logo-icon.svg"
            alt="Breakaway Fitness"
            height={44}
            width={44}
            className="block xl:hidden"
          />
        </Link>
        <div className="lg:flex items-center gap-14 hidden">
          <ul className="flex items-center gap-8 font-made-outer-sans-medium tracking-wider">
            {menuItems.map((menu) => {
              return (
                <li key={menu.title}>
                  <Link href={menu.url}>{menu.title}</Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-2">
            <Button variant="secondary">CONTACT</Button>
            <Button>SIGN UP</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
