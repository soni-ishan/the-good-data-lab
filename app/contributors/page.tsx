import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ContributorCard from "../components/ContributorCard";
import { contributors } from "../data";

export default function ContributorsPage() {
  return (
    <main className="min-h-screen bg-[#0b0a09] text-stone-100">
      <SiteHeader />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-14 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200/80">Contributors</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-stone-50 sm:text-5xl">People behind the builds</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-300">
          This section can grow over time without a database. Add contributors in one data file and they will appear here and on project pages.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contributors.map((contributor) => (
            <ContributorCard key={contributor.id} contributor={contributor} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
