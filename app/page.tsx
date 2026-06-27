import Image from "next/image";

const skills = [
  { label: "Next.js", icon: "ri-nextjs-line" },
  { label: "Tailwind", icon: "ri-tailwind-css-line" },
  { label: "Typescript", icon: "ri-javascript-line" },
  { label: "Python", icon: "ri-terminal-line" },
  { label: "Git", icon: "ri-git-branch-line" },
  { label: "Vercel", icon: "ri-vercel-line" },
  { label: "Supabase", icon: "ri-supabase-line" },
  { label: "Sanity", icon: "ri-draft-line" }
];

const education = [
  {school: "University of Maryland Global Campus", years: "2022 - 2024", degree: "Bachelor"},
  {school: "College of Southern Maryland", years: "2020 - 2022", degree: "Associate"}
];

const projects = [
  {
    title: "karly.dev",
    description: "My website for my freelance Next.js web development.",
    skills: ["Next.js", "Tailwind", "Typescript", "Sanity"],
    link: ""
  },
  {
    title: "Form Utils",
    description: "A form-handling utility that turns objects and schema into a fully typed form system with parsing/update helpers.",
    skills: ["Typescript"],
    link: ""
  }
];

export default function Home() {
  return (
    <main className="mt-16 p-16 space-y-16">
      <section className="flex items-center gap-20">
        <div className="space-y-6 flex-1">
          <span className="inline-block uppercase bg-primary/5 rounded-md py-0.5 px-2.5 text-xs font-semibold text-primary font-tech border border-primary/20">Open for work</span>
          <h1 className="text-6xl text-primary">Hi, I'm PresidentTree94<span className="text-primary animate-pulse">.</span></h1>
          <p className="text-lg">I build web applications with Next.js, Tailwind, and Typescript. Good at turning ideas into working code. Always open to interesting remote projects or part-time roles.</p>
          <div className="flex gap-4 text-sm font-medium font-tech">
            <a href="https://www.linkedin.com/in/karly-sams-015889347/" target="_blank" rel="noopener noreferrer" className="py-2.5 px-8 flex items-center gap-2 bg-primary text-background shadow-xl rounded-md hover:-translate-y-1 transition-transform"><i className="ri-linkedin-box-line text-lg"></i>LinkedIn</a>
            <a href="https://github.com/PresidentTree94" target="_blank" rel="noopener noreferrer" className="py-2.5 px-8 flex items-center gap-2 border border-primary/20 text-dark-primary shadow-xs rounded-md hover:bg-primary/5 transition-colors"><i className="ri-github-line text-lg"></i>GitHub</a>
          </div>
        </div>
        <Image src="/PresidentTree.png" alt="Pixelated tree wearing a suit" width={1024} height={1024} className="w-72 h-auto rounded-2xl border-4 border-background shadow-2xl rotate-3 hover:scale-105 transition-transform duration-500" />
      </section>
      <section className="text-center">
        <h2 className="text-3xl mb-2">What I Work With</h2>
        <p>The tools I've learned and the ones I'm diving deeper into.</p>
        <div className="card p-8 shadow-sm mt-8 text-sm font-tech font-semibold flex justify-center flex-wrap gap-3">
          {skills.map((s, index) => (
            <div key={index} className="px-4 py-1.5 bg-secondary text-card rounded-md flex items-center gap-2 hover:bg-primary hover:scale-110 transition-all cursor-default"><i className={`${s.icon} text-lg`}></i>{s.label}</div>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl flex items-center gap-2 mb-8"><i className="ri-graduation-cap-line text-primary"></i>Education</h2>
          <div className="border-l-2 border-primary/20 space-y-8">
            {education.map((e, index) =>
              <div key={index} className="relative group pl-8">
                <div className="absolute w-4 h-4 rounded-full bg-background border-2 border-primary top-1 left-0 -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                <h3 className="text-lg font-bold group-hover:!text-primary transition-colors">{e.school}</h3>
                <p className="font-tech text-sm mb-2">{e.years}</p>
                <p>{e.degree} of Science in Computer Science</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl flex items-center gap-2 mb-8"><i className="ri-briefcase-3-line  text-primary"></i>Experience</h2>
          <div className="border-2 border-dashed border-border/60 rounded-xl shadow p-8 flex flex-col items-center text-center hover:border-primary/40 transition-colors">
            <div className="h-12 aspect-square flex items-center justify-center rounded-full bg-border/50 mb-4">
              <i className="ri-briefcase-3-line text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold">Fresh in the Game</h3>
            <p className="text-sm">No paid gigs yet, but plenty of projects and a solid foundation. Let's build something cool.</p>
            <a href="MyResume.pdf" download className="text-xs font-medium text-dark-primary border border-dark-primary rounded-md px-3 py-2 mt-6 hover:text-background hover:bg-primary hover:border-primary transition-colors">Download Resume</a>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl mb-2">Featured Projects</h2>
        <p>Selected works from my portfolio.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((p, index) => (
            <a key={index} href={p.link} target="_blank" rel="noopener noreferrer" className="card p-6 shadow group flex flex-col justify-between hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-xl group-hover:!text-primary transition-colors">{p.title}</h3>
                  <i className="ri-external-link-line text-lg opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <p className="text-sm mt-1.5 mb-6">{p.description}</p>
              </div>
              <div className="text-xs text-primary font-tech flex gap-2 flex-wrap">
                {p.skills.map((s, index) => <span key={index} className="py-1 px-2 rounded-sm bg-primary/10 border border-primary/10">{s}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="relative rounded-3xl overflow-hidden group">
        <Image src="/ForestLandscapeBanner.png" alt="Pixelated forest with a mountain" fill sizes="100%" className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
        <div className="flex flex-col items-center gap-6 text-center relative p-12 md:p-24">
          <h2 className="text-4xl sm:text-5xl !text-white">Got a project?</h2>
          <p className="font-medium text-lg text-white">I'm open to freelance work, contract gigs, and full-time roles. Send me an email or hit me up on GitHub.</p>
          <a href="mailto:karlysams1218@gmail.com" className="px-8 py-4 bg-white text-primary rounded-md text-sm font-bold flex items-center gap-4 hover:scale-110 transition-transform duration-400"><i className="ri-mail-line text-xl"></i>Get in Touch</a>
        </div>
      </section>
    </main>
  );
}
