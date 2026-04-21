'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SiteHeader from './components/site-header';

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

const mobileHeroImages = [
  'https://storage.googleapis.com/curated-assets/mobilelanding/jeanshangmobile.avif',
  'https://storage.googleapis.com/curated-assets/mobilelanding/jeanstackmobile.avif',
  'https://storage.googleapis.com/curated-assets/mobilelanding/jeanchairmobile.avif',
];

const desktopHeroImages = [
  'https://storage.googleapis.com/curated-assets/DSCF1434_converted.avif',
  'https://storage.googleapis.com/curated-assets/jeanstackdesktop.avif',
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
    price: '£3,000',
    image: 'https://storage.googleapis.com/curated-assets/raf_converted.avif',
  },
  {
    name: 'Denison Smock',
    price: '£1,300',
    image: 'https://storage.googleapis.com/curated-assets/para_converted.avif',
  },
  {
    name: '45RPM Selvedge Denim Made in Japan',
    price: '£1,050',
    image: 'https://storage.googleapis.com/curated-assets/45RPM2/front45RPM2-1_converted.avif',
  },
];

/* -------------------------------------------------------------------------- */
/*                                   HOME                                     */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  /* ------------------------ detect mobile viewport ------------------------ */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    handleChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const activeHeroImages = isMobile ? mobileHeroImages : desktopHeroImages;
  const safeHeroCount = Math.min(activeHeroImages.length, heroCaptions.length);
  const cappedHeroIndex = currentHero % Math.max(safeHeroCount, 1);
  const cap = heroCaptions[cappedHeroIndex];

  /* ------------------------ keep hero index in range ---------------------- */
  useEffect(() => {
    if (currentHero >= safeHeroCount) {
      setCurrentHero(0);
    }
  }, [currentHero, safeHeroCount]);

  /* ------------------------ pause slider when hidden ---------------------- */
  useEffect(() => {
    const onVis = () => setIsVisible(document.visibilityState === 'visible');
    onVis();
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  /* ----------------------------- hero slider ------------------------------ */
  useEffect(() => {
    if (!isVisible || safeHeroCount <= 1) return;

    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % safeHeroCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, safeHeroCount]);

  /* ----------------------------- scroll fade ------------------------------ */
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

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* -------------------------------------------------------------------- */}
      {/*                              SITE HEADER                             */}
      {/* -------------------------------------------------------------------- */}
      <SiteHeader />

      {/* -------------------------------------------------------------------- */}
      {/*                               HERO AREA                              */}
      {/* -------------------------------------------------------------------- */}
      <section
        ref={heroRef}
        className="relative h-[78vh] min-h-[560px] w-full overflow-hidden md:h-[88vh] md:min-h-[620px]"
        aria-label="Curated hero"
      >
        {activeHeroImages.slice(0, safeHeroCount).map((src, index) => {
          const isActive = index === cappedHeroIndex;

          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'z-10 opacity-100' : 'z-0 opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={src}
                alt="Curated vintage store hero image"
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          );
        })}

        {/* ----------------------------- overlay ----------------------------- */}
        <div className="absolute inset-0 z-[12] bg-black/30 md:bg-black/25" />

        {/* --------------------------- hero content -------------------------- */}
        <div
          className="absolute inset-0 z-[20] flex items-center justify-center px-5 pt-16 md:items-center md:justify-end md:px-6 md:pt-0 md:pr-[7%]"
          style={{
            opacity: 1 - scrollProgress,
            transform: `translateY(${scrollProgress * 14}px)`,
          }}
        >
          <div className="max-w-[340px] text-center text-white md:max-w-2xl md:text-right">
            <h1
              className="text-[2.2rem] leading-[0.95] md:text-6xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {cap.h}
            </h1>

            <p className="mt-4 text-base leading-7 text-white/90 md:ml-auto md:max-w-xl md:text-lg">
              {cap.p}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-end md:gap-4">
              <a
                href="/shop"
                className="rounded-full bg-white px-5 py-3 text-sm text-stone-900 transition hover:opacity-85 md:px-6"
              >
                View Collection
              </a>

              <a
                href="#visit"
                className="rounded-full border border-white px-5 py-3 text-sm text-white transition hover:bg-white hover:text-stone-900 md:px-6"
              >
                Visit
              </a>
            </div>
          </div>
        </div>

        {/* ------------------------ desktop scroll cue ----------------------- */}
        <div
          className="absolute bottom-6 left-1/2 z-[20] hidden -translate-x-1/2 text-xs tracking-[0.25em] text-white/80 md:block"
          style={{ opacity: 1 - scrollProgress }}
          aria-hidden="true"
        >
          SCROLL
          <span className="mx-auto mt-1 block h-6 w-px animate-pulse bg-white/70" />
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/*                          BRAND / MANIFESTO                           */}
      {/* -------------------------------------------------------------------- */}
      <section id="about" className="relative w-full bg-white">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="relative mb-[10vh] h-[70vh] md:h-[92vh]">
            <div className="sticky top-20 md:top-28">
              <h2
                className="text-[13vw] leading-none tracking-[-0.03em] text-stone-900 md:text-[9vw]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                A Curated
                <span className="block md:inline"> Taste</span>
              </h2>
              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-stone-500 md:text-xs">
                Hand picked and curated — with exceptional taste.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-10 pb-24">
            <Reveal>
              <p className="text-xl text-stone-600"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                Good clothing endures. <br />
                Trends may change but <span className="font-semibold text-stone-900">Taste remains.</span>
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg leading-relaxed text-stone-600"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                Based in the heart of Bristol, Curated is a place built around history,
                longevity, and good taste. Pieces are chosen for the way they sit, age,
                and live with the person owning them.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg leading-relaxed text-stone-600"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                The aim is simple: fewer pieces, better choices, and a point of view
                that feels earned.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-lg leading-relaxed text-stone-600"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                From Sartorial Classics and Denim to Antiques and Art, the store is run
                by instinct, quality, and lasting appeal.
              </p>
            </Reveal>

            <Reveal>
              <p
                className="pt-2 text-2xl text-stone-900"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Curated for the long term.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex justify-center pt-12">
                <a
                  href="/shop"
                  className="inline-block rounded-full border border-stone-900 px-8 py-4 text-sm uppercase tracking-[0.25em] text-stone-900 transition-all duration-500 hover:bg-stone-900 hover:text-white"
                >
                  View Collection
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/*                            FEATURED PIECES                           */}
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
      {/*                                VISIT                                 */}
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
                href="https://www.instagram.com/curated_14/"
                className="inline-block text-sm underline underline-offset-4"
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/*                                FOOTER                                */}
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