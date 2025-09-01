import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Shield, 
  Server, 
  Database, 
  Monitor, 
  Zap,
  Network,
  Settings,
  GitBranch,
  Container
} from "lucide-react";

const trainingAreas = [
  {
    category: "AWS Core Services",
    icon: Cloud,
    color: "primary",
    skills: [
      {
        name: "Identity & Access Management (IAM)",
        description: "User management, roles, policies, and security best practices",
        proficiency: 90
      },
      {
        name: "Virtual Private Cloud (VPC)",
        description: "Network architecture, subnets, security groups, and routing",
        proficiency: 85
      },
      {
        name: "Elastic Compute Cloud (EC2)",
        description: "Instance management, AMIs, storage, and compute optimization",
        proficiency: 88
      }
    ]
  },
  {
    category: "Networking & Security",
    icon: Shield,
    color: "accent",
    skills: [
      {
        name: "VPN & Direct Connect",
        description: "Secure connectivity solutions and hybrid cloud architectures",
        proficiency: 80
      },
      {
        name: "Security Groups & NACLs",
        description: "Network-level security and access control implementation",
        proficiency: 85
      },
      {
        name: "SSL/TLS & Certificate Management",
        description: "Encryption, certificate provisioning, and security compliance",
        proficiency: 82
      }
    ]
  },
  {
    category: "Scaling & Performance",
    icon: Server,
    color: "primary-glow",
    skills: [
      {
        name: "Auto Scaling Groups",
        description: "Dynamic resource scaling based on demand and metrics",
        proficiency: 88
      },
      {
        name: "Load Balancers",
        description: "Application, Network, and Classic load balancer configuration",
        proficiency: 85
      },
      {
        name: "CloudWatch Monitoring",
        description: "Metrics, logs, alarms, and performance optimization",
        proficiency: 80
      }
    ]
  },
  {
    category: "Cost & Operations",
    icon: Settings,
    color: "accent",
    skills: [
      {
        name: "Cost Management & Optimization",
        description: "Resource optimization, billing analysis, and cost controls",
        proficiency: 78
      },
      {
        name: "Serverless Deployments",
        description: "Lambda functions, API Gateway, and event-driven architectures",
        proficiency: 82
      },
      {
        name: "Infrastructure as Code",
        description: "CloudFormation templates and automated provisioning",
        proficiency: 75
      }
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience & Training
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive hands-on AWS cloud training covering essential services, 
              security, and best practices for enterprise-grade solutions
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Training Timeline */}
          <div className="mb-16">
            <Card className="bg-gradient-secondary border-primary/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Cloud className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">AWS Cloud Practitioner Training</h3>
                  <p className="text-muted-foreground">Comprehensive cloud fundamentals and practical implementation</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">40+</div>
                  <div className="text-sm text-muted-foreground">Hours of Training</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">AWS Services</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary-glow">10+</div>
                  <div className="text-sm text-muted-foreground">Hands-on Labs</div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Training Areas Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {trainingAreas.map((area, areaIndex) => (
              <Card key={area.category} className="bg-gradient-secondary border-primary/20 p-8 tech-card group">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl ${
                    area.color === 'primary' ? 'bg-primary/10' : 
                    area.color === 'accent' ? 'bg-accent/10' : 'bg-primary-glow/10'
                  }`}>
                    <area.icon className={`w-8 h-8 ${
                      area.color === 'primary' ? 'text-primary' : 
                      area.color === 'accent' ? 'text-accent' : 'text-primary-glow'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{area.category}</h3>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {area.skills.length} Skills Mastered
                    </Badge>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-6">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm">{skill.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground ml-4">
                          {skill.proficiency}%
                        </span>
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            area.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary-glow' : 
                            area.color === 'accent' ? 'bg-gradient-to-r from-accent to-accent/70' : 
                            'bg-gradient-to-r from-primary-glow to-primary'
                          }`}
                          style={{ 
                            width: `${skill.proficiency}%`,
                            animationDelay: `${(areaIndex * 3 + skillIndex) * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none ${
                  area.color === 'primary' ? 'bg-gradient-to-br from-primary/5 to-transparent' : 
                  area.color === 'accent' ? 'bg-gradient-to-br from-accent/5 to-transparent' : 
                  'bg-gradient-to-br from-primary-glow/5 to-transparent'
                }`} />
              </Card>
            ))}
          </div>
          
          {/* DevOps Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              DevOps & Development Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Docker", icon: Container, desc: "Containerization" },
                { name: "Git", icon: GitBranch, desc: "Version Control" },
                { name: "Jenkins", icon: Settings, desc: "CI/CD Pipeline" },
                { name: "Linux", icon: Server, desc: "System Admin" },
                { name: "Monitoring", icon: Monitor, desc: "Performance" },
                { name: "Networking", icon: Network, desc: "Infrastructure" }
              ].map((tool) => (
                <Card key={tool.name} className="bg-gradient-secondary border-primary/20 p-4 text-center tech-card group">
                  <tool.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:text-accent transition-smooth" />
                  <h4 className="font-semibold text-sm text-foreground">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;