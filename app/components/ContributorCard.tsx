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
      className={`rounded-2xl border border-emerald-200/15 bg-[#0b2118]/80 p-5 transition hover:-translate-y-0.5 hover:border-emerald-300/30 ${
        isCompact ? "" : "shadow-[0_20px_60px_-35px_rgba(52,211,153,0.45)]"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`relative overflow-hidden rounded-full ring-1 ring-emerald-200/25 ${isCompact ? "h-14 w-14" : "h-20 w-20"}`}>
          {contributor.profileImage ? (
            <Image
              src={contributor.profileImage}
              alt={`${contributor.name} profile photo`}
              fill
              className="object-cover"
              sizes={isCompact ? "56px" : "80px"}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-emerald-300/20 text-base font-bold text-emerald-100">
              {contributor.avatarInitials}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 className={`font-bold text-stone-100 ${isCompact ? "text-base" : "text-lg"}`}>{contributor.name}</h3>
          <p className="mt-0.5 text-sm font-medium text-emerald-200">{contributor.role}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {contributor.links.linkedin ? (
          <a
            href={contributor.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-100 transition hover:bg-emerald-300/20"
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
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-100 transition hover:bg-emerald-300/20"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}