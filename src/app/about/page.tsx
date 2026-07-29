export default function AboutPage() {
  return (
    <div className="flex flex-col font-sans">
      <header className="mb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-primary">
          About
        </p>
        <h1 className="mb-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
          Developer, journalist, and public health researcher in training.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600">
          I have spent more than two decades building data stories and tools. I
          am now bringing that work back to where it started, which is public
          health.
        </p>
      </header>

      <div className="max-w-2xl">
        <p className="mb-5 text-lg leading-8 text-zinc-700">
          I build things with data. Sometimes that is an interactive map or a
          chart. Sometimes it is a newsroom tool that quietly runs in the
          background while a big story breaks. The common thread is taking
          something complicated and making it clear and useful for other people.
        </p>

        <p className="mb-5 text-lg leading-8 text-zinc-700">
          For a long stretch of my career that work lived in newsrooms. I spent
          around five years on the Interactive News desk at the New York Times,
          where I helped build election night systems, Olympics coverage,
          schools data tools, and reader crowdsourcing projects. One of those
          projects, an interactive piece called Coming Out, was nominated for an
          Emmy. Later I moved into newsroom analytics, working out what was
          worth measuring about our audience and what the numbers actually
          meant. I spent my final year at the Times in R&D.
        </p>

        <blockquote className="my-8 border-l-4 border-brand-primary py-1 pl-5 text-xl leading-relaxed text-brand-primary">
          My favourite thing is taking a dense display of data and finding the
          small human detail that livens it up.
        </blockquote>

        <p className="mb-5 text-lg leading-8 text-zinc-700">
          After the Times I moved to London. At BBC News Labs I built
          experiments that stretched what a news story could be, from a
          multilingual digital graphic novel set in Guinea-Bissau, to election
          result bots, to the first newsbot the BBC ever launched, which carried
          BBC Uzbek stories into Telegram where the website was blocked. At
          Condé Nast International I led interactive journalism across the
          group&apos;s titles, including an early and honestly imperfect
          experiment with a British Vogue messaging service.
        </p>

        <h3 className="mb-3 mt-9 text-lg font-semibold text-black">
          Before the newsrooms
        </h3>
        <p className="mb-5 text-lg leading-8 text-zinc-700">
          My working life did not start in journalism. In the late 90s I worked
          in the first wave of digital media in New York and Silicon Valley, at
          places like Hearst, IDEO, and a scatter of early web companies. But
          the piece of that era I am proudest of came later, when I spent time
          in Lilongwe and built health software with Baobab Health in Malawi.
          The system built, BART, helped clinics manage HIV treatment on
          touchscreen terminals designed for places with very little
          infrastructure.
        </p>

        <h3 className="mb-3 mt-9 text-lg font-semibold text-black">
          Where I am now
        </h3>
        <p className="mb-5 text-lg leading-8 text-zinc-700">
          These days I am based in Melbourne, and I am studying a Bachelor of
          Public Health at Adelaide University. I am pointing my data and
          engineering skills back at public health, one small project at a time.
          You can see the current ones, an Australian childhood vaccination map
          and a vaccine status tracker, on my{" "}
          <a
            href="/projects"
            className="font-bold text-brand-primary hover:underline"
          >
            projects page
          </a>
          .
        </p>

        <p className="mb-5 text-lg leading-8 text-zinc-700">
          I was born in the United States and have lived in California, France,
          and the United Kingdom before settling in Australia. I am a dual
          Australian/US citizen, and I am open to part time and remote work in
          data journalism, public health data, and civic technology, including,
          potentially, roles based in New York.
        </p>

        <h3 className="mb-3 mt-9 text-lg font-semibold text-black">
          The tools I reach for
        </h3>
        <p className="mb-5 text-lg leading-8 text-zinc-700">
          On the front end I primarily work with JavaScript, React, Next.js, and
          D3. For data work I use Python and pandas, though I also have
          extensive experience doing this with Ruby. I can ship full
          applications with Drizzle, Neon Postgres, and Vercel. I have also
          spent years in Rails, SQL, systems admin'ing Linux, and the
          unglamorous plumbing that keeps live data flowing when it matters
          most.
        </p>

        <div className="mt-6 rounded-lg border border-brand-light bg-brand-bg p-5 text-[15px] leading-7 text-zinc-700">
          Want to talk about a project or a role? Email me at{" "}
          <a
            href="mailto:lough.jacqui@gmail.com"
            className="font-bold text-brand-primary hover:underline"
          >
            lough.jacqui@gmail.com
          </a>{" "}
          or take a look at my{" "}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-primary hover:underline"
          >
            CV
          </a>
          .
        </div>
      </div>
    </div>
  );
}
