'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'

// Menu items moved outside component for performance
const MENU_ITEMS = [
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
    title: 'SIGN UP',
    url: '/signup',
  },
] as const

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="sticky top-0 z-40 px-4 bg-background/95 backdrop-blur-sm">
        <MaxWidthWrapper className="flex justify-between items-center py-2">
          <Link href="/" aria-label="Breakaway Fitness Home">
            <Image
              src="/logo-stroke.svg"
              alt="Breakaway Fitness"
              height={200}
              width={200}
              className="hidden xl:block"
              priority
            />
            <Image
              src="/assets/sticker-logo.svg"
              alt="Breakaway Fitness"
              height={52}
              width={52}
              className="block xl:hidden"
              priority
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="size-8" />
            ) : (
              <Menu className="size-8" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="lg:flex items-center gap-10 hidden p-4 backdrop-blur-md bg-background/60 rounded-2xl">
            <ul className="flex items-center gap-6 font-made-outer-sans-medium tracking-wider font-bold">
              {MENU_ITEMS.map((menu) => {
                const isActive = pathname === menu.url
                return (
                  <li key={menu.title}>
                    <Link
                      href={menu.url}
                      className={`hover:text-primary transition-colors ${
                        isActive ? 'text-primary' : ''
                      }`}
                    >
                      {menu.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center gap-2">
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        {/* Menu Container - Slides from top */}
        <div
          className={`absolute top-0 left-0 right-0 bg-background transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Menu Header */}
          <div className="px-4 py-4 flex justify-between items-center border-b border-gray-200">
            <Link href="/" onClick={toggleMenu}>
              <Image
                src="/assets/sticker-logo.svg"
                alt="Breakaway Fitness"
                height={52}
                width={52}
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="size-8" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="px-6 py-8">
            <ul className="space-y-2">
              {MENU_ITEMS.map((menu, index) => {
                const isActive = pathname === menu.url
                return (
                  <li
                    key={menu.title}
                    className={`transform transition-all duration-300 ${
                      isMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                    }}
                  >
                    <Link
                      href={menu.url}
                      onClick={toggleMenu}
                      className={`block px-6 py-4 text-3xl md:text-4xl font-made-outer-sans-black rounded-2xl transition-all ${
                        isActive
                          ? 'bg-gradient-to-tr from-lime-400 to-emerald-500 text-black'
                          : 'hover:bg-gray-100 hover:translate-x-2'
                      }`}
                    >
                      {menu.title}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* CTA Button */}
            <div
              className={`mt-8 px-6 transform transition-all duration-300 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${MENU_ITEMS.length * 50}ms`
                  : '0ms',
              }}
            >
              {/* <Link href="/signup" onClick={toggleMenu}>
                <Button size="lg" className="w-full text-xl py-6">
                  START YOUR JOURNEY
                </Button>
              </Link> */}
            </div>

            {/* Contact Info */}
            <div
              className={`mt-12 px-6 space-y-3 text-center transform transition-all duration-300 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen
                  ? `${(MENU_ITEMS.length + 1) * 50}ms`
                  : '0ms',
              }}
            >
              <p className="text-lg">
                <a
                  href="tel:0128775756"
                  className="hover:text-primary transition-colors"
                >
                  012-877 5756
                </a>
              </p>
              <p className="text-lg">
                <a
                  href="mailto:info@breakaway-fitness.com"
                  className="hover:text-primary transition-colors"
                >
                  info@breakaway-fitness.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                Cyberjaya, Selangor
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
