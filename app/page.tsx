'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/* -------------------------------------------------------------------------- */
/*                               REVEAL LOGIC                                 */
/* -------------------------------------------------------------------------- */

function useReveal() {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setShow(true);
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return { elRef, show };
}

function Reveal({ children }: { children: React.ReactNode }) {
  const { elRef, show } = useReveal();

  return (
    <div
      ref={elRef}
      className={`transition-all duration-700 ease-out ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const heroImages = [
  'https://storage.googleapis.com/curated-assets/DSCF1434_converted.avif',
  'https://storage.googleapis.com/curated-assets/DSCF1429_converted.avif',
  'https://storage.googleapis.com/curated-assets/DSCF1443_converted.avif',
];

const heroCaptions = [
  {
    h: 'Timeless classics, thoughtfully selected.',
    p: 'Vintage clothing with character, presence, and lasting style.',
  },
  {
    h: 'A store built on shape, fabric, and feeling.',
    p: 'Pieces chosen for how they wear, age, and live beyond trend.',
  },
  {
    h: 'Curated for the long term.',
    p: 'Fewer pieces. Better choices. A stronger point of view.',
  },
];

const featuredPieces = [
  {
    name: 'RAF Flight Jacket',
    price: '£3000',
    image: 'https://storage.googleapis.com/curated-assets/raf_converted.avif',
  },
  {
    name: 'Denison Smock',
    price: '£1300',
    image: 'https://storage.googleapis.com/curated-assets/para_converted.avif',
  },
  {
    name: 'Woolrich Flannel',
    price: '£58',
    image: 'https://storage.googleapis.com/curated-assets/check_converted.avif',
  },
];

/* -------------------------------------------------------------------------- */
/*                                   HOME                                     */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onVis = () => setIsVisible(document.visibilityState === 'visible');
    onVis();
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const progress = Math.min(1, Math.max(0, (viewport - rect.bottom) / viewport + 0.05));
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cap = heroCaptions[currentHero];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* -------------------------------------------------------------------- */}
      {/*                                HEADER                                */}
      {/* -------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-stone-300 bg-stone-100/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-12">
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.18em] text-stone-700 md:flex">
            <a href="#about" className="transition hover:opacity-60">
              About
            </a>
            <a href="/shop" className="transition hover:opacity-60">
              Shop
            </a>
            <a href="#visit" className="transition hover:opacity-60">
              Visit
            </a>
          </nav>

          <div className="mx-auto text-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">
              14 · St Michael&apos;s Hill · Bristol
            </p>
            <a
              href="/"
              className="mt-1 block text-3xl leading-none text-stone-800 md:text-5xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              14 · Curated · 14
            </a>
          </div>

          <div className="hidden text-sm uppercase tracking-[0.18em] text-stone-700 md:block">
            Vintage Store
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/*                              HERO SECTION                            */}
      {/* -------------------------------------------------------------------- */}
      <section
        ref={heroRef}
        className="relative h-[88vh] min-h-[620px] w-full overflow-hidden"
        aria-label="Curated hero"
      >
        {heroImages.map((src, index) => {
          const isActive = index === currentHero;

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'z-20 opacity-100' : 'z-10 opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={src}
                alt="Curated vintage store hero image"
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          );
        })}

        <div className="absolute inset-0 z-30 bg-black/25" />

        <div
          className="absolute inset-0 z-40 flex items-end justify-center px-6 pb-16 md:items-center md:justify-end md:pr-[7%] md:pb-0"
          style={{
            opacity: 1 - scrollProgress,
            transform: `translateY(${scrollProgress * 14}px)`,
          }}
        >
          <div className="max-w-2xl text-center text-white md:text-right">
            <h1
              className="text-4xl leading-tight md:text-6xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {cap.h}
            </h1>

            <p className="mt-4 text-sm leading-7 text-white/90 md:ml-auto md:max-w-xl md:text-lg">
              {cap.p}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-end">
              <a
                href="/shop"
                className="rounded-full bg-white px-6 py-3 text-sm text-stone-900 transition hover:opacity-85"
              >
                View selection
              </a>

              <a
                href="#visit"
                className="rounded-full border border-white px-6 py-3 text-sm text-white transition hover:bg-white hover:text-stone-900"
              >
                Visit the store
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-xs tracking-[0.25em] text-white/80"
          style={{ opacity: 1 - scrollProgress }}
          aria-hidden="true"
        >
          SCROLL
          <span className="mx-auto mt-1 block h-6 w-px animate-pulse bg-white/70" />
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/*                           BRAND / MANIFESTO                          */}
      {/* -------------------------------------------------------------------- */}
      <section id="about" className="relative w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="relative mb-[10vh] h-[70vh] md:h-[92vh]">
            <div className="sticky top-20 md:top-28">
              <h2
                className="text-[13vw] leading-none tracking-[-0.03em] text-stone-900 md:text-[9vw]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Curated
                <span className="block md:inline"> Vintage</span>
              </h2>
              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-stone-500 md:text-xs">
                Bristol — Heritage — Everyday Wear
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-10 pb-24">
            <Reveal>
              <p className="text-xl text-stone-600">
                Good clothing stays with you. <br />
                Trends move on. <span className="font-semibold text-stone-900">Character remains.</span>
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg leading-relaxed text-stone-600">
                Curated is a vintage store built around shape, fabric, wearability,
                and presence. Pieces are chosen not for noise, but for the way they
                sit, age, and live with the person wearing them.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg leading-relaxed text-stone-600">
                The aim is simple: fewer pieces, better choices, and a point of view
                that feels considered rather than crowded.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg leading-relaxed text-stone-600">
                From tailored classics to workwear, knitwear, outerwear and one-off
                vintage finds, the store is shaped by instinct, quality, and lasting appeal.
              </p>
            </Reveal>

            <Reveal>
              <p
                className="pt-2 text-2xl text-stone-900"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Built to be worn, not just admired.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex justify-center pt-12">
                <a
                  href="/shop"
                  className="inline-block rounded-full border border-stone-900 px-8 py-4 text-sm uppercase tracking-[0.25em] text-stone-900 transition-all duration-500 hover:bg-stone-900 hover:text-white"
                >
                  View selection
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/*                             FEATURED PIECES                          */}
      {/* -------------------------------------------------------------------- */}
      <section id="pieces" className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-18 md:py-24">
          <Reveal>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Featured pieces
              </p>
              <h2
                className="mt-3 text-3xl text-stone-800 md:text-4xl"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                A first selection
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPieces.map((item, index) => (
              <Reveal key={item.name}>
                <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>

                  <div className="space-y-2 p-5">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-stone-500">{item.price}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/*                                VISIT                                  */}
      {/* -------------------------------------------------------------------- */}
      <section id="visit" className="border-t border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-18 md:grid-cols-2 md:py-24">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Visit
              </p>
              <h2
                className="text-3xl text-stone-800 md:text-4xl"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Come by the store
              </h2>
              <p className="max-w-md leading-7 text-stone-600">
                14 St Michael&apos;s Hill, Bristol BS2 8DE. Open Saturday and Sunday
                from 11:00 to 17:00.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-3 rounded-3xl border border-stone-200 bg-stone-50 p-6 text-stone-700">
              <p>Curated</p>
              <p>Bristol, United Kingdom</p>
              <p>Sat-Sun · 11:00–17:00</p>
              <a
                href="https://instagram.com"
                className="inline-block text-sm underline underline-offset-4"
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/*                                FOOTER                                 */}
      {/* -------------------------------------------------------------------- */}
      <footer className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Curated</p>
          <p>14 St Michael&apos;s Hill, Bristol</p>
        </div>
      </footer>
    </main>
  );
}