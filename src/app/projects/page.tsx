type Link = { label: string; url: string };

type Project = {
  title: string;
  kicker: string; // small label above the title
  meta?: string; // stack / context line
  description: string[]; // one string per paragraph
  tags?: string[];
  links?: Link[];
  feature?: boolean; // renders larger, with an accent border
  id?: string; // anchor target
};

type Era = {
  heading: string;
  when: string;
  intro?: string;
  projects: Project[];
};

const eras: Era[] = [
  {
    heading: "Public health data",
    when: "2024 – now · Melbourne",
    projects: [
      {
        title: "Australian childhood vaccination rates",
        kicker: "Interactive map · D3",
        meta: "Python · pandas · D3 · SVG · SA3 geography",
        feature: true,
        id: "immunisation-map",
        description: [
          "A choropleth map showing childhood immunisation coverage across Australia at the SA3 local area level. I cleaned and reshaped the raw coverage data in Python and pandas, then built the map in D3 as an interactive SVG.",
          "Readers can hover over any region for a tooltip with its exact coverage rate, and switch between one, two, and five year old cohorts. A reference line marks the 95 per cent target needed for herd immunity, so it is easy to see which areas fall short.",
        ],
        tags: [
          "Data cleaning",
          "Choropleth",
          "Hover tooltips",
          "Sequential colour scale",
        ],
        links: [
          { label: "Live map", url: "https://immunisation-map.vercel.app" },
        ],
      },
      {
        title: "Is there a vaccine for that?",
        kicker: "Web app · Next.js",
        meta: "Next.js · Drizzle ORM · Neon Postgres · Tailwind · Vercel",
        feature: true,
        id: "vaccine-tracker",
        description: [
          "A field-notes style reference that answers one question for a given disease. Is there a vaccine, is one in trials, or is there none at all. Each disease has an epidemiology, transmission, vaccine status, and recommendations section, with sources cited and dated.",
          "It began as a proof of concept for rapidly prototyping a data product with an AI assistant. The stack is a full production setup, with data stored in Neon Postgres, typed access through Drizzle, and deployment on Vercel. Sources include the Australian Immunisation Handbook and WHO Disease Outbreak News.",
        ],
        tags: [
          "Full stack",
          "Server components",
          "Typed schema",
          "Rapid prototyping",
        ],
        links: [
          { label: "Live app", url: "https://vaccine-tracker-six.vercel.app" },
        ],
      },
    ],
  },
  {
    heading: "The New York Times",
    when: "2009 – 2014 · Interactive News",
    intro:
      "As Assistant Editor on the Interactive News desk, I built newsroom tools and interactive stories, then moved into newsroom analytics.",
    projects: [
      {
        title: "Super Bowl XLVII live dashboard",
        kicker: "Live coverage tool · Sports Desk",
        meta: "Internal newsroom tool · live blog inserts · player hover cards",
        feature: true,
        id: "superbowl",
        description: [
          "For the 2013 Super Bowl me and my team built an internal dashboard that let the Sports Desk cover the game in real time from the newsroom. When something happened on the field, a journalist clicked a single button, field goal, touchdown, turnover, and a fully designed New York Times graphic dropped straight into the live blog, with the play and the running score.",
          "I also built a database of every player, each with a small graphic showing team, number, and a short bio. The first time a player was named in the coverage, their name became a hover card, so a reader could see who they were and their key stats without leaving the story. It turned a fast, messy live event into something clear and richly contextual.",
        ],
        tags: [
          "Live blogging",
          "One-click inserts",
          "Player database",
          "Hover cards",
        ],
        links: [
          {
            label: "See the archived coverage",
            url: "https://www.nytimes.com/interactive/projects/superbowl/2013/dashboard",
          },
        ],
      },
      {
        title: "Olympics coverage",
        kicker: "Interactive · Data-Heavy",
        meta: "London 2012 · live results feeds · international syndication",
        feature: true,
        description: [
          "I worked on three consecutive Olympic Games, and London 2012 was the biggest dataset I have ever handled. The results feed arrived as a huge, fast flow of XML that we turned into live medal tables, event pages, and graphics, syndicated for readers in Japan, Brazil, and the UK.",
          "The interesting part was making dense results readable. For the modern pentathlon we broke the scoring out step by step. We highlighted the exact round that broke a record, with a tooltip naming the kind of record set. We even surfaced the strange horse descriptions in the equestrian feed, which read a little like personal ads, to bring the data to life.",
        ],
        tags: ["Live sport", "Large data", "Tooltips", "Syndication"],
        links: [
          {
            label: "Nieman Lab",
            url: "https://www.niemanlab.org/2013/04/the-new-york-times-tackles-the-olympics/",
          },
        ],
      },
      {
        title: "Election results loader",
        kicker: "Live data at scale",
        meta: "Ruby on Rails · SQL · AP data · JSON API",
        description: [
          "The engine behind the Times election night coverage. It pulled results from the Associated Press once a minute, worked out which of tens of thousands of races had actually changed, and served them to the public site through a fast JSON API. I joined the core team for the 2012 general election homestretch.",
        ],
        tags: ["Elections", "Caching", "API design"],
        links: [
          {
            label: "Write-up on Source by former colleague Jacob Harris",
            url: "https://source.opennews.org/articles/ny-times-results-loader/",
          },
        ],
      },
      {
        title: "SchoolBook",
        kicker: "Data partnership",
        meta: "Ruby on Rails · Solr · Varnish · WordPress",
        description: [
          "A New York City schools data site, built with WNYC. It brought together test scores, school reports, and community discussion in one searchable place for parents. I was part of the Times team that built the data layer and search.",
        ],
        tags: ["Education data", "Search", "Public service"],
        links: [
          {
            label: "Write-up on Source by former colleague Tyson Evans",
            url: "https://source.opennews.org/articles/schoolbook/",
          },
        ],
      },
      {
        title: "Understanding the audience",
        kicker: "Newsroom analytics",
        meta: "Audience segmentation · alerting · early chat bots",
        description: [
          "After four years building content, I moved into newsroom analytics. The job was working out what to measure and what it actually meant. I built tools that segmented readers, sent editors quick alerts when a story was taking off, and let the newsroom query metrics in plain language. I also wrote a primer on the topic for other newsrooms.",
        ],
        tags: ["Analytics", "Segmentation", "Editorial tools"],
        links: [
          {
            label: "My primer on Source",
            url: "https://source.opennews.org/articles/newsroom-analytics-primer/",
          },
        ],
      },
      {
        title: "A Moment in Time",
        kicker: "Crowdsourcing",
        meta: "Global photo crowdsourcing · interactive globe",
        description: [
          "The Times asked readers around the world to photograph the same moment. More than thirteen thousand images came back. The interactive news team built the system that gathered, filtered, and organised them into a spinning three dimensional globe, searchable by place and topic.",
        ],
        tags: ["Crowdsourcing", "Photo data", "Interactive"],
        links: [
          {
            label: "Nieman Lab",
            url: "https://www.niemanlab.org/2010/05/crowdsourcing-goes-global-the-nyts-moment-in-time/",
          },
        ],
      },
      {
        title: "Haiti earthquake missing persons",
        kicker: "Sensitive data",
        meta: "Data matching · public help tool",
        description: [
          "After the 2010 Haiti earthquake, I worked on a tool that helped people search for and share news of missing friends and family, collaborating with NPR, Ushahidi, ICRC and Google to make our data available in 
a standard format via API. It is a piece of work that has stayed with me, a reminder that data tools can carry real weight for real people.",
        ],
        tags: ["Humanitarian", "Search", "Public service"],
      },
    ],
  },
  {
    heading: "NYT R&D and open source",
    when: "Research Lab",
    projects: [
      {
        title: "Streamtools",
        kicker: "Open source · Go",
        meta: "Flow based programming · real time data",
        description: [
          "A visual toolkit from the New York Times R&D Lab for working with streams of data. Instead of writing code, you connect blocks together on a canvas to filter, transform, and route live data in real time. It was released as open source and written in Go.",
        ],
        tags: ["Streaming data", "Visual tooling", "Open source"],
        links: [
          {
            label: "Write-up on Source by former colleague Mike Dewar",
            url: "https://source.opennews.org/articles/introducing-streamtools/",
          },
        ],
      },
      {
        title: "@NYTPlusContext",
        kicker: "Bots · serendipity",
        meta: "Ruby · Twitter API · full text search",
        description: [
          "A playful research bot, built with James Robinson and Brian Abelson. When the parody account @NYTMinusContext stripped a line out of a Times article, our bot found the original story and tweeted the context back. It leaned on the Times full text article search to reunite quotes with their source.",
        ],
        tags: ["Twitter bot", "Search API", "Experiment"],
        links: [
          {
            label: "My write-up on Source",
            url: "https://source.opennews.org/articles/bot-find-source-serendipity/",
          },
        ],
      },
      {
        title: "Hive",
        kicker: "Crowdsourcing tool",
        meta: "Open source · reader participation",
        description: [
          "An open source crowdsourcing framework from the R&D Lab. It gave newsrooms a reusable way to set readers small tasks at scale, such as tagging or reviewing large sets of documents and images, and to gather the results back cleanly.",
        ],
        tags: ["Crowdsourcing", "Open source", "Reader tools"],
      },
    ],
  },
  {
    heading: "BBC News Labs",
    when: "2015 – 2016 · London",
    projects: [
      {
        title: "Hooked, a graphic novel",
        kicker: "Illustrated storytelling",
        meta: "Multilingual · digital comic · Focus on Africa",
        description: [
          "A digital graphic novel following the true story of drug addiction in Guinea-Bissau, made with the studio PositiveNegatives and artist Tayo Fatunla. I produced the interactive build with Naomi Scherbel-Ball, using an open source comic viewer to bring the panels to life on the BBC site.",
        ],
        tags: ["Long form", "Comics", "Multilingual"],
        links: [
          {
            label: "On the BBC",
            url: "https://www.bbc.com/news/magazine-32740691",
          },
        ],
      },
      {
        title: "@BBCReferendum results bot",
        kicker: "Elections · automation",
        meta: "Ruby · Redis · Twitter API · image processing",
        description: [
          "On EU Referendum night, the TV unit generated a result graphic for every counting area. Doing the social posts by hand would have been slow, so I built a bot with Paul Sargeant of Visual Journalism to do it. It watched for each new graphic, cropped and branded it, then composed and tweeted an accurate summary.",
          "It was built carefully, since a wrong tweet on that night would have mattered. If a result flipped between reports, it raised an alarm and waited for a human rather than tweeting. As a small joy, my laptop read each result aloud in a matching regional accent through the night.",
        ],
        tags: ["Live results", "Auto graphics", "Safeguards"],
        links: [
          { label: "BBC R&D", url: "https://www.bbc.com/rd/articles/bots" },
        ],
      },
      {
        title: "BBC Uzbek newsbot",
        kicker: "Access · censorship",
        meta: "Telegram · Go services · Ruby on Rails admin",
        description: [
          "The first newsbot the BBC ever launched, built with Trushar Barot of the World Service. Telegram was the most popular messaging app in Uzbekistan, where the BBC Uzbek website is blocked, so we used it to deliver stories where readers already were.",
          "The bot services were written in Go for speed, reading from the same database as a Ruby on Rails admin that let editors add commands without touching code. Because readers could be at risk, we stored the minimum possible user data and encrypted it, and the bot could localise dates for non Gregorian calendars.",
        ],
        tags: ["Messaging", "Press freedom", "Privacy by design"],
        links: [
          {
            label: "BBC Media Centre",
            url: "https://www.bbc.co.uk/mediacentre/latestnews/2016/bbc-uzbeck-newsbot",
          },
        ],
      },
      {
        title: "Structured journalism at News Labs",
        kicker: "Structured journalism",
        meta: "Reusable story data · research with Paul Rissen",
        description: [
          "Part of the wider News Labs push to treat the facts inside a story as structured, reusable data rather than plain text. The idea is that once a fact is captured properly it can power many stories, formats, and tools, from graphics to bots.",
        ],
        tags: ["Data modelling", "Research", "Reusable content"],
      },
    ],
  },
  {
    heading: "Condé Nast International",
    when: "2016 – 2018 · London",
    projects: [
      {
        title: "British Vogue messaging service",
        kicker: "Head of Interactive Journalism",
        meta: "Chatbot · conversational delivery",
        description: [
          "I led the build of a chatbot that delivered British Vogue updates over a messaging app. It was an early experiment in conversational news, and an honest one. The format did not really land, and it taught me a lot about where chat bots do and do not add value for readers. I include it because the lessons were as useful as any success.",
        ],
        tags: ["Conversational", "Experiment", "Lessons learned"],
        links: [
          {
            label: "On Vogue",
            url: "https://www.vogue.co.uk/article/vogue-daily-update-messaging-service",
          },
        ],
      },
      {
        title: "Interactive journalism, group wide",
        kicker: "Team and strategy",
        meta: "Cross-title tooling · editorial technology",
        description: [
          "Beyond any one product, my role was to bring interactive and data thinking to titles across Condé Nast International. That meant helping editorial teams work with data, build interactive features, and try new storytelling formats without needing a full engineering team of their own.",
        ],
        tags: ["Leadership", "Editorial tech", "Enablement"],
      },
    ],
  },
  {
    heading: "Where it started",
    when: "2004 – 2006 · Malawi",
    projects: [
      {
        title: "BART antiretroviral treatment system",
        kicker: "Public health developer · Baobab Health",
        meta: "Clinical data · touchscreen point of care",
        feature: true,
        description: [
          "Long before the newsroom work, I contributed remotely and spent time onsite in Lilongwe to collaboratively build health software with Baobab Health. The Baobab Antiretroviral Treatment system, known as BART, helped clinics register and track patients on HIV treatment using touchscreen terminals designed for low resource settings.",
          "This is the thread that runs through everything else on this page. Public health is where I began, and it is where I am heading back to now, with twenty more years of data and engineering behind me.",
        ],
        tags: ["Health informatics", "HIV care", "Low resource design"],
      },
    ],
  },
  {
    heading: "Speaking",
    when: "Conferences and festivals",
    projects: [
      {
        title: "Too Much Information",
        kicker: "Talk",
        meta: "Hacks/Hackers Media Party · Buenos Aires",
        description: [
          "A talk on why programmer and journalist skills belong together. The argument was simple. There is no shortage of data, so our job is to give people signals rather than noise, using the New York Times election and Olympics work as examples of making dense data clear.",
        ],
        tags: ["Data journalism", "Storytelling"],
      },
      {
        title: "Thinking Different: using Ruby to fight AIDS",
        kicker: "Talk",
        meta: "On the Baobab Health work in Malawi",
        description: [
          "A talk about building the antiretroviral treatment system in Malawi, and what it takes to make clinical software work in a low resource setting. I have also spoken at NICAR, the Perugia Journalism Festival, and the Reuters Institute at Oxford.",
        ],
        tags: ["Health tech", "Global development"],
      },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      id={project.id}
      className={`flex flex-col rounded-lg border bg-white p-6 shadow-sm ${
        project.feature
          ? "border-l-4 border-l-brand-primary border-brand-light"
          : "border-brand-light"
      }`}
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
        {project.kicker}
      </p>
      <h3 className="mb-1 text-xl font-semibold text-black">{project.title}</h3>
      {project.meta && (
        <p className="mb-3 text-sm text-zinc-500">{project.meta}</p>
      )}

      {project.description.map((para, i) => (
        <p key={i} className="mb-3 text-[15px] leading-7 text-zinc-700">
          {para}
        </p>
      ))}

      {project.tags && (
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand-light bg-brand-bg px-3 py-1 text-xs font-medium text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.links && (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-brand-primary hover:underline"
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col font-sans">
      <header className="mb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-primary">
          Selected work
        </p>
        <h1 className="mb-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
          Twenty years of data stories, tools, and experiments.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600">
          Here is a working sample of projects across public health, newsroom
          technology, and interactive journalism. Some I led, some I built as
          part of a team. Where a colleague wrote up the work, I have linked to
          their account so you can read it in full.
        </p>
      </header>

      {eras.map((era) => (
        <section key={era.heading} className="mb-12">
          <div className="mb-5 flex flex-wrap items-baseline gap-3 border-b-2 border-black pb-2">
            <h2 className="text-xl font-semibold tracking-tight text-black">
              {era.heading}
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              {era.when}
            </span>
          </div>

          {era.intro && (
            <p className="mb-5 max-w-2xl text-zinc-600">{era.intro}</p>
          )}

          {era.heading === "The New York Times" && (
            <blockquote className="mb-7 border-l-4 border-brand-primary py-1 pl-5 text-xl leading-relaxed text-brand-primary">
              The trick is to give people signals, not noise. Disclose
              information in a way that enhances understanding rather than
              clouds it.
            </blockquote>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {era.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
