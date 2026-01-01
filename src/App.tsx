import { GithubIcon, Globe, Palette, Wind, FileBraces, CodeXml, Cpu, Layers, Terminal, GitBranch, Server, Database, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';
import Project from './components/Project';

function App() {

  const skills = [
    {text: "HTML", icon: Globe},
    {text: "CSS", icon: Palette},
    {text: "Tailwind", icon: Wind},
    {text: "Javascript", icon: FileBraces},
    {text: "Typescript", icon: CodeXml},
    {text: "React.js", icon: Cpu},
    {text: "Next.js", icon: Layers},
    {text: "Python", icon: Terminal},
    {text: "Git", icon: GitBranch},
    {text: "Vercel", icon: Server},
    {text: "Supabase", icon: Database}
  ];

  return (
    <>
      <div className="bg-background/90 absolute inset-0 pointer-events-none"></div>
      <nav className="bg-background/80 border-b border-border/40 h-16 flex items-center justify-between px-4 sticky top-0 z-1 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <img src="/project-portfolio/PresidentTree.png" className="h-8 w-auto rounded-sm border border-primary/20" />
          <span className="font-bold text-xl text-primary font-display">PresidentTree94</span>
        </div>
        <div className="text-sm font-medium flex items-center gap-6">
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <button className="bg-primary text-background font-tech px-3 py-2 rounded-md shadow-lg text-xs">Contact Me</button>
        </div>
      </nav>
      <main className="p-24 max-w-6xl m-auto space-y-24">
        <section className="flex items-center gap-24">
          <div className="space-y-6">
            <span className="block w-fit uppercase bg-primary/5 rounded-md py-0.5 px-2.5 text-xs font-semibold text-primary font-tech border border-primary/20">Open for work</span>
            <h1 className="text-6xl">Hey, I'm PresidentTree94<span className="text-primary animate-pulse">.</span></h1>
            <p className="text-lg">I build web apps with React.js, Next.js, Tailwind, and Typescript. Good at turning ideas into working code. Always open to interesting projects or full-time roles.</p>
            <div className="flex gap-4 text-sm font-medium">
              <button className="bg-primary text-background py-3 px-8 rounded-md shadow-xl">View Projects</button>
              <button className="font-tech py-3 px-8 rounded-md border border-primary/20 text-dark-primary shadow-xs flex items-center gap-2"><GithubIcon className="h-4 w-auto" />GitHub</button>
            </div>
          </div>
          <img src="/project-portfolio/PresidentTree.png" className="h-80 w-auto rounded-2xl border-4 border-background shadow-2xl rotate-3" />
        </section>
        <section className="text-center">
          <h2 className="text-3xl mb-2">What I Work With</h2>
          <p>The tools I've learned and the ones I'm diving deeper into.</p>
          <div className="card p-8 shadow-sm mt-8 flex flex-wrap justify-center gap-3 text-sm font-tech font-semibold">
            {skills.map((s, index) => {
              const Icon = s.icon;
              return (
                <div key={index} className="px-4 py-2 bg-secondary text-card rounded-md flex items-center gap-2"><Icon className="h-4 w-auto" />{s.text}</div>
              );
            })}
          </div>
        </section>
        <section className="grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl flex items-center gap-2 mb-8"><GraduationCap className="h-6 w-auto text-primary" />Education</h2>
            <div className="border-l-2 border-primary/20 space-y-8">
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary top-1 left-0 -translate-x-1/2"></div>
                <h3 className="text-lg">University of Maryland Global Campus</h3>
                <p className="font-tech text-sm mb-2">2022 - 2024</p>
                <p>Bachelor of Science in Computer Science</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary top-1 left-0 -translate-x-1/2"></div>
                <h3 className="text-lg">College of Southern Maryland</h3>
                <p className="font-tech text-sm mb-2">2020 - 2022</p>
                <p>Associate of Science in Computer Science</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl flex items-center gap-2 mb-8"><Briefcase className="h-6 w-auto text-primary" />Experience</h2>
            <div className="border-2 border-dashed border-border/60 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <div className="h-12 bg-black aspect-square flex items-center justify-center rounded-full bg-border/50 mb-4">
                <Briefcase className="h-6 w-auto" />
              </div>
              <h3 className="text-lg font-semibold">Fresh in the Game</h3>
              <p className="text-sm">No paid gigs yet, but plenty of projects and a solid foundation. Let's build something cool.</p>
              <button className="text-xs font-medium text-dark-primary border border-dark-primary rounded-md px-3 py-1.5 mt-6">Download Resume</button>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl mb-2">Featured Projects</h2>
              <p>Selected works from my portfolio.</p>
            </div>
            <button className="text-sm font-medium flex items-center gap-2">View all projects<ExternalLink className="h-4 w-auto" /></button>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <Project />
            <Project />
            <Project />
          </div>
        </section>
        <section></section>
      </main>
    </>
  )
}

export default App
