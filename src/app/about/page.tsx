export default function AboutPage() {
  return (

<div className="flex flex-col flex-1 items-center font-sans px-4">
  <main className="flex flex-1 w-full max-w-3xl flex-col py-12 sm:py-24 px-4 sm:px-16 bg-white">
    <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black mb-6">
      About Me
    </h1>
    <p className="w-full text-lg leading-8 text-zinc-600">
          I am a developer, journalist, and public health researcher-in-training
          with several decades of experience designing software and managing
          data systems. Much of my career has been spent in newsrooms at{" "}
          <em>The New York Times</em> and <em>BBC</em>, where I focused on
          building data-driven journalism tools and engineering web applications
          capable of handling massive, unpredictable traffic spikes. I was also
          a news applications developer at Hearst Interactive Studios in the
          early 2000s, building interactives and visual storytelling tools for
          Esquire and Popular Mechanics.
        </p>
        <p className="w-full py-4 text-lg leading-8 text-zinc-600">
          Prior to my work in media, I honed my technical skills working in the
          Silicon Valley and the early startup scene of New York City. I was a
          lead developer and architect at companies including StreetEasy, OVEN
          Digital, IDEO, Live Nation, and Friendster.
        </p>
        <p className="w-full text-lg leading-8 text-zinc-600">
          I also contributed to the development of the Baobab Anti-Retroviral
          Treatment (BART) system, a patient management application used in
          HIV/AIDS treatment clinics in Malawi and aimed at leveraging
          open-source tech to streamline critical healthcare data under severe
          infrastructure constraints. My work with Baobab started remotely but
          later led to me spending several months in East Africa, where I was
          able to collaborate with the team on-site in Lilongwe. This early
          experience in applied public health technology directly informs my
          commitment to population health data collection.
        </p>
        <p className="w-full py-4 text-lg leading-8 text-zinc-600">
          I am originally from New York City, but my work has led to me living
          in California, France, the UK, and now Australia.
        </p>
      </main>
    </div>
  );
}
