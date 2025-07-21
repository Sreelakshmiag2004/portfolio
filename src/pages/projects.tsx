import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { ParticlesBackground } from '@/components/ui/particles-background';

const projects = [
  {
    title: "BOLLBOT",
    subtitle: "AI for Cotton Pest Control",
    description: "Advanced machine learning solution for identifying and controlling cotton pests, helping farmers make data-driven decisions for crop protection.",
    tech: ["Python", "AI/ML", "Computer Vision", "Data Analysis"],
    link: "https://tinyurl.com/BOLLBOTPRJ",
    type: "AI/ML",
    color: "cosmic-blue"
  },
  {
    title: "MindMate",
    subtitle: "Mental Wellness App",
    description: "Comprehensive mental health platform providing personalized wellness tracking, mood analysis, and therapeutic resources for users.",
    tech: ["Mobile Dev", "UI/UX", "Psychology", "User Research"],
    link: "https://tinyurl.com/MindMatePrj",
    type: "Mobile App",
    color: "cosmic-purple"
  },
  {
    title: "Women Safety Analytics",
    subtitle: "Safety Monitoring Platform",
    description: "Real-time analytics webpage focused on women's safety metrics, data visualization, and emergency response coordination.",
    tech: ["Web Dev", "Data Analytics", "Real-time Processing", "Visualization"],
    link: "https://sreelakshmiag2004.github.io/project-echoguard/",
    type: "Web Application",
    color: "cosmic-cyan"
  },
  {
    title: "Instagram UI Clone",
    subtitle: "Modern Interface Recreation",
    description: "Pixel-perfect recreation of Instagram's user interface showcasing advanced UI/UX design skills and attention to detail.",
    tech: ["UI/UX", "Frontend", "Responsive Design", "Animation"],
    link: "https://ik.imagekit.io/Sree/Record_2025-04-27-19-53-55.mp4",
    type: "UI/UX",
    color: "cosmic-pink"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const isVideo = project.link.includes('.mp4');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative card-cosmic overflow-hidden"
    >
      {/* Project Type Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-${project.color} text-white z-10`}>
        {project.type}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Project Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 text-gradient group-hover:scale-105 transition-transform duration-300">
            {project.title}
          </h3>
          <p className="text-accent font-medium">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-muted/20 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-electric flex items-center gap-2"
          >
            {isVideo ? <Play size={16} /> : <ExternalLink size={16} />}
            {isVideo ? 'Watch Demo' : 'View Project'}
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-ghost flex items-center gap-2"
          >
            <Github size={16} />
            Code
          </motion.button>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300"></div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <div className="relative min-h-screen pt-24 px-6">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that combine creativity with cutting-edge technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "4+", label: "Projects Completed" },
            { number: "3+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "∞", label: "Learning Mindset" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="card-glass text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">
            Interested in collaborating?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's work together to bring your ideas to life
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-cosmic inline-flex items-center gap-3"
          >
            <ExternalLink size={20} />
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};