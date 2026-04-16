import { content } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about">
      <div className="card">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-lg text-text-secondary leading-relaxed">{content.about.summary}</p>
      </div>
    </Section>
  );
}