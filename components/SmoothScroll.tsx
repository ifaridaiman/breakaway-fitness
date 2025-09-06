'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e: any) => {
      console.log(e)
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <div></div>
}
