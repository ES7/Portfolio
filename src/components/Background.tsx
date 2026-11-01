import React from 'react';
import { GraduationCap, Code, Trophy } from 'lucide-react';

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Cisco",
    location: "Bengaluru, India",
    period: "July 2026 - Present",
    achievements: [
      "E2E Testing and Development of Microservices for Cisco's Cloud Platform"
    ]
  },
  {
    title: "Co-Founder",
    company: "Voke AI",
    location: "Remote",
    period: "Sept 2024 - April 2026",
    achievements: [
      "Build a system which helps you imporve your communication skills and confidence using Agentic AI and Voice AI",
    ]
  },
  // {
  //   title: "AI Engineer Intern",
  //   company: "Capgemini Technology Services India Limited",
  //   location: "Remote",
  //   period: "Sept 2024 - April 2025",
  //   achievements: [
  //     "Developed an AI Chatbot for Geothermal Power Plant Management and wrote a technical paper on the project"
  //   ]
  // }
];

const skills = [
  { category: "Programming", items: ["Python", "Java"] },
  { category: "ML/AI", items: ["Agentic AI", "Transformer", "Claude", "OpenAI"] },
  { category: "Tools", items: ["TensorFlow", "PyTorch", "AWS"] }
];

const achievements = [
  "Young Achiever Award by CXO 2.0 Conference Dubai 2025",
  "4.5 Lakhs seed grant from Ministry of Electronics and IT, Government of India for Voke AI",
  "Awarded “Best Educational Content” at the NLP Project Expo 2024 by Ready Tensor",
  // "Led the university team at InterIIT Tech Meet 11.0",
  // "Overall Coordinator of the Robotics & AI Club (2023–2024)"
];

const allSkills = skills.flatMap(group => group.items);

const cardClass = "bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300";

interface CardHeaderProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const CardHeader = ({ icon: Icon, title, subtitle }: CardHeaderProps) => (
  <div className="flex items-center mb-6">
    <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
      <Icon size={24} className="text-white" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-blue-300">{subtitle}</p>
    </div>
  </div>
);

const Background = () => {
  return (
    <section
      id="background"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Background
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic foundation, professional experience and technical expertise in AI/ML.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education + Skills */}
            <div className={cardClass}>
              <CardHeader icon={GraduationCap} title="Education" subtitle="Integrated Master of Technology" />

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white">IIT (ISM) Dhanbad</h4>
                  <p className="text-gray-300 text-sm">May 2026</p>
                </div>

                <div>
                  <h5 className="text-xs font-semibold text-blue-300 mb-2 uppercase tracking-wide">
                    Skills
                  </h5>

                  <div className="flex flex-wrap gap-2">
                    {allSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-blue-500/15 text-blue-100 text-[11px] rounded border border-blue-400/25"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className={cardClass}>
              <CardHeader icon={Code} title="Experience" subtitle="3+ Years" />

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.company}
                    className="border-b border-gray-400/20 pb-4 last:border-b-0"
                  >
                    <h4 className="font-semibold text-white text-sm">
                      {exp.title}
                    </h4>
                    <p className="text-blue-300 text-sm">{exp.company}</p>
                    <p className="text-gray-300 text-xs mb-2">{exp.period}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="text-gray-300 text-xs">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className={cardClass}>
              <CardHeader icon={Trophy} title="Achievements" subtitle="Highlights" />

              <ul className="space-y-2 text-gray-300 text-sm">
                {achievements.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
