import React from 'react';
import { IconStar } from './Icons';

const InfoPanel: React.FC = () => {
  return (
    <div className="bg-[#1a1a1e] border border-gray-700 w-full md:w-64 p-4 text-xs text-gray-400 font-mono">
      <div className="flex justify-between items-center text-[#DFFF00] mb-3 border-b border-gray-700 pb-2">
        <span className="flex items-center gap-1 font-bold">
          <IconStar className="w-3 h-3 fill-current" /> 课前注意事项
        </span>
        <span className="text-lg leading-none">-</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="mb-1 text-gray-500">3D部分使用 <span className="text-[#DFFF00]">Blender 4.0</span> 版本</p>
          <p className="text-gray-500">版本与 <span className="text-[#DFFF00]">UE 5.5</span></p>
        </div>
        
        <div>
          <p className="text-gray-600 mb-1">咨询群</p>
          <p className="text-white text-lg font-bold tracking-wider">631761958</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;