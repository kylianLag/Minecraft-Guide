import React from 'react'; // Importation de React pour pouvoir utiliser JSX.

function Sommaire(){  // Définition du composant Sommaire qui retourne le sommaire du guide.
    return(
        <section className="duration-500 ease-in-out ">  {/* Section contenant le sommaire avec des animations pour l'ouverture */}
            <h2 className='pb-3 mb-4'><strong>Sommaire du Guide de Survie</strong></h2>  {/* Titre principal du sommaire */}
            
            {/* Liste des éléments du sommaire */}
            <ul className="space-y-6"> 
                {/* Chaque élément du sommaire est une liste avec des liens d'ancrage vers des sections du guide */}
                
                {/* Exemple d'élément de liste pour un chapitre du guide */}
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#introduction" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Introduction</a>  {/* Lien vers la section Introduction */}
                </li>

                {/* Répétition pour chaque chapitre/section du guide */}
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#premier-pas" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Premier Pas</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#artisanat" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Maîtrise de l'Artisanat et des Recettes de Craft</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#ennemis" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Survivre aux Premiers Ennemi et Monstres</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#cavernes" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Explorer les Cavernes et Miner des Ressources Précieuses</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#fermes" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Créer un Système de Fermes et de Ressources Illimitées</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#enchantements" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Comprendre les Enchantements et Améliorer vos Équipements</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#nether" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Le Nether</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#potions" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Les Potions</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#ender-dragon" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">L'End et L'Ender Dragon</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#apres-fin" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">La Suite après la fin</a>
                </li>
                <li className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-lg hover:scale-105 hover:bg-green-50 transition-all duration-300">
                    <a href="#conclusion" className="text-lg font-semibold text-gray-800 hover:text-green-600 hover:underline">Conclusion</a>
                </li>
            </ul>
        </section>
    );
}

export default Sommaire;
