import React, { useState } from 'react';

const InstructorSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    "https://cdnb.artstation.com/p/assets/images/images/090/691/459/large/xinoria-frame-10.webp?1754586584",
    "https://cdnb.artstation.com/p/assets/images/images/090/552/671/large/xinoria-slide-16-9-24.jpg?1754233223",
    "https://cdnb.artstation.com/p/assets/images/images/080/919/243/large/xinoria-5.jpg?1728910623",
    "https://cdnb.artstation.com/p/assets/images/images/080/211/433/large/xinoria-ipx-pro-12-9-8.jpg?1726993209"
  ];

  return (
    <div className="border border-gray-800 rounded-sm p-6 md:p-10 mb-12 bg-[#0c0c0e]">
      <div className="flex items-center gap-2 mb-8 text-[#DFFF00]">
        <div className="border border-[#DFFF00] w-6 h-6 flex items-center justify-center text-xs font-bold">i</div>
        <div>
          <h3 className="text-xl font-bold uppercase leading-none">About Instructor</h3>
          <p className="text-xs text-gray-400 mt-1">关于讲师</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="mb-2 border-b border-gray-800 pb-1 flex justify-between items-end">
            <h4 className="text-xs text-gray-500 uppercase">Education</h4>
            <span className="text-[10px] text-gray-600">教育背景</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Studied at <span className="text-[#DFFF00]">China Academy of Art</span>.
            <br/>Currently studying Media Arts at <span className="text-[#DFFF00]">Tama Art University</span>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            曾就读于<span className="text-[#DFFF00] opacity-80">中国美术学院</span>。
            <br/>现就读于<span className="text-[#DFFF00] opacity-80">多摩美术大学</span>媒体艺术专业。
          </p>
        </div>
        <div>
          <div className="mb-2 border-b border-gray-800 pb-1 flex justify-between items-end">
             <h4 className="text-xs text-gray-500 uppercase">Projects (2020-2025)</h4>
             <span className="text-[10px] text-gray-600">参与项目</span>
          </div>
           <ul className="text-sm text-gray-300 space-y-2">
             <li>Participated in game projects:</li>
             <li>• <span className="text-[#DFFF00]">Core Fusion</span></li>
             <li>• <span className="text-[#DFFF00]">Girls Frontline 2</span> (Character/Weapon Design)</li>
             <li>• <span className="text-[#DFFF00]">Wuthering Waves</span> (Weapon Design Outsourcing)</li>
           </ul>
           <p className="text-xs text-gray-500 mt-4 leading-relaxed">
             2020-2025参与制作的游戏项目有《熔芯聚变》《少女前线2追放》并负责角色设计，武器设计，与《鸣潮》武器设计（外包）。
           </p>
        </div>
      </div>

      <div>
        <div className="mb-4 flex gap-2 items-baseline">
          <h4 className="text-xs text-gray-500 uppercase">Portfolio Highlights</h4>
          <span className="text-[10px] text-gray-600">作品展示</span>
        </div>
        
        {/* Thumbnails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {portfolioImages.map((url, index) => (
             <div 
               key={index} 
               onClick={() => setSelectedImage(url)}
               className="aspect-[4/3] border border-gray-800 overflow-hidden relative group cursor-pointer"
             >
               <img 
                 src={url} 
                 alt={`Art Work ${index + 1}`} 
                 className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                 <div className="w-8 h-8 rounded-full border border-[#DFFF00] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 bg-black/50">
                    <svg className="w-4 h-4 text-[#DFFF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                 </div>
               </div>
               <div className="absolute bottom-2 left-2 text-[10px] text-[#DFFF00] opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">
                 Work {index + 1}
               </div>
             </div>
           ))}
        </div>
        <div className="mt-4">
             <p className="text-[#DFFF00] font-bold text-sm">Freelance Illustrator / Game Concept Designer</p>
             <p className="text-gray-500 text-xs mt-1">目前为自由插画师 / 游戏概念设计师</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] cursor-pointer group" onClick={() => setSelectedImage(null)}>
            <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#DFFF00] transition-colors">
              <span className="text-xs uppercase font-bold tracking-widest hidden md:block">Close Preview</span>
              <svg className="w-8 h-8 md:w-10 md:h-10 border border-current rounded-full p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
          </div>
          
          <div 
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Full View" 
              className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain shadow-2xl border border-gray-800 select-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorSection;