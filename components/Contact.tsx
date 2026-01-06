
import React from 'react';
import Section from './Section';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#e31e24] font-black mb-6">Connect</h2>
            <h3 className="text-5xl font-bold text-slate-900 tracking-tighter">
              Industrial Reliability starts here.
            </h3>
          </div>
          
          <div className="space-y-6">
            <address className="not-italic text-slate-800 text-xl font-medium leading-relaxed max-w-xs">
              {CONTACT_INFO.address}
            </address>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-[#e31e24] text-white py-3 px-6 rounded-none font-bold text-sm transition-all active:scale-95 hover:bg-black uppercase tracking-widest shadow-lg"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Us
            </a>
            
            <a 
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-900 py-3 px-6 rounded-none font-bold text-sm transition-all active:scale-95 hover:bg-slate-900 hover:text-white uppercase tracking-widest"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Instagram
            </a>

            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-2 bg-slate-50 text-slate-600 border border-gray-100 py-3 px-6 rounded-none font-bold text-sm transition-all active:scale-95 hover:border-[#e31e24] hover:text-[#e31e24] uppercase tracking-widest"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-10 flex flex-col justify-center border-l-4 border-[#e31e24]">
          <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-gray-400">Office Support</h4>
          <div className="space-y-6">
            {CONTACT_INFO.secondaryPhones.map((ph, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-4 group">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Line 0{i + 1}</span>
                <a href={`tel:${ph}`} className="font-bold text-lg text-slate-900 group-hover:text-[#e31e24] transition-colors">{ph}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
