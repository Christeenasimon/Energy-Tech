
import React from 'react';
import Section from './Section';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="mb-24">
        <h2 className="text-sm uppercase tracking-[0.4em] text-[#e31e24] font-black mb-6">Chemicals</h2>
        <h3 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-10">AQUA Division</h3>
        <p className="text-slate-500 text-2xl max-w-3xl leading-relaxed font-medium">
          Engineering the chemistry of reliability. Specialty formulations for boiler and cooling systems.
        </p>
      </div>

      <div className="space-y-32">
        {PRODUCTS.map((group, gIndex) => (
          <div key={gIndex}>
            <div className="mb-16">
              <h4 className="text-3xl font-black uppercase tracking-widest text-slate-900">{group.category}</h4>
              <div className="w-24 h-2 bg-[#e31e24] mt-4" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
              {group.items.map((item, iIndex) => (
                <div key={iIndex} className="space-y-6">
                  <h5 className="text-[#e31e24] font-black text-xl tracking-tight uppercase">{item.name}</h5>
                  <p className="text-slate-600 leading-relaxed text-lg border-l-2 border-gray-100 pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Products;
