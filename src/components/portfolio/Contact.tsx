import { Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CONTACT_INFO = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/akashi51' },
  { icon: Mail, label: 'Email', href: '/email' },
];

export function Contact() {
  return (
    <footer id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 space-y-16">
        <div className="flex flex-col space-y-6 items-center text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              联系我
            </h2>
            <p className="text-lg text-muted-foreground">
              欢迎交流合作，随时联系
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {CONTACT_INFO.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-lg font-medium text-foreground hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-3 bg-background border border-border rounded-xl group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground tracking-tight">
            © 2026 Mostima. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors h-auto p-0" asChild>
              <a href="#about">关于我</a>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors h-auto p-0" asChild>
              <a href="#skills">技能</a>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors h-auto p-0" asChild>
              <a href="#projects">项目</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
