import React, { useState } from 'react';
import Header from './components/Header';
import CourseModule from './components/CourseModule';
import InstructorSection from './components/InstructorSection';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';

const App: React.FC = () => {
  // State to control intro screen visibility
  const [showIntro, setShowIntro] = useState(true);

  // Using the specific ArtStation images
  const characterDesignImage = "https://cdnb.artstation.com/p/assets/images/images/080/211/433/large/xinoria-ipx-pro-12-9-8.jpg?1726993209";
  const weaponDesignImage = "https://cdna.artstation.com/p/assets/images/images/092/863/474/large/xinoria-a4-2.webp?1760888428";
  const vehicleDesignImage = "https://cdnb.artstation.com/p/assets/images/images/089/595/285/large/xinoria-32.jpg?1751391701";

  // Scroll handler
  const scrollToModule = (id: string) => {
    const element = document.getElementById(`module-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If intro is active, show only IntroScreen
  if (showIntro) {
    return <IntroScreen onEnter={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 selection:bg-[#DFFF00] selection:text-black animate-in fade-in duration-1000">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative">
        
        {/* Top Layout: Hero/Overview only (InfoPanel removed) */}
        <div className="mb-16 relative">
             <div className="flex items-center gap-2 mb-6">
               <div className="w-2 h-8 bg-[#DFFF00]"></div>
               <div>
                 <h2 className="text-2xl font-bold text-[#DFFF00] uppercase tracking-wide leading-none">
                   Course Overview
                 </h2>
                 <p className="text-sm font-bold text-gray-500 mt-1">课程概览</p>
                 <span className="block text-xs text-gray-600 font-normal tracking-normal mt-2">Interactive Navigation / 点击卡片跳转</span>
               </div>
             </div>

             {/* Drawer / Accordion Container */}
             <div className="flex flex-col md:flex-row h-[400px] border border-gray-800 bg-[#0c0c0e] overflow-hidden">
                
                {/* Card 1: Character */}
                <div 
                   onClick={() => scrollToModule('1')}
                   className="relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b md:border-b-0 md:border-r border-gray-800 cursor-pointer group overflow-hidden"
                >
                   {/* Background Image */}
                   <img 
                     src={characterDesignImage} 
                     className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700" 
                     alt="Character" 
                   />
                   <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-700"></div>

                   {/* Content */}
                   <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                      <div className="text-6xl font-black text-[#DFFF00] opacity-30 group-hover:opacity-100 transition-opacity duration-500">1</div>
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold text-white uppercase leading-none drop-shadow-md">Character<br/>Design</h3>
                        <p className="text-[#DFFF00] text-xs font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">VIEW MODULE ➜</p>
                      </div>
                   </div>
                </div>

                {/* Card 2: Weapon */}
                <div 
                   onClick={() => scrollToModule('2')}
                   className="relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b md:border-b-0 md:border-r border-gray-800 cursor-pointer group overflow-hidden"
                >
                   <img 
                     src={weaponDesignImage} 
                     className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700" 
                     alt="Weapon" 
                   />
                   <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-700"></div>

                   <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                      <div className="text-6xl font-black text-[#DFFF00] opacity-30 group-hover:opacity-100 transition-opacity duration-500">2</div>
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold text-white uppercase leading-none drop-shadow-md">Weapon<br/>Design</h3>
                        <p className="text-[#DFFF00] text-xs font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">VIEW MODULE ➜</p>
                      </div>
                   </div>
                </div>

                {/* Card 3: Vehicle */}
                <div 
                   onClick={() => scrollToModule('3')}
                   className="relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group overflow-hidden"
                >
                   <img 
                     src={vehicleDesignImage} 
                     className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700" 
                     alt="Vehicle" 
                   />
                   <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-700"></div>

                   <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                      <div className="text-6xl font-black text-[#DFFF00] opacity-30 group-hover:opacity-100 transition-opacity duration-500">3</div>
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold text-white uppercase leading-none drop-shadow-md">Vehicle<br/>Design</h3>
                        <p className="text-[#DFFF00] text-xs font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">VIEW MODULE ➜</p>
                      </div>
                   </div>
                </div>
             </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-16">
          <CourseModule 
            id="1"
            title="Game Art · Character Concept"
            titleCN="游戏美术 · 角色概念设计"
            subTitle="Game Concept Art 2D Comprehensive Course"
            subTitleCN="游戏概念美术2D综合课程"
            image={characterDesignImage}
            software={['Photoshop', 'Figma', 'Procreate']}
            dates="2026 3/4 - 3/28"
            monthIndex={2} // March
            tags={['2D Character', 'Line Art', 'Color Theory']}
          />

          <CourseModule 
            id="2"
            title="Game Art · 3D Weapon Concept"
            titleCN="游戏美术 · 3D武器概念设计"
            subTitle="Game Concept Art 3D Hard Surface Course"
            subTitleCN="游戏概念美术3D硬表面课程"
            image={weaponDesignImage} 
            software={['Blender', 'Substance Painter', '3DCoat']}
            dates="2026 4/1 - 4/25"
            monthIndex={3} // April
            tags={['3D Modeling', 'Hard Surface', 'Texturing']}
          />

          <CourseModule 
            id="3"
            title="Game Art · 3D Vehicle Course"
            titleCN="游戏美术 · 3D载具课程"
            subTitle="Game Concept Art 3D Vehicle Course"
            subTitleCN="游戏概念美术3D载具课程"
            image={vehicleDesignImage} 
            software={['Blender', 'Substance Painter', 'Unreal Engine']}
            dates="2026 5/2 - 5/30"
            monthIndex={4} // May
            tags={['Vehicle Design', 'Rendering', 'Compositing']}
          />
        </div>

        {/* Instructor & Footer */}
        <div className="mt-24">
          <InstructorSection />
          <Footer />
        </div>

      </main>
    </div>
  );
};

export default App;