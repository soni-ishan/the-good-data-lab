import { Database, Code2, Terminal } from 'lucide-react';

export const siteConfig = {
  discord: "https://discord.gg/w4YuB5QY3u", // Replace with your actual invite link
};

export const projects = [
  {
    title: "Course Compass",
    description: "A specialized chatbot for university CS students powered by a Neo4j Knowledge Graph.",
    status: "Completed",
    rank: null,
    links: {
      code: "https://github.com/simarpreet0037/CourseCompass",
      demo: "#",
      kaggle: null
    },
    icon: Database,
    // Pre-defined styles for this card to ensure Tailwind picks them up
    theme: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
      border: "hover:border-indigo-500/50",
      tagBg: "bg-slate-800",
      tagText: "text-slate-400",
      tagBorder: "border-transparent"
    }
  },
  {
    title: "CSIRO Image2Biomass Prediction",
    description: "Engineered a ConvNeXt-based Deep Learning pipeline to estimate vegetation biomass from satellite imagery.",
    status: null,
    rank: "Ranked 2123rd",
    links: {
      code: null,
      demo: null,
      kaggle: "https://www.kaggle.com/competitions/csiro-biomass/leaderboard?search=The+Good+Data+Lab"
    },
    icon: Code2,
    theme: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "hover:border-green-500/50",
      tagBg: "bg-green-900/30",
      tagText: "text-green-300",
      tagBorder: "border-green-800"
    }
  },
  {
    title: "Microsoft AI Dev Days Hackathon",
    description: "Currently participating in the Microsoft AI Dev Days Hackathon.",
    status: "In Progress",
    rank: null,
    links: {
      code: null,
      demo: null,
      kaggle: null
    },
    icon: Terminal,
    theme: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "hover:border-blue-500/50",
      tagBg: "bg-blue-900/30",
      tagText: "text-blue-300",
      tagBorder: "border-blue-800"
    }
  }
];

export const team = [
  {
    name: "Gurinayat Mangat",
    role: "Founder",
    links: {
      linkedin: "https://www.linkedin.com/in/gurinayat-mangat/",
      github: "https://github.com/gkm2004"
    },
    theme: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
      border: "hover:border-indigo-500/30"
    }
  },
  {
    name: "Favour Ejike",
    role: "Core Member",
    links: {
      linkedin: "https://ca.linkedin.com/in/favour-ejike-3a0a09278",
      github: "https://github.com/Amachivine"
    },
    theme: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "hover:border-purple-500/30"
    }
  },
  {
    name: "Ishan Soni",
    role: "Core Member",
    links: {
      linkedin: "https://linkedin.com/in/soni-ishan",
      github: "https://github.com/soni-ishan"
    },
    theme: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      border: "hover:border-cyan-500/30"
    }
  },
  {
    name: "Simarpreet Singh Purba",
    role: "Core Member",
    links: {
      linkedin: "https://linkedin.com/in/simarpreet-singh-purba-759113289/",
      github: "https://github.com/simarpreet0037"
    },
    theme: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "hover:border-emerald-500/30"
    }
  }
];