import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { formatPhoneNumber } from '@/lib/utils';

const Contact = () => {
  useScrollAnimation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Social links
  const socialLinks = [
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
    { name: 'Behance', icon: 'fab fa-behance', url: '#' },
    { name: 'Dribbble', icon: 'fab fa-dribbble', url: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' }
  ];
  
  // Contact info
  const contactInfo = {
    phone: '070741850',
    email: '123456@gmail.com',
    location: 'Sri Lanka'
  };
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real implementation, you would send the form data to a server here
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-20 section-transition bg-gradient-to-b from-[#0F172A] to-[#0A0F1C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Have a project in mind? Let's work together to bring your vision to life!</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 slide-in">
            <div className="p-8 bg-[#0F172A]/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-display font-semibold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-blue-500"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Phone</h4>
                    <p className="text-white mt-1">{formatPhoneNumber(contactInfo.phone)}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-blue-500"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email</h4>
                    <p className="text-white mt-1">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-blue-500"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Location</h4>
                    <p className="text-white mt-1">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-gray-300 font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      aria-label={social.name}
                      className="bg-blue-500/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 slide-in">
            <div className="p-8 bg-[#0F172A]/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-display font-semibold mb-6 text-white">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0A0F1C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0A0F1C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#0A0F1C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full bg-[#0A0F1C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
