import React from 'react';

interface CalendarPopupProps {
  year: number;
  monthIndex: number; // 0 for Jan, 1 for Feb, etc.
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({ year, monthIndex }) => {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Helper to get days in month
  const getDaysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
  
  // Helper to get day of week for the 1st of the month (0 = Sun, 1 = Mon, ...)
  const getFirstDayOfMonth = (y: number, m: number) => new Date(y, m, 1).getDay();

  const daysInMonth = getDaysInMonth(year, monthIndex);
  const startDay = getFirstDayOfMonth(year, monthIndex); // 0 (Sun) to 6 (Sat)
  
  // Adjust start day so Monday is 0, Sunday is 6 (Standard European/Modern ISO feel often starts Mon, but reference is standard US/Intl mixed. 
  // Reference image: Mon Tue Wed Thu Fri Sat Sun. So Monday is first column.
  // JS getDay(): Sun=0, Mon=1...Sat=6.
  // We want Mon=0, Tue=1 ... Sun=6.
  const gridStartOffset = startDay === 0 ? 6 : startDay - 1;

  const days = [];
  // Padding for empty cells before 1st
  for (let i = 0; i < gridStartOffset; i++) {
    days.push(null);
  }
  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Calculate Highlighted Days (Wednesdays and Saturdays)
  // In the grid starting Monday:
  // Mon(0), Tue(1), Wed(2), Thu(3), Fri(4), Sat(5), Sun(6)
  // We need to check if a specific date corresponds to Wed (day 3 in JS getDay) or Sat (day 6 in JS getDay)
  const isClassDay = (day: number) => {
    const date = new Date(year, monthIndex, day);
    const dayOfWeek = date.getDay(); // 0=Sun, 3=Wed, 6=Sat
    return dayOfWeek === 3 || dayOfWeek === 6;
  };

  return (
    <div className="w-64 bg-[#F2F2F2] text-black shadow-2xl rounded-sm relative font-sans select-none transform transition-all duration-300 origin-bottom-right z-50">
      {/* Clip styling */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-sm shadow-md z-10 flex flex-col items-center justify-center">
         <div className="w-20 h-1 bg-[#333] mt-3 rounded-full"></div>
      </div>

      <div className="p-6 pt-10">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-6 border-b border-gray-300 pb-4">
          <h2 className="text-6xl font-black tracking-tighter leading-none">
            {monthNames[monthIndex]}
          </h2>
          <span className="text-xl font-medium text-gray-500">{year}</span>
        </div>

        {/* Grid Header */}
        <div className="grid grid-cols-7 mb-4 text-xs text-gray-400 font-medium text-center">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-y-3 text-center">
          {days.map((day, idx) => {
            if (!day) return <div key={idx}></div>;
            
            const active = isClassDay(day);
            
            return (
              <div key={idx} className="flex justify-center items-center h-8 relative">
                 {active && (
                   <div className="absolute inset-0 m-auto w-8 h-8 bg-[#DFFF00] rounded-full -z-10 shadow-sm"></div>
                 )}
                 <span className={`text-sm font-bold ${active ? 'text-black' : 'text-gray-700'}`}>
                   {day}
                 </span>
              </div>
            );
          })}
        </div>
        
        {/* Footer decoration */}
        <div className="mt-8 border-t border-gray-200 pt-2 flex justify-between items-center opacity-30">
            <div className="text-[8px] font-mono">CLASS SCHEDULE</div>
            <div className="text-[8px]">Wed & Sat</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPopup;