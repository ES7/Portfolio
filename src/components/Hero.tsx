import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
const Hero = () => {
  return <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-16 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Ebad Sayed
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-4">
              Machine Learning Engineer & AI Innovator
            </div>
            <div className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Co-Founder and CTO of VokeAI, Final-year undergraduate at IIT (ISM) Dhanbad, specializing in Artificial Intelligence, Machine Learning,
              Computer Vision, Robotics and Multimedia Artistry. Passionate about pushing the boundaries of AI.
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-300">
            <a href="https://github.com/ES7" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ebad-sayed-0861a6227/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/adorable_jallad" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;