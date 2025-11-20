import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'

const TEAM_MEMBERS = [
  {
    name: 'Sarah Johnson',
    role: 'Head Coach & Founder',
    specialization: 'HYROX Training, Functional Fitness',
    imageSrc: '/images/gym/gym12.jpg',
    certifications: 'NASM-CPT, CrossFit L2, HYROX Certified',
  },
  {
    name: 'Marcus Chen',
    role: 'Strength & Conditioning Coach',
    specialization: 'Olympic Lifting, Powerlifting',
    imageSrc: '/images/gym/gym12.jpg',
    certifications: 'CSCS, USAW L1',
  },
  {
    name: 'Aisha Rahman',
    role: 'Yoga & Pilates Instructor',
    specialization: 'Vinyasa, Power Yoga, Mat Pilates',
    imageSrc: '/images/gym/gym12.jpg',
    certifications: 'RYT-500, PMA-CPT',
  },
  {
    name: 'David Tan',
    role: 'Martial Arts Instructor',
    specialization: 'Silat, Muay Thai, Boxing',
    imageSrc: '/images/gym/gym12.jpg',
    certifications: 'Black Belt 3rd Dan, Certified Silat Instructor',
  },
  {
    name: 'Emma Williams',
    role: 'Group Fitness Coordinator',
    specialization: 'Aerobic Dance, HIIT, Bootcamp',
    imageSrc: '/images/gym/gym12.jpg',
    certifications: 'ACE-GFI, Zumba Certified',
  },
  {
    name: 'Raj Kumar',
    role: 'Personal Training Specialist',
    specialization: 'Weight Loss, Body Recomposition',
    imageSrc: '/images/gym/gym12.jpg',
    certifications: 'NASM-CPT, Precision Nutrition L1',
  },
] as const

const Team = () => {
  return (
    <section className="my-32 bg-gradient-to-b from-secondary/20 to-background py-20">
      <MaxWidthWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            MEET YOUR COACHES.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
            Certified professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl xl:rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl mb-2">{member.name}</h3>
                <p className="text-lg text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-base md:text-lg mb-3">
                  {member.specialization}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {member.certifications}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Team

