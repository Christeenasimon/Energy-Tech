
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <h2 className="text-sm uppercase tracking-[0.4em] text-[#e31e24] font-black">Background</h2>
          <h3 className="text-5xl md:text-6xl font-bold leading-[1.1] text-slate-900">
            Specialized Engineering Excellence.
          </h3>
        </div>
        <div className="space-y-10 text-xl text-slate-600 leading-relaxed font-medium">
          <p>
            We are a dedicated group of engineers specialized in boiler erection works across the entire state of Kerala.
          </p>
          <p>
            With considerable experience in the field, we provide comprehensive turnkey solutions to convert all NON-IBR boilers into IBR boilers, strictly meeting standard regulatory rules.
          </p>
          <div className="border-l-[12px] border-slate-900 pl-8 py-4">
            <span className="font-black text-slate-900 text-2xl block mb-2 uppercase tracking-tight">Approved IBR Erectors</span>
            <p className="text-lg">
              Our status ensures that every project meets the highest technical and safety compliance standards in Kerala.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
