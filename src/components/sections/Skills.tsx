import { content } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {content.skills.map((category) => (
          <div key={category.category} className="card">
            <h3 className="text-lg font-semibold mb-4 text-accent">
              {category.category}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item} className="text-text-secondary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}