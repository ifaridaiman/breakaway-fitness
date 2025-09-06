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
      <div className="flex flex-col xl:flex-row bg-white rounded-2xl xl:rounded-4xl lg:min-h-[80vh] drop-shadow-xl border border-black/40">
        <div className="relative w-full min-h-64">
          <Image
            src={imageSrc ?? '/images/breakway-gym-1.webp'}
            alt="gym"
            fill
            className="object-cover rounded-t-2xl xl:rounded-t-none xl:rounded-l-4xl"
          />
        </div>
        <div className="p-4 md:p-12 w-full">
          <h4 className="text-[6.5vw] md:text-4xl leading-[0.9] mb-4">
            {title.toUpperCase()}
          </h4>
          <div className="text-lg lg:text-2xl">{children}</div>
        </div>
      </div>
    </div>
  )
}

export { PackageCard }
