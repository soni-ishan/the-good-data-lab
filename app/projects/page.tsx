import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { projects } from "../data";

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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-stone-100">
      <SiteHeader />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-14 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80">Project Library</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-stone-50 sm:text-5xl">Build logs and outcomes</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">
          Each card links to a dedicated article page with context, architecture decisions, visuals, and contributors.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {orderedProjects.map((project) => {
            return (
              <article
                key={project.slug}
                className={`rounded-2xl border border-slate-200/15 bg-[#1f2a3d]/80 p-6 transition hover:-translate-y-0.5 ${project.theme.border}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200/25 p-2 ${
                      project.links.kaggle ? "bg-white" : "bg-[#1e293b]"
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

                <h2 className="mt-5 text-2xl font-bold text-stone-100">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">{project.shortDescription}</p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-stone-400">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{new Date(project.publishedAt).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{project.readTime}</span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-[#372b12] transition hover:bg-amber-300"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  {project.links.code ? (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200/30 px-4 py-2 text-sm text-slate-100 transition hover:bg-sky-300/10"
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
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200/30 px-4 py-2 text-sm text-slate-100 transition hover:bg-sky-300/10"
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
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200/30 px-4 py-2 text-sm text-slate-100 transition hover:bg-sky-300/10"
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
      </section>
      <SiteFooter />
    </main>
  );
}
