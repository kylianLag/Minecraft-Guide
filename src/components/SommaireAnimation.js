import { useState } from "react";
import GuideSommaire from './GuideSommaire';

function SommaireAnimation(){
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
      };
    return(
    <div className='mb-6 text-center'>
        <button
        onClick={handleToggle}
        className="mb-6 bg-[#8B4513] text-white p-3 rounded-lg shadow-lg hover:bg-[#A0522D] hover:scale-105 transition-all duration-300 w-full text-center font-bold text-lg"
        >
        {isExpanded ? 'Enlever le sommaire' : 'Voir le sommaire'}
        </button>
        <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isExpanded ? "max-h-[999px]" : "max-h-0"
        }`}
      >
        <GuideSommaire />
      </div>
    </div> 
        
    );
}

export default SommaireAnimation