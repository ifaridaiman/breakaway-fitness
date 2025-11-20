/**
 * Extract all image sources from components
 * This utility helps collect all images that need to be preloaded
 */

export const HOME_PAGE_IMAGES = [
  // Hero Section Images - HeroImages component uses gym1-gym6 (seed=1) and gym7-gym12 (seed=7)
  '/images/gym/gym1.jpg',
  '/images/gym/gym2.jpg',
  '/images/gym/gym3.jpg',
  '/images/gym/gym4.jpg',
  '/images/gym/gym5.jpg',
  '/images/gym/gym6.jpg',
  '/images/gym/gym7.jpg',
  '/images/gym/gym8.jpg',
  '/images/gym/gym9.jpg',
  '/images/gym/gym10.jpg',
  '/images/gym/gym11.jpg',
  '/images/gym/gym12.jpg',
  
  // Package Section
  '/images/package/580-body-scan.jpg',
  '/images/package/hyrox-group-training.jpg',
  '/images/package/personal-training.jpg',
  '/images/package/group-classes.jpg',
  '/images/package/open-gym.jpg',
] as const

export const ABOUT_PAGE_IMAGES = [
  '/images/gym/gym12.jpg',
  // Add other about page specific images here
] as const

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve()
    img.onerror = reject
  })
}

/**
 * Preload multiple images with progress tracking
 */
export const preloadImages = (
  sources: readonly string[],
  onProgress?: (progress: number) => void
): Promise<void[]> => {
  let loadedCount = 0
  const total = sources.length

  const loadWithProgress = (src: string) => {
    return preloadImage(src)
      .then(() => {
        loadedCount++
        if (onProgress) {
          onProgress(Math.round((loadedCount / total) * 100))
        }
      })
      .catch((error) => {
        console.warn(`Failed to preload image: ${src}`, error)
        loadedCount++
        if (onProgress) {
          onProgress(Math.round((loadedCount / total) * 100))
        }
      })
  }

  return Promise.all(sources.map(loadWithProgress))
}

