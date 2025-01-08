import React from "react"; // Importation de React pour pouvoir utiliser JSX et créer des composants.
import { Link } from "react-router-dom"; // Importation du composant Link de React Router pour effectuer la navigation entre les pages sans rechargement.

const Navbar = () => {  // Définition du composant fonctionnel Navbar.
  return (  // Le composant retourne un JSX représentant la structure HTML de la navbar.
    <div className="fixed top-0 left-0 w-1/6 h-screen bg-green-600 py-8 flex flex-col items-center shadow-2xl font-minecraftia z-10">
      {/* 
        <div> contient la barre de navigation avec des classes CSS de Tailwind pour gérer le style et le positionnement.
        - `fixed`: Positionne la navbar de manière fixe par rapport à la fenêtre de l'utilisateur.
        - `top-0 left-0`: Place la navbar tout en haut à gauche de la page.
        - `w-1/6`: Définit la largeur de la navbar à 1/6 de la largeur totale de l'écran.
        - `h-screen`: Définit la hauteur de la navbar égale à la hauteur de l'écran.
        - `bg-green-600`: Applique une couleur de fond verte à la navbar.
        - `py-8`: Ajoute un padding vertical de 8 unités autour du contenu de la navbar.
        - `flex flex-col items-center`: Utilise Flexbox pour organiser les éléments en colonne et les centrer horizontalement.
        - `shadow-2xl`: Applique une grande ombre autour de la navbar pour créer un effet de profondeur.
        - `font-minecraftia`: Applique une police personnalisée (Minecraftia) au texte de la navbar.
        - `z-10`: Assure que la navbar sera au-dessus des autres éléments en termes de superposition.
      */}
      
      <h1 className=" text-center text-white text-3xl font-semibold mb-8">
        {/* Titre de la navbar, centré, avec une taille de texte de 3xl et une couleur blanche. */}
        Minecraft Guide
      </h1>
      
      <ul className="space-y-4">
        {/* Liste des liens de navigation, avec un espacement vertical entre chaque élément de la liste. */}
        
        <li>
          <Link to="/" className="text-white text-lg hover:text-gray-300">
            {/* Lien vers la page d'accueil */}
            Accueil
          </Link>
        </li>

        <li>
          <Link to="/guide" className="text-white text-lg hover:text-gray-300">
            {/* Lien vers la page de guide */}
            Guide
          </Link>
        </li>

        <li className="text-white text-lg hover:text-gray-300">
          {/* Lien sans destination définie (à remplir selon les besoins) */}
          Mobs
        </li>

        <li className="text-white text-lg hover:text-gray-300">
          {/* Lien sans destination définie (à remplir selon les besoins) */}
          Minerais
        </li>

        <li className="text-white text-lg hover:text-gray-300">
          {/* Lien sans destination définie (à remplir selon les besoins) */}
          Enchantements
        </li>

        <li className="text-white text-lg hover:text-gray-300">
          {/* Lien sans destination définie (à remplir selon les besoins) */}
          Potions
        </li>

        <li className="text-white text-lg hover:text-gray-300">
          {/* Lien sans destination définie (à remplir selon les besoins) */}
          Ferme Automatique
        </li>

        <li className="text-white text-lg hover:text-gray-300">
          {/* Lien sans destination définie (à remplir selon les besoins) */}
          Objectifs
        </li>
      </ul>
    </div>
  );  // Retourne la structure JSX de la navbar
};

export default Navbar;  // Exportation du composant Navbar pour qu'il puisse être utilisé ailleurs dans l'application.
