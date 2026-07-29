// src/app/page.tsx
// Homepage. Uses your brand-* theme tokens and font-sans. No new dependencies.

const stats = [
  { n: "20+", l: "Years building data stories" },
  { n: "3", l: "Newsrooms: NYT, BBC, Condé Nast" },
  { n: "1", l: "Emmy nomination" },
  { n: "4", l: "Countries lived and worked in" },
];

const doing = [
  {
    kicker: "Investigate",
    title: "Find the story hidden in the noise",
    body: "Good data journalism starts with the right question. Whether wrangling messy datasets with Python and pandas, parsing raw text on the command line, or applying NLP, the focus is turning raw data into clear, actionable reporting.",
  },
  {
    kicker: "Visualise",
    title: "Make complex ideas clear at a glance",
    body: "Visual stories should deliver immediate context, then invite exploration. From interactive D3 maps and custom charts to crowdsourced reporting tools, timelines, and living explainers, every design decision helps readers make sense of fast-moving topics.",
  },
  {
    kicker: "Build",
    title: "Scalable tools and dynamic interactives",
    body: "From high-traffic newsroom interactives to complex, multilingual publishing backends, I build systems built to perform under pressure. Today, I combine my experience with high-scale architecture with modern tools like Next.js, Neon, and Drizzle to build fast, reliable applications for newsrooms, public health, and beyond.",
  },
];

const health = [
  {
    kicker: "Interactive map · D3",
    title: "Australian childhood vaccination rates",
    meta: "Python · pandas · D3 · SA3 geography",
    body: "A choropleth map of childhood immunisation rates across Australia, broken down by small local areas. Hover over any region for its exact rate, and switch between one, two, and five year old cohorts against the 95 per cent herd immunity target.",
    tags: ["Data cleaning", "Choropleth", "Tooltips"],
  },
  {
    kicker: "Web app · Next.js",
    title: "Is there a vaccine for that?",
    meta: "Next.js · Drizzle · Neon · Tailwind · Vercel",
    body: "A field-notes style tracker that answers a simple question for a given disease. Is there a vaccine, is one in trials, or is there none. It pulls from sources like the Australian Immunisation Handbook and WHO Disease Outbreak News.",
    tags: ["Full stack", "Postgres", "Prototyping"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      {/* Hero */}
      <section className="py-12 sm:py-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-primary">
          Data journalist · Public health developer
        </p>
        <h1 className="mb-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          I turn messy data into stories people can actually use.
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-600">
          For two decades I have built interactive stories, newsroom tools, and
          data dashboards. I have done this work at the New York Times, the BBC,
          and Condé Nast. Now I am pointing those same skills at public health,
          where clear data can change what people understand and what they do.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            See my work &rarr;
          </a>
          <a
            href="/about"
            className="rounded-full border border-brand-light px-6 py-3 text-sm font-bold text-black transition-colors hover:border-black"
          >
            About me
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-6 border-y border-brand-light py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="text-3xl font-bold text-brand-primary">{s.n}</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
              {s.l}
            </div>
          </div>
        ))}
      </section>

      {/* What I do */}
      <section className="py-12">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-primary">
          What I do
        </p>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          From raw numbers to something worth reading
        </h2>
        <p className="mb-8 max-w-2xl text-[15px] leading-7 text-zinc-600">
          My work sits where reporting, code, and design meet. I like problems
          that need all three.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {doing.map((d) => (
            <div
              key={d.title}
              className="rounded-lg border border-brand-light bg-white p-6 shadow-sm"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
                {d.kicker}
              </p>
              <h3 className="mb-2 text-lg font-semibold text-black">
                {d.title}
              </h3>
              <p className="text-[15px] leading-7 text-zinc-700">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current public health projects */}
      <section className="pb-4">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-primary">
          Recent work
        </p>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          Current public health projects
        </h2>
        <p className="mb-8 max-w-2xl text-[15px] leading-7 text-zinc-600">
          I am building a portfolio focused on public health data, alongside my
          Bachelor of Public Health.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {health.map((h) => (
            <div
              key={h.title}
              className="flex flex-col rounded-lg border border-brand-light bg-white p-6 shadow-sm"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
                {h.kicker}
              </p>
              <h3 className="mb-1 text-lg font-semibold text-black">
                {h.title}
              </h3>
              <p className="mb-3 text-sm text-zinc-500">{h.meta}</p>
              <p className="mb-4 text-[15px] leading-7 text-zinc-700">
                {h.body}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {h.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-bg px-3 py-1 text-xs font-medium text-zinc-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="/projects"
                className="mt-4 text-sm font-bold text-brand-primary hover:underline"
              >
                Read more &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring note */}
      <section className="py-12">
        <div className="rounded-lg border border-brand-light bg-brand-bg p-5 text-[15px] leading-7 text-zinc-700">
          I am a US citizen based in Melbourne, open to part time and remote
          roles in data journalism, public health data, and civic technology. I
          am also preparing to relocate to New York. If you are hiring, my{" "}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-primary hover:underline"
          >
            CV is here
          </a>
          .
        </div>
      </section>
    </div>
  );
}
