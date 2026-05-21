
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smartwatch Operating System",
      description: "Developed a custom operating system for smartwatches using python and then using Industrial Standards (asm, c).",
      image: "\p1.png",
      tags: ["OS", "Embedded Systems", "Assembly", "Python"],
      github: "https://github.com/ES7/smartwatch-OS",
      // demo: "https://demo.ebadhsayed.com/nav"
    },
    {
      title: "AI Software Company Simulator",
      description: "A multi-agent AI system that simulates an entire software company. Give it any software requirement — 5 specialized AI agents collaborate to plan, design, build, and review it.",
      image: "\p2.png",
      tags: ["Agentic AI", "Orchestrator", "Multi Agent Systems"],
      github: "https://github.com/ES7/AI-Software-Company-Simulator",
      // demo: "https://demo.ebadhsayed.com/medical"
    },
    {
      title: "API Health Monitor",
      description: "A VS Code extension to monitor your AI API usage, cost and health in real-time.",
      image: "\p3.png",
      tags: ["VS Code", "Python", "API", "AI"],
      github: "https://github.com/ES7/api-health-monitor",
      demo: "https://marketplace.visualstudio.com/items?itemName=jallad.api-health-monitor"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {/* Showcasing innovative AI/ML solutions across various domains. */}
              Some of my recent Agentic AI projects & Hobby projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 flex space-x-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-green-500/80 transition-colors"
                      >
                        <Github size={16} className="text-white" />
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-green-500/80 transition-colors"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full border border-green-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
