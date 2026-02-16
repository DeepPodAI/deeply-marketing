"use client";

import { useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='relative py-28 md:py-36 px-6 bg-surface'>
      {/* Subtle gradient accent */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none' />

      <div className='relative z-10 max-w-2xl mx-auto text-center'>
        <h2 className='font-display italic text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-6'>
          <AuroraText colors={["#90dfd2", "#00b4cc", "#194067", "#194067"]}>
            Take the plunge
          </AuroraText>
        </h2>
        <p className='text-foreground/60 text-base md:text-lg leading-relaxed font-light mb-12 max-w-lg mx-auto'>
          We&apos;re onboarding a community of passionate, intentional listeners
          who want to improve the experience of spoken word media. Sign up for
          the Deeply beta here.
        </p>

        {success ? (
          <div className='max-w-md mx-auto'>
            <div className='bg-accent/10 border border-accent/20 rounded-lg p-6 backdrop-blur-sm'>
              <p className='text-accent text-lg font-medium mb-2'>
                Welcome aboard!
              </p>
              <p className='text-foreground/70 text-sm'>
                Thanks for joining the waitlist. We&apos;ll be in touch soon.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row gap-2 max-w-md mx-auto'
          >
            <input
              type='email'
              placeholder='you@email.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              className='flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/8 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 backdrop-blur-sm transition-all font-body disabled:opacity-50 disabled:cursor-not-allowed'
            />
            <button
              type='submit'
              disabled={loading}
              className='px-6 py-2.5 rounded-lg bg-accent text-deep text-sm font-medium tracking-wide hover:bg-white hover:text-deep transition-all duration-300 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? "Diving..." : "Dive In"}
            </button>
          </form>
        )}

        {error && (
          <p className='mt-4 text-red-400 text-sm max-w-md mx-auto'>{error}</p>
        )}
      </div>
    </section>
  );
}
