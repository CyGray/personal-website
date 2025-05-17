'use client'

import { useState } from 'react';
import { projects } from './data/Projects'

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen text-[#e8e8e8] font-quicksand" style={{
        backgroundColor: '#121212',
        backgroundImage: `url("https://www.transparenttextures.com/patterns/black-felt.png")`,
      }}>
      <main className="container mx-auto px-4 py-8">
        <IntroSection />
        <ProjectsSection />
      </main>
      
      <footer className="bg-[#0a0a0a] py-6 text-center text-[#a0a0a0]">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Kyle Yuan L. Uy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-[#3a4a3f] shadow-lg shadow-[#2a3a2f]/20">
            <img 
              src="/profile.png" 
              alt="Kyle Yuan Uy"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#5a8f6e] to-[#7ab893] text-transparent bg-clip-text text-center" style={{ fontFamily: "'Gotham Black', sans-serif" }}>
            KYLE YUAN UY
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#d0d0d0] text-center font-gotham-black">
            2nd Year CS Student
          </h2>
          <h3 className="text-xl text-[#a0a0a0] text-center font-gotham-bold">
            University of St. La Salle
          </h3>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-auto">
          <div className="space-y-8 max-w-md"> {/* Increased space-y from 6 to 8 */}
            <div className="space-y-2"> {/* Added wrapper for specialization */}
              <p className="text-xl font-bold text-[#5a8f6e] font-gotham-black tracking-wide">SPECIALIZATION</p>
              <p className="text-2xl md:text-3xl font-medium text-[#e8e8e8] font-gotham-bold">
                React Full-stack Web Development
              </p>
            </div>

            <div>
              <p className="text-lg font-bold text-[#5a8f6e] mb-3 font-gotham-black tracking-wide">TECH STACK</p>
              <div className="grid grid-cols-5 grid-rows-2 gap-3 justify-center"> {/* Increased gap from 1 to 3 */}
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

function ProjectsSection() {
  return (
    <section className="py-16 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#5a8f6e] to-[#7ab893] text-transparent bg-clip-text font-gotham-bold">
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


/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[#3a4a3f]/20 hover:translate-y-2 h-full flex flex-col border border-[#2a2a2a]"
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
        <h3 className="text-xl font-bold mb-2 text-[#5a8f6e] font-gotham-bold">{project.title}</h3>
        <p className={`text-[#c0c0c0] mb-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'line-clamp-2'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, index) => (
            <div key={index} className="w-8 h-8 flex items-center justify-center">
              <img 
                src={`${tech.toLowerCase()}.png`}
                alt={tech}
                title={tech}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

function TechIcon({ name }) {
  return (
    <div className="w-20 h-20 flex items-center justify-center grayscale-80 hover:grayscale-0 transition duration-300">
      <img 
        src={`${name.toLowerCase()}.png`}
        alt={name}
        title={name}
        className="w-14 h-14 object-contain"
      />
    </div>
  );
}