import React, { useState } from "react"; // Importation des dépendances React et useState pour la gestion de l'état.

function Animated(props) {  // Définition du composant Animated, qui prend des props comme les sources d'images, titres et textes.
    const [isHovered, setIsHovered] = useState(false);  // Création d'un état `isHovered` pour gérer l'animation lors du survol de l'élément.
    
    // Calcul de la classe CSS à appliquer à l'image pour la rotation
    const animated = isHovered ? 'rotate-45' : 'rotate-0';  // Lorsque l'élément est survolé, il effectue une rotation de 45°.

    return(
        <li className="gap-2 inline-flex hover:scale-105 transition-transform duration-300"  // L'élément li est stylisé pour une mise en page flexible avec un effet de zoom au survol.
            onMouseEnter={() => setIsHovered(true)}  // Lors du survol, l'état `isHovered` devient `true`, activant l'animation.
            onMouseLeave={() => setIsHovered(false)}  // Lorsque la souris quitte l'élément, l'état `isHovered` devient `false`, réinitialisant l'animation.

        >
            {/* Image avec animation de rotation appliquée lorsque l'élément est survolé. */}
            <img src={props.src} alt="" className={`w-6 animate-spin transform transition-transform duration-10 ease-in-out ${animated}`} />
            
            {/* Titre et texte fournis par les props. */}
            <strong>{props.title}</strong>{props.text}
        </li>
    );
}

export default Animated;  // Exportation du composant Animated pour qu'il puisse être utilisé ailleurs dans l'application.
