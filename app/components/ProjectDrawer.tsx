"use client";

import { X, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

interface Project {
  title: string;
  description: string;
  expandedDescription: string;
  status: string | null;
  rank: string | null;
  links: {
    code: string | null;
    demo: string | null;
    kaggle: string | null;
  };
  techStack: string[];
  architecture: string;
  challenges: string;
  outcomes: string;
  icon: React.ComponentType<{ className?: string }>;
  theme: {
    bg: string;
    text: string;
    border: string;
    tagBg: string;
    tagText: string;
    tagBorder: string;
  };
}

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const KaggleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.312" />
  </svg>
);

export default function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!project) return null;

  const IconComponent = project.icon;
  const hasCode = project.links.code;
  const hasDemo = project.links.demo && project.links.demo !== "#";
  const hasKaggle = project.links.kaggle;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-[600px] lg:w-[700px] bg-white dark:bg-slate-950 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className={`p-2 ${project.theme.bg} rounded-lg ${project.theme.text}`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <h2 id="drawer-title" className="text-xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-8">
          {/* Status/Rank Badge */}
          {(project.status || project.rank) && (
            <div className="flex gap-2">
              <span className={`text-sm font-medium px-3 py-1.5 ${project.theme.tagBg} ${project.theme.tagText} rounded-lg border ${project.theme.tagBorder} ${project.status === "In Progress" ? "animate-pulse" : ""}`}>
                {project.status || project.rank}
              </span>
            </div>
          )}

          {/* Short Description */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide mb-2">
              Overview
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Expanded Description */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide mb-2">
              About This Project
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.expandedDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide mb-2">
              Architecture & Approach
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide mb-2">
              Key Challenges
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide mb-2">
              Outcomes & Impact
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.outcomes}
            </p>
          </div>

          {/* Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wide mb-3">
              Project Links
            </h3>
            <div className="flex flex-col gap-3">
              {hasCode && (
                <a
                  href={project.links.code || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium transition-colors"
                >
                  <Github className="w-5 h-5" /> View Source Code
                </a>
              )}
              {hasDemo && (
                <a
                  href={project.links.demo || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
                >
                  <ExternalLink className="w-5 h-5" /> View Live Demo
                </a>
              )}
              {hasKaggle && (
                <a
                  href={project.links.kaggle || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition-colors"
                >
                  <KaggleIcon className="w-5 h-5" /> View on Kaggle
                </a>
              )}
              {!hasCode && !hasDemo && !hasKaggle && (
                <div className="text-center py-3 px-4 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-400">
                  Links coming soon...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
