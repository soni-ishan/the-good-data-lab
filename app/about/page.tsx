import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const principles = [
  {
    title: "Learn by shipping",
    description:
      "We work on real projects from day one so members develop practical engineering instincts, not only theory."
  },
  {
    title: "Document the process",
    description:
      "Every project includes a write-up that explains decisions, tradeoffs, and outcomes in a transparent way."
  },
  {
    title: "Build for impact",
    description:
      "We pick projects with a clear user problem and measure usefulness through outcomes and feedback."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0b08] text-stone-100">
      <SiteHeader />
      <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">About Epoch</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-stone-50 sm:text-5xl">From classroom to real-world delivery</h1>
        <p className="mt-6 text-base leading-relaxed text-stone-300">
          Epoch is a student-run data and AI lab built around one principle: practical work creates deep learning.
          We turn ideas into shipped prototypes, evaluate them, and publish what we learned.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-2xl border border-amber-200/15 bg-[#1a130d]/70 p-6">
              <h2 className="text-lg font-bold text-amber-100">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200/15 bg-[#1a130d]/70 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-amber-100">How this site works without a database</h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-300">
            Project articles, contributors, and metadata are currently managed in static TypeScript files. This is ideal for your stage because it is fast, cheap, and easy to version-control. Later, if you need an editor UI or user-submitted content, you can migrate the same schema to a CMS or database.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
