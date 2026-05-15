import { Code2, Database, Terminal } from "lucide-react";

export type Contributor = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarInitials: string;
  links: {
    linkedin?: string;
    github?: string;
  };
};

export type ProjectArticleSection = {
  heading: string;
  content: string[];
  image: {
    src: string;
    alt: string;
    caption: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  status?: string;
  rank?: string;
  publishedAt: string;
  category: string;
  readTime: string;
  heroImage: string;
  links: {
    code?: string;
    demo?: string;
    kaggle?: string;
  };
  icon: typeof Database;
  theme: {
    bg: string;
    text: string;
    border: string;
    tagBg: string;
    tagText: string;
    tagBorder: string;
  };
  contributors: string[];
  article: {
    intro: string;
    sections: ProjectArticleSection[];
    outcomes: string[];
    nextSteps: string[];
  };
};

export const siteConfig = {
  name: "Epoch",
  tagline: "Code. Data. Community.",
  slogan: "Each project is an epoch — one full cycle of learning, building, and growing.",
  description:
    "A student-run initiative that builds practical data science and AI projects.",
  discord: "https://discord.gg/w4YuB5QY3u",
  navItems: [
    { label: "Home", href: "/#home" },
    { label: "Projects", href: "/#projects" },
    { label: "Contributors", href: "/#contributors" },
    { label: "About", href: "/#about" }
  ]
};

export const contributors: Contributor[] = [
  {
    id: "gurinayat-mangat",
    name: "Gurinayat Mangat",
    role: "Founder",
    bio: "Leads project strategy, mentors newcomers, and keeps the team focused on measurable outcomes.",
    avatarInitials: "GM",
    links: {
      linkedin: "https://www.linkedin.com/in/gurinayat-mangat/",
      github: "https://github.com/gkm2004"
    }
  },
  {
    id: "favour-ejike",
    name: "Favour Ejike",
    role: "Core Member",
    bio: "Builds model pipelines and helps turn rough ideas into working prototypes quickly.",
    avatarInitials: "FE",
    links: {
      linkedin: "https://ca.linkedin.com/in/favour-ejike-3a0a09278",
      github: "https://github.com/Amachivine"
    }
  },
  {
    id: "ishan-soni",
    name: "Ishan Soni",
    role: "Core Member",
    bio: "Owns experimentation and evaluation, with a strong focus on reproducibility.",
    avatarInitials: "IS",
    links: {
      linkedin: "https://linkedin.com/in/soni-ishan",
      github: "https://github.com/soni-ishan"
    }
  },
  {
    id: "simarpreet-singh-purba",
    name: "Simarpreet Singh Purba",
    role: "Core Member",
    bio: "Drives full-stack delivery and deployment for products the team can demo publicly.",
    avatarInitials: "SP",
    links: {
      linkedin: "https://linkedin.com/in/simarpreet-singh-purba-759113289/",
      github: "https://github.com/simarpreet0037"
    }
  }
];

export const projects: Project[] = [
  {
    slug: "course-compass",
    title: "Course Compass",
    shortDescription:
      "A specialized chatbot for university CS students powered by a Neo4j knowledge graph.",
    status: "Completed",
    publishedAt: "2026-03-14",
    category: "LLM Systems",
    readTime: "6 min read",
    heroImage: "/projects/course-compass.svg",
    links: {
      code: "https://github.com/simarpreet0037/CourseCompass",
      demo: "http://ec2-34-227-86-112.compute-1.amazonaws.com"
    },
    icon: Database,
    theme: {
      bg: "bg-amber-500/10",
      text: "text-amber-300",
      border: "hover:border-amber-400/50",
      tagBg: "bg-amber-950/60",
      tagText: "text-amber-200",
      tagBorder: "border-amber-700/40"
    },
    contributors: ["gurinayat-mangat",
      "favour-ejike",
      "ishan-soni",
      "simarpreet-singh-purba"],
    article: {
      intro:
        "Course Compass started as a frustration: students were spending more time searching for course advice than actually learning. We designed a graph-backed assistant that returns grounded answers instead of generic LLM output.",
      sections: [
        {
          heading: "Problem Context",
          content: [
            "Advising resources were fragmented across old PDFs, forum posts, and anecdotal advice.",
            "Students needed a way to quickly ask practical questions such as prerequisites, workload, and sequencing.",
            "Our goal was to build a dependable assistant that references structured relationships between courses."
          ],
          image: {
            src: "/projects/course-compass-graph.svg",
            alt: "Knowledge graph representation of university courses and prerequisites",
            caption: "Course relationships modeled in a graph to support retrieval with traceable context."
          }
        },
        {
          heading: "How We Built It",
          content: [
            "We built a Neo4j knowledge graph for prerequisite chains, domains, and program requirements.",
            "A retrieval layer fetches candidate nodes before passing context to the LLM.",
            "The UI highlights why an answer was produced, giving users confidence in recommendations."
          ],
          image: {
            src: "/projects/course-compass-ui.svg",
            alt: "Application interface showing a chat assistant and supporting citations",
            caption: "The assistant response panel includes contextual evidence and actionable recommendations."
          }
        }
      ],
      outcomes: [
        "Delivered a working demo with graph-backed question answering.",
        "Reduced ambiguity by attaching recommendations to explicit course relationships.",
        "Created a technical foundation for future advising and planning features."
      ],
      nextSteps: [
        "Integrate timetable and section-level data.",
        "Add user feedback loops to improve retrieval quality.",
        "Publish a transparent evaluation report with rubric-based scoring."
      ]
    }
  },
  {
    slug: "csiro-image2biomass",
    title: "CSIRO Image2Biomass Prediction",
    shortDescription:
      "A ConvNeXt-based pipeline to estimate vegetation biomass from high-resolution satellite imagery.",
    rank: "Ranked 2123rd",
    publishedAt: "2026-01-28",
    category: "Computer Vision",
    readTime: "7 min read",
    heroImage: "/projects/csiro-biomass.svg",
    links: {
      kaggle:
        "https://www.kaggle.com/competitions/csiro-biomass/leaderboard?search=The+Good+Data+Lab"
    },
    icon: Code2,
    theme: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
      border: "hover:border-emerald-400/50",
      tagBg: "bg-emerald-950/60",
      tagText: "text-emerald-200",
      tagBorder: "border-emerald-700/40"
    },
    contributors: ["gurinayat-mangat",
      "favour-ejike",
      "ishan-soni",
      "simarpreet-singh-purba"],
    article: {
      intro:
        "This project explored whether deep vision models could reliably estimate biomass from satellite imagery across varied terrain and lighting conditions.",
      sections: [
        {
          heading: "Dataset and Framing",
          content: [
            "The competition combined remote sensing imagery with biomass targets derived from field measurements.",
            "The major challenge was handling noise, inconsistent lighting, and significant geographic variability.",
            "We framed this as a robust regression task with strong data augmentation."
          ],
          image: {
            src: "/projects/csiro-data.svg",
            alt: "Satellite tiles sampled for biomass prediction",
            caption: "Representative satellite tiles used as input for the biomass estimation pipeline."
          }
        },
        {
          heading: "Modeling Strategy",
          content: [
            "ConvNeXt formed the baseline backbone due to its balance of expressiveness and training stability.",
            "We used fold-based validation and tuned losses to stabilize outlier-heavy predictions.",
            "Error analysis on biome slices informed targeted augmentation improvements."
          ],
          image: {
            src: "/projects/csiro-model.svg",
            alt: "Neural network training and validation workflow",
            caption: "A reproducible training workflow with fold-level validation and tracking."
          }
        }
      ],
      outcomes: [
        "Built an end-to-end reproducible training and evaluation pipeline.",
        "Documented tradeoffs in loss design for high-variance environmental data.",
        "Produced a ranked competition submission and post-mortem analysis."
      ],
      nextSteps: [
        "Experiment with multi-scale feature fusion.",
        "Incorporate geospatial priors to improve regional generalization.",
        "Create a model card describing limitations and operational risks."
      ]
    }
  },
  {
    slug: "microsoft-ai-dev-days",
    title: "Microsoft AI Dev Days Hackathon",
    shortDescription:
      "PRism is an agentic pre-deployment risk gate that won the Grand Prize in the Agentic DevOps category at Microsoft AI Dev Days 2026.",
    status: "Grand Prize Winner",
    publishedAt: "2026-05-01",
    category: "Hackathon",
    readTime: "5 min read",
    heroImage: "/projects/ai-dev-days.svg",
    links: {
      code: "https://github.com/soni-ishan/PRism/",
      demo: "https://www.youtube.com/watch?v=3jAxC7I3zYk"
    },
    icon: Terminal,
    theme: {
      bg: "bg-sky-500/10",
      text: "text-sky-300",
      border: "hover:border-sky-400/50",
      tagBg: "bg-sky-950/60",
      tagText: "text-sky-200",
      tagBorder: "border-sky-700/40"
    },
    contributors: [
      "gurinayat-mangat",
      "favour-ejike",
      "ishan-soni",
      "simarpreet-singh-purba"
    ],
    article: {
      intro:
        "PRism was built for one painful reality in software delivery: passing tests does not always mean a change is safe to deploy. During Microsoft AI Dev Days 2026, we designed and shipped an agentic Deployment Risk Intelligence system that evaluates pull requests before release and assigns a Deployment Confidence Score from 0 to 100. Our project won the Grand Prize in the Agentic DevOps category.",
      sections: [
        {
          heading: "The Problem We Targeted",
          content: [
            "Most CI pipelines are binary: they ask whether tests passed, then continue. They do not ask whether the changed files have a history of production incidents, whether test coverage dropped on new paths, or whether the team is deploying in a high-risk time window.",
            "That gap creates a false sense of safety. Teams merge with confidence, then face avoidable outages and emergency post-mortems.",
            "PRism reframes release gating as risk intelligence. Instead of pass or fail only, each pull request receives a structured multi-agent assessment, a confidence score, and a practical rollback playbook for maintainers.",
            "We ship two experiences: a GitHub Actions workflow that gates deployments automatically, and a VS Code extension so developers see the Deployment Confidence Score directly in their sidebar while coding."
          ],
            image: {
              src: "/projects/devdays-score.jpeg",
            alt: "PRism deployment confidence scoring concept",
            caption: "The problem: traditional CI gates miss the human and operational context needed for truly safe releases."
          }
        },
        {
          heading: "How PRism Works",
          content: [
            "When a pull request is opened or updated, prism-gate.yml triggers the orchestrator. Four specialist agents run in parallel and return structured JSON through a shared data contract: Diff Analyst, History Agent, Coverage Agent, and Timing Agent.",
            "The Diff Analyst flags risky code changes such as removed retry logic, missing error handling, schema-sensitive edits, or hardcoded secrets. The History Agent correlates touched files with incident history using semantic search over operational records.",
            "The Coverage Agent detects regressions and can trigger GitHub Copilot Coding Agent to generate missing tests and open a follow-up pull request. The Timing Agent evaluates deployment-window risk such as late-Friday merges, after-hours releases, and holiday-adjacent pushes.",
            "A Verdict Agent aggregates weighted signals and produces the Deployment Confidence Score, risk brief, and rollback playbook. Low-score pull requests are blocked by default until risk is reduced or a maintainer explicitly overrides."
          ],
          image: {
            src: "/projects/devdays-demo.svg",
            alt: "PRism demo flow with score output and risk summary for pull requests",
            caption: "The live demo showed end-to-end gating: parallel agent analysis, confidence scoring, and actionable mitigation in the PR thread."
          }
        }
      ],
      outcomes: [
        "Won the Grand Prize in the Agentic DevOps category at Microsoft AI Dev Days Hackathon 2026.",
        "Delivered a working multi-agent pre-deployment risk gate with governed scoring and explainable verdicts.",
        "Shipped a setup platform, CI workflow integration, and a VS Code extension experience for judges and developers.",
        "Demonstrated automatic mitigation flows, including Copilot-assisted missing-test generation and rollback guidance."
      ],
      nextSteps: [
        "Harden model and heuristic thresholds using production feedback from additional repositories.",
        "Expand policy controls so teams can customize risk weights, override rules, and compliance requirements by environment.",
        "Deepen incident intelligence with richer telemetry ingestion and stronger retrieval grounding across historical events.",
        "Continue productizing PRism as a reliable developer workflow for safe, high-velocity releases."
      ]
    }
  }
];

export const getContributorById = (id: string) =>
  contributors.find((contributor) => contributor.id === id);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);