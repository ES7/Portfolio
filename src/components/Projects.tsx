
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Intelligent WhatsApp Bots",
      description: "Developed WhatsApp Chatbots powered by Google's Gemini Pro for Airline Customer Service and YouTube Video Summarization.",
      image: "\p1.png",
      tags: ["Flask", "Twilio", "Gemini", "Python"],
      github: "https://github.com/ES7/Intelligent-WhatsApp-Bots",
      // demo: "https://demo.ebadhsayed.com/nav"
    },
    {
      title: "Stable Diffusion from Scratch",
      description: "Implemented Stable Diffusion model from scratch using PyTorch and implemented Fine-Tuned versions of the model to run locally.",
      image: "\p2.png",
      tags: ["PyTorch", "Vision", "LLMs", "AI"],
      github: "https://github.com/ES7/Stable-Diffusion-from-Scratch",
      // demo: "https://demo.ebadhsayed.com/medical"
    },
    {
      title: "The AI-Orchestra",
      description: "Implemented RNN, LSTM, GRU networks to generate melodies, explained the entire process of music generation and the Music Theory.",
      image: "\p3.png",
      tags: ["Deep Learning", "Music", "RNN", "LSTM", "GRU"],
      github: "https://github.com/ES7/The-AI-Orchestra",
      // demo: "https://demo.ebadhsayed.com/detection"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing innovative AI/ML solutions across various domains.
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
                      {/* <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-green-500/80 transition-colors"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a> */}
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
