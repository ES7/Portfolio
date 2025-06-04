
// import React from 'react';
// import { Calendar, MapPin } from 'lucide-react';

// const Experience = () => {
//   const experiences = [
//     {
//       title: "Machine Learning Research Intern",
//       company: "Tech Innovation Lab",
//       location: "Remote",
//       period: "Jun 2024 - Present",
//       description: "Developing advanced computer vision algorithms for autonomous systems. Led research on object detection and tracking using deep learning frameworks.",
//       achievements: [
//         "Improved model accuracy by 15% using novel data augmentation techniques",
//         "Published research paper on real-time object detection",
//         "Mentored 3 junior researchers on ML best practices"
//       ]
//     },
//     {
//       title: "AI/ML Developer",
//       company: "Startup Accelerator",
//       location: "Dhanbad, India",
//       period: "Jan 2024 - May 2024",
//       description: "Built end-to-end machine learning pipelines for various client projects. Specialized in computer vision and natural language processing applications.",
//       achievements: [
//         "Deployed 5+ ML models to production",
//         "Reduced inference time by 40% through model optimization",
//         "Collaborated with cross-functional teams on product development"
//       ]
//     },
//     {
//       title: "Research Assistant",
//       company: "IIT (ISM) Dhanbad",
//       location: "Dhanbad, India",
//       period: "Aug 2023 - Dec 2023",
//       description: "Assisted in robotics research focusing on autonomous navigation and computer vision integration.",
//       achievements: [
//         "Developed SLAM algorithms for indoor navigation",
//         "Contributed to 2 conference publications",
//         "Led student team in national robotics competition"
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
//             <p className="text-xl text-gray-600">
//               Professional journey in machine learning, AI research, and robotics development.
//             </p>
//           </div>
          
//           <div className="space-y-8">
//             {experiences.map((exp, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
//                     <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
//                   </div>
//                   <div className="flex flex-col md:items-end mt-2 md:mt-0">
//                     <div className="flex items-center text-gray-600 mb-1">
//                       <Calendar size={16} className="mr-2" />
//                       <span>{exp.period}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                       <MapPin size={16} className="mr-2" />
//                       <span>{exp.location}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-700 mb-4">{exp.description}</p>
                
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
//                   <ul className="space-y-1">
//                     {exp.achievements.map((achievement, achIndex) => (
//                       <li key={achIndex} className="text-gray-600 flex items-start">
//                         <span className="text-blue-500 mr-2">•</span>
//                         <span>{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
