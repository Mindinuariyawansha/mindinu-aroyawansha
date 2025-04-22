import useScrollAnimation from '@/hooks/useScrollAnimation';

// Testimonial type
interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  avatar: string;
  rating: number;
}

const Testimonials = () => {
  useScrollAnimation();
  
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Mindinu created a beautiful and professional brand identity for my business. Despite his young age, his creativity and attention to detail are remarkable. Highly recommended!",
      name: "Sarah Johnson",
      position: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQsIHdvbWFuIHx8fHx8fDE2OTcyMTA0MzQ&ixlib=rb-4.0.3&q=80&w=100",
      rating: 5
    },
    {
      id: 2,
      content: "Working with Mindinu was a pleasure! He created poster designs for our event that exceeded our expectations. His creativity and quick turnaround time were impressive.",
      name: "David Chen",
      position: "Event Organizer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQsIG1hbiB8fHx8fHwxNjk3MjEwNTAw&ixlib=rb-4.0.3&q=80&w=100",
      rating: 5
    },
    {
      id: 3,
      content: "The illustrations Mindinu created for our children's book were absolutely charming! He brought our characters to life with his vibrant style and creative vision.",
      name: "Emily Rodriguez",
      position: "Author",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQsIHdvbWFuIHx8fHx8fDE2OTcyMTA1NTA&ixlib=rb-4.0.3&q=80&w=100",
      rating: 4.5
    }
  ];
  
  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    // Add empty stars to make a total of 5
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };
  
  return (
    <section id="testimonials" className="py-20 section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">What my clients say about working with me and the results we've achieved together.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card p-6 bg-[#0F172A]/50 rounded-xl border border-gray-700 slide-in">
              <div className="flex gap-2 text-yellow-400 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name} portrait`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-blue-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
