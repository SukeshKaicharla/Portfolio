import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  User, 
  MessageSquare,
  ExternalLink,
  MapPin,
  Phone
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sukeshkaicharla123@gmail.com",
      link: "mailto:sukeshkaicharla123@gmail.com",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sukesh-kaicharla",
      link: "www.linkedin.com/in/sukesh-kaicharla",
      color: "accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SukeshKaicharla",
      link: "https://github.com/SukeshKaicharla",
      color: "primary-glow"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next cloud project? Let's discuss how I can help 
              bring your infrastructure ideas to life.
            </p>
            <div className="w-24 h-1 gradient-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-secondary border-primary/20 p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
                <p className="text-muted-foreground">
                  Have a project in mind? I'd love to hear about it and discuss how we can work together.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 bg-background/50 border-primary/20 focus:border-primary transition-smooth"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-background/50 border-primary/20 focus:border-primary transition-smooth"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project discussion, collaboration, etc."
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="pl-10 bg-background/50 border-primary/20 focus:border-primary transition-smooth"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-primary/20 focus:border-primary transition-smooth resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground hover:glow-primary transition-smooth"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
            
            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="bg-gradient-secondary border-primary/20 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-background/30 rounded-lg hover:bg-background/50 transition-smooth group"
                    >
                      <div className={`p-3 rounded-xl ${
                        info.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 
                        info.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' : 
                        'bg-primary-glow/10 group-hover:bg-primary-glow/20'
                      } transition-smooth`}>
                        <info.icon className={`w-5 h-5 ${
                          info.color === 'primary' ? 'text-primary' : 
                          info.color === 'accent' ? 'text-accent' : 'text-primary-glow'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
                    </a>
                  ))}
                </div>
              </Card>
              
              {/* Availability */}
              <Card className="bg-gradient-secondary border-primary/20 p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-foreground font-medium">Available for new projects</span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Remote work preferred</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Response within 24 hours</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-xs text-muted-foreground">
                      Open to freelance projects, consulting opportunities, and full-time positions 
                      in DevOps and cloud engineering roles.
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Call to Action */}
              <Card className="bg-gradient-primary border-primary p-8 text-primary-foreground text-center glow-primary">
                <h3 className="text-xl font-bold mb-2">Ready to Start Your Project?</h3>
                <p className="text-primary-foreground/90 mb-4 text-sm">
                  Let's discuss your cloud infrastructure needs and build something amazing together.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/20 transition-smooth"
                >
                  Schedule a Call
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
