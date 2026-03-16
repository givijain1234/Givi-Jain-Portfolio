/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Award, 
  ChevronRight,
  Terminal,
  Server,
  Globe,
  BrainCircuit,
  Menu,
  X,
  Cpu,
  Layers,
  Code2,
  Database,
  Shield,
  Palette,
  Activity,
  Zap,
  Wrench,
  Layout,
  Twitter
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  icon: React.ReactNode;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface Certification {
  name: string;
  issuer: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "CineMatch",
    description: "Booking System: Managed movie ticket reservations and seat availability. Built RESTful APIs with validation.",
    tech: ["Java", "Spring Boot", "SQL", "REST API"],
    github: "https://github.com/givijain1234/cinematch-springboot",
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "Chess Engine",
    description: "Game Logic: Developed a console-based chess application with complete rule enforcement and move validation, focusing on clean OOP design.",
    tech: ["Java", "OOP", "Logic Design"],
    github: "https://github.com/givijain1234/chess-java-console",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Parking Lot",
    description: "System Design: Built a modular parking system to manage vehicle entry, exit, and slot allocation using design patterns.",
    tech: ["Java", "Design Patterns", "System Design"],
    github: "https://github.com/givijain1234/parking-lot-system",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "URL Shortener",
    description: "Data Storage: Created a service to generate short URLs mapped to long URLs with persistent database storage and efficient retrieval.",
    tech: ["Java", "SQL", "Backend"],
    github: "https://github.com/givijain1234/url-shortener-java",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Rate Limiter",
    description: "Traffic Control: Developed a system to manage the flow of requests to keep an app stable, implementing token bucket algorithms.",
    tech: ["Java", "Logic Design", "Algorithms"],
    github: "https://github.com/givijain1234",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Dynamic Bookstore",
    description: "Web Design: Responsive bookstore website with advanced search and filtering functionality, improving user navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/givijain1234/WizzadingTales",
    live: "https://wizzadingtalesbygivi.netlify.app/",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "LoopLens",
    description: "A LeetCode-style code execution visualizer that tracks iteration flow and variable state changes step-by-step using AI-powered tracing.",
    tech: ["React", "Vite", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/givijain1234",
    live: "https://looplen.netlify.app/",
    icon: <BrainCircuit className="w-6 h-6" />
  },
  {
    title: "Zombie Flood",
    description: "Interactive grid-based simulation demonstrating BFS algorithm in real-time with layer-by-layer spread, walls, mines, and live telemetry.",
    tech: ["Java", "BFS", "Algorithms", "Web"],
    github: "https://github.com/givijain1234",
    live: "https://zombieflood.netlify.app/",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Sentiment Analyser (AI)",
    description: "AI Engine featuring Multi-Format Input (Text, PDF, Image), Tone Detection, and Multi-Language support for deep review analysis.",
    tech: ["AI", "Gemini API", "Prompt Engineering"],
    github: "https://github.com/givijain1234",
    live: "https://sentimentanalyzerusingai.netlify.app/",
    icon: <BrainCircuit className="w-6 h-6" />
  },
  {
    title: "Team Project Tracker (AI)",
    description: "AI-assisted internal workflow tool with AI Auto-Fill, real-time filtering, and dynamic status management.",
    tech: ["AI", "React", "Prompt Engineering"],
    github: "https://github.com/givijain1234",
    live: "https://teamprojecttracker.netlify.app/",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Amazon Sale Analysis",
    description: "Comprehensive analysis of Amazon sales data to identify trends, customer behavior, and sales performance using data analysis tools.",
    tech: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/givijain1234/Amazon-sale-analysis",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "ArtFixByGivi",
    description: "Creative Platform: A dedicated space for artistic expression and portfolio showcasing, designed for visual impact.",
    tech: ["React", "Tailwind CSS", "Web Design"],
    github: "https://github.com/givijain1234",
    live: "https://artfixbygivi.netlify.app/",
    icon: <Palette className="w-6 h-6" />
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "Associate Financial Consultant",
    company: "Bizwit Research & Consulting LLP",
    period: "Mar 2026 – Present",
    description: [
      "Analysed 50+ companies across Singapore and Malaysian markets using AI research tools.",
      "Processed 10k+ market data points to identify industry trends and business insights.",
      "Built structured datasets and reports supporting 8+ consulting research projects."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Internkaksha IT Solutions",
    period: "Dec 2023 - Feb 2024",
    description: [
      "Conducted comprehensive data analysis and visualization to derive actionable business insights.",
      "Utilized Tableau for creating interactive dashboards and reporting metrics.",
      "Remote internship focused on data-driven decision making and statistical analysis."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Progshee Technologies",
    period: "Jul 2023 – Oct 2023",
    description: [
      "Worked on backend modules using Java and SQL, improving application response time by 25%.",
      "Optimised database queries to enhance data retrieval performance by 20%.",
      "Collaborated with cross-functional teams to deliver a production-ready website within deadlines."
    ]
  }
];

const SKILLS = [
  { name: "Java", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "C / C++", category: "Languages" },
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Spring", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "API Integration", category: "Backend" },
  { name: "SQL", category: "Databases" },
  { name: "DBMS", category: "Databases" },
  { name: "DSA", category: "Core CS" },
  { name: "OOP", category: "Core CS" },
  { name: "System Design", category: "Core CS" },
  { name: "OS", category: "Core CS" },
  { name: "Backend Development", category: "Expertise" },
  { name: "Full Stack Development", category: "Expertise" },
  { name: "Git/GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Tableau", category: "Tools" },
  { name: "Power BI", category: "Tools" }
];

const CERTIFICATIONS: Certification[] = [
  { name: "GfG 160 - 160 Days of Problem Solving", issuer: "GeeksforGeeks" },
  { name: "AWS Academy Cloud Architecting", issuer: "AWS Academy" },
  { name: "Database Management Systems", issuer: "NPTEL" },
  { name: "The Full Stack Certification", issuer: "Meta" },
  { name: "Crash Course on Python", issuer: "Google" },
  { name: "Cloud Computing Foundations", issuer: "Duke University" },
  { name: "Foundations of Data Science", issuer: "Google" },
  { name: "Cybersecurity Essentials", issuer: "Cisco" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco" },
  { name: "Introduction to Data Analytics", issuer: "IBM" },
  { name: "Machine Learning for All", issuer: "University of London" },
  { name: "Generative AI Fundamentals", issuer: "Google Cloud" },
  { name: "Foundations of Cybersecurity", issuer: "Google" },
  { name: "Introduction to Artificial Intelligence", issuer: "IBM" },
  { name: "Build a free website with WordPress", issuer: "Coursera" },
  { name: "Get started with Figma", issuer: "Coursera" },
  { name: "Software Engineering Virtual Experience", issuer: "JPMorganChase" },
  { name: "The Complete Web Development Bootcamp", issuer: "Udemy" },
  { name: "Fundamentals of Digital Marketing", issuer: "Google" },
  { name: "Data Visualisation", issuer: "Tata Group" }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-emerald-500/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <Terminal className="text-emerald-500 w-8 h-8" />
          <span className="text-white">GIVI<span className="text-emerald-500">.JAIN</span></span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-emerald-500/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-2"
    >
      <div className="h-px w-12 bg-emerald-500"></div>
      <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">{subtitle}</span>
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold text-white tracking-tight"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("Languages");

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono tracking-widest uppercase"
            >
              Available for Opportunities
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-[0.9]"
            >
              GIVI <span className="text-emerald-500">JAIN</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed"
            >
              Computer Science undergraduate & <span className="text-white font-medium">Backend Engineer</span>. 
              Crafting reliable systems with Java, Spring Boot, and AI-powered solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="https://drive.google.com/file/d/1npKTobNr7VpNa4X5riwX7xlWjc9VzS_D/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View Resume
              </a>
              <a 
                href="mailto:givijain16@gmail.com" 
                className="px-8 py-4 border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Let's Connect
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="About Me" subtitle="Introduction" />
              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                <p>
                  I am a Computer Science student with a strong foundation in <span className="text-emerald-400">Java, OOP, and SQL</span>. 
                  My focus lies in building reliable backend systems and web applications that solve real-world problems.
                </p>
                <p>
                  I enjoy creating well-structured code and integrating <span className="text-white">AI</span> to build smarter, 
                  more efficient software solutions. My approach combines technical rigor with a passion for rapid prototyping.
                </p>
                <div className="flex gap-6 pt-4">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-2xl">25%</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Performance Boost</span>
                  </div>
                  <div className="w-px h-12 bg-zinc-800"></div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-2xl">6+</span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Core Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  alt="System Design" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-emerald-400 font-mono text-sm mb-2">Currently Exploring</span>
                  <h3 className="text-xl font-bold text-white">Advanced System Design & AI Integration</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Work History" subtitle="Experience" />
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-[200px_1fr] gap-12">
                  <div className="mb-4 md:mb-0">
                    <span className="text-emerald-500 font-mono text-sm">{exp.period}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-emerald-400 font-medium mb-6">{exp.company}</p>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-zinc-400 leading-relaxed">
                          <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Featured Work" subtitle="Projects" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  {project.icon}
                </div>
                
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500">
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-mono rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Technical Arsenal" subtitle="Skills" />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Category Sidebar */}
            <div className="lg:w-1/3 space-y-2">
              {Array.from(new Set(SKILLS.map(s => s.category))).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillCategory(category)}
                  className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                    activeSkillCategory === category 
                    ? 'bg-emerald-500 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                    : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
                  }`}
                >
                  <span className="tracking-widest uppercase text-xs font-mono">{category}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeSkillCategory === category ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>

            {/* Skills Display Area */}
            <div className="lg:w-2/3 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {SKILLS.filter(s => s.category === activeSkillCategory).map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-bold text-lg">{skill.name}</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors"></div>
                      </div>
                      <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          className="h-full bg-emerald-500/50"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Recognitions" subtitle="Certifications" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl"
              >
                <div className="mt-1 p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{cert.name}</h4>
                  <p className="text-zinc-500 text-sm">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Ready to build something <span className="text-emerald-500">great?</span></h2>
              <p className="text-zinc-400 max-w-md">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://github.com/givijain1234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"
                  title="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/givi-jain-a39b70248/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/GiviJain1604" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"
                  title="Twitter (X)"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://leetcode.com/u/givijain16/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"
                  title="LeetCode"
                >
                  <img src="https://cdn.simpleicons.org/leetcode/FFA116" alt="LeetCode" className="w-6 h-6" referrerPolicy="no-referrer" />
                </a>
                <a 
                  href="https://www.geeksforgeeks.org/profile/givijad0kn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"
                  title="GeeksforGeeks"
                >
                  <img src="https://cdn.simpleicons.org/geeksforgeeks/298D46" alt="GeeksforGeeks" className="w-6 h-6" referrerPolicy="no-referrer" />
                </a>
                <a 
                  href="mailto:givijain16@gmail.com" 
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all"
                  title="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <p className="text-zinc-500 text-sm font-mono">
                © {new Date().getFullYear()} Givi Jain. Built with React & Tailwind.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
