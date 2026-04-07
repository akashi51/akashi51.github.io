import { Badge } from '@/components/ui/badge';

const MAIN_SKILLS = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'
];

const TOOLS = [
  'Git', 'Docker', 'VS Code', 'Figma', 'PostgreSQL', 'Redis'
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col space-y-12 items-center text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              技能 & 工具
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            {/* Main Skills */}
            {MAIN_SKILLS.map((skill) => (
              <Badge
                key={skill}
                className="bg-primary text-primary-foreground text-sm py-2 px-6 rounded-full hover:scale-105 transition-transform duration-200 shadow-md shadow-primary/10 border-transparent"
              >
                {skill}
              </Badge>
            ))}

            {/* Tool Skills */}
            {TOOLS.map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="border-secondary text-secondary text-sm py-2 px-6 rounded-full hover:scale-105 transition-transform duration-200 bg-secondary/5"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
