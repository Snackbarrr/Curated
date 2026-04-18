export default function Home() {
  const featuredPieces = [
    { name: "Vintage Jacket", price: "£95" },
    { name: "Classic Knit", price: "£48" },
    { name: "Tailored Trousers", price: "£58" },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-300 bg-stone-100">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              14 · St Micheal's Hill · Bristol
            </p>

            <a
              href="/"
              className="text-5xl leading-none text-stone-800 md:text-7xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Curated
            </a>

            <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-stone-600">
              <span>14</span>
              <span>•</span>
              <span>Vintage</span>
              <span>•</span>
              <span>14</span>
            </div>

            <nav className="mt-3 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.18em] text-stone-700">
              <a href="#about" className="transition hover:opacity-60">
                About
              </a>
              <a href="#shop" className="transition hover:opacity-60">
                Shop
              </a>
              <a href="#visit" className="transition hover:opacity-60">
                Visit
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-end">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Vintage store · Bristol
          </p>

          <h1
            className="max-w-xl text-5xl leading-tight text-stone-800 md:text-7xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Timeless Classics, thoughtfully selected.
          </h1>

          <p className="max-w-lg text-base leading-7 text-stone-600 md:text-lg">
            Curated is a vintage store focused on distinctive clothing with
            character, quality, and lasting style.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#pieces"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm text-white transition hover:opacity-85"
            >
              View featured pieces
            </a>

            <a
              href="#visit"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm transition hover:bg-stone-100"
            >
              Visit the store
            </a>
          </div>
        </div>

        <div>
          <div className="aspect-[4/5] w-full rounded-3xl border border-stone-300 bg-stone-200" />
        </div>
      </section>

      <section id="about" className="border-t border-stone-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              About
            </p>
          </div>

          <div className="space-y-5 text-stone-700">
            <p
              className="text-2xl leading-9 text-stone-800"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              We source vintage clothing with an eye for shape, fabric, and
              wearability.
            </p>
            <p className="leading-7">
              The goal is to build a store that feels selective rather than
              overwhelming — fewer pieces, better choices, and a strong point of
              view.
            </p>
          </div>
        </div>
      </section>

      <section id="pieces" className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Featured pieces
            </p>
            <h2
              className="mt-3 text-3xl text-stone-800"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              A first selection
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPieces.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-white"
              >
                <div className="aspect-[4/5] bg-stone-200" />
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-stone-500">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="border-t border-stone-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Visit
            </p>
            <h2
              className="text-3xl text-stone-800"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Come by the store
            </h2>
            <p className="max-w-md leading-7 text-stone-600">
              14 St Micheal's Hill, Bristol BS2 8DE. Open Saturday and Sunday from 11:00 to 17:00.
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-stone-200 bg-white p-6 text-stone-700">
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
        </div>
      </section>
    </main>
  );
}