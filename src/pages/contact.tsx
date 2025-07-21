import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, User, ExternalLink, Github, Linkedin } from 'lucide-react';
import { ParticlesBackground } from '@/components/ui/particles-background';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    portfolio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formUrl =
      "https://docs.google.com/forms/d/1wpa1IckWQzQ5R5PLfrbqk9ps_tlGMCvCDCyg2S8iMyc/formResponse";
    const formBody = new URLSearchParams();
    formBody.append("entry.1417167852", formData.name);
    formBody.append("entry.1100448676", formData.email);
    formBody.append("entry.216596664", formData.message);
    fetch(formUrl, {
      method: "POST",
      body: formBody,
      mode: "no-cors",
    })
      .then(() => {
        alert("✅ Thank you for contacting me! I will reply as soon as possible.");
        setFormData({ name: "", email: "", message: "", portfolio: "" });
      })
      .catch((error) => {
        console.error("❌ Error submitting form:", error);
      });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sreelakshmiag/", // Updated LinkedIn URL
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "GitHub",
      url: "#",
      icon: Github,
      color: "text-gray-400 hover:text-gray-300"
    },
    {
      name: "Email",
      url: "mailto:sreelakshmiag2004@gmail.com",
      icon: Mail,
      color: "text-accent hover:text-accent-glow"
    }
  ];

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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an exciting project in mind? Let's collaborate and bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="card-cosmic"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>
            
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                  Portfolio/Website (Optional)
                </label>
                <div className="relative">
                  <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    placeholder="Your Portfolio/Website"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-muted-foreground" size={18} />
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-muted/20 border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground resize-none"
                    placeholder="Your Message"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn-cosmic flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
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
                    <span className="text-secondary font-semibold">User -Centered:</span> Every project focuses on creating meaningful experiences for end users.
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
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
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
        </div>
      </div>
    </div>
  );
};
