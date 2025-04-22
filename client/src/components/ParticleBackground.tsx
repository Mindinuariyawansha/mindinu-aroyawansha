import { useEffect, useRef } from 'react';
import * as p5 from 'p5';

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  color: p5.Color;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    let sketch = (p: p5) => {
      let particles: Particle[] = [];
      const particleCount = 80;
      
      p.setup = () => {
        let cnv = p.createCanvas(window.innerWidth, window.innerHeight);
        cnv.id("p5-canvas");
        cnv.style('position', 'fixed');
        
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            r: p.random(2, 4),
            dx: p.random(-0.5, 0.5),
            dy: p.random(-0.5, 0.5),
            color: p.color(
              p.random(50, 100), 
              p.random(150, 200), 
              p.random(230, 255), 
              p.random(100, 150)
            )
          });
        }
      };
      
      p.draw = () => {
        p.clear();
        p.noStroke();
        
        for (let particle of particles) {
          p.fill(particle.color);
          p.circle(particle.x, particle.y, particle.r);
          
          // Move particles
          particle.x += particle.dx;
          particle.y += particle.dy;
          
          // Connect nearby particles with lines
          for (let other of particles) {
            let d = p.dist(particle.x, particle.y, other.x, other.y);
            if (d < 120 && particle !== other) {
              p.stroke(particle.color);
              p.strokeWeight(0.5);
              p.line(particle.x, particle.y, other.x, other.y);
            }
          }
          
          // Wrap around edges
          if (particle.x < 0) particle.x = p.width;
          if (particle.x > p.width) particle.x = 0;
          if (particle.y < 0) particle.y = p.height;
          if (particle.y > p.height) particle.y = 0;
        }
      };
      
      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };
    
    let myP5 = new p5(sketch, containerRef.current);
    
    return () => {
      myP5.remove();
    };
  }, []);
  
  return <div ref={containerRef} id="p5-container" className="absolute top-0 left-0 w-full h-full"></div>;
};

export default ParticleBackground;
