
import React from 'react';
import { Brain, Eye, Cpu, Palette } from 'lucide-react';

const About = () => {
  // const specialties = [
  //   {
  //     icon: Brain,
  //     title: "Machine Learning",
  //     description: "Advanced ML algorithms and deep learning architectures"
  //   },
  //   {
  //     icon: Eye,
  //     title: "Computer Vision",
  //     description: "Image processing, object detection, and visual recognition"
  //   },
  //   {
  //     icon: Cpu,
  //     title: "Robotics",
  //     description: "Autonomous systems and intelligent robotics solutions"
  //   },
  //   {
  //     icon: Palette,
  //     title: "Multimedia Artistry",
  //     description: "Creative technology and digital art innovation"
  //   }
  // ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm a passionate Machine Learning Engineer pursuing my final year at IIT (ISM) Dhanbad, 
              combining technical excellence with creative innovation.
            </p>
          </div> */}
          
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {specialties.map((specialty, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <specialty.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div> */}
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                <p className="text-gray-600 mb-4">
                  Currently pursuing my undergraduate degree at one of India's premier technical institutes, I've been deeply immersed in cutting-edge research and practical applications of AI/ML.
                  {/* My endeavors span from developing AI/ML applications to crafting artistic multimedia experiences, consistently pushing the boundaries of technological innovation. */}
                </p>
                <p className="text-gray-600 mb-6">
                  I'm also the Co-Founder of VokeAI, where we're building interactive tools that help users improve public speaking, interview performance and day-to-day communication, all powered by real-time feedback and generative AI.
                  Beyond tech, I'm passionate about animation, doodling and video editing; creative outlets that fuel my design thinking.
                </p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </div>
                </div>
              </div>
              {/* <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl"></div>
                <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Profile Image</span>
                </div>
              </div> */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}\profile.png`} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
