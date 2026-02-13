export default function CallToAction() {
  return (
    <section className='relative py-28 md:py-36 px-6 bg-surface'>
      {/* Subtle gradient accent */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none' />

      <div className='relative z-10 max-w-2xl mx-auto text-center'>
        <h2 className='font-display italic text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-6'>
          Take the plunge
        </h2>
        <p className='text-foreground/60 text-base md:text-lg leading-relaxed font-light mb-12 max-w-lg mx-auto'>
          We&apos;re onboarding a community of passionate, intentional listeners
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
  );
}
