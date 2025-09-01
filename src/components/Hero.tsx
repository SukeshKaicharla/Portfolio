import { Button } from "@/components/ui/button";
import { ArrowDown, Cloud, Server, Code } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Cloud className="absolute top-20 left-20 w-8 h-8 text-primary/30 animate-float" />
        <Server className="absolute top-40 right-32 w-6 h-6 text-accent/30 animate-float" style={{ animationDelay: '2s' }} />
        <Code className="absolute bottom-40 left-1/4 w-10 h-10 text-primary-glow/20 animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10 animate-slide-up">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-pulse-glow">
              Sukesh Kaicharla
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              AWS & DevOps Engineer
            </h2>
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Turning cloud ideas into 
            <span className="text-primary font-semibold"> scalable solutions</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground hover:glow-primary transition-smooth px-8 py-4 text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:gradient-primary hover:text-primary-foreground transition-smooth px-8 py-4 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="pt-16">
            <button
              onClick={scrollToAbout}
              className="animate-bounce hover:text-primary transition-smooth"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Tech Stats */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-center">
        <div className="flex flex-wrap gap-8 text-center text-sm text-muted-foreground">
          <div>
            <div className="text-2xl font-bold text-primary">5+</div>
            <div>AWS Services</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">3+</div>
            <div>Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-glow">2</div>
            <div>Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;