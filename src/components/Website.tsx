import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconMap } from "../data/icons";
import DOMPurify from "dompurify";

type Project = {
  title: string;
  description: string;
  skills: string[];
  screenshot: string;
  isGitHub: boolean;
  isLive: boolean | string;
}

function Website({ data }: { data: Project }) {
  const name = data.title.split(" ").join("-");
  const github = "https://github.com/PresidentTree94/" + name;
  const live = typeof data.isLive === "boolean" ? "https://presidenttree94.github.io/" + name + "/" : data.isLive;
  const screenshot = data.screenshot ? data.screenshot : "https://placehold.co/600x323?text=" + data.title.toUpperCase().split(" ").join("+");

  return (
    <div className="item bg-card-bg rounded-2xl overflow-hidden flex flex-col shadow-lg">
      <img src={screenshot} className="aspect-4627/2500 object-cover object-top border-disable-fg border rounded-t-2xl"/>
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3>{data.title}</h3>
          <p className="text-subtext-fg text-sm mt-2" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description, {ADD_ATTR: ['target']})}}></p>
        </div>
        <div>
          <div className="flex flex-wrap gap-3 my-4">
            {data.skills.map((item) => (
              <FontAwesomeIcon icon={IconMap[item]} className="h-7! w-auto! text-accent-dark" />
            ))}
          </div>
          <div className="flex gap-3">
            {data.isLive != false && <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-accent-dark"><FontAwesomeIcon icon={faUpRightFromSquare} className="h-6! w-auto!" /></a>}
            {data.isGitHub && <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-dark"><FontAwesomeIcon icon={faGithub} className="h-6! w-auto!" /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;