import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Linkedin } from "lucide-react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ContributorCard from "../../components/ContributorCard";
import { contributors, getProjectBySlug, projects } from "../../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Epoch"
    };
  }

  return {
    title: `${project.title} | Epoch`,
    description: project.shortDescription
  };
}

export default async function ProjectArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectContributors = contributors.filter((contributor) =>
    project.contributors.includes(contributor.id)
  );

  return (
    <main className="min-h-screen bg-[#0b0a09] text-stone-100">
      <SiteHeader />

      {/* ── Header strip ───────────────────────────────────────────── */}
      <div className="border-b border-slate-200/12 px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-400 transition hover:text-slate-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone-500">
            <span>{project.category}</span>
            <span>·</span>
            <span>{new Date(project.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>·</span>
            <span>{project.readTime}</span>
          </div>

          <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-stone-50 sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-300">{project.article.intro}</p>

          {(project.links.code || project.links.demo || project.links.kaggle) && (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.links.code ? (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-amber-300/20"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Repository
                </a>
              ) : null}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-amber-300/20"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live demo
                </a>
              ) : null}
              {project.links.kaggle ? (
                <a
                  href={project.links.kaggle}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-amber-300/20"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Kaggle
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* ── Hero video/image ──────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-5xl px-6 pt-10 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-slate-200/15">
          {project.slug === "microsoft-ai-dev-days" && project.links.demo?.includes("youtube") ? (
            <iframe
              width="100%"
              height="506"
              src="https://www.youtube.com/embed/3jAxC7I3zYk"
              title={`${project.title} demo video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-[40vh] w-full sm:h-[55vh]"
            />
          ) : (
            <Image
              src={project.heroImage}
              alt={`${project.title} hero visual`}
              width={1600}
              height={900}
              className="h-[40vh] w-full object-cover sm:h-[55vh]"
              priority
            />
          )}
        </div>
      </div>

      <article className="mx-auto w-full max-w-4xl px-6 pb-24 pt-16 sm:px-8 lg:px-10">

        {/* ── Article sections ───────────────────────────────────────── */}
        <div className="space-y-20">
          {project.article.sections.map((section, i) => (
            <section key={section.heading}>
              {/* alternating: odd sections flip image to right on large screens */}
              <div className={`flex flex-col gap-10 lg:flex-row lg:items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-stone-100 sm:text-3xl">{section.heading}</h2>
                  <div className="mt-5 space-y-4">
                    {section.content.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-[1.85] text-stone-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <figure className="lg:w-[42%] lg:shrink-0">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={1200}
                      height={800}
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-relaxed text-stone-500">
                    {section.image.caption}
                  </figcaption>
                </figure>
              </div>

              {i < project.article.sections.length - 1 && (
                <hr className="mt-16 border-slate-200/12" />
              )}
            </section>
          ))}
        </div>

        {/* ── Outcomes & Next Steps ──────────────────────────────────── */}
        <hr className="my-16 border-slate-200/12" />
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/70">Outcomes</h2>
            <ul className="mt-5 space-y-4">
              {project.article.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-4 text-stone-300">
                  <span className="mt-2.5 h-px w-6 shrink-0 bg-amber-400/60" aria-hidden="true" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/70">Next Steps</h2>
            <ul className="mt-5 space-y-4">
              {project.article.nextSteps.map((step) => (
                <li key={step} className="flex gap-4 text-stone-300">
                  <span className="mt-2.5 h-px w-6 shrink-0 bg-amber-400/60" aria-hidden="true" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Contributors ───────────────────────────────────────────── */}
        <hr className="my-16 border-slate-200/12" />
        <section className="rounded-2xl border border-slate-200/15 bg-[#22180f]/80 p-6 sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300/70">Contributors</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projectContributors.map((contributor) => (
              <ContributorCard key={contributor.id} contributor={contributor} variant="compact" />
            ))}
          </div>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
