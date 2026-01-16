import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 md:px-8 ${dark ? 'bg-[#123a73] text-white' : 'bg-white'} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 border-l-4 border-[#d5a11e] pl-6">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${dark ? 'text-white' : 'text-[#123a73]'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;