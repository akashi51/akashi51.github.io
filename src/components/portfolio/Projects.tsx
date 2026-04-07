import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PROJECTS = [
  {
    title: 'Modern Portfolio Template',
    description: '一个基于 React 和 Tailwind CSS 的现代个人主页模板，专为开发者打造。',
    tags: ['React', 'Tailwind', 'Shadcn/UI'],
    github: 'https://github.com',
    preview: 'https://github.com',
  },
  {
    title: 'Open Source Dashboard',
    description: '集成了 GitHub API 的开源项目监控仪表盘，实时跟踪 Star 和 Issue。',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    github: 'https://github.com',
    preview: 'https://github.com',
  },
  {
    title: 'AI Chat Component',
    description: '高度可定制的 AI 聊天组件，支持多种 LLM 模型接入和 Markdown 渲染。',
    tags: ['React', 'OpenAI', 'Zustand'],
    github: 'https://github.com',
    preview: 'https://github.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 space-y-16">
        <div className="flex flex-col space-y-4 items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            我的项目
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <Card
              key={idx}
              className="group border-border bg-card hover:border-primary hover:-translate-y-2 transition-all duration-300 rounded-xl overflow-hidden shadow-lg shadow-black/20 flex flex-col h-full"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary border-none text-[10px] uppercase font-bold tracking-wider"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t border-border flex justify-between">
                <Button variant="ghost" size="sm" className="hover:text-primary p-0 space-x-2 h-auto" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-tight">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary p-0 space-x-2 h-auto" asChild>
                  <a href={project.preview} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-tight">预览</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
