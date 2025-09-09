import Skills from "./data/skills.json";
import Skill from "./components/Skill";
import Websites from "./data/projects.json";
import Website from "./components/Website";

function App() {
  return (
    <main>
      <section id="top">
        <img src="/project-portfolio/PresidentTree.png" />
        <article>
          <p>Hello, I'm</p>
          <h1>President<wbr/>Tree94</h1>
          <p>A junior developer with a passion for building beautiful and functional digital experiences. I find inspiration in the growth of code and nature.</p>
        </article>
      </section>
      <section>
        <h2>Skills</h2>
        <article className="grid">
          <i>Reference the <a href="https://github.com/PresidentTree94/project-portfolio" target="_blank" rel="noopener noreferrer">README</a> for the score breakdown.</i>
          {Skills.map((item) => (
            <Skill data={item} />
          ))}
        </article>
      </section>
      <section id="education">
        <h2>Education</h2>
        <article>
          <div>
            <div>
              <h3>University of Maryland Global Campus</h3>
              <p>Bachelor of Science in Computer Science</p>
            </div>
            <p>2022 - 2024</p>
          </div>
          <div>
            <div>
              <h3>College of Southern Maryland</h3>
              <p>Associate of Science in Computer Science</p>
            </div>
            <p>2020 - 2022</p>
          </div>
        </article>
      </section>
      <section>
        <h2>Projects</h2>
        <article className="grid">
          {Websites.map((item) => (
            <Website data={item} />
          ))}
        </article>
      </section>
    </main>
  )
}

export default App
