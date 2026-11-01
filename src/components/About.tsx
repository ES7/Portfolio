import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                <p className="text-gray-600 mb-4">
                  I've been deeply engaged in the world of AI/ML—balancing hands-on research with real-world applications.
                </p>
                <p className="text-gray-600 mb-6">
                  As the Co-Founder of VokeAI, I'm building interactive AI systems that help people improve public speaking, interview performance, and everyday communication.
                </p>
                <p className="text-gray-600 mb-6">
                  Beyond this, I'm passionate about animation, doodling, and video editing—creative outlets that influence how I design user experiences. I also run Rift, a college-focused clothing merchandise brand where I apply the same creativity and community-driven thinking.
                </p>
              </div>
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}profile2.JPG`}
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
