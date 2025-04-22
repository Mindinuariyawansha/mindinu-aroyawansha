import useScrollAnimation from '@/hooks/useScrollAnimation';

// Portfolio project type
interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Portfolio = () => {
  useScrollAnimation();
  
  // Portfolio projects
  const projects: PortfolioProject[] = [
    {
      id: 1,
      title: "Modern Brand Identity",
      description: "Complete branding package including logo design, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nbywgYnJhbmRpbmcsIGRlc2lnbiB8fHx8fHwxNjk3MjA5ODAw&ixlib=rb-4.0.3&q=80&w=600",
      tags: ["Branding", "Logo Design"]
    },
    {
      id: 2,
      title: "Event Poster Series",
      description: "Creative poster designs for a music festival featuring vibrant colors and dynamic typography.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9zdGVyLCBncmFwaGljIGRlc2lnbiB8fHx8fHwxNjk3MjA5ODUw&ixlib=rb-4.0.3&q=80&w=600",
      tags: ["Poster Design", "Typography"]
    },
    {
      id: 3,
      title: "Fantasy Character Design",
      description: "Digital illustration of fantasy characters for a children's book project.",
      image: "https://images.unsplash.com/photo-1566027310439-a73fd3dd211d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGlnaXRhbCBhcnQsIGlsbHVzdHJhdGlvbiB8fHx8fHwxNjk3MjA5OTAw&ixlib=rb-4.0.3&q=80&w=600",
      tags: ["Illustration", "Character Design"]
    },
    {
      id: 4,
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging design for an organic food brand with nature-inspired elements.",
      image: "https://images.unsplash.com/photo-1616088409543-b6ae01aaa06c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFja2FnaW5nIGRlc2lnbiwgcHJvZHVjdCB8fHx8fHwxNjk3MjA5OTUw&ixlib=rb-4.0.3&q=80&w=600",
      tags: ["Packaging", "Sustainable Design"]
    },
    {
      id: 5,
      title: "Social Media Campaign",
      description: "Cohesive social media design templates for a fashion brand's seasonal campaign.",
      image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8c29jaWFsIG1lZGlhLCBkZXNpZ24sIHRlbXBsYXRlICB8fHx8fHwxNjk3MjEwMDAw&ixlib=rb-4.0.3&q=80&w=600",
      tags: ["Social Media", "Digital Marketing"]
    },
    {
      id: 6,
      title: "Mobile App Interface",
      description: "Clean and intuitive user interface design for a productivity mobile application.",
      image: "https://images.unsplash.com/photo-1551651653-c5dcb914d809?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d2ViIGRlc2lnbiwgdWksIHVzZXIgaW50ZXJmYWNlIHx8fHx8fDE2OTcyMTAwNTA&ixlib=rb-4.0.3&q=80&w=600",
      tags: ["UI Design", "Mobile App"]
    }
  ];
  
  return (
    <section id="portfolio" className="py-20 section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">My Portfolio</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Explore my latest creative work, featuring a diverse range of design projects from branding to digital illustrations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card rounded-xl overflow-hidden shadow-xl slide-in">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-display font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 text-xs bg-blue-500/20 text-blue-500 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors">
            View All Projects
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
