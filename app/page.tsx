export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-semibold uppercase tracking-[0.25em]">
            Curated
          </a>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:opacity-60">
              About
            </a>
            <a href="#pieces" className="transition hover:opacity-60">
              Pieces
            </a>
            <a href="#visit" className="transition hover:opacity-60">
              Visit
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-end">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Vintage store · Bristol
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-tight md:text-7xl">
            Timeless vintage, thoughtfully selected.
          </h1>

          <p className="max-w-lg text-base leading-7 text-stone-600 md:text-lg">
            Curated is a vintage store focused on distinctive clothing with character,
            quality, and lasting style.
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
          <div className="aspect-[4/5] w-full rounded-3xl bg-stone-200" />
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
            <p className="text-2xl leading-9">
              We source vintage clothing with an eye for shape, fabric, and wearability.
            </p>
            <p className="leading-7">
              The goal is to build a store that feels selective rather than overwhelming.
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
            <h2 className="mt-3 text-3xl font-semibold">A first selection</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Vintage Jacket", price: "£95" },
              { name: "Classic Knit", price: "£48" },
              { name: "Tailored Trousers", price: "£58" },
            ].map((item) => (
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
            <h2 className="text-3xl font-semibold">Come by the store</h2>
            <p className="max-w-md leading-7 text-stone-600">
              Add your address, opening times, Instagram, and any appointment details here.
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-stone-200 bg-white p-6 text-stone-700">
            <p>Curated</p>
            <p>Bristol, United Kingdom</p>
            <p>Wed–Sat · 11:00–18:00</p>
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