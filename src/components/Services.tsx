
// import React from 'react';
// import { Code, Brain, Eye, Palette, Zap, Users } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       icon: Brain,
//       title: "Machine Learning Solutions",
//       description: "Custom ML models and algorithms tailored to your business needs, from data preprocessing to deployment.",
//       features: ["Predictive Analytics", "Model Optimization", "MLOps Pipeline", "Performance Monitoring"]
//     },
//     {
//       icon: Eye,
//       title: "Computer Vision Development",
//       description: "Advanced computer vision applications for object detection, image recognition, and visual analytics.",
//       features: ["Object Detection", "Image Classification", "OCR Systems", "Video Analytics"]
//     },
//     {
//       icon: Code,
//       title: "AI Consulting & Strategy",
//       description: "Strategic guidance on AI implementation, technology selection, and digital transformation.",
//       features: ["AI Strategy", "Technology Assessment", "Implementation Planning", "Team Training"]
//     },
//     {
//       icon: Zap,
//       title: "Robotics & Automation",
//       description: "Intelligent robotics solutions for automation, navigation, and human-robot interaction.",
//       features: ["Autonomous Navigation", "Robot Control", "Sensor Integration", "Path Planning"]
//     },
//     {
//       icon: Palette,
//       title: "Multimedia AI Applications",
//       description: "Creative applications of AI in multimedia, digital art, and interactive experiences.",
//       features: ["Generative Art", "Style Transfer", "Interactive Media", "Creative Tools"]
//     },
//     {
//       icon: Users,
//       title: "Research & Development",
//       description: "Cutting-edge research collaboration and prototype development for innovative solutions.",
//       features: ["Research Papers", "Proof of Concepts", "Innovation Labs", "Technical Mentoring"]
//     }
//   ];

//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive AI and ML services to transform your ideas into intelligent solutions.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                 <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//                   <service.icon size={24} className="text-white" />
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
                
//                 <ul className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-sm text-gray-700">
//                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <div className="mt-6">
//                   <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
//                     Learn More →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
