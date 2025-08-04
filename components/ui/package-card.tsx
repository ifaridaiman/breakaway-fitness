import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ReactNode } from 'react'

const PackageCard = ({
  className,
  title,
  imageSrc,
  children,
}: {
  title: string
  imageSrc?: string
  className?: string
  children: ReactNode
}) => {
  return (
    <div id="card" className={cn('w-full mb-8', className)}>
      <div className="flex flex-col md:flex-row bg-stone-300 rounded-2xl md:rounded-4xl h-[80vh] shadow-2xl">
        <div className="relative w-full min-h-52">
          <Image
            src={imageSrc ?? '/images/breakway-gym-1.webp'}
            alt="gym"
            fill
            className="object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-4xl"
          />
        </div>
        <div className="p-4 md:p-12 w-full">
          <h4 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            {title.toUpperCase()}
          </h4>
          {children}
        </div>
      </div>
    </div>
  )
}

export { PackageCard }
