import React from 'react';

const SectionLoader = () => (
  <div className="w-full h-[400px] flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 my-4 animate-pulse">
    <div className="w-8 h-8 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
  </div>
);

export default SectionLoader;