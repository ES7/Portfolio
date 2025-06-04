
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Background from '@/components/Background';
import Projects from '@/components/Projects';
import MediumArticles from '@/components/MediumArticles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Background />
      <Projects />
      <MediumArticles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
