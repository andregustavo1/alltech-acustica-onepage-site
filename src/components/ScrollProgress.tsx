
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setWidth(percentage);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="scroll-progress" style={{ width: `${width}%` }} />
  );
};

export default ScrollProgress;
