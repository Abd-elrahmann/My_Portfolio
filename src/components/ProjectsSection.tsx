
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce App",
    description: "A full-featured e-commerce platform with product filtering, cart functionality, and secure checkout process.",
    image: "/public/istockphoto-1471521270-612x612.jpg",
    technologies: ["React", "Redux", "Tailwind CSS", "Rest API","Redux"],
    githubLink: "https://github.com/Abd-elrahmann/E-commerce.git",
  },
  {
    id: 2,
    title: "Prayer Times App",
    description: "An application that provides accurate prayer times based on user location with customizable notification settings.",
    image: "/public/istockphoto-1001021150-612x612.jpg",
    technologies: ["React", "Geolocation API", "Push Notifications","Tailwind Css"],
    githubLink: "https://github.com/Abd-elrahmann/pray-times.git"
  },
  {
    id: 3,
    title: "Smart Sync IoT System",
    description: "An IoT dashboard for monitoring and controlling connected home devices with real-time updates.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    technologies: ["React", "WebSockets", "Chart.js", "Nest.js","Redux","MUI"],
    githubLink: "https://github.com",
  },
  {
    id: 4,
    title: "Movies Website",
    description: "A responsive movies browsing platform with search, filtering, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    technologies: ["React", "TMDb API", "Framer Motion", "Tailwind CSS"],
    githubLink: "https://github.com"
  }
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-black to-mauve-900/10 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-mauve-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for building excellent web experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="h-full"
            >
              <Card className="overflow-hidden border-mauve-500/20 bg-black/40 backdrop-blur-sm h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredId === project.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="bg-mauve-500/20 text-mauve-300 hover:bg-mauve-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between gap-4">
                  <Button variant="outline" size="sm" className="flex-1 border-mauve-500/50 hover:bg-mauve-500/10 gap-2" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveLink && (
                    <Button size="sm" className="flex-1 bg-mauve-600 hover:bg-mauve-700 gap-2" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
