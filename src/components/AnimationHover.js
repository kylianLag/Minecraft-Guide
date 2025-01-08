import React, { useState } from "react";


function Animated(props){
    const [isHovered, setIsHovered] = useState(false);
    const animated = isHovered ? 'rotate-45': 'rotate-0';
    return(
    <li className = " gap-2 inline-flex hover:scale-105 transition-transform duration-300" onMouseEnter = {() => setIsHovered(true)} 
        onMouseLeave  = {()=>setIsHovered(false)}>
            
        <img src = {props.src} alt = "" className={`w-6 animate-spin transform transition-transform duration-10 ease-in-out ${animated}`}/>
        <strong>{props.title}</strong>{props.text}
    </li>
        
    );
}

    

export default Animated
