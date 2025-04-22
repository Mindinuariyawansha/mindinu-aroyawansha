import { useRef, useEffect } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Design skill type
interface DesignSkill {
  name: string;
  percentage: number;
}

// Software tool type
interface SoftwareTool {
  name: string;
  icon: string;
  level: string;
}

const Skills = () => {
  useScrollAnimation();
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const animateSkillBars = () => {
    const skillProgressElements = document.querySelectorAll('.skill-progress');
    
    skillProgressElements.forEach(element => {
      const width = element.getAttribute('data-width') || '0%';
      (element as HTMLElement).style.width = '0';
      
      setTimeout(() => {
        (element as HTMLElement).style.width = width;
      }, 200);
    });
  };
  
  useIntersectionObserver({
    targetRef: skillsRef,
    onIntersect: animateSkillBars,
    threshold: 0.1
  });
  
  // Design skills data
  const designSkills: DesignSkill[] = [
    { name: "Logo & Brand Identity", percentage: 90 },
    { name: "Digital Illustration", percentage: 85 },
    { name: "Typography", percentage: 80 },
    { name: "Print Design", percentage: 75 },
    { name: "UI/UX Design", percentage: 70 }
  ];
  
  // Software tools data
  const softwareTools: SoftwareTool[] = [
    { name: "Photoshop", icon: "fab fa-adobe", level: "Advanced" },
    { name: "Illustrator", icon: "fab fa-adobe", level: "Advanced" },
    { name: "Figma", icon: "fab fa-figma", level: "Intermediate" },
    { name: "InDesign", icon: "fab fa-adobe", level: "Intermediate" },
    { name: "After Effects", icon: "fab fa-adobe", level: "Basic" },
    { name: "Procreate", icon: "fas fa-pencil-ruler", level: "Advanced" }
  ];
  
  return (
    <section id="skills" className="py-20 section-transition bg-gradient-to-b from-[#0A0F1C] to-[#0F172A]" ref={skillsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">My Skills</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Here are the creative tools and skills I've mastered during my design journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="slide-in">
            <h3 className="text-2xl font-display font-semibold mb-8 text-white">Design Skills</h3>
            
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-500 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-width={`${skill.percentage}%`} 
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="slide-in">
            <h3 className="text-2xl font-display font-semibold mb-8 text-white">Software Proficiency</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {softwareTools.map((tool, index) => (
                <div key={index} className="p-6 bg-[#0F172A]/50 rounded-xl border border-gray-700 text-center hover:border-blue-500 transition-colors">
                  <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${tool.icon} text-blue-500 text-3xl`}></i>
                  </div>
                  <h4 className="text-white font-medium">{tool.name}</h4>
                  <p className="text-blue-500 font-medium text-sm mt-1">{tool.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
