import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { IconMap } from "../data/icons";
import styles from "./Skill.module.css";

type Checklist = {
  score: number;
  criteria: string;
}

type Tech = {
  label: string;
  checklist: Checklist[];
}

function Skill({ data }: { data: Tech }) {
  const score = data.checklist.reduce((sum, item) => sum + item.score, 0);

  return (
    <div className={`${styles.div} item`}>
      <div>
        <FontAwesomeIcon icon={IconMap[data.label]} />
        <h3>{data.label}</h3>
      </div>
      <div>
        {Array.from({ length: 10 }, (_, i) => (
          <FontAwesomeIcon icon={faLeaf} key={i} style={{color: `${i < score ? "var(--darklightColor)" : "var(--disableColor)"}`}} />
        ))}
      </div>
      <p>{score}/10</p>
    </div>
  );
}

export default Skill;