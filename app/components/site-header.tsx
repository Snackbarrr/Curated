'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-[90] h-4 w-full bg-[repeating-linear-gradient(90deg,#000_0px,#000_20px,#fff_20px,#fff_40px)]" />

      <header
        className="sticky top-4 z-[80]"
        style={{
          backgroundColor: '#0b0b0b',
          borderBottom: '1px solid rgba(212,176,106,0.35)',
        }}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-5 md:px-6 md:py-6">
          <nav
            className="hidden gap-6 text-[11px] uppercase tracking-[0.16em] md:flex"
            style={{ color: '#d4b06a' }}
          >
            <Link href="/#about" className="transition hover:opacity-60">
              About
            </Link>
            <Link href="/shop" className="transition hover:opacity-60">
              Collection
            </Link>
            <Link href="/#visit" className="transition hover:opacity-60">
              Visit
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="block h-[1px] w-5" style={{ backgroundColor: '#d4b06a' }} />
            <span className="block h-[1px] w-5" style={{ backgroundColor: '#d4b06a' }} />
            <span className="block h-[1px] w-5" style={{ backgroundColor: '#d4b06a' }} />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <p
              className="text-[8px] uppercase tracking-[0.28em] md:text-[9px]"
              style={{ color: '#a88641' }}
            >
              14 · St Michael&apos;s Hill · Bristol
            </p>
            <Link
              href="/"
              className="mt-1 block text-2xl leading-none md:text-4xl"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: '#d4b06a',
              }}
            >
              14 · Curated · 14
            </Link>
          </div>

          <div
            className="hidden text-[11px] uppercase tracking-[0.16em] md:block"
            style={{ color: '#d4b06a' }}
          >
            Home of R.Forrest
          </div>

          <div className="w-10 md:hidden" />
        </div>

        {menuOpen && (
          <div
            className="border-t px-4 py-4 md:hidden"
            style={{
              borderColor: 'rgba(212,176,106,0.18)',
              backgroundColor: '#0b0b0b',
            }}
          >
            <nav
              className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.18em]"
              style={{ color: '#d4b06a' }}
            >
              <Link href="/#about" onClick={() => setMenuOpen(false)} className="transition hover:opacity-60">
                About
              </Link>
              <Link href="/shop" onClick={() => setMenuOpen(false)} className="transition hover:opacity-60">
                Collection
              </Link>
              <Link href="/#visit" onClick={() => setMenuOpen(false)} className="transition hover:opacity-60">
                Visit
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}