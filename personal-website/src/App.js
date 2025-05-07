'use client'

import { useState } from 'react';
import { Github, Link, ExternalLink } from 'lucide-react';

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="container mx-auto px-4 py-8">
        {/* Section 1: Introduction */}
        <IntroSection />
        
        {/* Section 2: Featured Projects */}
        <ProjectsSection />
      </main>
      
      <footer className="bg-black py-6 text-center text-gray-400">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Kyle Yuan L. Uy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Introduction Section
function IntroSection() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Column 1: Profile */}
        <div className="flex flex-col items-center md:items-end">
          <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-blue-500 shadow-lg shadow-blue-500/20">
            <img 
              src="/profile.png" 
              alt="Kyle Yuan L. Uy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Column 2: Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Kyle Yuan L. Uy
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-400">
            2nd year Computer Science Student
          </h2>
          <h3 className="text-xl mb-6 text-gray-300">
            University of St. La Salle
          </h3>
          
          <div className="space-y-3">
            <p className="text-lg">
              <span className="font-bold text-blue-400">Specialization:</span><br />
              React Full-stack Web Development
            </p>
            
            <div>
              <p className="font-bold text-blue-400 mb-2">Tech:</p>
              <div className="flex flex-wrap gap-4">
                <TechIcon name="Python" />
                <TechIcon name="Kivy" />
                <TechIcon name="Java" />
                <TechIcon name="C++" />
                <TechIcon name="Unity" />
                <TechIcon name="Arduino" />
                <TechIcon name="HTML" />
                <TechIcon name="CSS" />
                <TechIcon name="JS" />
                <TechIcon name="React" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Technology Icon Component
function TechIcon({ name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-gray-800 rounded-full p-2 flex items-center justify-center shadow-md hover:shadow-blue-500/20 hover:scale-110 transition-all">
        <img 
          src={`${name.toLowerCase()}.png`}
          alt={name}
          title={name}
          className="w-8 h-8"
        />
      </div>
      <span className="text-xs mt-1">{name}</span>
    </div>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "MT5 Copy Trader Bot",
      description: "An automated trading bot that copies trades from one MT5 account to another using the MetaAPI platform.",
      tech: ["Python", "MetaAPI"],
      image: "/trader-bot.png"
    },
    {
      id: 2,
      title: "AWSLC USLS Website",
      description: "Official website for the Association of Women Scholars in La Salle Community at the University of St. La Salle.",
      tech: ["HTML", "CSS", "JS"],
      image: "/awslc.png"
    },
    {
      id: 3,
      title: "Marine Trader Website",
      description: "E-commerce platform for marine products with user authentication and payment integration.",
      tech: ["React"],
      image: "/marine-trader.png"
    },
    {
      id: 4,
      title: "Exam",
      description: "Online examination platform with automated grading and analytics.",
      tech: ["React"],
      image: "/exam.png"
    },
    {
      id: 5,
      title: "Moonhead",
      description: "A 2D platformer game where you play as a character with a moon for a head.",
      tech: ["Unity"],
      image: "/unity.png"
    },
    {
      id: 6,
      title: "Tiyange",
      description: "A mobile marketplace application for local vendors and buyers.",
      tech: ["Python", "Kivy"],
      image: "/tiyange.png"
    },
    {
      id: 7,
      title: "Skylight Ratings",
      description: "A review platform for movies, TV shows, and books with social features.",
      tech: ["React"],
      image: "/skylight.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-950 rounded-xl shadow-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:translate-y-2 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
        <p className={`text-gray-300 mb-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'line-clamp-2'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-700 rounded-full text-xs font-medium text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-4 mt-auto flex gap-3">
        <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 rounded-full text-sm hover:bg-blue-700 transition-colors">
          <Github size={16} />
          <span>Code</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1 bg-purple-600 rounded-full text-sm hover:bg-purple-700 transition-colors">
          <ExternalLink size={16} />
          <span>Demo</span>
        </button>
      </div>
    </div>
  );
}