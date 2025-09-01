import { Card } from "@/components/ui/card";
import { GraduationCap, Cloud, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glow-soft bg-gradient-secondary p-1">
                <img
                  src="/lovable-uploads/ba9d288b-a58a-41a6-b1bf-f1c6c0fb3c7f.png"
                  alt="Sukesh Kaicharla - DevOps Engineer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card border border-primary/20 rounded-lg p-3 animate-float glow-primary">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-accent/20 rounded-lg p-3 animate-float glow-accent" style={{ animationDelay: '2s' }}>
                <Zap className="w-6 h-6 text-accent" />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  From Mechanical Engineer to Cloud Architect
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-semibold">AWS & DevOps Engineer</span> with 
                  a unique journey from Mechanical Engineering to cloud computing. My transition into the world of 
                  cloud infrastructure and automation has been driven by curiosity and a love for solving complex problems.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With comprehensive training in <span className="text-accent font-semibold">AWS cloud services</span>, 
                  I specialize in building scalable infrastructure, implementing CI/CD pipelines, and optimizing 
                  deployment workflows. My hands-on experience spans across containerization, serverless computing, 
                  and infrastructure as code.
                </p>
              </div>
              
              {/* Key Skills Highlight */}
              <Card className="bg-gradient-secondary border-primary/20 p-6">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Core Expertise</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>AWS Cloud Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Docker & Kubernetes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <span>CI/CD Pipelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Linux Administration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Infrastructure as Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <span>Monitoring & Logging</span>
                  </div>
                </div>
              </Card>
              
              {/* Education Badge */}
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-primary/10">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div>
                  <h5 className="font-semibold text-foreground">Education</h5>
                  <p className="text-muted-foreground">Mechanical Engineering Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;