"use client";

import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez
    threshold: 0.1,    // Se activa cuando el 10% del elemento es visible
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
