import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Hi, I'm <span className="text-primary">Mostima</span> 👋
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
              Full Stack Developer / Open Source Enthusiast
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
              专注于构建高性能、美观且用户体验良好的 Web 应用。热衷于探索前沿技术，并在开源社区贡献力量。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/20 transition-all duration-300" asChild>
              <a href="#projects">查看我的项目</a>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-accent/10 rounded-full px-8 transition-all duration-300" asChild>
              <a href="#contact">联系我</a>
            </Button>
          </div>
        </div>

        {/* Right Avatar Placeholder */}
        <div className="flex justify-center md:justify-end items-center order-first md:order-last">
          <div className="relative group">
            {/* Gradient Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
            
            {/* Avatar Circle */}
            <div className="gradient-border p-1">
              <div className="w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full bg-card flex items-center justify-center overflow-hidden border border-border">
                <img 
                  src="https://miaoda-conversation-file.cdn.bcebos.com/user-ai6dhrnwdmo0/conv-astop2qifnr4/20260407/file-asviiyqws83k.jpg" 
                  alt="Mostima Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Decorative Elements (Optional, but adds to modern look) */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
