import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { IconMap } from "../data/icons";

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
    <div className="item bg-card-bg p-6 rounded-2xl shadow-md">
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={IconMap[data.label]} className="h-7! w-auto! text-accent-light" />
        <h3>{data.label}</h3>
      </div>
      <div className="grid grid-cols-[repeat(5,min-content)] mt:grid-cols-[repeat(10,min-content)] gap-1 mt-4 mb-2">
        {Array.from({ length: 10 }, (_, i) => (
          <FontAwesomeIcon icon={faLeaf} key={i} className="h-6! w-auto!" style={{color: `${i < score ? "var(--color-accent-dark)" : "var(--color-disable-fg)"}`}} />
        ))}
      </div>
      <p className="text-sidetext-fg text-right text-sm">{score}/10</p>
    </div>
  );
}

export default Skill;