import Link from "next/link";
import { MessageSquare, Terminal } from "lucide-react";
import MobileNav from "./MobileNav";
import { siteConfig } from "../data";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/10 bg-[#120f0c]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Epoch home">
          <div className="rounded-xl border border-amber-300/30 bg-amber-400/10 p-2 text-amber-200">
            <Terminal className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide text-stone-100">{siteConfig.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/70">Data Lab</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.16em] text-stone-300 transition-colors hover:text-amber-100"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-300/15 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/25"
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Join Discord
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
