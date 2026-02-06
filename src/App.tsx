import { CircleChevronDown, GithubIcon, Globe, Palette, Wind, FileBraces, CodeXml, Cpu, Layers, Terminal, GitBranch, Server, Database, GraduationCap, Briefcase, Mail } from 'lucide-react';
import Project from './components/Project';
import type { Application } from './types/Application';
import { useState } from 'react';

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

  const education = [
    {school: "University of Maryland Global Campus", years: "2022 - 2024", degree: "Bachelor"},
    {school: "College of Southern Maryland", years: "2020 - 2022", degree: "Associate"}
  ]

  const projects: Application[] = [
    {title: "Unpopular Exchange", description: "A web application for users to share, vote, and debate unpopular opinions and pet peeves.", skills: ["Next.js", "Tailwind", "Typescript", "Vercel", "Supabase"]},
    {title: "Indie Connect", description: "A web application for indie creators to connect with other users, form teams, and create their passion projects.", skills: ["Next.js", "Tailwind", "Typescript", "Vercel"]},
    {title: "Toon Track", description: "A web application for tracking and displaying Webtoons subscribers.", skills: ["Next.js", "Tailwind", "Typescript", "Python", "Vercel", "Supabase"]},
    {title: "QR Code Generator", description: <>A React.js extension of <a href="https://www.frontendmentor.io/solutions/qr-code-component-xixkp7hzyW" target="_blank" rel="noopener noreferrer" className="underline">Frontend Mentor's challenge</a>, turning the static design into an interactive QR code generator.</>, skills: ["React.js", "Tailwind", "Typescript"]}
  ]

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {setIsOpen(!isOpen);};

  return (
    <>
      <div className="bg-background/90 absolute inset-0"></div>
      <nav className={`bg-background/80 border-b border-border/40 ${isOpen ? "max-h-64" : "max-h-16"} sm:h-16 px-4 py-4 sm:py-0 flex flex-col sm:flex-row sm:items-center gap-6 sticky top-0 z-1 backdrop-blur-md overflow-hidden transition-all`}>
        <div className="flex items-center justify-between gap-4 flex-1">
          <div className="flex items-center gap-2">
            <img src="/project-portfolio/PresidentTree.png" className="h-8 w-auto rounded-sm border border-primary/20" />
            <span className="font-bold text-xl text-primary font-display">PresidentTree94</span>
          </div>
          <CircleChevronDown className={`h-6 w-auto min-w-6 sm:hidden cursor-pointer transition-transform ${isOpen ? "-rotate-180" : ""}`} onClick={toggleMenu} />
        </div>
        <div className="text-sm font-medium flex flex-col sm:flex-row sm:items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Projects</a>
          <button className="bg-primary text-background font-tech px-3 py-2 rounded-md shadow-lg text-xs transition-transform hover:-translate-y-0.5">Contact Me</button>
        </div>
      </nav>
      <main className="p-12 lg:p-18 max-w-6xl m-auto space-y-24 flex flex-col items-center overflow-hidden">
        <section className="flex flex-col-reverse md:flex-row items-center gap-14 lg:gap-20">
          <div className="space-y-6 flex flex-col text-center md:text-left items-center md:items-start w-full @container">
            <span className="block w-fit uppercase bg-primary/5 rounded-md py-0.5 px-2.5 text-xs font-semibold text-primary font-tech border border-primary/20">Open for work</span>
            <h1 className="hidden @xs:inline text-4xl sm:text-5xl lg:text-6xl">Hi, I'm PresidentTree94<span className="text-primary animate-pulse">.</span></h1>
            <h1 className="@xs:hidden text-4xl">Hi, I'm President<wbr/>Tree94<span className="text-primary animate-pulse">.</span></h1>
            <p className="text-lg">I build web apps with React.js, Next.js, Tailwind, and Typescript. Good at turning ideas into working code. Always open to interesting projects or full-time roles.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <button className="bg-primary text-background py-3 px-8 rounded-md shadow-xl transition-transform hover:-translate-y-1">View Projects</button>
              <a href="https://github.com/PresidentTree94" target="_blank" rel="noopener noreferrer" className="font-tech py-3 px-8 rounded-md border border-primary/20 text-dark-primary shadow-xs flex items-center gap-2 transition-color hover:bg-primary/5"><GithubIcon className="h-4 w-auto" />GitHub</a>
            </div>
          </div>
          <img src="/project-portfolio/PresidentTree.png" className="w-52 lg:w-73 h-auto rounded-2xl border-4 border-background shadow-2xl rotate-3 transition-transform hover:scale-105 duration-500" />
        </section>
        <section id="skills" className="text-center scroll-mt-75 sm:scroll-mt-28">
          <h2 className="text-3xl mb-2">What I Work With</h2>
          <p>The tools I've learned and the ones I'm diving deeper into.</p>
          <div className="card p-8 shadow-sm mt-8 flex flex-wrap justify-center gap-3 text-sm font-tech font-semibold">
            {skills.map((s, index) =>
              <div key={index} className="px-4 py-2 bg-secondary text-card rounded-md flex items-center gap-2 transition-all hover:bg-primary hover:scale-110 cursor-default"><s.icon className="h-4 w-auto" />{s.text}</div>
            )}
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl flex items-center gap-2 mb-8"><GraduationCap className="h-6 w-auto text-primary" />Education</h2>
            <div className="border-l-2 border-primary/20 space-y-8">
              {education.map((edu, index) =>
                <div key={index} className="relative group pl-8">
                  <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary top-1 left-0 -translate-x-1/2 transition-transform group-hover:scale-125"></div>
                  <h3 className="text-lg transition-colors group-hover:text-primary">{edu.school}</h3>
                  <p className="font-tech text-sm mb-2">{edu.years}</p>
                  <p>{edu.degree} of Science in Computer Science</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-2xl flex items-center gap-2 mb-8"><Briefcase className="h-6 w-auto text-primary" />Experience</h2>
            <div className="border-2 border-dashed border-border/60 rounded-xl shadow p-8 flex flex-col items-center text-center transition-colors hover:border-primary/40 cursor-default">
              <div className="h-12 bg-black aspect-square flex items-center justify-center rounded-full bg-border/50 mb-4">
                <Briefcase className="h-6 w-auto" />
              </div>
              <h3 className="text-lg font-semibold">Fresh in the Game</h3>
              <p className="text-sm">No paid gigs yet, but plenty of projects and a solid foundation. Let's build something cool.</p>
              <a href="/project-portfolio/MyResume.pdf" download className="text-xs font-medium text-dark-primary border border-dark-primary rounded-md px-3 py-2 mt-6 transition-colors hover:text-background hover:bg-primary hover:border-primary">Download Resume</a>
            </div>
          </div>
        </section>
        <section id="projects" className="scroll-mt-75 sm:scroll-mt-28">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <h2 className="text-3xl mb-2">Featured Projects</h2>
              <p>Selected works from my portfolio.</p>
            </div>
            {/*<button className="text-sm font-medium flex items-center gap-2 py-2 px-4 text-primary rounded-md transition-colors hover:bg-primary/10">View all projects<ExternalLink className="h-4 w-auto" /></button>*/}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {projects.map((p, index) => <Project key={index} data={p} />)}
          </div>
        </section>
        <section className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 transition-transform group-hover:scale-105 duration-1000">
            <img src="/project-portfolio/ForestLandscapeBanner.png" className="object-cover object-center w-full h-full opacity-40" />
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
          </div>
          <div className="text-white flex flex-col items-center gap-6 text-center relative p-12 md:p-24">
            <h2 className="text-4xl sm:text-5xl text-white">Got a project?</h2>
            <p className="font-medium sm:w-3/4 text-lg">I'm open to freelance work, contract gigs, and full-time roles. Send me an email or hit me up on GitHub.</p>
            <button className="px-8 py-4 bg-white text-primary rounded-md text-sm font-bold flex items-center gap-4 transition-transform hover:scale-110 duration-400"><Mail className="h-5 w-auto" />Get in Touch</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
