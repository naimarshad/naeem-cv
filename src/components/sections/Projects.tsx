import { content } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {content.projects.map((project) => (
          <div key={project.name} className="card">
            <h3 className="text-xl font-semibold mb-3 text-white">{project.name}</h3>
            <p className="text-text-secondary mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}