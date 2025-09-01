import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  GitBranch, 
  Cloud, 
  Server, 
  Database, 
  Shield,
  Cog,
  Globe,
  Zap
} from "lucide-react";

const projects = [
  {
    title: "Design and Fabrication of 360 Degree Drilling Machine",
    type: "Academic Project",
    description: "Innovative mechanical engineering project focused on developing a versatile drilling machine capable of 360-degree rotation for enhanced precision and efficiency in manufacturing processes.",
    technologies: ["Mechanical Design", "CAD", "Manufacturing", "Prototyping"],
    features: [
      "360-degree rotational capability",
      "Precision drilling mechanisms",
      "Enhanced manufacturing efficiency",
      "Prototype development and testing"
    ],
    icon: Cog,
    gradient: "from-accent to-accent/70"
  },
  {
    title: "AWS EC2 Instance Management",
    type: "Cloud Infrastructure",
    description: "Comprehensive AWS training project involving EC2 instance setup, configuration, and management with auto-scaling capabilities and load balancing for high availability.",
    technologies: ["AWS EC2", "Auto Scaling", "Load Balancer", "CloudWatch"],
    features: [
      "Multi-AZ deployment setup",
      "Auto Scaling Groups configuration",
      "Load balancer implementation",
      "CloudWatch monitoring integration"
    ],
    icon: Server,
    gradient: "from-primary to-primary-glow"
  },
  {
    title: "S3 Static Website Hosting",
    type: "Web Hosting & CDN",
    description: "Deployed static websites using Amazon S3 with CloudFront distribution for global content delivery, implementing best practices for performance and security.",
    technologies: ["AWS S3", "CloudFront", "Route 53", "SSL/TLS"],
    features: [
      "Global CDN distribution",
      "SSL certificate management",
      "Custom domain configuration",
      "Performance optimization"
    ],
    icon: Globe,
    gradient: "from-primary-glow to-accent"
  },
  {
    title: "Serverless Application Deployment",
    type: "Serverless Computing",
    description: "Built and deployed serverless applications using AWS Lambda, API Gateway, and DynamoDB, implementing event-driven architectures for scalable solutions.",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "IAM"],
    features: [
      "Event-driven architecture",
      "RESTful API development",
      "Database integration",
      "Security and access management"
    ],
    icon: Zap,
    gradient: "from-accent to-primary"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of academic projects and hands-on AWS training implementations
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-gradient-secondary border-primary/20 p-0 tech-card group overflow-hidden relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-smooth`} />
                
                <div className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                      <project.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {project.type}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary text-primary hover:gradient-primary hover:text-primary-foreground transition-smooth group-hover:glow-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
              </Card>
            ))}
          </div>
          
          {/* Additional Projects CTA */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-secondary border-primary/20 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and expanding my portfolio. 
                Stay tuned for more exciting DevOps and cloud infrastructure implementations.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:gradient-primary hover:text-primary-foreground transition-smooth">
                  <GitBranch className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
                <Button variant="outline" size="sm" className="border-accent text-accent hover:gradient-accent hover:text-accent-foreground transition-smooth">
                  <Cloud className="w-4 h-4 mr-2" />
                  AWS Portfolio
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;