import useScrollAnimation from '@/hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();
  
  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const downloadCV = () => {
    // This would typically download a file
    // For now, we'll just alert since we don't have an actual file
    alert('CV download would start here in a real implementation');
  };
  
  return (
    <section id="about" className="py-20 section-transition bg-gradient-to-b from-[#0F172A] to-[#0A0F1C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 slide-in">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551909094-8e7f25628cea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JhcGhpYyBkZXNpZ24sIHN0dWRpbywgY3JlYXRpdmUsIGRlc2lnbiB8fHx8fHwxNjk3MjA5NzAw&ixlib=rb-4.0.3&q=80&w=600" 
                alt="Design Workspace" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 slide-in">
            <h3 className="text-2xl font-display font-semibold mb-4 text-blue-500">My Creative Journey</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Hello! I'm Nethum Matheesha, known as Mindinu in the design world. Despite being only 13 years old, I've been passionate about graphic design for over 2 years, turning ideas into compelling visual stories.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I specialize in creating memorable brand identities, eye-catching posters, and digital illustrations that capture attention and communicate messages effectively. My design approach combines creativity with strategic thinking to deliver work that not only looks good but also achieves its purpose.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              When I'm not designing, I'm constantly learning new techniques and exploring different styles to expand my creative toolkit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={downloadCV}
                className="px-8 py-3 bg-blue-300 hover:bg-blue-400 text-gray-900 font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-download"></i>
                Download CV
              </button>
              <button 
                onClick={scrollToSkills}
                className="px-8 py-3 border border-blue-300 text-blue-300 rounded-full hover:bg-blue-300/10 transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-arrow-right"></i>
                My Skills
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
