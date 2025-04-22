import { useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  targetRef: RefObject<Element>;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  targetRef,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px'
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin,
        threshold
      }
    );

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, onIntersect, rootMargin, threshold]);
};

export default useIntersectionObserver;
