
import React from 'react';
import { ExternalLink, Calendar, Eye } from 'lucide-react';

const MediumArticles = () => {
  const articles = [
    {
      title: "Scikit-LLM: Scikit-Learn Meets Large Language Models",
      excerpt: "A deep dive into Scikit-Learn's new library Scikit-LLM which brings the power of LLMs like GPT, Vertex, Gemma, Mistral, Llama, etc into scikit-learn ecosystem.",
      date: "Sep 10, 2024",
      readTime: "11 min read",
      views: "7.8k",
      url: "https://medium.com/@sayedebad.777/scikit-llm-scikit-learn-meets-large-language-models-986ff149abcc",
      image: "/a1.png"
    },
    {
      title: "Building a Transformer from Scratch: A Step-by-Step Guide",
      excerpt: "In this article, we will implement the Transformer model from scratch, translating the theoretical concepts into working code.",
      date: "Jun 06, 2024",
      readTime: "14 min read",
      views: "6.4k",
      url: "https://medium.com/@sayedebad.777/building-a-transformer-from-scratch-a-step-by-step-guide-a3df0aeb7c9a",
      image: "/a2.png"
    },
    {
      title: "Training the LLaMA Model from Scratch",
      excerpt: "In this article, we will see how to train the LLaMA model that we built in the previous article.",
      date: "Jun 18, 2024",
      readTime: "7 min read",
      views: "3.6k",
      url: "https://medium.com/@sayedebad.777/training-the-llama-model-from-scratch-4100d35fa622",
      image: "/a3.png"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Medium Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing insights and knowledge about AI and technology through thoughtful writing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center text-white text-xs">
                      <Eye size={12} className="mr-1" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={14} className="mr-2" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read Article
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://medium.com/@sayedebad.777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 hover:scale-105"
            >
              View All Articles
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediumArticles;
