import { content } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section id="contact">
      <div className="card text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {content.contact.title}
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          {content.contact.description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={content.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
          <a href={`mailto:${content.contact.email}`} className="btn-primary">
            Email
          </a>
        </div>
      </div>
    </Section>
  );
}