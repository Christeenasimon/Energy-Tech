
import React from 'react';
import Section from './Section';
import { COMPANY_NAME, TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-slate-900">
            {COMPANY_NAME.split(' ').map((word, i) => (
              <span key={i} className={i >= 2 ? "block text-gray-300" : "block"}>
                {word}
              </span>
            ))}
          </h1>
        </div>
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl font-semibold tracking-tight text-[#e31e24] border-l-8 border-[#e31e24] pl-8 py-4 uppercase">
            {TAGLINE}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
