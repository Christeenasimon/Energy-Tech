
import React from 'react';
import { CONTACT_INFO } from '../constants';

const FloatingButtons: React.FC = () => {
  return (
    <>
      {/* Mobile Sticky Call Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 md:hidden z-50 pointer-events-none">
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="pointer-events-auto w-full bg-[#e31e24] text-white py-5 rounded-none font-black text-center shadow-2xl active:scale-95 transition-transform tracking-widest"
        >
          CALL NOW
        </a>
      </div>

      {/* Floating Instagram DM Button */}
      <a 
        href={CONTACT_INFO.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-10 md:right-10 bg-slate-900 text-white px-6 py-4 rounded-none shadow-2xl active:scale-90 transition-all z-50 hover:bg-[#e31e24] font-black text-xs tracking-[0.2em] uppercase"
      >
        Instagram
      </a>
    </>
  );
};

export default FloatingButtons;
