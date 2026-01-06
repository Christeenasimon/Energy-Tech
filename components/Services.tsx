
import React, { useState } from 'react';
import Section from './Section';
import { SERVICES } from '../constants';

const ServiceIcons = [
  // Boiler Sales - Cart/Sale icon
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  // Boiler Erection - Crane/Construction icon
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 11V4a2 2 0 0 1 2-2h10l4 4v5"/><path d="M12 2v9"/></svg>,
  // Boiler Services - Wrench/Repair icon
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  // AMC - Shield/Check icon
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>,
  // Annual Cleaning - Sparkle/Clean icon
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
  // Training - Book/Education icon
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  // Spares & Chemicals - Flask/Lab icon
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v8"/><path d="M14 2v8"/><path d="M8.5 2h7"/><path d="M14 10a6 6 0 0 1 1.83 11.23L15 22H9l-.83-.77A6 6 0 0 1 10 10Z"/></svg>
];

const Services: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // High-quality industrial boiler room / machinery photo
  const imageUrl = "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000";

  return (
    <Section className="bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-xs uppercase tracking-[0.5em] text-[#e31e24] font-black mb-6">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8 leading-[1.1]">
            Engineering Reliability.
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed max-w-lg font-medium">
            We provide specialized turnkey solutions and meticulous maintenance programs for industrial boiler systems across Kerala.
          </p>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative group overflow-hidden bg-slate-200 aspect-video lg:aspect-square rounded-sm shadow-2xl">
            {!imageError ? (
              <img 
                src={imageUrl} 
                alt="Industrial Boiler and Piping System" 
                className={`w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center p-8 text-center">
                <p className="text-white text-xs font-bold uppercase tracking-widest opacity-50">Industrial Facility Image</p>
              </div>
            )}
            
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#e31e24] border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <div className="absolute inset-0 border-8 border-white/20 pointer-events-none group-hover:border-white/5 transition-all" />
            
            <div className="absolute bottom-4 left-4 bg-[#e31e24] text-white text-[8px] font-black uppercase tracking-[0.3em] px-4 py-2 backdrop-blur-sm">
              Approved IBR Unit
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
        {SERVICES.map((service, index) => (
          <div key={index} className="group border-b border-gray-100 py-8 transition-all hover:bg-white px-6">
            <div className="flex gap-6 items-start">
              <div className="text-[#e31e24] mt-1 shrink-0 p-2 bg-gray-50 border border-gray-100 group-hover:bg-[#e31e24] group-hover:text-white group-hover:border-[#e31e24] transition-all duration-300">
                {ServiceIcons[index]}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-tight group-hover:text-[#e31e24] transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
