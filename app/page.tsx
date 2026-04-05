export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-16 md:py-20 lg:px-24 lg:py-28 max-w-[1400px] mx-auto">
      {/* Header */}
      <header className="mb-32 md:mb-48">
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.9] tracking-[-0.04em]">
          Iacob
          <br />
          Pastina
        </h1>
        <p className="mt-8 text-sm tracking-[0.2em] uppercase opacity-50">
          Bucharest, Romania
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-32">
        {/* About */}
        <section>
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-6">
            Info
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-light max-w-md">
            Builds things for the internet. Products, brands, content.
            One person + code + distribution.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-light max-w-md mt-4">
            Arsenal Productions SRL.
          </p>
        </section>

        {/* Projects */}
        <section>
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-6">
            Projects
          </p>
          <div className="space-y-5">
            <ProjectRow
              name="Crown Years"
              description="Media brand for women 45–65"
              url="https://crownyears.vercel.app"
            />
            <ProjectRow
              name="GLP-1 Picks"
              description="Health affiliate"
              url="https://glp1picks.com"
            />
            <ProjectRow
              name="Gray Divorce Guide"
              description="Editorial resource"
              url="https://graydivorceguide.vercel.app"
            />
            <ProjectRow
              name="Signal"
              description="Complaint mining → product building"
            />
          </div>
        </section>

        {/* MilkyBrain */}
        <section>
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-6">
            MilkyBrain
          </p>
          <div className="space-y-5">
            <ProjectRow
              name="Pino"
              description="Fact-checker"
            />
            <ProjectRow
              name="SimpleWords"
              description="Language tool"
            />
            <ProjectRow
              name="PodCheck"
              description="Podcast verification"
            />
            <ProjectRow
              name="TalkToMe"
              description="Conversational AI"
            />
            <ProjectRow
              name="WonderCat"
              description="Remotion video generation"
            />
          </div>
        </section>

        {/* Builds */}
        <section>
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-6">
            Builds
          </p>
          <div className="space-y-5">
            <ProjectRow
              name="WoW Tracker"
              description="RPG-style productivity app"
            />
            <ProjectRow
              name="Autoresearch"
              description="Systematic web research protocol"
            />
          </div>
        </section>

        {/* Short Films */}
        <section>
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-6">
            Short Films
          </p>
          <div className="space-y-5">
            <ProjectRow name="DIVE" description="001" />
            <ProjectRow name="BUILD IT LIKE MARIO" description="002" />
            <ProjectRow name="THE INK AWAKENS" description="003" />
            <ProjectRow name="IF GOD HAD AN APP" description="004" />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-32 md:mt-48 pt-12 border-t border-black/10">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40">
            2026
          </p>
          <div className="flex gap-8">
            <a
              href="mailto:iacob@arsenalproductions.ro"
              className="text-xs tracking-[0.2em] uppercase"
            >
              Email
            </a>
            <a
              href="https://github.com/iacobp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProjectRow({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url?: string;
}) {
  const content = (
    <div className="flex justify-between items-baseline gap-4">
      <span className="text-base md:text-lg font-light">{name}</span>
      <span className="text-xs opacity-40 text-right">{description}</span>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
