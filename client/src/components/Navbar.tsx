import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300 glass-card",
      isScrolled ? "py-2 shadow-lg" : "py-4"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-display font-bold text-white">
            <span className="text-blue-500">M</span>indinu
          </a>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => navigateTo('home')} className="text-gray-300 hover:text-blue-500 transition-colors">Home</button>
            <button onClick={() => navigateTo('about')} className="text-gray-300 hover:text-blue-500 transition-colors">About</button>
            <button onClick={() => navigateTo('portfolio')} className="text-gray-300 hover:text-blue-500 transition-colors">Portfolio</button>
            <button onClick={() => navigateTo('gallery')} className="text-gray-300 hover:text-blue-500 transition-colors">Gallery</button>
            <button onClick={() => navigateTo('skills')} className="text-gray-300 hover:text-blue-500 transition-colors">Skills</button>
            <button onClick={() => navigateTo('testimonials')} className="text-gray-300 hover:text-blue-500 transition-colors">Testimonials</button>
            <button onClick={() => navigateTo('contact')} className="text-gray-300 hover:text-blue-500 transition-colors">Contact</button>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-[#0A0F1C]", isMenuOpen ? "block" : "hidden")}>
        <div className="container mx-auto px-4 py-3 space-y-2">
          <button onClick={() => navigateTo('home')} className="block text-gray-300 hover:text-blue-500 py-2 transition-colors w-full text-left">Home</button>
          <button onClick={() => navigateTo('about')} className="block text-gray-300 hover:text-blue-500 py-2 transition-colors w-full text-left">About</button>
          <button onClick={() => navigateTo('portfolio')} className="block text-gray-300 hover:text-blue-500 py-2 transition-colors w-full text-left">Portfolio</button>
          <button onClick={() => navigateTo('gallery')} className="block text-gray-300 hover:text-blue-500 py-2 transition-colors w-full text-left">Gallery</button>
          <button onClick={() => navigateTo('skills')} className="block text-gray-300 hover:text-blue-500 py-2 transition-colors w-full text-left">Skills</button>
          <button onClick={() => navigateTo('testimonials')} className="block text-gray-300 hover:text-blue-500 py-2 transition-colors w-full text-left">Testimonials</button>
          <button onClick={() => navigateTo('contact')} className="block text-gray-300 hover:text-blue-500 py-2 transition-colors w-full text-left">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
