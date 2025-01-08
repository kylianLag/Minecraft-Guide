import { useState } from "react"; // Importation de useState de React pour gérer l'état du composant.
import GuideSommaire from './GuideSommaire'; // Importation du composant GuideSommaire, qui contient probablement les éléments du sommaire.

function SommaireAnimation() {  // Définition du composant principal SommaireAnimation.
    // Déclaration d'un état 'isExpanded' avec sa fonction de mise à jour 'setIsExpanded' pour suivre si le sommaire est ouvert ou non.
    const [isExpanded, setIsExpanded] = useState(false);

    // Fonction qui inverse l'état 'isExpanded' (l'ouvre ou le ferme lorsqu'on clique sur le bouton).
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='mb-6 text-center'> {/* Conteneur principal avec un espacement en bas et centré. */}
            
            {/* Bouton pour ouvrir/fermer le sommaire, avec un texte dynamique selon l'état d'expansion. */}
            <button 
                onClick={handleToggle}  
                className="mb-6 bg-[#8B4513] text-white p-3 rounded-lg shadow-lg hover:bg-[#A0522D] hover:scale-105 transition-all duration-300 w-full text-center font-bold text-lg"
                >
                {isExpanded ? 'Enlever le sommaire' : 'Voir le sommaire'}  {/* Le texte du bouton change en fonction de l'état. */}
            </button>

            {/* Section qui contient le sommaire, avec une transition d'animation pour l'ouverture/fermeture. */}
            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isExpanded ? "max-h-[999px]" : "max-h-0"
                }`}
            >
                {/* Le composant GuideSommaire est conditionnellement rendu en fonction de l'état 'isExpanded'. */}
                <GuideSommaire />
            </div>
        </div>
    );
}

export default SommaireAnimation;  // Exportation du composant pour qu'il puisse être utilisé ailleurs dans l'application.
