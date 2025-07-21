import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Download, ExternalLink, Mail, Play, Github, Send, User, MessageSquare, Linkedin, FileText } from 'lucide-react';
import { useState, useRef } from 'react';
import * as THREE from 'three';
import { ParticlesBackground } from '@/components/ui/particles-background';
import { FloatingShapes } from '@/components/three/floating-shapes';
import { ScrollNavigation } from '@/components/layout/scroll-navigation';
import { useToast } from '@/hooks/use-toast';
import cosmicBg from '@/assets/cosmic-bg.jpg';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import pythonLogo from '../assets/python.png';
import javaLogo from '../assets/java.png';
import htmlLogo from '../assets/HTML.png';
import jsLogo from '../assets/Js.png';
import reactLogo from '../assets/react.png';
import gitLogo from '../assets/git.png';
import linuxLogo from '../assets/linux.png';
import figmaLogo from '../assets/figma.png';
import aiLogo from '../assets/AI/ML.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

// Skills data
const skillsData = [
  { name: 'Python', level: 90, category: 'Programming', color: '#3776ab' },
  { name: 'Java', level: 85, category: 'Programming', color: '#f89820' },
  { name: 'C', level: 80, category: 'Programming', color: '#00599c' },
  { name: 'HTML/CSS', level: 95, category: 'Web', color: '#e34f26' },
  { name: 'JavaScript', level: 88, category: 'Web', color: '#f7df1e' },
  { name: 'React', level: 85, category: 'Web', color: '#61dafb' },
  { name: 'Git', level: 90, category: 'Tools', color: '#f05032' },
  { name: 'Linux', level: 75, category: 'Tools', color: '#fcc624' },
  { name: 'Figma', level: 85, category: 'Design', color: '#f24e1e' },
  { name: 'AI/ML', level: 80, category: 'Advanced', color: '#ff6b6b' },
];

// Projects data
const projects = [
  {
    title: "MindMate",
    subtitle: "Mental Wellness App",
    description: "Comprehensive mental health platform providing personalized wellness tracking, mood analysis, and therapeutic resources for users.",
    tech: ["Mobile Dev", "UI/UX", "Psychology", "User Research"],
    link: "https://tinyurl.com/MindMatePrj",
    code: "https://github.com/YUVARAJ-2K3/MindMate.git",
    type: "Mobile App",
    color: "cosmic-purple"
  },
  {
    title: "Women Safety Analytics",
    subtitle: "Safety Monitoring Platform",
    description: "Real-time analytics webpage focused on women's safety metrics, data visualization, and emergency response coordination.",
    tech: ["Web Dev", "Data Analytics", "Real-time Processing", "Visualization"],
    link: "https://sreelakshmiag2004.github.io/Stalwart/hotspot.html",
    code: "https://github.com/Sreelakshmiag2004/Stalwart",
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
  },
  {
    title: "BOLLBOT (Ongoing Project)",
    subtitle: "AI for Cotton Pest Control",
    description: "Advanced machine learning solution for identifying and controlling cotton pests, helping farmers make data-driven decisions for crop protection.",
    tech: ["Python", "AI/ML", "Computer Vision", "Data Analysis"],
    link: "https://tinyurl.com/BOLLBOTPRJ",
    type: "AI/ML",
    color: "cosmic-blue"
  }
];

// Add logo SVGs for each skill
const skillLogos: Record<string, JSX.Element> = {
  Python: (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <path fill="#3776AB" d="M24 8C13.5 8 5 16.5 5 27c0 3.9 1.1 7.5 3 10.7C10.5 37.5 15.5 39 21 39c10.5 0 19-8.5 19-19S31.5 8 24 8zm0 34c-8.3 0-15-6.7-15-15S15.7 7 24 7s15 6.7 15 15-6.7 15-15 15z"/>
        <path fill="#FFD43B" d="M24 10c-2.5 0-4.5 2-4.5 4.5S21.5 19 24 19s4.5-2 4.5-4.5S26.5 10 24 10z"/>
      </g>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <path fill="#ed8b00" d="M24 28c-3.3 0-6-2.7-6-6h12c0 3.3-2.7 6-6 6z"/>
        <path fill="#5382a1" d="M24 10c-2.5 0-4.5 2-4.5 4.5S21.5 19 24 19s4.5-2 4.5-4.5S26.5 10 24 10z"/>
        <ellipse cx="24" cy="14.5" rx="2.5" ry="2.5" fill="#fff"/>
        <path fill="#ed8b00" d="M24 13c.8 0 1.5.7 1.5 1.5S25.8 16 24 16s-1.5-.7-1.5-1.5S23.2 13 24 13z"/>
      </g>
    </svg>
  ),
  C: (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <polygon points="24,8 36,16 36,32 24,40 12,32 12,16" fill="#00599c"/>
        <text x="24" y="28" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="Arial">C</text>
      </g>
    </svg>
  ),
  'HTML/CSS': (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <polygon points="12,2 36,2 34,28 24,30 16,28" fill="#e34f26"/>
        <polygon points="24,27 30,25.5 31.5,4 24,4" fill="#ef652a"/>
        <text x="24" y="22" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Arial">5</text>
      </g>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <circle cx="24" cy="24" r="20" fill="#f7df1e"/>
        <rect x="14" y="14" width="20" height="20" rx="4" fill="#f7df1e"/>
        <text x="24" y="28" textAnchor="middle" fontSize="14" fill="#222" fontFamily="Arial">JS</text>
      </g>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <ellipse cx="24" cy="24" rx="10" ry="4" fill="none" stroke="#61dafb" strokeWidth="2"/>
        <ellipse cx="24" cy="24" rx="4" ry="10" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="4" ry="10" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(120 24 24)"/>
        <circle cx="24" cy="24" r="3" fill="#61dafb"/>
      </g>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <path d="M34.7 18.3l-9-9c-.8-.8-2-.8-2.8 0l-2.2 2.2 2.8 2.8c.7-.2 1.5 0 2 .5.6.6.7 1.4.5 2l2.8 2.8c.7-.2 1.5 0 2 .5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.5-.5-.7-1.2-.5-2l-2.8-2.8c-.7.2-1.5 0-2-.5-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l9 9c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0z" fill="#f05032"/>
      </g>
    </svg>
  ),
  Linux: (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <ellipse cx="24" cy="28" rx="8" ry="4" fill="#222"/>
        <ellipse cx="24" cy="20" rx="7" ry="10" fill="#fff"/>
        <ellipse cx="20" cy="18" rx="2" ry="3" fill="#222"/>
        <ellipse cx="28" cy="18" rx="2" ry="3" fill="#222"/>
        <ellipse cx="24" cy="25" rx="3" ry="2" fill="#ffce00"/>
        <ellipse cx="21" cy="27" rx="1" ry="1.5" fill="#222"/>
        <ellipse cx="27" cy="27" rx="1" ry="1.5" fill="#222"/>
      </g>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <circle cx="15" cy="15" r="5" fill="#f24e1e"/>
        <circle cx="25" cy="15" r="5" fill="#a259ff"/>
        <circle cx="15" cy="25" r="5" fill="#0acf83"/>
        <circle cx="25" cy="25" r="5" fill="#1abcfe"/>
        <circle cx="20" cy="20" r="5" fill="#ff7262"/>
      </g>
    </svg>
  ),
  'AI/ML': (
    <svg viewBox="0 0 48 48" width="32" height="32">
      <g>
        <rect x="12" y="12" width="16" height="16" rx="8" fill="#ff6b6b"/>
        <circle cx="24" cy="20" r="5" fill="#fff"/>
        <path d="M24 15v10M15 20h10" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </svg>
  ),
};

// Add proficiency levels for each skill
const skillProficiency: Record<string, string> = {
  Python: 'Advanced',
  Java: 'Advanced',
  C: 'Intermediate',
  'HTML/CSS': 'Advanced',
  JavaScript: 'Advanced',
  React: 'Advanced',
  Git: 'Advanced',
  Linux: 'Proficient',
  Figma: 'Proficient',
  'AI/ML': 'Intermediate',
};

// Official SVG logo components for each tech
const techLogos: Record<string, JSX.Element> = {
  Python: (
    <img src={pythonLogo} alt="Python Logo" className="w-12 h-12 object-contain" />
  ),
  Java: (
    <img src={javaLogo} alt="Java Logo" className="w-12 h-12 object-contain" />
  ),
  C: (
    <span className="text-2xl font-bold text-blue-800">C</span>
  ),
  'HTML/CSS': (
    <img src={htmlLogo} alt="HTML/CSS Logo" className="w-12 h-12 object-contain" />
  ),
  JavaScript: (
    <img src={jsLogo} alt="JavaScript Logo" className="w-12 h-12 object-contain" />
  ),
  React: (
    <img src={reactLogo} alt="React Logo" className="w-12 h-12 object-contain" />
  ),
  Git: (
    <img src={gitLogo} alt="Git Logo" className="w-12 h-12 object-contain" />
  ),
  Linux: (
    <img src={linuxLogo} alt="Linux Logo" className="w-12 h-12 object-contain" />
  ),
  Figma: (
    <img src={figmaLogo} alt="Figma Logo" className="w-12 h-12 object-contain" />
  ),
  'AI/ML': (
    <img src={aiLogo} alt="AI/ML Logo" className="w-12 h-12 object-contain" />
  ),
};

// Skill Orb Component
const SkillOrb = ({ skill, index }: { skill: typeof skillsData[0]; index: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.2;
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime + index) * 0.2;
      ref.current.position.y = Math.sin(state.clock.elapsedTime + index * 2) * 0.1;
    }
  });

  return (
    <mesh 
      ref={ref} 
      position={[
        (index % 5 - 2) * 2, 
        Math.floor(index / 5) * 2 - 1, 
        0
      ]}
    >
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial 
        color={skill.color} 
        emissive={skill.color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export const Skills = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    portfolio: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '', portfolio: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      <ScrollNavigation />
      <ParticlesBackground />

      {/* HOME SECTION */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${cosmicBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        </div>

        {/* 3D Floating Shapes */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 50 }}
            onCreated={({ gl }) => {
              gl.setClearColor('#000000', 0);
            }}
            fallback={<div className="w-full h-full bg-transparent" />}
          >
            <FloatingShapes />
          </Canvas>
        </div>

        {/* Main Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            {/* Name and Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-gradient">Sree Lakshmi</span>
                <br />
                <span className="text-foreground">A G</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-2"
                variants={itemVariants}
              >
                Computer Science Student
              </motion.p>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Tech explorer crafting real-world solutions with{' '}
              <span className="text-gradient font-semibold">code</span> and{' '}
              <span className="text-gradient font-semibold">creativity</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cosmic flex items-center gap-3"
              >
                <ExternalLink size={20} />
                View Projects
              </motion.button>

              <motion.a
                href="/SreeLakshmiAGResume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-electric flex items-center gap-3"
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost flex items-center gap-3"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Floating Stats */}
            <motion.div 
              variants={itemVariants}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: '4+', label: 'Projects Built' },
                { number: '3+', label: 'Technologies' },
                { number: '100%', label: 'Dedication' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="card-glass text-center p-6"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative min-h-screen pt-24 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* About Content */}
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card-cosmic"
              >
                <h3 className="text-2xl font-bold mb-4 text-gradient">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg">Computer Science and Engineering</h4>
                    <p className="text-base text-primary font-medium">Sri Sairam Engineering College</p>
                    <p className="text-sm text-accent">CGPA: 8.85 (till 3rd sem)</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
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
                  year: "2025",
                  title: "Mobile Development",
                  description: "Created MindMate - A comprehensive mental wellness application with user-centric design"
                },
                {
                  year: "2024",
                  title: "AI Innovation",
                  description: "Developed BOLLBOT - AI solution for cotton pest control using advanced machine learning algorithms"
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
                  variants={itemVariants}
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
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative min-h-screen pt-24 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <TooltipProvider>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {skillsData.map((skill, index) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card-cosmic text-center group cursor-pointer transition-shadow"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-white shadow-glow transition-all duration-300 group-hover:shadow-glow-intense">
                      {techLogos[skill.name]}
                    </div>
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    {/* New attractive skill bar */}
                    <div className="w-full cosmic-skill-bar mb-3">
                      <motion.div
                        className="cosmic-skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                      >
                        <span className="cosmic-skill-bar-label">{skill.level}%</span>
                      </motion.div>
                    </div>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                    {/* Glow overlay for unified effect */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 cosmic-glow-hover"></div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <span className="font-semibold">Proficiency:</span> {skillProficiency[skill.name]}
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
          </TooltipProvider>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative min-h-screen pt-24 px-6">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {projects.map((project, index) => {
              const isVideo = project.link.includes('.mp4');
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative card-cosmic overflow-hidden"
                >
                  {/* Project Type Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground z-10`}>
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
                      
                      {project.title.startsWith('BOLLBOT') ? null : (
                        project.code ? (
                          <motion.a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-ghost flex items-center gap-2"
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-ghost flex items-center gap-2"
                          >
                            <Github size={16} />
                            Code
                          </motion.button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300"></div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
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
                variants={itemVariants}
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
        </div>
      </section>

      {/* RESUME SECTION */}
      <section id="resume" className="relative min-h-screen pt-24 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Download my complete professional resume
            </p>

            <motion.div
              variants={itemVariants}
              className="card-cosmic max-w-2xl mx-auto text-center"
            >
              <div className="mb-8">
                <FileText size={64} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Professional Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Complete overview of my education, skills, projects, and experience in computer science and software development.
                </p>
              </div>

              <motion.a
                href="/SreeLakshmiAGResume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cosmic inline-flex items-center gap-3 text-lg"
              >
                <Download size={24} />
                Download Resume PDF
              </motion.a>

              <div className="mt-8 text-sm text-muted-foreground">
                Last updated: June 2024 • PDF Format • 2 Pages
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative min-h-screen pt-24 px-6 pb-12">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have an exciting project in mind? Let's collaborate and bring your ideas to life!
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="card-cosmic"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                    Portfolio/Website (Optional)
                  </label>
                  <div className="relative">
                    <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-muted-foreground" size={18} />
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-cosmic flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={20} />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Why Work Together */}
              <div className="card-cosmic">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Why Work Together?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="text-primary font-semibold">Innovation-Driven:</span> I love tackling challenging problems with creative, tech-forward solutions.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="text-secondary font-semibold">User-Centered:</span> Every project focuses on creating meaningful experiences for end users.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="text-accent font-semibold">Quality-Focused:</span> I believe in writing clean, maintainable code and delivering polished results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card-cosmic">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Connect With Me</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/sree-lakshmi-a-g-23a867281/",
                      icon: Linkedin,
                      color: "text-blue-400 hover:text-blue-300"
                    },
                    {
                      name: "GitHub",
                      url: "https://github.com/Sreelakshmiag2004",
                      icon: Github,
                      color: "text-gray-400 hover:text-gray-300"
                    },
                    {
                      name: "Email",
                      url: "mailto:sreelakshmiag2004@gmail.com",
                      icon: Mail,
                      color: "text-accent hover:text-accent-glow"
                    }
                  ].map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className={`flex items-center gap-4 p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-all duration-300 ${link.color}`}
                      >
                        <Icon size={24} />
                        <div>
                          <div className="font-semibold">{link.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {link.name === 'Email' ? 'Send me an email' : `Connect on ${link.name}`}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="card-glass text-center">
                <h4 className="font-bold text-gradient mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};