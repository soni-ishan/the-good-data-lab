import React from 'react';
import { Github, MessageSquare, ExternalLink, Users, Sparkles, Terminal, Linkedin, User, Database } from 'lucide-react';
import { siteConfig, projects, team } from './data';

// Kaggle icon component
const KaggleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.312" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Global background elements */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      
      {/* Gradient orbs - positioned throughout the page */}
      <div className="fixed top-0 left-0 w-200 h-200 bg-indigo-600/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{ transform: 'translate(-30%, -30%)' }} />
      <div className="fixed top-1/3 right-0 w-150 h-150 bg-cyan-500/15 rounded-full blur-[100px] animate-float-delayed pointer-events-none" style={{ transform: 'translate(30%, 0)' }} />
      <div className="fixed bottom-0 left-1/4 w-125 h-125 bg-purple-600/15 rounded-full blur-[100px] animate-float pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Terminal className="w-8 h-8 text-indigo-400" />
              <span className="font-bold text-2xl text-slate-100">The Good Data Lab</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#projects" className="text-lg text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#about" className="text-lg text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#team" className="text-lg text-slate-300 hover:text-white transition-colors">Team</a>
              <a 
                href={siteConfig.discord}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                <MessageSquare className="w-5 h-5" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
        {/* Floating code elements - left side */}
        <div className="absolute left-4 lg:left-16 top-1/4 text-indigo-500/20 code-bracket text-6xl lg:text-8xl animate-drift pointer-events-none select-none">
          {'</>'}
        </div>
        <div className="absolute left-8 lg:left-32 top-2/3 text-cyan-500/15 code-bracket text-4xl lg:text-6xl animate-drift pointer-events-none select-none" style={{ animationDelay: '-2s' }}>
          {'{ }'}
        </div>
        
        {/* Floating code elements - right side */}
        <div className="absolute right-4 lg:right-16 top-1/3 text-purple-500/20 code-bracket text-5xl lg:text-7xl animate-drift pointer-events-none select-none" style={{ animationDelay: '-3s' }}>
          {'( )'}
        </div>
        <div className="absolute right-8 lg:right-28 top-3/4 text-indigo-500/15 code-bracket text-3xl lg:text-5xl animate-drift pointer-events-none select-none" style={{ animationDelay: '-1s' }}>
          {'[ ]'}
        </div>
        
        {/* Data flow lines */}
        <div className="absolute left-1/4 top-20 bottom-20 w-px bg-linear-to-b from-transparent via-indigo-500/20 to-transparent pointer-events-none hidden lg:block" />
        <div className="absolute right-1/4 top-32 bottom-32 w-px bg-linear-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none hidden lg:block" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Accepting new members
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Code. Data. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Community.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A chill, beginner-friendly space for undergrads to explore Data Science & AI. 
            We build projects that do good, share ideas, and learn together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={siteConfig.discord}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-xl shadow-white/10 hover:scale-105"
            >
              <MessageSquare className="w-6 h-6" />
              Join the Server
            </a>
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-10 py-4 bg-slate-800/80 text-white rounded-xl text-lg font-semibold hover:bg-slate-700 border border-slate-600 transition-all hover:scale-105"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Values */}
      <section className="py-20 relative">
        {/* Data nodes visualization */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Connection lines */}
            <line x1="20" y1="30" x2="50" y2="50" stroke="url(#lineGradient)" strokeWidth="0.2" />
            <line x1="50" y1="50" x2="80" y2="30" stroke="url(#lineGradient)" strokeWidth="0.2" />
            <line x1="30" y1="70" x2="50" y2="50" stroke="url(#lineGradient)" strokeWidth="0.2" />
            <line x1="50" y1="50" x2="70" y2="70" stroke="url(#lineGradient)" strokeWidth="0.2" />
            {/* Nodes */}
            <circle cx="20" cy="30" r="1" fill="#818cf8" className="animate-pulse" />
            <circle cx="50" cy="50" r="1.5" fill="#22d3ee" className="animate-pulse" />
            <circle cx="80" cy="30" r="1" fill="#a78bfa" className="animate-pulse" />
            <circle cx="30" cy="70" r="0.8" fill="#818cf8" className="animate-pulse" />
            <circle cx="70" cy="70" r="0.8" fill="#22d3ee" className="animate-pulse" />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative z-10">
          <div className="p-6">
            <div className="bg-indigo-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 text-indigo-400">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Beginner Friendly</h3>
            <p className="text-slate-400 text-base leading-relaxed">No experience? No problem. We learn by doing, together.</p>
          </div>
          <div className="p-6">
            <div className="bg-cyan-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 text-cyan-400">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Real Data</h3>
            <p className="text-slate-400 text-base leading-relaxed">From Kaggle competitions to geospatial analysis.</p>
          </div>
          <div className="p-6">
            <div className="bg-purple-500/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 text-purple-400">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Build for Good</h3>
            <p className="text-slate-400 text-base leading-relaxed">Projects that solve real problems and help the community.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        {/* Decorative terminal window in background */}
        <div className="absolute right-0 top-1/4 w-64 h-48 bg-slate-900/50 rounded-lg border border-slate-800/50 overflow-hidden pointer-events-none opacity-30 hidden xl:block">
          <div className="h-6 bg-slate-800/50 flex items-center gap-1.5 px-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="p-3 font-mono text-xs text-indigo-400/50">
            <div>$ python train.py</div>
            <div className="text-cyan-400/50">Loading data...</div>
            <div className="text-green-400/50">Epoch 1/100</div>
            <div className="text-slate-500/50">━━━━━━━━ 45%</div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <p className="text-slate-400 mt-2">What we&apos;ve been building</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const hasCode = project.links.code;
              const hasDemo = project.links.demo && project.links.demo !== "#";
              const hasKaggle = project.links.kaggle;
              
              return (
                <div key={index} className={`group bg-slate-900 border border-slate-800 rounded-xl p-6 ${project.theme.border} transition-all hover:-translate-y-1`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 ${project.theme.bg} rounded-lg ${project.theme.text}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {(project.status || project.rank) && (
                      <span className={`text-xs font-medium px-2 py-1 ${project.theme.tagBg} ${project.theme.tagText} rounded border ${project.theme.tagBorder} ${project.status === "In Progress" ? "animate-pulse" : ""}`}>
                        {project.status || project.rank}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-base mb-6 h-20 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-3 mt-auto">
                    {hasCode && (
                      <a href={project.links.code || "#"} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-base font-medium transition-colors">
                        <Github className="w-5 h-5" /> Code
                      </a>
                    )}
                    {hasDemo && (
                      <a href={project.links.demo || "#"} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-base font-medium transition-colors">
                        <ExternalLink className="w-5 h-5" /> Demo
                      </a>
                    )}
                    {hasKaggle && (
                      <a href={project.links.kaggle || "#"} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-base font-medium transition-colors">
                        <KaggleIcon className="w-5 h-5" /> Kaggle
                      </a>
                    )}
                    {!hasCode && !hasDemo && !hasKaggle && (
                      <span className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800/50 text-slate-500 text-base font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Who We Are & Team Section */}
      <section id="about" className="py-24 px-4 relative">
        {/* Code decoration - left */}
        <div className="absolute left-8 top-1/4 text-slate-800 code-bracket text-4xl pointer-events-none select-none hidden lg:block">
          {'/**'}
        </div>
        <div className="absolute left-8 bottom-1/4 text-slate-800 code-bracket text-4xl pointer-events-none select-none hidden lg:block">
          {'*/'}
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              The Good Data Lab was born from a shared realization: the best way to learn Data Science is to build.
              <br /><br />
              We are a collective of four undergraduates who moved beyond the classroom to tackle global challenges from biomass estimation to agentic AI. 
              What started as a simple idea is now a launchpad for innovation, bridging the gap between academic theory and real-world impact.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white mb-10 text-center" id="team">Meet the Core Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className={`bg-slate-950 p-6 rounded-xl border border-slate-800 text-center ${member.theme.border} transition-colors group`}>
                <div className={`w-20 h-20 mx-auto ${member.theme.bg} rounded-full flex items-center justify-center ${member.theme.text} mb-4 group-hover:scale-110 transition-transform`}>
                  <User className="w-8 h-8" />
                </div>
                <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                <p className={`${member.theme.text} text-base mb-4`}>{member.role}</p>
                <div className="flex justify-center gap-4">
                  {member.links.linkedin && member.links.linkedin !== "#" ? (
                    <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  ) : (
                    <button type="button" className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  )}
                  {member.links.github && member.links.github !== "#" ? (
                    <a href={member.links.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                  ) : (
                    <button type="button" className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 relative">
        {/* Gradient line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-slate-700 code-bracket text-sm mb-4">{'// end of file'}</div>
          <p className="text-slate-400 text-base">
            © {new Date().getFullYear()} The Good Data Lab
          </p>
        </div>
      </footer>
    </main>
  );
}