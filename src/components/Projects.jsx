import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Selected work</h2>
        <span className="text-sm text-gray-500">
          {String(projects.length).padStart(2, "0")} project
          {projects.length > 1 && "s"}
        </span>
      </div>

      <div className="grid gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}