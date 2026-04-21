import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="sticky top-0 z-50 h-6 w-full bg-[repeating-linear-gradient(90deg,#000_0px,#000_24px,#fff_24px,#fff_48px)]" />

      <header className="sticky top-6 z-40 border-b border-stone-300 bg-stone-100/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-8">
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.18em] text-stone-700 md:flex">
            <Link href="/" className="transition hover:opacity-60">
              Home
            </Link>
            <Link href="/shop" className="transition hover:opacity-60">
              Collection
            </Link>
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
            Home of R.Forrest
          </div>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-[1700px] px-4 py-4 md:px-6 md:py-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-stone-200 md:rounded-[2.5rem]">
            <Image
              src={product.heroImage}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Current piece
            </p>

            <h1
              className="text-4xl leading-tight text-stone-900 md:text-6xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {product.name}
            </h1>

            {product.description && (
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                {product.description}
              </p>
            )}
          </div>

          <div className="space-y-5 md:pt-4">
            <p className="text-2xl text-stone-900">{product.price}</p>

            <div className="space-y-2 text-stone-600">
              {product.category && <p>Category: {product.category}</p>}
              {product.size && <p>Size: {product.size}</p>}
              <p>Status: {(product.sold ?? true) ? "Sold" : "Available"}</p>
            </div>

            {product.measurements && (
              <div className="border-t border-stone-200 pt-5">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-stone-500">
                  Measurements
                </p>

                <div className="space-y-2 text-stone-600">
                  {product.measurements.pitToPit && (
                    <p>Pit to pit: {product.measurements.pitToPit}</p>
                  )}
                  {product.measurements.shoulder && (
                    <p>Shoulder: {product.measurements.shoulder}</p>
                  )}
                  {product.measurements.sleeve && (
                    <p>Sleeve: {product.measurements.sleeve}</p>
                  )}
                  {product.measurements.backLength && (
                    <p>Back length: {product.measurements.backLength}</p>
                  )}
                  {product.measurements.waist && (
                    <p>Waist: {product.measurements.waist}</p>
                  )}
                  {product.measurements.rise && (
                    <p>Rise: {product.measurements.rise}</p>
                  )}
                  {product.measurements.inseam && (
                    <p>Inseam: {product.measurements.inseam}</p>
                  )}
                  {product.measurements.hem && (
                    <p>Hem: {product.measurements.hem}</p>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://instagram.com"
                className="rounded-full bg-stone-900 px-6 py-3 text-sm text-white transition hover:opacity-85"
              >
                Enquire on Instagram
              </a>

              <Link
                href="/shop"
                className="rounded-full border border-stone-300 px-6 py-3 text-sm transition hover:bg-stone-100"
              >
                Back to shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-[1700px] px-4 py-4 md:px-6 md:py-8">
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200">
              <Image
                src={product.backImage}
                alt={`${product.name} rear view`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>

            <div className="flex items-end">
              <div className="max-w-xl space-y-5 px-2 py-4 md:px-8">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  Object study
                </p>

                <h2
                  className="text-3xl leading-tight text-stone-900 md:text-5xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {product.objectStudy?.title || "Seen as a garment, not just a listing."}
                </h2>

                <p className="leading-8 text-stone-600">
                  {product.objectStudy?.text ||
                    "Front, back, and detail views allow each piece to be understood more clearly — through cloth, line, texture, and construction."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-[1700px] px-4 py-10 md:px-6 md:py-16">
          <div className="mb-10 px-2 md:px-0">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Detail gallery
            </p>
            <h2
              className="mt-3 text-3xl text-stone-900 md:text-5xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Material, finish, and wear.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {product.detailImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200"
              >
                <Image
                  src={src}
                  alt={`${product.name} detail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}