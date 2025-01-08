import React from "react"; // Importation de React pour pouvoir utiliser JSX et créer des composants.

function Introduction(props){  // Définition du composant fonctionnel "Introduction", qui prend des propriétés (props).
    return(  // Le composant retourne un JSX représentant une section d'introduction.
        <section className="Introduction flex flex-col items-center py-6 shadow-2md mb-5">
            {/* Section contenant l'introduction, avec une mise en page flexible. */}
            
            <h1 className="font-minecraftia text-center font-black">
                {props.title}  {/* Le titre de l'introduction passé en prop (dynamique). */}
            </h1>
            
            <p className="mt-6">
                {props.content}  {/* Le contenu de l'introduction passé en prop (dynamique). */}
            </p>
        </section>
    );
}

export default Introduction;  // Exporte le composant Introduction pour qu'il puisse être utilisé ailleurs dans l'application.
