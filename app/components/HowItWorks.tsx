export default function HowItWorks() {
  return (
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
          <h2 className='font-display italic text-4xl md:text-5xl lg:text-6xl text-text-on-light tracking-tight'>
            How does Deeply help you listen with intention?
          </h2>
        </div>

        {/* Feature items */}
        <div className='space-y-14'>
          <div className='group relative pl-8 border-l-2 border-accent/20 hover:border-accent/60 transition-colors duration-500'>
            <p className='text-text-on-light/80 text-base md:text-lg leading-relaxed font-light'>
              <strong className='font-medium text-text-on-light'>
                Follow people and topics
              </strong>
              , not just shows. Your discovery adapts to what you choose to
              pay attention to, creating an algorithm you control.
            </p>
          </div>

          <div className='group relative pl-8 border-l-2 border-accent/20 hover:border-accent/60 transition-colors duration-500'>
            <p className='text-text-on-light/80 text-base md:text-lg leading-relaxed font-light'>
              <strong className='font-medium text-text-on-light'>
                Choose how deeply to listen
              </strong>{" "}
              with Smart Listen. A single moment, key clips, a focused idea,
              or the full conversation.
            </p>
          </div>

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
          <p className='font-display italic text-2xl md:text-3xl text-text-on-light/70 tracking-tight'>
            Less noise. More awareness.
          </p>
        </div>
      </div>
    </section>
  );
}
