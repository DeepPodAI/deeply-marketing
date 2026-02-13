"use client";

import Image from "next/image";
import { MeshGradient } from "@paper-design/shaders-react";

export default function Hero() {
  return (
    <section className='relative min-h-screen min-w-screen flex items-center justify-center overflow-hidden'>
      {/* Mesh gradient background */}
      <div className='absolute inset-0  z-0'>
        <MeshGradient
          width={"100%"}
          height={"100%"}
          colors={["#90dfd2", "#00b4cc", "#194067", "#194067"]}
          distortion={0.6}
          swirl={0.63}
          grainMixer={0}
          grainOverlay={0}
          speed={0.1}
          rotation={108}
          offsetX={-0.52}
          offsetY={-0.26}
        />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center text-center px-6'>
        {/* Diver illustration */}
        <div className='animate-gentle-bounce mb-8'>
          <Image
            src='/deeply-diver.png'
            alt='Deeply diver illustration'
            width={220}
            height={320}
            priority
            className='drop-shadow-[0_20px_40px_rgba(10,186,255,0.25)]'
          />
        </div>

        {/* Title */}
        <h1
          className='font-display text-7xl md:text-8xl lg:text-9xl tracking-tight text-white animate-fade-up delay-200'
          style={{ fontStyle: "italic" }}
        >
          Deeply
        </h1>

        {/* Subtitle */}
        <p className='font-body text-lg md:text-xl tracking-[0.35em] uppercase text-white/70 mt-6 animate-fade-up delay-400 font-light'>
          listen with intention
        </p>

        {/* Scroll indicator */}
        {/* <div className='absolute bottom-10 animate-fade-in delay-700'>
          <div className='w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent' />
        </div> */}
      </div>

      {/* Bottom vignette */}
      <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none' />
    </section>
  );
}
