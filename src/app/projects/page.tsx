type Project = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Childhood Immunisation Map",
    description:
      "A choropleth map of childhood immunisation rates across Australia, built to keep my data analysis and visualisation skills sharp while studying public health. Data clean-up with pandas, data vis with d3.",
    url: "https://immunisation-map.vercel.app/",
    image: "/immunisation-map.png",
  },
  {
    title: "Is there a vaccine for that?",
    description:
      "A proof-of-concept exploring how current disease outbreaks map against vaccination status, and a test case for using Claude to rapidly prototype a data project. Sources include the Australian Immunisation Handbook and WHO Disease Outbreak News alerts.",
    url: "https://vaccine-tracker-six.vercel.app/",
    image: "/vaccine-tracker.png",
  },
  {
    title: "London 2012 Olympics",
    description:
      "I was part of the team at The New York Times behind the live coverage of the 2012 Summer Games, translating the IOC's raw results feed into real-time Olympic coverage for our readers. Beyond the data work, I architected the systems that let our international syndication partners, including outlets in Japan, Brazil, and the UK, run the same results coverage in their own languages. I also traveled to London for the Games, covering them on social media and contributing several short-form pieces to the Times' digital coverage.",
    url: "https://www.nytimes.com/interactive/projects/london2012/results",
    image: "/london-2012.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col px-16 bg-white">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black mb-10">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-zinc-200 overflow-hidden hover:border-zinc-400 transition-colors"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover bg-zinc-100"
                />
              ) : (
                <div className="w-full aspect-video bg-zinc-100" />
              )}

              <div className="flex flex-col gap-1 p-4">
                <h2 className="text-base font-semibold text-black group-hover:underline">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
