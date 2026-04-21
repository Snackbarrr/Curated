import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-300 bg-stone-100/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-8">
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.18em] text-stone-700 md:flex">
            <Link href="/" className="transition hover:opacity-60">
              Home
            </Link>
            <Link href="/shop" className="transition hover:opacity-60">
              Shop
            </Link>
            <a href="#collection" className="transition hover:opacity-60">
              Collection
            </a>
          </nav>

          <div className="mx-auto text-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">
              14 · St Michael&apos;s Hill · Bristol
            </p>
            <Link
              href="/"
              className="mt-2 block text-4xl leading-none text-stone-800 md:text-6xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              14 · Curated · 14
            </Link>
          </div>

          <div className="hidden text-sm uppercase tracking-[0.18em] text-stone-700 md:block">
            Vintage Store
          </div>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Shop
            </p>
            <h1
              className="mt-4 text-5xl leading-tight text-stone-900 md:text-7xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              The current collection.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
              A gallery of vintage pieces selected for shape, fabric, and lasting wear.
              Each item is presented as an object to live with, not just a listing.
            </p>
          </div>
        </div>
      </section>

      <section id="collection" className="bg-stone-50">
        <div className="mx-auto max-w-[1600px] px-6 py-10 md:py-16">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.slug}
                className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white"
              >
                <Link href={`/shop/${product.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />

                    <div className="absolute left-4 top-4 flex gap-2">
                      {product.category && (
                        <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-stone-700">
                          {product.category}
                        </span>
                      )}

                      {(product.sold ?? true) && (
                        <span className="rounded-full bg-stone-900/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white">
                          Sold
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2
                        className="text-2xl leading-tight text-stone-900"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      >
                        {product.name}
                      </h2>
                      {product.size && (
                        <p className="mt-1 text-sm text-stone-500">Size {product.size}</p>
                      )}
                    </div>

                    <p className="shrink-0 text-sm text-stone-700">{product.price}</p>
                  </div>

                  {product.description && (
                    <p className="text-sm leading-7 text-stone-600">
                      {product.description}
                    </p>
                  )}

                  <div className="pt-2">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="inline-block text-sm underline underline-offset-4 transition hover:opacity-60"
                    >
                      View piece
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}