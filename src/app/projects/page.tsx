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
        title: "Australian Species at Risk from H5N1 Bird Flu",
        kicker: "Explainer · Work-in-Progress",
        meta: "Spreadsheets · React",
        feature: true,
        id: "aussie-h5n1",
        description: [
          "A compendium of the species most at risk from bird flu in Australia, providing information on their current conservation status, h5n1 infection status, and ideally, awesome photos of these guys.",
          "The Australian government has listed 150 birds and 10 mammals unique to Australia that are most at risk from H5N1, but they haven't published this data. Using a variety of sources, I am compiling a spreadsheet by hand to produce a single source of who these animals are, with some minor profile information, conservation and infection status, etc.",
        ],
        tags: [
          "Data sourcing and compiling",
          "Component cards",
          "Contextualising News",
        ],
        links: [
          {
            label: "Species List (so far)",
            url: "https://aussie-wildlife-risk-h5n1.vercel.app/species",
          },
        ],
      },
      {
        title: "Australian childhood vaccination rates",
        kicker: "Interactive map · D3",
        meta: "Python · pandas · D3 · SVG",
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
        kicker: "Prototype · Explainer",
        meta: "Next.js · Drizzle ORM · Neon Postgres · Tailwind · Skeptical AI",
        feature: true,
        id: "vaccine-tracker",
        description: [
          "A field-notes style reference I'm currently working on to answer one question for a given disease: is there a vaccine available? Each disease has an epidemiology, transmission, vaccine status, and recommendations section, with sources cited and dated.",
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
    when: "2009 – 2015 · Interactive News and Research",
    intro:
      "I spent more than five years at the Times. As Assistant Editor on the Interactive News desk I built newsroom tools and interactive stories, and I helped start the newsroom's first editorial analytics team. I finished as a Research Engineer in the R&D Lab, prototyping storytelling and data ideas.",
    projects: [
      {
        title: "Super Bowl XLVII live dashboard",
        kicker: "Live coverage tool · Sports Desk",
        meta: "Internal newsroom tool · live blog inserts · player hover cards",
        feature: true,
        id: "superbowl",
        description: [
          "For the 2013 Super Bowl my team and I built an internal dashboard that let the Sports Desk cover the game in real time from the newsroom. When something happened on the field, a journalist clicked a single button, field goal, touchdown, turnover, and a fully designed New York Times graphic dropped straight into the live blog, with the play and the running score.",
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
        title: "London 2012 Summer Olympics",
        kicker: "Interactive · Data · Sports",
        meta: "302 events · 39 disciplines · live results feeds · syndication",
        feature: true,
        description: [
          "The most ambitious Olympics coverage the desk had attempted yet, and the biggest dataset I have then ever handled. It carried real time results across 302 events in 39 disciplines, medal counts, athlete bios, and world records, all sitting alongside the stories, photography, and interactives.",
          "It was also the desk's first go at entrepreneurial journalism. We partnered with Reuters to syndicate the coverage in three packages, so all the results and athlete data had to be localised and translated for Brazilian Portuguese, British English, and Japanese sites among others. Making dense results readable was a challenge! For instance, we broke the modern pentathlon out step by step, highlighted the exact round that set a record with a tooltip naming it, and even surfaced the strange horse descriptions in the equestrian feed, which read a little like personal ads. ReadWriteWeb gave us the gold medal for the best Olympics website.",
        ],
        tags: ["Live sport", "Large data", "Tooltips", "Syndication"],
        links: [
          {
            label: "My full write-up on Source",
            url: "https://source.opennews.org/articles/london-calling-winning-data-olympics/",
          },
        ],
      },
      {
        title: "Sochi 2014 Winter Olympics",
        kicker: "Interactive · editorial strategy",
        meta: "Elasticsearch · JSON · highlights over encyclopedic",
        description: [
          "After the London data explosion, we looked at the analytics and rethought the approach for Sochi. Rather than spend our time restructuring the IOC's often obtuse ODF format into exhaustive results pages, we focused on an overall editorial strategy that still served detailed results to the core sports fans.",
          "Technically we stored the data in Elasticsearch, a native JSON search engine and database, which kept greater fidelity to the original feed while being far easier to work with. The result was a compelling hub with highlights, strong photography, and live results woven into the reporting. It resonated with readers more than our previous almost encyclopedic coverage of every lap of every phase.",
        ],
        tags: ["Winter Olympics", "Elasticsearch", "Editorial strategy"],
      },
      {
        title: "Vancouver 2010 Winter Olympics",
        kicker: "Interactive · first big data games",
        meta: "IOC ODF feed · schedule tracker · athlete bios · live medals",
        description: [
          "Our first extensive use of data in Olympics coverage. The IOC released its most comprehensive data feed yet, the ODF, which let us build a personalised schedule tracker, athlete bios, and live medal awards. It set the pattern for everything that came at London and Sochi.",
        ],
        tags: ["Winter Olympics", "Live results", "Schedule tracker"],
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
          "The Times asked readers around the world to photograph the same moment. More than thirteen thousand images came back. The interactive news team collaborated with the photo desk to build the system that gathered, filtered, and organised them into a spinning three dimensional globe along with the graphics desk, searchable by place and topic.",
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
        title: "Contribute to Our Reporting",
        kicker: "Reader callouts",
        meta: "Branching forms · Affordable Care Act coverage",
        description: [
          "How do you hear from more people than boots on the ground reporting allows. I worked with the business and science desks on the rollout of the Affordable Care Act, focusing on three groups it would touch most, patients, providers, and employers.",
          "I built a series of callouts, custom forms that led each reader through different questions depending on their earlier answers. Combined with traditional reporting, they let us hear from a far larger and more varied group. Readers did not just add to known stories, they led us to new ones. It was an early example of news as a conversation rather than a broadcast.",
        ],
        tags: ["Reader contributions", "Branching forms", "Health policy"],
      },
      {
        title: "Haiti earthquake missing persons",
        kicker: "Sensitive data",
        meta: "UGC platform · PFIF · Google People Finder",
        description: [
          "After the 7.0 quake hit Port-au-Prince in January 2010, a colleague noticed readers were emailing us for help finding loved ones. Using a user generated content platform I had built, I published a simple submission form for a name, details, contact, and a photo. The first submission arrived within minutes, and we turned the responses into an interactive collage of the missing.",
          "The US State Department had chosen Google's People Finder as the shared resource, so I collaborated with NPR, Ushahidi, the ICRC, and Google to publish our data in the People Finder Interchange Format via an API endpoint, then wrote a tool to send regular updates. Our interactive stayed current, even marking people once they were found safe. CNN and the Miami Herald followed suit. It is a piece of work that has stayed with me, a reminder that data tools can carry real weight for real people.",
        ],
        tags: ["Humanitarian", "Data sharing", "PFIF", "Public service"],
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
            label: "Write-up on Source",
            url: "https://source.opennews.org/articles/introducing-streamtools/",
          },
        ],
      },
      {
        title: "Article reboot",
        kicker: "Research Engineer · digital storytelling",
        meta: "New forms outside the deadline cycle",
        description: [
          "A Lab project to rethink what a Times article could be once it was freed from the daily deadline cycle. It explored new digital storytelling forms, from richer structure to more useful ways of surfacing related coverage, using Go and Elasticsearch under the hood. Much of what I learned here fed straight into the Madison and Hive work.",
        ],
        tags: ["Storytelling", "Go", "Elasticsearch"],
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
        title: "Madison and Hive",
        kicker: "Crowdsourcing · Go",
        meta: "Elasticsearch · JSON · open source framework",
        description: [
          "Madison is a public site built with Jane Friedhoff that asked readers to help identify advertisements from the Times archive. Ads are notoriously hard to read programmatically because of their creative and inconsistent layouts and typefaces, so we gave the audience a few ways to pitch in depending on their interest and spare time.",
          "Madison runs on Hive, an open source platform I created for building crowdsourcing apps in many contexts. Informed by our Streamtools work, Hive uses Go for fast JSON parsing and a clean interface to Elasticsearch. Pairing a compiled language with a search engine let it handle a wide variety of reader contributions across very different tasks.",
        ],
        tags: ["Crowdsourcing", "Go", "Elasticsearch", "Open source"],
        links: [
          {
            label: "NiemanLab",
            url: "https://www.niemanlab.org/2014/12/the-new-york-times-rd-lab-releases-hive-an-open-source-crowdsourcing-tool/",
          },
        ],
      },
    ],
  },
  {
    heading: "BBC News Labs",
    when: "2015 – 2016 · London",
    projects: [
      {
        title: "General Election coverage dashboards",
        kicker: "Internal tools · politics",
        meta: "UK General Election · party coverage",
        description: [
          "During the UK General Election I built internal dashboards that helped the newsroom track and balance coverage of the political parties. The idea was simple. Give editors a clear, live picture of who was being covered and how, so the reporting stayed fair and informed rather than guided by hunch.",
        ],
        tags: ["Elections", "Newsroom analytics", "Fair coverage"],
      },
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
        links: [
          {
            label: "A Manifesto for Structured Journalism (archive)",
            url: "https://web.archive.org/web/20150928230448/https://bbcnewslabs.co.uk/2015/07/07/a-manifesto-for-structured-journalism/",
          },
        ],
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
        title: "Head of Interactives, Vogue International",
        kicker: "Team and strategy · 11 countries",
        meta: "Cross-title tooling · editorial technology",
        description: [
          "As Head of Interactives for Vogue International, I built and led a digital team that worked across eleven countries. My job was to bring interactive and data thinking to Vogue titles and their social channels, helping editorial teams work with data, build interactive features, and pitch new storytelling formats without needing a full engineering team of their own.",
        ],
        tags: ["Leadership", "Editorial tech", "Enablement"],
      },
    ],
  },
  {
    heading: "Where it started",
    when: "Early 2000s · New York and Malawi",
    projects: [
      {
        title: "BART antiretroviral treatment system",
        kicker: "Public health hacker · Baobab Health",
        meta: "Ruby on Rails · touchscreen point of care · Lilongwe",
        feature: true,
        description: [
          "I spent two years as a public health hacker volunteering with Baobab Health, a small trust working to get better care to the people who need it most. I contributed remotely then onsite in Lilongwe, working with the team on the Baobab Antiretroviral Treatment system, known as BART, which helped clinics register and track patients on HIV treatment. It ran on donated terminals we hacked to add touchscreens and barcode scanners, powered over ethernet so a single cable carried both data and electricity in a setting with unreliable power. I focused hard on test coverage and refactoring, because in clinical software a bug is not an inconvenience.",
          "The impact was concrete. Patient registration dropped from about fifteen minutes to sixty seconds, and returning patients were found in under ten. The interface was simple enough that a hospital janitor named Gem started registering patients on his lunch break, and went on to run registration at the central hospital. This is the thread that runs through everything else on this page. Public health is where I began, and it is where I am heading back to now, with twenty more years of data and engineering behind me.",
        ],
        tags: [
          "Health informatics",
          "HIV care",
          "Ruby on Rails",
          "Low resource design",
        ],
      },
      {
        title: "Hearst Interactive Studios",
        kicker: "News app developer · magazines",
        meta: "New York · 2000 to 2003",
        description: [
          "My first taste of newsroom technology. From 2000 to 2003 I built interactives and the backend publishing tools behind some of Hearst's best known magazines, including Esquire, Popular Mechanics, and Cosmopolitan.",
          "The projects were as varied as the titles. I built a Drinks Database for Esquire, a content management system for Popular Mechanics that ran features like their famous beer can chicken recipe, and the online quizzes for Cosmopolitan. It was where I learned that the systems editors and producers use behind the scenes matter as much as the thing readers see. That idea, good internal tools make better journalism, turns up again and again through the rest of my career.",
        ],
        tags: ["Publishing tools", "Interactives", "Magazines"],
      },
      {
        title: "Before the newsroom",
        kicker: "Early web and startups · 1995 to 2007",
        meta: "New York · San Francisco",
        description: [
          "I have been building for the web since it was young. I started at Interactive Imaginations in New York while still in high school, working on the riddler.com games site and an early digital ad network. At Macromedia I helped build the first Flash version of their own website and sat on the Dreamweaver advisory board. At vivid studios in San Francisco I built the Webby Awards site and ran Sun servers as a unix sysadmin.",
          "The pattern held as the web grew up. I was tech lead at Oven Digital, then a very early social media hacker at Friendster in Mountain View, where I sped up the Java based site and built Groups, profile skins, and in site messaging with anti spam controls. Later I was a software engineer at StreetEasy, the New York property startup that Zillow went on to buy, and I contributed to Spot.Us, one of the first crowdfunded journalism platforms. All of it fed the work that came next.",
        ],
        tags: ["Friendster", "Macromedia", "StreetEasy", "Early web"],
      },
    ],
  },
  {
    heading: "Speaking",
    when: "Conferences and festivals (not an exhaustive list)",
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
        kicker: "Talk · Golden Gate Ruby Conference, San Francisco",
        meta: "On the Baobab Health work in Malawi",
        description: [
          "A talk for the Ruby community about using technology to affect change, told through the Baobab Health work in Malawi. It covers the reality of shipping clinical software where the internet is slow, the power cuts out, and there is no app store. The team hacked donated iOpener terminals to take touchscreens and barcode scanners, ran a self healing mesh network, and treated the test suite as something that literally saves lives.",
        ],
        tags: ["Health tech", "Global development", "Ruby"],
      },
      {
        title: "Structured Journalism and Reporting with Data",
        kicker: "Seminar · Reuters Institute, Oxford",
        meta: "Reuters Institute for the Study of Journalism",
        description: [
          "I led a seminar at the Reuters Institute for the Study of Journalism on structured journalism and reporting with data. It drew on the BBC News Labs work, from turning the archive into reusable structured data to using bots to reach readers on the platforms they already use. I have also spoken at NICAR and the Perugia Journalism Festival.",
        ],
        tags: ["Structured journalism", "Data reporting", "Teaching"],
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
          Here is a sample of projects across public health, newsroom
          technology, and interactive journalism. Some I led, some I built as
          part of a team. Where a colleague wrote up the work, I have linked to
          their piece so you can read it in full.
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
              Programmer and journalist smarts are indispensable. There is no
              data shortage anywhere, so our job is to enhance the news and make
              information easier to parse.
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
