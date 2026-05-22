import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#06130e] text-stone-100">
      <SiteHeader />
      <section className="mx-auto w-full max-w-7xl px-6 pb-24 pt-14 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">Contact</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-stone-50 sm:text-5xl">Send us a message</h1>

        <div className="mt-12">
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}