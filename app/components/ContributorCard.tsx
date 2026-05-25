import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import type { Contributor } from "../data";

type ContributorCardProps = {
  contributor: Contributor;
  variant?: "default" | "compact";
};

export default function ContributorCard({ contributor, variant = "default" }: ContributorCardProps) {
  const isCompact = variant === "compact";

  return (
    <article
      className={`rounded-2xl border border-slate-200/15 bg-[#1f2a3d]/80 p-5 transition hover:-translate-y-0.5 hover:border-amber-400/30 ${
        isCompact ? "" : "shadow-[0_20px_60px_-35px_rgba(196,162,74,0.28)]"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`relative overflow-hidden rounded-full ring-1 ring-amber-200/25 ${isCompact ? "h-14 w-14" : "h-20 w-20"}`}>
          {contributor.profileImage ? (
            <Image
              src={contributor.profileImage}
              alt={`${contributor.name} profile photo`}
              fill
              className="object-cover"
              sizes={isCompact ? "56px" : "80px"}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-amber-400/20 text-base font-bold text-slate-100">
              {contributor.avatarInitials}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 className={`font-bold text-stone-100 ${isCompact ? "text-base" : "text-lg"}`}>{contributor.name}</h3>
          <p className="mt-0.5 text-sm font-medium text-slate-100">{contributor.role}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {contributor.links.linkedin ? (
          <a
            href={contributor.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 transition hover:bg-amber-300/20"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            LinkedIn
          </a>
        ) : null}
        {contributor.links.github ? (
          <a
            href={contributor.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-100 transition hover:bg-amber-300/20"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}