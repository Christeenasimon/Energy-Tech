
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section 
      id={id}
      className={`min-h-screen flex flex-col justify-center px-6 py-20 md:px-20 lg:px-40 ${className}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
