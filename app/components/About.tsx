export default function About() {
  return (
    <section className='bg-surface-ocean py-28 md:py-36 px-6'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='font-display italic text-4xl md:text-5xl lg:text-6xl text-text-on-light tracking-tight mb-14'>
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
  );
}
