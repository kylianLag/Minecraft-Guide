import React from "react"; // Importe React pour pouvoir utiliser les composants React.
import { Link } from "react-router-dom"; // Importe le composant `Link` de React Router pour la navigation sans recharger la page.

function NotFound() { // Définition du composant fonctionnel NotFound.
  return (
    <main className="bg-amber-50 max-w-6xl ml-[23.5%] p-8"> {/* Main contenant le message d'erreur. */}
      <div style={{ textAlign: 'center', padding: '50px' }}> {/* Centre le contenu et ajoute du padding autour. */}
        <h1>404 - Page Introuvable</h1> {/* Titre principal pour indiquer que la page n'est pas trouvée. */}
        <p>
          Oups ! La page que vous cherchez n'existe pas ou a été déplacée. {/* Message d'erreur expliquant la situation. */}
          <br />
          Il s'agit d'une erreur ? Veuillez Contacter un Administrateur ! {/* Indication pour contacter l'administrateur en cas de besoin. */}
        </p>
        <Link to="/" style={{ color: '#007BFF', textDecoration: 'underline' }}> {/* Lien vers la page d'accueil avec style personnalisé. */}
          Retourner à l'accueil {/* Texte du lien pour rediriger vers la page d'accueil. */}
        </Link>
      </div>
    </main>
  );
}

export default NotFound; // Exporte le composant NotFound pour qu'il puisse être utilisé ailleurs dans l'application.
