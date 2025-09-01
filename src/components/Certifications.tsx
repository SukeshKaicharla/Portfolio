import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Clock } from "lucide-react";

const certifications = [
  {
    title: "AWS Solutions Architect Associate",
    code: "SAA-C03",
    provider: "Amazon Web Services",
    status: "Training Completed",
    date: "2024",
    description: "Comprehensive training in AWS cloud architecture, security, and best practices for scalable solutions.",
    skills: ["EC2", "VPC", "IAM", "S3", "CloudFront", "Route 53", "Auto Scaling", "Load Balancers"],
    color: "primary",
    icon: Award
  },
  {
    title: "Linux Fundamentals",
    code: "LINUX-101",
    provider: "Linux Professional Institute",
    status: "Training Completed", 
    date: "2024",
    description: "Essential Linux system administration skills including command line operations, file systems, and process management.",
    skills: ["Command Line", "File Systems", "Process Management", "Shell Scripting", "System Administration"],
    color: "accent",
    icon: CheckCircle
  }
];

const Certifications = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications & Training
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional development and continuous learning in cloud technologies
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Certifications Grid */}
          <div className="grid gap-8">
            {certifications.map((cert, index) => (
              <Card key={cert.code} className="bg-gradient-secondary border-primary/20 p-8 tech-card group relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Icon & Status */}
                    <div className="flex flex-col items-center gap-4">
                      <div className={`p-4 rounded-xl ${cert.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} group-hover:${cert.color === 'primary' ? 'glow-primary' : 'glow-accent'} transition-smooth`}>
                        <cert.icon className={`w-12 h-12 ${cert.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      
                      <Badge 
                        variant="secondary" 
                        className={`${cert.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'} border-current/30`}
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {cert.status}
                      </Badge>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {cert.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <span className="font-mono text-sm">{cert.code}</span>
                          <span>•</span>
                          <span>{cert.provider}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                      
                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Areas Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="outline"
                              className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-24 h-24 ${cert.color === 'primary' ? 'bg-primary/5' : 'bg-accent/5'} rounded-full blur-xl`} />
              </Card>
            ))}
          </div>
          
          {/* Additional Training Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-secondary border-primary/20 p-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Committed to staying current with the latest cloud technologies, DevOps practices, and industry best practices 
                through ongoing training and hands-on projects.
              </p>
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>AWS Training Programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>DevOps Bootcamps</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                  <span>Industry Workshops</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;