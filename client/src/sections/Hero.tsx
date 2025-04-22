import { useEffect } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Hero = () => {
  useScrollAnimation();
  
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-transition pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left slide-in">
            <p className="text-blue-500 font-semibold mb-3">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Mindinu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-300 mb-6">Creative Graphic Designer</h2>
            <p className="text-gray-400 text-lg max-w-xl mb-8">
              A passionate 13-year-old designer with 2 years of experience, specializing in branding, posters, and digital illustrations that tell compelling visual stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToPortfolio}
                className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
              >
                See My Work
              </button>
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500/10 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center slide-in">
            <div className="relative animate-float">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzaWduZXIsIHByb2Zlc3Npb25hbCwgcG9ydHJhaXR8fHx8fHwxNjk3MjA5NjAw&ixlib=rb-4.0.3&q=80&w=500" 
                  alt="Mindinu - Creative Designer" 
                  className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover border-4 border-blue-500 shadow-lg"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              <div className="absolute top-0 -right-4 bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg">
                Graphic Designer
              </div>
              <div className="absolute bottom-5 -left-6 bg-blue-300 text-gray-900 text-sm font-semibold py-2 px-4 rounded-full shadow-lg">
                2+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
