import React from 'react';
import { Globe, Github } from 'lucide-react';

const projects = [
  {
    title: "Smartwatch Operating System",
    description: "Developed a custom operating system for smartwatches using python and then using Industrial Standards (asm, c).",
    image: "p1.png",
    tags: ["OS", "Embedded Systems", "Assembly", "Python"],
    github: "https://github.com/ES7/smartwatch-OS",
  },
  {
    title: "HabiVox: Best Habit & Money Tracker APP",
    description: "Try HabiVox, a single app where you can track your habits and money with an agentic AI assistant that helps you maintain your habits and financial goals..",
    image: "p2.png",
    tags: ["AI Coach", "Health", "Finance"],
    website: "https://www.habivox.in/",
    playstore: "https://play.google.com/store/apps/details?id=com.habivox.app&hl=en_IN"
  },
  {
    title: "Voke AI",
    description: "Transform the way you communicate. Helps you to imporve your communication skills and your confidence.",
    image: "p3.png",
    tags: ["Voice AI", "Communication", "Learning"],
    website: "https://vokeai.in/"
  },
];

const iconLinkClass = "bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-green-500/80 transition-colors";

// Google Play logo (lucide has no Play Store icon)
const PlayStoreIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="text-white">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some of my recent Agentic AI projects & Hobby projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 flex space-x-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLinkClass}>
                          <Github size={16} className="text-white" />
                        </a>
                      )}
                      {project.playstore && (
                        <a href={project.playstore} target="_blank" rel="noopener noreferrer" aria-label="Play Store" className={iconLinkClass}>
                          <PlayStoreIcon />
                        </a>
                      )}
                      {project.website && (
                        <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className={iconLinkClass}>
                          <Globe size={16} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
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
