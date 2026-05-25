import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContributorCard from "./components/ContributorCard";
import { contributors, projects, siteConfig } from "./data";

const projectOrder = new Map([
  ["microsoft-ai-dev-days", 0],
  ["csiro-image2biomass", 1],
  ["course-compass", 2]
]);

const orderedProjects = [...projects].sort(
  (a, b) =>
    (projectOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER) -
    (projectOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER)
);

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-[#0b0a09] text-stone-100 selection:bg-violet-300/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(139,126,200,0.24),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(165,153,216,0.18),transparent_40%),linear-gradient(180deg,#2a1f14_0%,#0b0a09_60%)]" />
      <SiteHeader />

      <section className="relative px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-black uppercase leading-tight text-stone-50 sm:text-5xl lg:text-7xl">
              Every project is an
              <span className="block text-violet-300">epoch</span>
            </h1>
            <p className="mt-5 text-base font-medium uppercase tracking-[0.18em] text-slate-300/80">
              One full cycle of learning, building, and growing.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-300">
              {siteConfig.description} We turn ideas into practical solutions and share the process from concept
              to delivery.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#1e1331] transition hover:bg-violet-300"
              >
                Browse projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.discord}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-100 transition hover:bg-[#a599d8]/18"
              >
                Join Discord
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <article className="rounded-2xl border border-slate-200/15 bg-[#22180f]/85 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-xl bg-violet-400/10 p-3 text-slate-100">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-violet-400/35 bg-violet-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100">
                  Upcoming
                </span>
              </div>
              <h2 className="text-2xl font-bold text-stone-100">New project coming soon</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                We are currently scoping our next project. We will share details here once everything is ready.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200/15 bg-[#22180f]/85 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80">Get involved</p>
              <h2 className="mt-2 text-xl font-bold text-stone-100">Want to build with us?</h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                We are students learning by building together. If you are into data, AI, or coding and want teammates to
                build with, join us on Discord and jump into the next project.
              </p>
              <a
                href={siteConfig.discord}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-violet-400 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-[#1e1331] transition hover:bg-violet-300"
              >
                Join the community
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="relative scroll-mt-28 px-6 pb-20 sm:px-8 lg:px-10" aria-labelledby="about-heading">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-slate-200/12 bg-[#22180f]/70 p-8 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80">About</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-black uppercase text-stone-50 sm:text-5xl">
            From classroom to real-world delivery
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-stone-300">
            Epoch is a student-run data and AI initiative built around one principle: practical work creates deep learning.
            We pick meaningful problems, build prototypes, and document tradeoffs clearly so every project is useful and
            reproducible.
          </p>

          <div className="mt-10 rounded-2xl border border-slate-200/12 bg-black/10 p-6 sm:p-7">
            <h3 className="text-2xl font-bold uppercase tracking-[0.08em] text-slate-100">What we focus on</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-300">
              We emphasize structured collaboration, strong engineering practices, and thoughtful experimentation so members gain experience working through real technical decisions, iterating on ideas, and turning concepts into well-documented, reliable systems.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200/12 bg-black/10 p-5">
              <h3 className="text-lg font-bold text-slate-100">Learn by shipping</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                We focus on execution from day one so newcomers build practical engineering confidence.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/12 bg-black/10 p-5">
              <h3 className="text-lg font-bold text-slate-100">Document the process</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                Project articles capture architecture decisions, results, and what we would improve next.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/12 bg-black/10 p-5">
              <h3 className="text-lg font-bold text-slate-100">Sustainable workflow</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                We use a lightweight workflow that makes project updates simple, fast, and consistent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative scroll-mt-28 px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80">Projects</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-stone-50 sm:text-5xl">Build logs and outcomes</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">
            Explore current and past work, including project summaries, technical decisions, and results.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {orderedProjects.map((project) => {
              return (
                <article
                  key={project.slug}
                  className={`rounded-2xl border border-slate-200/15 bg-[#22180f]/80 p-6 transition hover:-translate-y-0.5 ${project.theme.border}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200/25 p-2 ${
                        project.links.kaggle ? "bg-white" : "bg-[#1b140d]"
                      }`}
                    >
                      <Image
                        src={project.logoImage}
                        alt={`${project.title} logo`}
                        width={48}
                        height={48}
                        className="h-10 w-10 object-contain"
                      />
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
                      className="inline-flex items-center gap-2 rounded-lg bg-violet-400 px-4 py-2 text-sm font-semibold text-[#1e1331] transition hover:bg-violet-300"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    {project.links.code ? (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200/30 px-4 py-2 text-sm text-slate-100 transition hover:bg-[#a599d8]/18"
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
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200/30 px-4 py-2 text-sm text-slate-100 transition hover:bg-[#a599d8]/18"
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
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200/30 px-4 py-2 text-sm text-slate-100 transition hover:bg-[#a599d8]/18"
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80">Contributors</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-stone-50 sm:text-5xl">People behind the builds</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contributors.map((contributor) => (
              <ContributorCard key={contributor.id} contributor={contributor} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}