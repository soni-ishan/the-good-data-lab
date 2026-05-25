"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageSquare, X } from "lucide-react";
import { siteConfig } from "../data";

export default function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="rounded-lg p-2 text-stone-300 transition-colors hover:text-slate-100 md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-20 border-t border-slate-200/12 bg-[#1b140d]/95 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col space-y-3 px-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-[0.12em] text-stone-300 transition-colors hover:bg-[#a599d8]/18 hover:text-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={siteConfig.discord}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-100 transition hover:bg-violet-300/25"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Join Discord
            </a>
          </div>
        </div>
      )}
    </>
  );
}
