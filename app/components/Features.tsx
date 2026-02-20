import { AuroraText } from "@/components/ui/aurora-text";

export default function Features() {
  return (
    <section className='relative py-28 md:py-36 px-6 overflow-hidden'>
      {/* Ocean background */}
      <div className='absolute inset-0 z-0'>
        <img
          src='/ocean-bg.jpg'
          alt='Ocean background'
          className='w-full h-full object-cover'
        />
        {/* Dark scrim overlay */}
        <div className='absolute inset-0 bg-black/65' />
      </div>

      <div className='relative z-10 max-w-5xl mx-auto'>
        <h2 className='font-display italic text-4xl md:text-5xl lg:text-6xl text-white text-center tracking-tight mb-20'>
          <AuroraText colors={["#90dfd2", "#00b4cc", "#194067", "#194067"]}>
            Why we&apos;re building this
          </AuroraText>
        </h2>

        <div className='grid md:grid-cols-3 gap-10 md:gap-14'>
          {/* Feature 1 */}
          <div className='group text-center md:text-left'>
            <div className='w-12 h-px bg-accent mb-6 mx-auto md:mx-0 transition-all group-hover:w-20 group-hover:bg-white' />
            <h3 className='font-display italic text-2xl text-white mb-4'>
              Respect your attention
            </h3>
            <p className='text-white/60 text-sm leading-relaxed font-light'>
              Your attention is finite and precious. Deeply treats it that way.
            </p>
          </div>

          {/* Feature 2 */}
          <div className='group text-center md:text-left'>
            <div className='w-12 h-px bg-accent mb-6 mx-auto md:mx-0 transition-all group-hover:w-20 group-hover:bg-white' />
            <h3 className='font-display italic text-2xl text-white mb-4'>
              See what shapes you
            </h3>
            <p className='text-white/60 text-sm leading-relaxed font-light'>
              Understand the ideas and voices that influence how you think.
            </p>
          </div>

          {/* Feature 3 */}
          <div className='group text-center md:text-left'>
            <div className='w-12 h-px bg-accent mb-6 mx-auto md:mx-0 transition-all group-hover:w-20 group-hover:bg-white' />
            <h3 className='font-display italic text-2xl text-white mb-4'>
              Less noise, more depth
            </h3>
            <p className='text-white/60 text-sm leading-relaxed font-light'>
              We&apos;re not adding to the flood. We&apos;re helping you
              navigate it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
