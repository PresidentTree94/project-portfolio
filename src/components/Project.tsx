function Project() {
  return (
    <div className="card shadow p-6">
      <h3 className="font-semibold text-xl">Title of Project</h3>
      <p className="text-sm mt-1.5 mb-6">Short description of project. No more than a sentence.</p>
      <div className="text-xs text-primary font-tech flex gap-2">
        <span className="py-1 px-2 rounded-sm bg-primary/10 border border-primary/10">Skill</span>
        <span className="py-1 px-2 rounded-sm bg-primary/10 border border-primary/10">Skill</span>
        <span className="py-1 px-2 rounded-sm bg-primary/10 border border-primary/10">Skill</span>
      </div>
    </div>
  );
}

export default Project;