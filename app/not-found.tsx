import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button variant="default">GO BACK HOME PAGE</Button>
      </Link>
    </div>
  )
}
