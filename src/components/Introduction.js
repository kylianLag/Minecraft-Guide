import React from "react"; // Importation de React pour pouvoir utiliser JSX et créer des composants.
import Titre from "./Titre";
function Introduction(props){  // Définition du composant fonctionnel "Introduction", qui prend des propriétés (props).
    return(  // Le composant retourne un JSX représentant une section d'introduction.
        <section className="Introduction flex flex-col items-center py-6 shadow-2md mb-5">
            {/* Section contenant l'introduction, avec une mise en page flexible. */}
            <Titre title = {props.title} /> {/* Le titre de l'introduction passé en prop */}
            
            
            <p className="mt-6">
                {props.content}  {/* Le contenu de l'introduction passé en prop */}
            </p>
        </section>
    );
}

export default Introduction;  // Exporte le composant Introduction pour qu'il puisse être utilisé ailleurs dans l'application.
