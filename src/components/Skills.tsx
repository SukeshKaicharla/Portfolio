import { Card } from "@/components/ui/card";
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Server, 
  Database, 
  Shield, 
  Code, 
  Monitor,
  Cog,
  Terminal,
  Settings,
  Workflow
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: Cloud, level: 90 },
      { name: "EC2 & Auto Scaling", icon: Server, level: 85 },
      { name: "S3 & CloudFront", icon: Database, level: 88 },
      { name: "VPC & Networking", icon: Shield, level: 82 }
    ]
  },
  {
    title: "DevOps & CI/CD",
    icon: Workflow,
    skills: [
      { name: "Jenkins", icon: Cog, level: 85 },
      { name: "GitHub Actions", icon: GitBranch, level: 80 },
      { name: "Docker", icon: Container, level: 88 },
      { name: "Maven", icon: Settings, level: 75 }
    ]
  },
  {
    title: "Programming & Tools",
    icon: Code,
    skills: [
      { name: "Linux", icon: Terminal, level: 90 },
      { name: "Git", icon: GitBranch, level: 88 },
      { name: "Java", icon: Code, level: 75 },
      { name: "SQL", icon: Database, level: 78 }
    ]
  },
  {
    title: "Monitoring & Security",
    icon: Monitor,
    skills: [
      { name: "CloudWatch", icon: Monitor, level: 82 },
      { name: "IAM & Security", icon: Shield, level: 85 },
      { name: "Cost Management", icon: Settings, level: 80 },
      { name: "Load Balancing", icon: Server, level: 78 }
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expertise across cloud platforms, DevOps tools, and modern development practices
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={category.title} className="bg-gradient-secondary border-primary/20 p-6 tech-card group">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
              </Card>
            ))}
          </div>
          
          {/* Tech Stack Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {[
                { name: "AWS", icon: Cloud },
                { name: "Docker", icon: Container },
                { name: "Git", icon: GitBranch },
                { name: "Linux", icon: Terminal },
                { name: "Jenkins", icon: Cog },
                { name: "Monitoring", icon: Monitor }
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 hover:opacity-100 transition-smooth cursor-pointer">
                  <tech.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;