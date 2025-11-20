import Image from 'next/image'

/**
 * Next.js built-in loading UI
 * This will automatically show while the page is loading
 * Alternative to PageLoader for simpler use cases
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Logo with pulse animation */}
      <div className="mb-8 animate-pulse">
        <Image
          src="/logo-icon.svg"
          alt="Breakaway Fitness"
          width={120}
          height={120}
          priority
        />
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-center animate-pulse">
        LOADING YOUR EXPERIENCE
      </h2>

      {/* Animated Spinner */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-gray-300" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />
      </div>
    </div>
  )
}

