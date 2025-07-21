import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { ParticlesBackground } from '@/components/ui/particles-background';

export const Resume = () => {
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
            Resume
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Download my latest resume or view my qualifications below
          </p>
          
          <motion.a
            href="/SreeLakshmiAGResume.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-cosmic inline-flex items-center gap-3 animate-pulse-glow"
          >
            <Download size={20} />
            Download Resume PDF
          </motion.a>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Contact & Info */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-cosmic"
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={16} className="text-accent" />
                  <span className="text-sm">Available on request</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone size={16} className="text-accent" />
                  <span className="text-sm">Available on request</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={16} className="text-accent" />
                  <span className="text-sm">India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <ExternalLink size={16} className="text-accent" />
                  <a href="https://tinyurl.com/SreeLinkedin" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-cosmic"
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">Education</h3>
              <div>
                <h4 className="font-semibold">Computer Science Engineering</h4>
                <p className="text-muted-foreground text-sm">Bachelor's Degree (Pursuing)</p>
                <p className="text-accent text-sm font-medium">Excellent Academic Performance</p>
              </div>
            </motion.div>
          </div>

          {/* Skills & Experience */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="card-cosmic"
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">Key Projects & Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-accent">BOLLBOT - AI for Cotton Pest Control</h4>
                  <p className="text-sm text-muted-foreground mb-2">Advanced AI solution for agricultural pest management</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AI/ML</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Computer Vision</span>
                  </div>
                </div>

                <div className="border-l-2 border-secondary/30 pl-4">
                  <h4 className="font-semibold text-accent">MindMate - Mental Wellness App</h4>
                  <p className="text-sm text-muted-foreground mb-2">Comprehensive mental health platform</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">Mobile Dev</span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">UI/UX</span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">Psychology</span>
                  </div>
                </div>

                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-semibold text-accent">Women Safety Analytics</h4>
                  <p className="text-sm text-muted-foreground mb-2">Real-time safety monitoring platform</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">Web Dev</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">Analytics</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">Real-time</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="card-cosmic"
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Programming</h4>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">• Python</div>
                    <div className="text-sm text-muted-foreground">• Java (OOP)</div>
                    <div className="text-sm text-muted-foreground">• C</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Web & Mobile</h4>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">• HTML/CSS</div>
                    <div className="text-sm text-muted-foreground">• Responsive Design</div>
                    <div className="text-sm text-muted-foreground">• Mobile Development</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Tools</h4>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">• Git/GitHub</div>
                    <div className="text-sm text-muted-foreground">• VS Code</div>
                    <div className="text-sm text-muted-foreground">• Linux</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Design</h4>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">• Figma</div>
                    <div className="text-sm text-muted-foreground">• Canva</div>
                    <div className="text-sm text-muted-foreground">• UI/UX Design</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Passionate computer science student with a strong foundation in programming, 
              AI/ML technologies, and user-centered design. Experienced in developing 
              innovative solutions for real-world problems, from agricultural AI to mental 
              wellness applications. Committed to continuous learning and creating 
              technology that makes a positive impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};