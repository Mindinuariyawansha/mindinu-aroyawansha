import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const slideInElements = document.querySelectorAll('.slide-in');
    
    const checkSlide = () => {
      slideInElements.forEach(element => {
        // Half way through the element
        const slideInAt = (window.scrollY + window.innerHeight) - (element as HTMLElement).offsetHeight / 2;
        // Bottom of the element
        const elementBottom = (element as HTMLElement).offsetTop + (element as HTMLElement).offsetHeight;
        const isHalfShown = slideInAt > (element as HTMLElement).offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;
        
        if (isHalfShown && isNotScrolledPast) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', checkSlide);
    
    // Trigger on page load
    window.addEventListener('load', checkSlide);
    // Also check immediately in case elements are already in view
    checkSlide();
    
    return () => {
      window.removeEventListener('scroll', checkSlide);
      window.removeEventListener('load', checkSlide);
    };
  }, []);
};

export default useScrollAnimation;
