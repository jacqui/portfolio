// some little data structures to help reuse elements on the page
const stats = [
  { n: "20+", l: "Years building data stories" },
  { n: "3", l: "Newsrooms: NYT, BBC, Condé Nast International" },
  { n: "1", l: "Emmy nomination" },
  { n: "4", l: "Countries lived and worked in" },
];

const doing = [
  {
    kicker: "Investigate",
    title: "Find the story in the data",
    body: "I clean and shape messy datasets with Python and pandas, then look for the pattern that matters. Good data work starts with asking the right question, not just counting things.",
  },
  {
    kicker: "Visualise",
    title: "Make it clear at a glance",
    body: "I build interactive charts and maps with JavaScript, React, and D3. The goal is always the same. A reader should understand the point in seconds, then dig deeper if they want to.",
  },
  {
    kicker: "Build",
    title: "Ship tools that last",
    body: "I build and deploy real applications with Next.js, Drizzle, Neon, and Vercel. From newsroom analytics to live election results, I have shipped tools that teams rely on under pressure.",
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
          and Condé Nast International. Now I am pointing those same skills at
          public health, where clear data can change what people understand and
          what they do.
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
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          From raw numbers to something worth reading
        </h2>
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

      {/* Hiring note */}
      <section className="pb-12">
        <div className="rounded-lg border border-brand-light bg-brand-bg p-5 text-[15px] leading-7 text-zinc-700">
          I am a dual Australian/US citizen based in Melbourne, open to part
          time and remote roles in data journalism, public health data, and
          civic technology. If you are hiring, my{" "}
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
