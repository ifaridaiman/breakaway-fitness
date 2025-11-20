import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function SignUp() {
  return (
    <>
      <MaxWidthWrapper className="h-[90vh] my-2">
        <iframe
          src="https://bookings.vibefam.com/breakawayfitness/signup/"
          width="100%"
          height="100%"
          className="rounded-3xl border-2 drop-shadow-xl"
          title="Schedule VibeFam"
        />
      </MaxWidthWrapper>
    </>
  )
}
