import Link from "next/link";
import { siteConfig } from "../data";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 mt-8 border-t border-violet-400/20 bg-[#120f0c]/95 px-6 py-12 backdrop-blur-sm sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-200/70">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm text-stone-400">{siteConfig.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          {siteConfig.navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-stone-300 transition-colors hover:text-slate-100">
              {item.label}
            </Link>
          ))}
          <a href={siteConfig.discord} target="_blank" rel="noreferrer" className="text-stone-300 transition-colors hover:text-slate-100">
            Discord
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-7xl text-xs text-stone-500">
        Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
