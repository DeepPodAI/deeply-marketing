export default function Footer() {
  return (
    <footer className='border-t border-white/5 py-6 px-6 bg-background'>
      <div className='max-w-5xl mx-auto flex flex-col items-center justify-between gap-4'>
        <img
          src='/deeply-diver.png'
          alt='Deeply diver'
          width={64}
          height={64}
          className='opacity-60'
        />
        <div className='flex items-center gap-3'>
          <span className='font-display italic text-4xl px-4 text-foreground/80'>
            Deeply
          </span>
        </div>

        <p className='text-sm text-foreground/50 font-light'>
          &copy; {new Date().getFullYear()} · Listen with intention
        </p>
      </div>
    </footer>
  );
}
