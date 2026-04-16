import { content } from "@/data/content";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section className="min-h-[50vh] flex items-center">
      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-surface0 border-4 border-accent overflow-hidden flex-shrink-0">
          <img 
            src="/Muhammad-Naeem-Pic.jpg" 
            alt={content.hero.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <p className="text-accent font-medium mb-1">About Me</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-1">{content.hero.name}</h1>
          <p className="text-base md:text-lg text-white mb-2">{content.hero.title}</p>
          <p className="text-base text-text-secondary mb-4 max-w-xl">
            {content.hero.tagline}
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="btn-primary text-sm px-5 py-2">
              {content.hero.ctaProjects}
            </a>
            <a href="#contact" className="btn-secondary text-sm px-5 py-2">
              {content.hero.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}