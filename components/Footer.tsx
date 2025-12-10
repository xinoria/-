import React from 'react';
import { IconBox } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 pt-10 pb-16 mt-12 font-mono bg-[#0c0c0e] px-6 md:px-10 rounded-sm">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Schedule */}
          <div>
            <h5 className="text-[#DFFF00] mb-2 uppercase font-bold text-sm tracking-wider">Class Schedule</h5>
            <p className="text-gray-500 mb-2 text-[10px] uppercase tracking-wide">课程安排</p>
            <div className="text-xs text-gray-300 space-y-1">
               <p>Mon / Wed / Sat</p>
               <p className="font-bold">09:00 - 11:30</p>
               <p className="text-gray-500 mt-2">Tencent Meeting + Dropbox Sync</p>
            </div>
          </div>
          
          {/* Column 2: Pricing (Big, Chinese) */}
          <div className="bg-[#1a1a1e] p-4 -m-4 md:m-0 rounded-sm border border-gray-800 lg:col-span-1">
            <h5 className="text-[#DFFF00] mb-3 uppercase font-bold text-base tracking-wider">课程费用</h5>
            
            <div className="flex flex-col gap-1">
               <div className="mb-2">
                 <span className="text-gray-400 text-xs block mb-1">全套课程</span>
                 <span className="text-white font-bold text-lg line-through decoration-gray-600 decoration-2">7000 RMB</span>
               </div>
               
               <div>
                 <span className="text-[#DFFF00] text-xs font-bold block mb-1 blink">早鸟优惠价</span>
                 <span className="text-white font-black text-3xl tracking-tight">4000 RMB</span>
               </div>
               <p className="text-gray-500 text-[10px] mt-2">(早鸟名额有限，先到先得)</p>
            </div>
          </div>

          {/* Column 3: Hardware */}
          <div>
             <h5 className="text-[#DFFF00] mb-2 uppercase font-bold text-sm tracking-wider">Hardware Specs</h5>
             <p className="text-gray-500 mb-2 text-[10px] uppercase tracking-wide">硬件要求</p>
             <div className="text-xs text-gray-300 space-y-1">
               <p>Windows 10/11</p>
               <p>GPU: RTX 2060 or Higher</p>
               <p>RAM: 32GB+</p>
               <p className="text-gray-500 mt-2">Mac OS M3 Chip Recommended</p>
             </div>
          </div>

          {/* Column 4: Info / Contact (Moved from InfoPanel) */}
          <div>
             <h5 className="text-[#DFFF00] mb-2 uppercase font-bold text-sm tracking-wider">Course Notes</h5>
             <p className="text-gray-500 mb-2 text-[10px] uppercase tracking-wide">课前须知 / 咨询</p>
             <div className="text-xs text-gray-300 space-y-3">
               <div>
                 <p className="text-gray-500 mb-1">软件版本:</p>
                 <p><span className="text-[#DFFF00]">Blender 4.0</span> + <span className="text-[#DFFF00]">UE 5.5</span></p>
               </div>
               <div>
                 <p className="text-gray-500 mb-1">咨询 QQ 群:</p>
                 <p className="text-xl font-bold text-white tracking-widest border-b border-gray-700 inline-block pb-1">631761958</p>
               </div>
             </div>
          </div>
       </div>

       <div className="flex justify-between items-end mt-16 border-t border-gray-800 pt-6">
          <div className="flex gap-2 text-[#DFFF00]">
             <IconBox className="w-5 h-5" />
             <div className="w-5 h-5 bg-[#DFFF00] rounded-full animate-pulse"></div>
             <div className="w-5 h-5 border border-[#DFFF00] rotate-45"></div>
          </div>
          <div className="text-right">
             <p className="opacity-40 text-[10px] tracking-widest">© 2026 MIRAGE GAME ART COURSE.</p>
             <p className="opacity-30 text-[9px] mt-1">版权所有 翻录必究</p>
          </div>
       </div>
    </footer>
  );
};

export default Footer;