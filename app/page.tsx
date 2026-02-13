import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className='font-body'>
      {/* ── Section 1: Hero ── */}
      <Hero />

      {/* ── Section 2: About / Intro ── */}
      <section className='bg-surface-ocean py-28 md:py-36 px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2
            className='font-display text-4xl md:text-5xl lg:text-6xl text-text-on-light tracking-tight mb-14'
            style={{ fontStyle: "italic" }}
          >
            A podcast app for intentional listening
          </h2>

          <div className='space-y-8 text-text-on-light/75 text-base md:text-lg leading-relaxed font-light'>
            <p>Most podcast apps help you find more things to listen to.</p>
            <p>Deeply helps you listen more deliberately.</p>
            <p>
              It&apos;s not about speed, productivity, or optimization.
              It&apos;s about{" "}
              <strong className='font-extrabold text-[#0075A3]'>care</strong>.
              Care for your curiosity, your time, and your attention.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: about ── */}
      <section className='relative py-28 md:py-36 px-6 overflow-hidden'>
        {/* Ocean background */}
        <div className='absolute inset-0 z-0'>
          <img
            src='/ocean-bg.jpg'
            alt='deeply-diver'
            // fill
            className='object-cover'
            // quality={85}
          />
          {/* Dark scrim overlay */}
          <div className='absolute inset-0 bg-black/65' />
        </div>

        <div className='relative z-10 max-w-5xl mx-auto'>
          <h2
            className='font-display text-4xl md:text-5xl lg:text-6xl text-white text-center tracking-tight mb-20'
            style={{ fontStyle: "italic" }}
          >
            Dive into what matters
          </h2>

          <div className='grid md:grid-cols-3 gap-10 md:gap-14'>
            {/* Feature 1 */}
            <div className='group text-center md:text-left'>
              <div className='w-12 h-px bg-accent mb-6 mx-auto md:mx-0 transition-all group-hover:w-20 group-hover:bg-white' />
              <h3
                className='font-display text-2xl text-white mb-4'
                style={{ fontStyle: "italic" }}
              >
                Mindful Queue
              </h3>
              <p className='text-white/60 text-sm leading-relaxed font-light'>
                Build a listening queue that reflects your intentions, not an
                algorithm&apos;s agenda. Set your pace, mark episodes for deep
                focus, and let silence be part of the experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='group text-center md:text-left'>
              <div className='w-12 h-px bg-accent mb-6 mx-auto md:mx-0 transition-all group-hover:w-20 group-hover:bg-white' />
              <h3
                className='font-display text-2xl text-white mb-4'
                style={{ fontStyle: "italic" }}
              >
                Deep Notes
              </h3>
              <p className='text-white/60 text-sm leading-relaxed font-light'>
                Capture thoughts as you listen with timestamped notes that live
                alongside each episode. Revisit your reflections weeks later and
                watch your ideas evolve.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='group text-center md:text-left'>
              <div className='w-12 h-px bg-accent mb-6 mx-auto md:mx-0 transition-all group-hover:w-20 group-hover:bg-white' />
              <h3
                className='font-display text-2xl text-white mb-4'
                style={{ fontStyle: "italic" }}
              >
                Focus Sessions
              </h3>
              <p className='text-white/60 text-sm leading-relaxed font-light'>
                Block out distractions with a dedicated listening mode that dims
                notifications and tracks your listening streaks. Commit to being
                present with every episode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Features — How Deeply Helps ── */}
      <section className='relative py-28 md:py-36 px-6 bg-surface-ocean overflow-hidden'>
        {/* Layered atmospheric washes */}
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/4' />
        <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-deep/[0.04] rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4' />

        <div className='relative z-10 max-w-3xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-20'>
            <p className='text-accent-muted/80 text-xs tracking-[0.3em] uppercase font-medium mb-5'>
              Features
            </p>
            <h2
              className='font-display text-4xl md:text-5xl lg:text-6xl text-text-on-light tracking-tight'
              style={{ fontStyle: "italic" }}
            >
              How does Deeply help you listen with intention?
            </h2>
          </div>

          {/* Feature items */}
          <div className='space-y-14'>
            {/* Feature 1 */}
            <div className='group relative pl-8 border-l-2 border-accent/20 hover:border-accent/60 transition-colors duration-500'>
              <p className='text-text-on-light/80 text-base md:text-lg leading-relaxed font-light'>
                <strong className='font-medium text-text-on-light'>
                  Follow people and topics
                </strong>
                , not just shows. Your discovery adapts to what you choose to
                pay attention to, creating an algorithm you control.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='group relative pl-8 border-l-2 border-accent/20 hover:border-accent/60 transition-colors duration-500'>
              <p className='text-text-on-light/80 text-base md:text-lg leading-relaxed font-light'>
                <strong className='font-medium text-text-on-light'>
                  Choose how deeply to listen
                </strong>{" "}
                with Smart Listen. A single moment, key clips, a focused idea,
                or the full conversation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='group relative pl-8 border-l-2 border-accent/20 hover:border-accent/60 transition-colors duration-500'>
              <p className='text-text-on-light/80 text-base md:text-lg leading-relaxed font-light'>
                <strong className='font-medium text-text-on-light'>
                  See patterns emerge over time
                </strong>
                , as recurring ideas, voices, and themes become visible across
                what you listen to.
              </p>
            </div>
          </div>

          {/* Closing tagline */}
          <div className='mt-20 text-center'>
            <p
              className='font-display text-2xl md:text-3xl text-text-on-light/70 tracking-tight'
              style={{ fontStyle: "italic" }}
            >
              Less noise. More awareness.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA / Waitlist ── */}
      <section className='relative py-28 md:py-36 px-6 bg-surface'>
        {/* Subtle gradient accent */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none' />

        <div className='relative z-10 max-w-2xl mx-auto text-center'>
          <h2
            className='font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-6'
            style={{ fontStyle: "italic" }}
          >
            Take the plunge
          </h2>
          <p className='text-foreground/60 text-base md:text-lg leading-relaxed font-light mb-12 max-w-lg mx-auto'>
            We’re onboarding a community of passionate, intentional listeners
            who want to improve the experience of spoken word media. Sign up for
            the Deeply beta here.
          </p>

          <form className='flex flex-col sm:flex-row gap-2 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='you@email.com'
              className='flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/8 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 backdrop-blur-sm transition-all font-body'
            />
            <button
              type='submit'
              className='px-6 py-2.5 rounded-lg bg-accent text-deep text-sm font-medium tracking-wide hover:bg-white hover:text-deep transition-all duration-300 cursor-pointer whitespace-nowrap'
            >
              Dive In
            </button>
          </form>
        </div>
      </section>

      {/* ── Section 6: The Crew ── */}
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
            <h2
              className='font-display text-4xl md:text-5xl lg:text-6xl text-text-on-light tracking-tight'
              style={{ fontStyle: "italic" }}
            >
              Built by people who care
            </h2>
          </div>

          <p className='text-text-on-light/65 text-base md:text-lg leading-relaxed font-light text-center max-w-xl mx-auto mb-20'>
            We believe technology should improve the experience of contemporary
            life — not make it worse.
          </p>

          {/* Team grid */}
          <div className='grid md:grid-cols-3 gap-12 md:gap-10'>
            {[
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
              {
                name: "Ben Wozak",
                role: "Concepting & Programming",
                image: "/Ben.webp",
                linkedin: "https://www.linkedin.com/in/ben-wozak/",
              },
            ].map((member) => (
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
                  className='inline-flex items-center gap-1.5 text-xs text-accent-muted/60 hover:text-accent transition-colors duration-300'
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

      {/* ── Section 7: Footer ── */}
      <footer className='border-t border-white/5 py-6 px-6 bg-background'>
        <div className='max-w-5xl mx-auto flex flex-col items-center justify-between gap-4'>
          <img
            src='/deeply-diver.png'
            alt='Deeply-diver'
            width={64}
            height={"100%"}
            className='opacity-60'
          />
          <div className='flex items-center gap-3'>
            <span
              className='font-display text-4xl px-4 text-foreground/80'
              style={{ fontStyle: "italic" }}
            >
              Deeply
            </span>
          </div>

          {/* <nav className='flex gap-8 text-sm text-foreground/40 font-light'>
            <a href='#' className='hover:text-foreground/80 transition-colors'>
              About
            </a>
            <a href='#' className='hover:text-foreground/80 transition-colors'>
              Privacy
            </a>
            <a href='#' className='hover:text-foreground/80 transition-colors'>
              Terms
            </a>
            <a href='#' className='hover:text-foreground/80 transition-colors'>
              Contact
            </a>
          </nav> */}

          <p className='text-sm text-foreground/50 font-light'>
            &copy; {new Date().getFullYear()} · Listen with intention
          </p>
        </div>
      </footer>
    </main>
  );
}
