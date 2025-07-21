import { motion } from 'framer-motion';
import { ParticlesBackground } from '@/components/ui/particles-background';

export const About = () => {
  return (
    <div className="relative min-h-screen pt-24 px-6">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Passionate about creating innovative solutions through technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* About Content */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-cosmic"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-lg">Computer Science Engineering</h4>
                  <p className="text-muted-foreground">Pursuing Bachelor's Degree</p>
                  <p className="text-sm text-accent">CGPA: Excellent Academic Performance</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-cosmic"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">Passions</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  • Building AI-powered solutions for real-world problems
                </p>
                <p className="text-muted-foreground">
                  • Mobile application development and user experience
                </p>
                <p className="text-muted-foreground">
                  • Web development with modern frameworks
                </p>
                <p className="text-muted-foreground">
                  • UI/UX design and creative problem solving
                </p>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gradient">Journey</h3>
            
            {[
              {
                year: "2024",
                title: "AI Innovation",
                description: "Developed BOLLBOT - AI solution for cotton pest control using advanced machine learning algorithms"
              },
              {
                year: "2024",
                title: "Mobile Development",
                description: "Created MindMate - A comprehensive mental wellness application with user-centric design"
              },
              {
                year: "2023",
                title: "Web Development",
                description: "Built Women Safety Analytics platform with real-time data processing and visualization"
              },
              {
                year: "2023",
                title: "UI/UX Excellence",
                description: "Designed and developed Instagram UI clone showcasing modern interface design principles"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full shadow-glow-primary"></div>
                <div className="card-glass p-4">
                  <div className="text-accent font-bold text-sm mb-1">{item.year}</div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};