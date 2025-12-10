import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#DFFF00] text-black pt-12 pb-8 px-6 md:px-12 relative overflow-hidden group border-b border-black">
      {/* Sci-fi Tech Grid Background Layer */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Base Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-15" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Tech SVG Overlay - Lines Only, No Text */}
        <svg className="absolute inset-0 w-full h-full opacity-50 mix-blend-multiply" preserveAspectRatio="none">
          <defs>
             <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5" />
             </pattern>
          </defs>

          {/* Center Crosshair Lines */}
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />

          {/* Diagonal Lines representing depth/perspective */}
          <line x1="30%" y1="0" x2="40%" y2="100%" stroke="black" strokeWidth="0.5" opacity="0.2" />
          <line x1="70%" y1="0" x2="60%" y2="100%" stroke="black" strokeWidth="0.5" opacity="0.2" />

          {/* Decorative Elements - Top Left */}
          <path d="M 40 20 L 80 20 L 95 35" fill="none" stroke="black" strokeWidth="1.5" />
          <circle cx="40" cy="20" r="2.5" fill="black" />
          
          {/* Decorative Elements - Right Side bracket */}
          <path d="M 95% 30 L 92% 30 L 90% 50" fill="none" stroke="black" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          <rect x="94%" y="28" width="4" height="4" fill="black" />

          {/* Center Tech Box Simulation */}
          <rect x="45%" y="25%" width="10%" height="50%" fill="none" stroke="black" strokeWidth="0.5" opacity="0.3" />
          <circle cx="50%" cy="50%" r="20" fill="none" stroke="black" strokeWidth="0.5" opacity="0.5" />
          <circle cx="50%" cy="50%" r="2" fill="black" />

          {/* Random Floating Crosshairs */}
          <path d="M 200 100 L 210 100 M 205 95 L 205 105" stroke="black" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M 80% 60 L 82% 60 M 81% 55 L 81% 65" stroke="black" strokeWidth="1" strokeOpacity="0.6" vectorEffect="non-scaling-stroke" />

          {/* Bottom Ruler/Scale Markers */}
          {Array.from({ length: 40 }).map((_, i) => (
             <line 
               key={i} 
               x1={`${i * 2.5}%`} 
               y1={i % 5 === 0 ? "90%" : "95%"} 
               x2={`${i * 2.5}%`} 
               y2="100%" 
               stroke="black" 
               strokeWidth={i % 5 === 0 ? 1 : 0.5} 
               opacity="0.5" 
             />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-black/10 pb-4 relative z-10">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2 relative inline-block animate-slide-up">
            Mirage 概念设计综合课程
          </h1>
          <div className="animate-slide-up [animation-delay:200ms] opacity-0 fill-mode-forwards">
            <p className="text-sm md:text-base font-bold tracking-wide uppercase flex items-center gap-2 mt-2">
              <span className="w-3 h-3 bg-black flex items-center justify-center">
                  <span className="w-1 h-1 bg-[#DFFF00] rounded-full"></span>
              </span>
              Character Design • Weapon Design • Vehicle Design
            </p>
            <p className="text-xs font-bold tracking-wide text-black/70 mt-1 pl-5 border-l-2 border-black/20 ml-1.5">
              角色设计 • 武器设计 • 载具设计
            </p>
          </div>
        </div>
      </div>
      
      {/* Side decorative lines */}
      <div className="absolute top-0 right-8 w-[1px] h-full bg-black/10 z-0 hidden lg:block"></div>
      <div className="absolute top-0 left-8 w-[1px] h-full bg-black/10 z-0 hidden lg:block"></div>
    </header>
  );
};

export default Header;