import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconMap } from "../data/icons";
import DOMPurify from "dompurify";
import styles from "./Website.module.css";

type Project = {
  title: string;
  description: string;
  skills: string[];
  isGitHub: boolean;
  isLive: boolean;
}

function Website({ data }: { data: Project }) {
  const name = data.title.split(" ").join("-");
  const github = "https://github.com/PresidentTree94/" + name;
  const live = "https://presidenttree94.github.io/" + name + "/";
  const screenshot = data.isGitHub ? "https://raw.githubusercontent.com/PresidentTree94/" + name + "/refs/heads/main/screenshot.png" : "https://placehold.co/600x323?text=" + data.title.toUpperCase().split(" ").join("+");

  return (
    <div className={`${styles.div} item`}>
      <img src={screenshot} />
      <div>
        <div>
          <h3>{data.title}</h3>
          <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description, {ADD_ATTR: ['target']})}}></p>
        </div>
        <div>
          <div>
            {data.skills.map((item) => (
              <FontAwesomeIcon icon={IconMap[item]} />
            ))}
          </div>
          <div>
            {data.isLive && <a href={live} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>}
            <a href={github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;