"use client";

import { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { siteConfig } from '../data';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
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
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 md:hidden border-t border-slate-200 dark:border-slate-800 py-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
          <div className="flex flex-col space-y-4 px-6">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Team</a>
            <a 
              href={siteConfig.discord}
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
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
