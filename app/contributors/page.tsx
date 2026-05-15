import { Github, Linkedin } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { contributors } from "../data";

export default function ContributorsPage() {
  return (
    <main className="min-h-screen bg-[#0f0b08] text-stone-100">
      <SiteHeader />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-14 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">Contributors</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-stone-50 sm:text-5xl">People behind the builds</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">
          This section can grow over time without a database. Add contributors in one data file and they will appear here and on project pages.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contributors.map((contributor) => (
            <article key={contributor.id} className="rounded-2xl border border-amber-200/15 bg-[#1a130d]/80 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300/20 text-sm font-bold text-amber-100">
                {contributor.avatarInitials}
              </div>
              <h2 className="mt-4 text-xl font-bold text-stone-100">{contributor.name}</h2>
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
      </section>
      <SiteFooter />
    </main>
  );
}
