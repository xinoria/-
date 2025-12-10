import React, { useState } from 'react';
import { IconArrowRight, IconSquare } from './Icons';
import CalendarPopup from './CalendarPopup';

interface CourseModuleProps {
  id: string;
  title: string;
  titleCN: string;
  subTitle: string;
  subTitleCN: string;
  image: string;
  software: string[];
  dates: string;
  tags: string[];
  monthIndex: number; // Added to control calendar
}

const CourseModule: React.FC<CourseModuleProps> = ({
  id,
  title,
  titleCN,
  subTitle,
  subTitleCN,
  image,
  software,
  dates,
  tags,
  monthIndex
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div id={`module-${id}`} className="relative border border-gray-800 bg-[#0c0c0e] mb-12 group overflow-visible z-0 hover:z-10 transition-all scroll-mt-24">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#DFFF00] z-10"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#DFFF00] z-10"></div>

      {/* Main Image Area */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent"></div>
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 pointer-events-none">
           <h2 className="text-3xl md:text-5xl font-black uppercase text-[#DFFF00] tracking-tighter mb-0 drop-shadow-md">
             {title}
           </h2>
           <h3 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-md tracking-wide">
             {titleCN}
           </h3>
           <div className="border-l-2 border-[#DFFF00] pl-3 mb-6">
             <p className="text-gray-400 text-sm tracking-widest uppercase font-mono">
               {subTitle}
             </p>
             <p className="text-gray-500 text-xs tracking-wide font-mono mt-1">
               {subTitleCN}
             </p>
           </div>

           <div className="flex flex-wrap gap-2 mb-4">
             {tags.map((tag, idx) => (
               <span key={idx} className="bg-black/50 border border-gray-700 text-xs text-gray-300 px-2 py-1 rounded-sm backdrop-blur-sm">
                 ● {tag}
               </span>
             ))}
           </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-gray-800 relative bg-[#0c0c0e]">
        
        {/* Number & Type */}
        <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col justify-between bg-[#111]">
          <div>
             <div className="flex items-baseline gap-2 mb-1">
               <span className="text-4xl font-bold text-[#DFFF00] border border-[#DFFF00] w-12 h-12 flex items-center justify-center">
                 {id}
               </span>
               <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white uppercase leading-none">{title.split('·')[1] || "Design"}</h3>
                  <span className="text-xs text-gray-500 mt-1">{titleCN.split('·')[1] || "设计"}</span>
               </div>
             </div>
          </div>
          
          <div className="mt-8">
            <p className="text-[10px] text-gray-600 mb-2 uppercase">Core Software / 核心软件</p>
            <ul className="space-y-1">
              {software.map((sw, i) => (
                <li key={i} className="text-sm font-bold text-white uppercase tracking-wider">{sw}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Date & CTA */}
        <div className="md:col-span-9 flex flex-col justify-end relative">
          
          {/* Yellow Bar */}
          <div className="bg-[#DFFF00] p-4 md:p-6 flex justify-between items-center text-black mt-auto relative">
             <div>
               <p className="text-xs font-bold mb-1 uppercase opacity-80">Class Schedule / 课程表</p>
               <p className="text-2xl md:text-4xl font-black tracking-tighter">{dates}</p>
             </div>
             
             {/* Trigger Area for Calendar */}
             <div 
               className="relative cursor-pointer"
               onMouseEnter={() => setIsCalendarOpen(true)}
               onMouseLeave={() => setIsCalendarOpen(false)}
             >
               <IconSquare className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ${isCalendarOpen ? 'rotate-90 scale-110' : ''}`} />
               
               {/* Tooltip Popup */}
               <div className={`absolute bottom-full right-0 mb-4 transition-all duration-300 origin-bottom-right ${isCalendarOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}`}>
                 <CalendarPopup year={2026} monthIndex={monthIndex} />
                 {/* Little tail for the popup */}
                 <div className="absolute -bottom-2 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#F2F2F2]"></div>
               </div>
             </div>
          </div>

          {/* Bottom Link Bar */}
          <div className="bg-[#E6E6E6] p-3 flex justify-between items-center hover:bg-white transition-colors cursor-pointer group/link">
            <div>
              <span className="text-xs font-bold uppercase tracking-wide px-2 block">Course Details | Direct Payment</span>
              <span className="text-[10px] font-bold text-gray-500 tracking-wide px-2 block">课程详情 | 直接报名</span>
            </div>
            <IconArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModule;