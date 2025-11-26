import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Skills from "./data/skills.json";
import Skill from "./components/Skill";
import Websites from "./data/projects.json";
import Website from "./components/Website";

function App() {
  return (
    <main className="bg-component-bg flex flex-col m-8 ll:m-12 p-8 ll:p-12 rounded-3xl shadow-xl min-w-64 max-w-224">
      <section className="flex flex-col tl:flex-row text-center tl:text-left items-center gap-8 ll:gap-12">
        <img src="/project-portfolio/PresidentTree.png" className="rounded-full w-40 border-4 border-solid border-accent-light shadow-lg animate-pulse" />
        <article>
          <p className="text-2xl font-medium text-accent-light">Hello, I'm</p>
          <h1 className="text-5xl tl:text-7xl font-bold mt-2 mb-4">President<wbr/>Tree94</h1>
          <p className="text-lg tl:text-xl wrap-pretty">A junior developer with a passion for building beautiful and functional digital experiences.</p>
        </article>
      </section>
      <section>
        <h2>Skills</h2>
        <article className="grid-layout">
          <i className="col-span-full text-center">Reference the <a href="https://github.com/PresidentTree94/project-portfolio" target="_blank" rel="noopener noreferrer">README</a> for the score breakdown.</i>
          {Skills.map((item) => (
            <Skill data={item} />
          ))}
        </article>
      </section>
      <section>
        <h2>Education</h2>
        <article className="flex flex-col gap-4 mt-8">
          <div className="bg-card-bg p-6 rounded-2xl flex flex-col tl:flex-row justify-between tl:items-center gap-2 shadow-md">
            <div>
              <h3>University of Maryland Global Campus</h3>
              <p className="text-subtext-fg">Bachelor of Science in Computer Science</p>
            </div>
            <p className="text-sidetext-fg">2022 - 2024</p>
          </div>
          <div className="bg-card-bg p-6 rounded-2xl flex flex-col tl:flex-row justify-between tl:items-center gap-2 shadow-md">
            <div>
              <h3>College of Southern Maryland</h3>
              <p className="text-subtext-fg">Associate of Science in Computer Science</p>
            </div>
            <p className="text-sidetext-fg">2020 - 2022</p>
          </div>
        </article>
      </section>
      <section>
        <h2>Projects</h2>
        <article className="grid-layout">
          {Websites.map((item) => (
            <Website data={item} />
          ))}
        </article>
      </section>
      <section>
        <h2>Contact</h2>
        <p className="my-8 text-center text-lg tl:text-xl">I'm always open to new opportunities. Let's connect and build something great together.</p>
        <article className="flex flex-wrap justify-center gap-8">
          <a href="https://github.com/PresidentTree94" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:hover:text-accent-dark hover:scale-110"><FontAwesomeIcon icon={faGithub} className="!w-auto text-5xl tl:text-6xl" /></a>
        </article>
      </section>
    </main>
  )
}

export default App
