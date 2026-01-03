import { ExternalLink } from "lucide-react";
import type { Application } from "../types/Application";

function Project({ data }:Readonly<{ data: Application }>) {
  return (
    <a href={"https://github.com/PresidentTree94/" + data.title.toLowerCase().split(" ").join("-")} target="_blank" rel="noopener noreferrer" className="card flex flex-col justify-between shadow p-6 group transition-all hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
      <div>
        <h3 className="font-semibold text-xl flex items-center justify-between transition-colors group-hover:text-primary">{data.title}<ExternalLink className="h-4 w-auto opacity-0 transition-opacity group-hover:opacity-100" /></h3>
        <p className="text-sm mt-1.5 mb-6">{data.description}</p>
      </div>
      <div className="text-xs text-primary font-tech flex gap-2 flex-wrap">
        {data.skills.map((s, index) => <span key={index} className="py-1 px-2 rounded-sm bg-primary/10 border border-primary/10">{s}</span>)}
      </div>
    </a>
  );
}

export default Project;