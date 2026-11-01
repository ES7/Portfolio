import React from 'react';
import { ExternalLink, Calendar, Eye, BookOpen } from 'lucide-react';

const articles = [
  {
    title: "Building a Jev-Style Decision Model From Scratch (Part 2)",
    excerpt: "After the case study on JEV in part 1 I tried to rebuilt JEV model rom scratch in this article, using the model behaviour from the experiments and tests covered in part 1.",
    date: "Oct 21, 2026",
    readTime: "21 min read",
    views: "2k",
    url: "https://medium.com/@sayedebad.777/building-a-jev-style-decision-model-from-scratch-part-2-1f98c0044a07",
    image: "a3.png"
  },
  {
    title: "Scikit-LLM: Scikit-Learn Meets Large Language Models",
    excerpt: "A deep dive into Scikit-Learn's new library Scikit-LLM which brings the power of LLMs like GPT, Vertex, Gemma, Mistral, Llama, etc into scikit-learn ecosystem.",
    date: "Sep 10, 2024",
    readTime: "11 min read",
    views: "9.1k",
    url: "https://medium.com/@sayedebad.777/scikit-llm-scikit-learn-meets-large-language-models-986ff149abcc",
    image: "a1.png"
  },
  {
    title: "Building a Transformer from Scratch: A Step-by-Step Guide",
    excerpt: "In this article, we will implement the Transformer model from scratch, translating the theoretical concepts into working code.",
    date: "Jun 06, 2024",
    readTime: "14 min read",
    views: "12.6k",
    url: "https://medium.com/@sayedebad.777/building-a-transformer-from-scratch-a-step-by-step-guide-a3df0aeb7c9a",
    image: "a2.png"
  },
];

// Article series: replace title, count, description, url and image
const series = [
  {
    title: "AWS for Beginners",
    count: 20,
    description: "A series of articles covering all AWS services from basics to production, covering all the important services and their use cases.",
    url: "https://medium.com/@sayedebad.777/list/aws-fcb3bd4023ac",
    image: "a4.png"
  },
  {
    title: "Systems Design & Architecture",
    count: 16,
    description: "A series of articles that cover the fundamentals of system design and architecture, including best practices and real-world examples.",
    url: "https://medium.com/@sayedebad.777/list/system-design-cf586f769062",
    image: "a5.png"
  },
  {
    title: "DevOps",
    count: 4,
    description: "A series of articles covering fundametals of DevOps and famous tools used in corporate world for DevOps, CI/CD and Automation.",
    url: "https://medium.com/@sayedebad.777/list/devops-9f69c244db4c",
    image: "a6.png"
  },
];

const MediumArticles = () => {
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
            {articles.map((article) => (
              <article key={article.title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${article.image}`}
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

          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Article Series</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                In-depth, multi-part series that take a topic from the basics to production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {series.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.image}`}
                      alt={item.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      <div className="flex items-center text-white text-xs">
                        <BookOpen size={12} className="mr-1" />
                        <span>{item.count} articles</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                    <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Explore Series
                      <ExternalLink size={16} className="ml-2" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
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
