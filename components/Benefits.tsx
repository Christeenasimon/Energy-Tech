
import React from 'react';
import Section from './Section';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <Section className="bg-slate-900 text-white">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-[#e31e24] font-bold mb-6">Why Choose Us</h2>
          <h3 className="text-5xl font-bold mb-8 leading-tight">Optimizing performance, ensuring longevity.</h3>
          <p className="text-slate-400 text-lg">
            Under our Annual Maintenance Contracts, we tune your equipment to peak efficiency, ensuring minimal fuel consumption and significant reductions in operational costs.
          </p>
        </div>
        <div className="grid gap-6">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-2 w-2 h-2 bg-[#e31e24] shrink-0" />
              <p className="text-xl font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
