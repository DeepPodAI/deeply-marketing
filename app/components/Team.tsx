import Image from "next/image";

const members = [
  {
    name: "Paul Stewart",
    role: "Founder / Business Development",
    image: "/Paul.webp",
    linkedin: "https://www.linkedin.com/in/paulhardingstewart/",
  },
  {
    name: "Dana Dansereau",
    role: "Co-founder / UX & Product Development",
    image: "/Dana.webp",
    linkedin: "https://www.linkedin.com/in/danacreativetechnology/",
  },
  // {
  //   name: "Ben Wozak",
  //   role: "Concepting & Programming",
  //   image: "/Ben.webp",
  //   linkedin: "https://www.linkedin.com/in/ben-wozak/",
  // },
];

export default function Team() {
  return (
    <section className='relative py-28 md:py-36 px-6 bg-surface-ocean overflow-hidden'>
      {/* Atmospheric washes */}
      <div className='absolute top-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none -translate-x-1/4 -translate-y-1/4' />
      <div className='absolute bottom-0 right-0 w-[350px] h-[350px] bg-deep/[0.06] rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4' />

      <div className='relative z-10 max-w-3xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <p className='text-accent-muted/80 text-xs tracking-[0.3em] uppercase font-medium mb-5'>
            The Crew
          </p>
          <h2 className='font-display italic text-4xl md:text-5xl lg:text-6xl text-text-on-light tracking-tight'>
            Built by people who care
          </h2>
        </div>

        <p className='text-text-on-light/65 text-base md:text-lg leading-relaxed font-light text-center max-w-xl mx-auto mb-20'>
          We believe technology should improve the experience of contemporary
          life — not make it worse.
        </p>

        {/* Team grid */}
        <div className='grid md:grid-cols-2 gap-12 md:gap-10'>
          {members.map((member) => (
            <div key={member.name} className='group text-center'>
              <div className='relative w-24 h-24 mx-auto mb-6'>
                <div className='absolute -inset-[2px] rounded-full bg-gradient-to-br from-deep via-deep/80 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <div className='relative w-full h-full rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-transparent transition-all duration-500'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className='object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500'
                  />
                </div>
              </div>
              <h3 className='font-medium text-text-on-light text-base tracking-wide mb-1'>
                {member.name}
              </h3>
              <p className='text-text-on-light/50 text-sm font-light mb-3'>
                {member.role}
              </p>
              <a
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-sm text-accent-muted/80 hover:text-accent transition-colors duration-300'
              >
                <svg
                  className='w-3.5 h-3.5'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
                <span>Connect</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
