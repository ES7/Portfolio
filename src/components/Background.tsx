import React from 'react';
import { Calendar, MapPin, GraduationCap, Code, Brain, Eye } from 'lucide-react';

const Background = () => {
  const experiences = [
    {
      title: "Data Scientist Intern",
      company: "Camgemini Technology Services India Limited",
      location: "Remote",
      period: "Sept 2024 - April 2025",
      achievements: [
        // "Developed an AI chatbot with Gemini and Streamlit to provide real-time geothermal efficiency recommendations and authored a comprehensive technical report detailing the simulations and methodologies used."
        "Created an AI chatbot for geothermal efficiency and wrote a technical report on the project"
      ]
    },
    {
      title: "AI Engineer Intern",
      company: "Korrect",
      location: "Remote",
      period: "June 2023 - Aug 2023",
      achievements: [
        // "Implemented high-accuracy models (90%+) and enhanced training data by generating synthetic examples with large language models, boosting model robustness and performance."
        "Built 90%+ accurate models and improved them using synthetic data from LLMs"
      ]
    }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "C++"] },
    { category: "ML/AI", items: ["TensorFlow", "PyTorch", "Hugging Face", "Scikit-learn", "OpenCV"] },
    { category: "Tools", items: ["Docker", "Git"] }
  ];

  return (
    <section id="background" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Background</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic foundation, professional experience and technical expertise in AI/ML.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-blue-300">Integrated Master of Technology</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">IIT (ISM) Dhanbad</h4>
                  <p className="text-gray-300 text-sm">Expected 2026</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-blue-300 mb-2">Achievements</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Awarded “Best Educational Content” at the NLP Project Expo 2024 by Ready Tensor</li>
                    <li>• Led the university team at InterIIT Tech Meet 11.0</li>
                    <li>• Overall Coordinator of the Robotics & AI Club (2023–2024)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Code size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Experience</h3>
                  <p className="text-blue-300">3+ Years</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-b border-gray-400/20 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-white text-sm">{exp.title}</h4>
                    <p className="text-blue-300 text-sm">{exp.company}</p>
                    <p className="text-gray-300 text-xs mb-2">{exp.period}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-xs">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Brain size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Skills</h3>
                  <p className="text-blue-300">Expertise</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-medium text-blue-300 mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded border border-blue-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
