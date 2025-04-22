import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Gallery image type
interface GalleryImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const Gallery = () => {
  useScrollAnimation();
  
  // State for the active category
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'branding', name: 'Branding' },
    { id: 'posters', name: 'Posters' },
    { id: 'illustrations', name: 'Illustrations' },
    { id: 'logos', name: 'Logos' }
  ];
  
  // Gallery images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Brand Identity - Coffee Shop",
      description: "Complete branding package for a local coffee shop",
      imageUrl: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JhcGhpYyBkZXNpZ24sIGJyYW5kaW5nfHx8fHx8MTY5NzIxMjAwMA&ixlib=rb-4.0.3&q=80&w=800",
      category: "branding"
    },
    {
      id: 2,
      title: "Festival Poster Series",
      description: "Creative poster designs for a summer music festival",
      imageUrl: "https://images.unsplash.com/photo-1617778368431-f97343a411ac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JhcGhpYyBkZXNpZ24sIHBvc3RlcnN8fHx8fHwxNjk3MjEyMTAw&ixlib=rb-4.0.3&q=80&w=800",
      category: "posters"
    },
    {
      id: 3,
      title: "Digital Character Illustration",
      description: "Fantasy character design for a children's book",
      imageUrl: "https://images.unsplash.com/photo-1633988354540-d3f4e97c8ba2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGlnaXRhbCBhcnQsIGlsbHVzdHJhdGlvbnx8fHx8fDE2OTcyMTIyMDA&ixlib=rb-4.0.3&q=80&w=800",
      category: "illustrations"
    },
    {
      id: 4,
      title: "Eco Brand Logo",
      description: "Minimalist logo design for an eco-friendly product line",
      imageUrl: "https://images.unsplash.com/photo-1570479376645-517ebe3a9f0b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nbywgYnJhbmRpbmd8fHx8fHwxNjk3MjEyMzAw&ixlib=rb-4.0.3&q=80&w=800",
      category: "logos"
    },
    {
      id: 5,
      title: "Restaurant Menu Design",
      description: "Creative menu layout and typography for an upscale restaurant",
      imageUrl: "https://images.unsplash.com/photo-1583319293155-de5bd74bd2a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JhcGhpYyBkZXNpZ24sIG1lbnV8fHx8fHwxNjk3MjEyNDAw&ixlib=rb-4.0.3&q=80&w=800",
      category: "branding"
    },
    {
      id: 6,
      title: "Tech Conference Poster",
      description: "Bold poster design for an annual technology conference",
      imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Z3JhcGhpYyBkZXNpZ24sIHRlY2h8fHx8fHwxNjk3MjEyNTAw&ixlib=rb-4.0.3&q=80&w=800",
      category: "posters"
    },
    {
      id: 7,
      title: "Fantasy World Illustration",
      description: "Detailed digital landscape of an imaginary world",
      imageUrl: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGlnaXRhbCBhcnQsIGZhbnRhc3l8fHx8fHwxNjk3MjEyNjAw&ixlib=rb-4.0.3&q=80&w=800",
      category: "illustrations"
    },
    {
      id: 8,
      title: "Fitness Brand Identity",
      description: "Complete branding package for a fitness studio",
      imageUrl: "https://images.unsplash.com/photo-1574689211272-bc14e289e223?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJhbmRpbmcsIGZpdG5lc3N8fHx8fHwxNjk3MjEyNzAw&ixlib=rb-4.0.3&q=80&w=800",
      category: "branding"
    },
    {
      id: 9,
      title: "Geometric Logo Collection",
      description: "Series of minimalist logos based on geometric shapes",
      imageUrl: "https://images.unsplash.com/photo-1633354931133-27493613dbce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9nbywgZ2VvbWV0cmljfHx8fHx8MTY5NzIxMjgwMA&ixlib=rb-4.0.3&q=80&w=800",
      category: "logos"
    }
  ];
  
  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);
  
  return (
    <section id="gallery" className="py-20 section-transition bg-gradient-to-b from-[#0A0F1C] to-[#0F172A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Browse through my creative work and design projects.</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#0F172A]/50 text-gray-300 hover:bg-blue-500/10 hover:text-blue-500'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map(image => (
            <div key={image.id} className="gallery-item overflow-hidden rounded-xl shadow-lg slide-in">
              <div className="relative group">
                <img 
                  src={image.imageUrl} 
                  alt={image.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-display font-semibold text-white">{image.title}</h3>
                  <p className="text-gray-300 mt-2">{image.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs bg-blue-500/20 text-blue-500 rounded-full">
                    {categories.find(c => c.id === image.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors">
            Load More
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;