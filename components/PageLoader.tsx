'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface PageLoaderProps {
  children: React.ReactNode
  imagesToPreload?: string[]
}

const PageLoader = ({ children, imagesToPreload = [] }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const preloadImages = async () => {
      if (imagesToPreload.length === 0) {
        setIsLoading(false)
        return
      }

      let loadedCount = 0
      const totalImages = imagesToPreload.length

      const loadImage = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          const img = new window.Image()
          img.src = src
          
          img.onload = () => {
            loadedCount++
            setProgress(Math.round((loadedCount / totalImages) * 100))
            resolve()
          }
          
          img.onerror = () => {
            loadedCount++
            setProgress(Math.round((loadedCount / totalImages) * 100))
            resolve() // Resolve anyway to not block the page
          }
        })
      }

      try {
        await Promise.all(imagesToPreload.map(loadImage))
        // Small delay for smooth transition
        setTimeout(() => {
          setIsLoading(false)
        }, 300)
      } catch (error) {
        console.error('Error preloading images:', error)
        setIsLoading(false)
      }
    }

    preloadImages()
  }, [imagesToPreload])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
        {/* Logo */}
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
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-center">
          LOADING YOUR EXPERIENCE
        </h2>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-lime-400 to-emerald-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="mt-4 text-lg text-muted-foreground">{progress}%</p>
      </div>
    )
  }

  return (
    <div className="animate-in fade-in duration-500">
      {children}
    </div>
  )
}

export default PageLoader

