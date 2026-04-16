import { content } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Experience</h2>
      <div className="space-y-5">
        {content.experience.map((exp) => (
          <div
            key={exp.company + exp.role}
            className="card border-l-4 border-l-accent"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <span className="text-sm text-accent font-medium px-3 py-1 bg-accent/10 rounded-full">
                {exp.period}
              </span>
            </div>
            <p className="text-accent mb-3">{exp.company}</p>
            <p className="text-text-secondary">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}