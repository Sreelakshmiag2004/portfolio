import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { ParticlesBackground } from '@/components/ui/particles-background';
import { FloatingShapes } from '@/components/three/floating-shapes';
import cosmicBg from '@/assets/cosmic-bg.jpg';
import { Link } from 'react-router-dom';

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

export const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${cosmicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
      </div>

      {/* Particles Background - ensure visible above overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* 3D Floating Shapes - with error boundary */}
      <div className="absolute inset-0 z-20 pointer-events-none">
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
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cosmic flex items-center gap-3"
              >
                <ExternalLink size={20} />
                View Projects
              </motion.button>
            </Link>

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

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-ghost flex items-center gap-3"
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </Link>
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

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};