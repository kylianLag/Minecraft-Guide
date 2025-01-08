import { Link } from "react-router-dom"; // Importation de la balise Link pour la navigation interne avec React Router.

function AnnoncePartage(props) {  // Définition du composant AnnoncePartage avec des props (propriétés).
    return(
        <section className="call-to-action mt-10 bg-green-100 p-2 text-center" >  {/* Section avec un fond vert clair, un padding et un alignement centré. */}
            <h2 className="mt-2 mb-2"><strong>Aidez nous !</strong></h2>  {/* Titre principal de la section, encourageant les utilisateurs à aider. */}
            <h3 className="text-lg font-bold">{props.titre}</h3>  {/* Sous-titre, dont le texte est dynamique via `props.titre`. */}
            <p className="text-sm">{props.content}</p>  {/* Description du contenu, dynamique via `props.content`. */}
            
            {/* Lien vers une autre page, ici vers une page communautaire */}
            <Link to="/community" className="text-blue-500 underline">
                En savoir plus  {/* Texte du lien */}
            </Link>
        </section>
    );
}

export default AnnoncePartage;  // Exportation du composant pour l'utiliser ailleurs dans l'application.
