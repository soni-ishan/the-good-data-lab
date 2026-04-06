import { Database, Code2, Terminal } from 'lucide-react';

export const siteConfig = {
  discord: "https://discord.gg/w4YuB5QY3u",
};

export const projects = [
  {
    title: "Course Compass",
    description: "A specialized chatbot for university CS students powered by a Neo4j Knowledge Graph.",
    expandedDescription: "Course Compass is an intelligent chatbot designed specifically for university Computer Science students. It leverages a Neo4j Knowledge Graph to understand course relationships, prerequisites, and academic pathways. Students can ask natural language questions about course selection, degree requirements, and academic planning.",
    status: "Completed",
    rank: null,
    links: {
      code: "https://github.com/simarpreet0037/CourseCompass",
      demo: "http://ec2-34-227-86-112.compute-1.amazonaws.com",
      kaggle: null
    },
    techStack: ["Neo4j", "Python", "LangChain", "FastAPI", "React", "AWS EC2"],
    architecture: "The system uses a Neo4j graph database to model course relationships and prerequisites. A LangChain-powered agent processes natural language queries and traverses the knowledge graph to provide contextual recommendations. The FastAPI backend serves the React frontend, deployed on AWS EC2.",
    challenges: "Modeling complex prerequisite relationships, handling ambiguous student queries, optimizing graph traversal performance",
    outcomes: "Successfully deployed chatbot helping CS students navigate their academic journey with intelligent course recommendations",
    icon: Database,
    theme: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
      border: "hover:border-indigo-500/50",
      tagBg: "bg-slate-800 dark:bg-slate-800",
      tagText: "text-slate-400 dark:text-slate-400",
      tagBorder: "border-transparent"
    }
  },
  {
    title: "CSIRO Image2Biomass Prediction",
    description: "Engineered a ConvNeXt-based Deep Learning pipeline to estimate vegetation biomass from satellite imagery.",
    expandedDescription: "Competed in the CSIRO Biomass Estimation challenge on Kaggle, developing a sophisticated computer vision pipeline to predict vegetation biomass from satellite imagery. Our solution combines state-of-the-art ConvNeXt architecture with custom data augmentation strategies to achieve competitive performance.",
    status: null,
    rank: "Ranked 2123rd",
    links: {
      code: null,
      demo: null,
      kaggle: "https://www.kaggle.com/competitions/csiro-biomass/leaderboard?search=Epoch"
    },
    techStack: ["PyTorch", "ConvNeXt", "Pandas", "NumPy", "Albumentations", "Weights & Biases"],
    architecture: "Implemented transfer learning with ConvNeXt-Base pretrained on ImageNet. Applied extensive data augmentation including random crops, rotations, and color jittering. Trained with AdamW optimizer using cosine annealing learning rate schedule. Ensemble predictions from multiple model checkpoints.",
    challenges: "Handling varying image resolutions, dealing with class imbalance in biomass distribution, preventing overfitting on limited training data",
    outcomes: "Achieved competitive ranking among 3000+ participants, demonstrating effective application of modern computer vision techniques to environmental science",
    icon: Code2,
    theme: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "hover:border-green-500/50",
      tagBg: "bg-green-900/30 dark:bg-green-900/30",
      tagText: "text-green-300 dark:text-green-300",
      tagBorder: "border-green-800"
    }
  },
  {
    title: "Microsoft AI Dev Days Hackathon",
    description: "Building an innovative AI-powered solution for the Microsoft AI Dev Days Hackathon.",
    expandedDescription: "Currently participating in Microsoft's AI Dev Days Hackathon, developing a cutting-edge application that leverages Azure AI services and modern frameworks. Our team is focused on creating a practical solution that demonstrates the power of AI in solving real-world problems.",
    status: "In Progress",
    rank: null,
    links: {
      code: null,
      demo: null,
      kaggle: null
    },
    techStack: ["Azure AI", "OpenAI GPT", "LangChain", "TypeScript", "Next.js", "Vercel"],
    architecture: "Details to be revealed upon project completion. Stay tuned for updates on our innovative approach!",
    challenges: "Integrating multiple Azure AI services, optimizing for cost and latency, creating an intuitive user experience",
    outcomes: "In development - check back soon for results!",
    icon: Terminal,
    theme: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "hover:border-blue-500/50",
      tagBg: "bg-blue-900/30 dark:bg-blue-900/30",
      tagText: "text-blue-300 dark:text-blue-300",
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