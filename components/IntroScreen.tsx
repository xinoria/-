import React from 'react';
import { IconArrowRight } from './Icons';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Video Background Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        {/* Overlay for darkening the video */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        {/* Sci-fi Grid Overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-15" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Vimeo Iframe - Scaled to cover screen and hide controls */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <iframe
            className="w-[300%] h-[300%] md:w-[150%] md:h-[150%] object-cover opacity-60"
            src="https://player.vimeo.com/video/1145136177?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            title="Mirage Intro"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
        <div 
          onClick={onEnter}
          className="cursor-pointer group text-center select-none p-12 transition-transform duration-700 hover:scale-105"
        >
          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-black text-[#DFFF00] tracking-tighter uppercase mb-4 drop-shadow-[0_0_15px_rgba(223,255,0,0.3)]">
            MIRAGE
          </h1>
          
          {/* Subtitles */}
          <div className="space-y-2 border-t border-gray-700 pt-6 mt-2 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#DFFF00]"></div>
             
             <p className="text-white text-xl md:text-3xl font-bold tracking-[0.2em] uppercase">
               Concept Design Course
             </p>
             <p className="text-gray-400 text-sm md:text-base tracking-[0.5em] font-mono">
               概念设计综合课程
             </p>
          </div>

          {/* Enter Button Indicator */}
          <div className="mt-16 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
             <span className="text-[#DFFF00] text-xs font-mono tracking-widest mb-2">CLICK TO ENTER</span>
             <IconArrowRight className="text-[#DFFF00] w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-4 h-4 border-l-2 border-t-2 border-white/20"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border-r-2 border-t-2 border-white/20"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l-2 border-b-2 border-white/20"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r-2 border-b-2 border-white/20"></div>
      
      {/* Footer Text */}
      <div className="absolute bottom-8 w-full text-center z-20 pointer-events-none">
         <p className="text-[10px] text-gray-600 tracking-widest font-mono">EST. 2026</p>
      </div>
    </div>
  );
};

export default IntroScreen;