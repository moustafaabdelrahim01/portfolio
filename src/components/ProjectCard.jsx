import { LayoutGrid } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-card border border-line rounded-2xl p-3 hover:border-accent transition">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl"
        />
      ) : (
        <div className="h-40 rounded-xl bg-bg flex items-center justify-center text-gray-500">
          <LayoutGrid />
        </div>
      )}

      <div className="p-2 pt-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-gray-400">{project.description}</p>
        <p className="mt-2 text-sm text-accent">{project.tech.join(" · ")}</p>

        <div className="mt-4 flex gap-4 text-sm">
          <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-accent">
            Live demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            Source code
          </a>
        </div>
      </div>
    </article>
  );
}