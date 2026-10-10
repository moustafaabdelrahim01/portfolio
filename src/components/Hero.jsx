import { Code2, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="max-w-3xl mx-auto px-4 pt-16 pb-12">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-accent">
          <Code2 size={16} />
        </span>
        <span className="text-sm uppercase tracking-wide text-accent">
          Junior Front-end Developer
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
        Building for the web, one project at a time.
      </h1>

      <p className="mt-4 text-gray-400 text-lg">
        I turn ideas into responsive, accessible web experiences using React and
        modern CSS.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#work"
          className="px-5 py-3 rounded-lg bg-accent text-bg font-medium hover:opacity-90 transition"
        >
          Explore my work
        </a>
        <a
          href="https://github.com/moustafaabdelrahim01"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-lg border border-line flex items-center gap-1 hover:border-accent transition"
        >
          GitHub <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}