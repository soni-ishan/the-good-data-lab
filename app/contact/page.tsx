import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { siteConfig } from "../data";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0a09] text-stone-100">
      <SiteHeader />
      <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-14 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7ec8]">Contact</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-stone-50 sm:text-5xl">Send us a message</h1>

        <div className="mt-6 max-w-3xl rounded-3xl border border-[#8b7ec8]/25 bg-[#1a120c]/80 p-6 text-stone-200">
          <p className="text-sm leading-relaxed text-stone-300">
            If you would rather email us directly, reach out at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-semibold text-[#d9d0ff] underline decoration-[#8b7ec8]/60 underline-offset-4 transition hover:text-white"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}