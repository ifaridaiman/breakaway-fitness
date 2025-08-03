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
    <nav className="sticky top-0 z-40 p-0 md:p-2">
      <MaxWidthWrapper className="bg-white/10 backdrop-blur-lg md:px-8 py-4 flex justify-between items-center md:rounded-2xl">
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
        <div className="lg:flex items-center gap-10 hidden">
          <ul className="flex items-center gap-4 font-made-outer-sans-medium tracking-wider">
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
