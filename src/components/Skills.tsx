
// import React from 'react';

// const Skills = () => {
//   const skillCategories = [
//     {
//       category: "Programming Languages",
//       skills: [
//         { name: "Python", level: 95 },
//         { name: "JavaScript", level: 85 },
//         { name: "C++", level: 80 },
//         { name: "Java", level: 75 },
//         { name: "R", level: 70 }
//       ]
//     },
//     {
//       category: "ML/AI Frameworks",
//       skills: [
//         { name: "TensorFlow", level: 90 },
//         { name: "PyTorch", level: 88 },
//         { name: "Scikit-learn", level: 85 },
//         { name: "OpenCV", level: 82 },
//         { name: "Keras", level: 80 }
//       ]
//     },
//     {
//       category: "Tools & Technologies",
//       skills: [
//         { name: "Docker", level: 75 },
//         { name: "Git", level: 90 },
//         { name: "AWS", level: 70 },
//         { name: "MongoDB", level: 78 },
//         { name: "React", level: 80 }
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A comprehensive toolkit spanning machine learning, computer vision, and modern development technologies.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {skillCategories.map((category, categoryIndex) => (
//               <div key={categoryIndex} className="bg-gray-50 p-6 rounded-xl">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex}>
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-gray-700 font-medium">{skill.name}</span>
//                         <span className="text-gray-500 text-sm">{skill.level}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div 
//                           className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
