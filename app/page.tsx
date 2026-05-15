import Link from "next/link";
import { ArrowRight, Database, ExternalLink, Github, Linkedin, Sparkles, Users } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { contributors, projects, siteConfig } from "./data";

const highlightedProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-[#0f0b08] text-stone-100 selection:bg-amber-400/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(251,191,36,0.18),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.15),transparent_40%),linear-gradient(180deg,#1a120c_0%,#0f0b08_60%)]" />
      <SiteHeader />

      <section className="relative px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
              Student-led data and AI collective
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight text-stone-50 sm:text-5xl lg:text-7xl">
              Every project is an
              <span className="block text-amber-300">epoch</span>
            </h1>
            <p className="mt-5 text-base font-medium uppercase tracking-[0.18em] text-amber-400/80">
              One full cycle of learning, building, and growing.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-300">
              {siteConfig.description} We turn ideas into practical solutions and share the process from concept
              to delivery.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#261a0f] transition hover:bg-amber-200"
              >
                Browse projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.discord}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-amber-200/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-amber-100 transition hover:bg-amber-200/10"
              >
                Join Discord
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {highlightedProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.slug}
                  className={`rounded-2xl border border-amber-200/15 bg-[#1a130d]/85 p-5 transition ${project.theme.border}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`rounded-lg p-2 ${project.theme.bg} ${project.theme.text}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs ${project.theme.tagBg} ${project.theme.tagText} ${project.theme.tagBorder}`}>
                      {project.status ?? project.rank}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-stone-100">{project.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-300">{project.shortDescription}</p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100"
                  >
                    Read project article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20 sm:px-8 lg:px-10" aria-labelledby="why-heading">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-amber-200/10 bg-[#1a130d]/70 p-8 lg:p-12">
          <h2 id="why-heading" className="text-2xl font-bold uppercase tracking-[0.08em] text-amber-100">
            What we focus on
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-amber-200/10 bg-black/10 p-5">
              <Users className="h-6 w-6 text-amber-200" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-stone-100">Collaborative learning</h3>
              <p className="mt-2 text-sm text-stone-300">
                We work in small teams, mentor one another, and build confidence through hands-on projects.
              </p>
            </div>
            <div className="rounded-xl border border-amber-200/10 bg-black/10 p-5">
              <Database className="h-6 w-6 text-amber-200" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-stone-100">Real-world data work</h3>
              <p className="mt-2 text-sm text-stone-300">
                Our projects combine modeling, engineering, and communication around real datasets.
              </p>
            </div>
            <div className="rounded-xl border border-amber-200/10 bg-black/10 p-5">
              <Sparkles className="h-6 w-6 text-amber-200" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-stone-100">Clear project storytelling</h3>
              <p className="mt-2 text-sm text-stone-300">
                We document goals, methods, outcomes, and next steps for every major project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative scroll-mt-28 px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">Projects</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-stone-50 sm:text-5xl">Build logs and outcomes</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">
            Explore current and past work, including project summaries, technical decisions, and results.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.slug}
                  className={`rounded-2xl border border-amber-200/15 bg-[#1a130d]/80 p-6 transition hover:-translate-y-0.5 ${project.theme.border}`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`rounded-xl p-3 ${project.theme.bg} ${project.theme.text}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs ${project.theme.tagBg} ${project.theme.tagText} ${project.theme.tagBorder}`}>
                      {project.status ?? project.rank}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-stone-100">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-300">{project.shortDescription}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-stone-400">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{new Date(project.publishedAt).toLocaleDateString()}</span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-[#261a0f] transition hover:bg-amber-200"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    {project.links.code ? (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-amber-200/30 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-200/10"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        Code
                      </a>
                    ) : null}
                    {project.links.demo ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-amber-200/30 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-200/10"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Demo
                      </a>
                    ) : null}
                    {project.links.kaggle ? (
                      <a
                        href={project.links.kaggle}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-amber-200/30 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-200/10"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Kaggle
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contributors" className="relative scroll-mt-28 px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">Contributors</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-stone-50 sm:text-5xl">People behind the builds</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">
            Meet the contributors who lead research, engineering, and product execution across our projects.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contributors.map((contributor) => (
              <article key={contributor.id} className="rounded-2xl border border-amber-200/15 bg-[#1a130d]/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300/20 text-sm font-bold text-amber-100">
                  {contributor.avatarInitials}
                </div>
                <h3 className="mt-4 text-lg font-bold text-stone-100">{contributor.name}</h3>
                <p className="mt-1 text-sm font-medium text-amber-200">{contributor.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-stone-300">{contributor.bio}</p>
                <div className="mt-4 flex items-center gap-4">
                  {contributor.links.linkedin ? (
                    <a
                      href={contributor.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-stone-200 transition hover:text-amber-100"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      LinkedIn
                    </a>
                  ) : null}
                  {contributor.links.github ? (
                    <a
                      href={contributor.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-stone-200 transition hover:text-amber-100"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      GitHub
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative scroll-mt-28 px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-amber-200/10 bg-[#1a130d]/70 p-8 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">About</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-stone-50 sm:text-5xl">From classroom to delivery</h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-stone-300">
            Epoch is a student-run data and AI lab built around one principle: practical work creates deep learning.
            We pick meaningful problems, ship prototypes, and document tradeoffs clearly so every project is useful and
            reproducible.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-amber-200/15 bg-black/10 p-6">
              <h3 className="text-lg font-bold text-amber-100">Learn by shipping</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                We focus on execution from day one so newcomers build practical engineering confidence.
              </p>
            </article>
            <article className="rounded-2xl border border-amber-200/15 bg-black/10 p-6">
              <h3 className="text-lg font-bold text-amber-100">Document the process</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                Project articles capture architecture decisions, results, and what we would improve next.
              </p>
            </article>
            <article className="rounded-2xl border border-amber-200/15 bg-black/10 p-6">
              <h3 className="text-lg font-bold text-amber-100">Sustainable workflow</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                We use a lightweight workflow that makes project updates simple, fast, and consistent.
              </p>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}