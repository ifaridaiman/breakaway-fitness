import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'
import Image from 'next/image'
import { Menu } from 'lucide-react'

const Navbar2 = () => {
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
    <nav className="fixed flex justify-center bottom-4 md:bottom-8 w-full z-50">
      <div className="w-[95vw] md:w-[50vw] lg:w-[30vw] bg-white p-2 rounded-2xl drop-shadow-2xl border-2">
        <div className="flex gap-2 justify-between items-center">
          <Link href="/">
            <Image
              src="/logo-icon-wordmark.svg"
              alt="Breakaway Fitness"
              height={200}
              width={200}
              className="hidden 2xl:block pl-2"
            />
            <Image
              src="/logo-icon.svg"
              alt="Breakaway Fitness"
              height={52}
              width={52}
              className="block 2xl:hidden"
            />
          </Link>
          <Button
            size="lg"
            className="p-8 space-x-4 xl:space-x-12 shadow-2xl"
            variant="ghost"
          >
            <h2 className="text-2xl">HOME</h2>
            <Menu className="size-10" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar2
