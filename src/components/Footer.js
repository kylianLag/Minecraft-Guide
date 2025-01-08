import React from "react"; // Importation de React pour pouvoir utiliser JSX.

function Footer() {  // Définition du composant Footer.
    return (
        <div className=" bg-coal border-solid border-2 border-black ">  {/* Conteneur du footer avec un fond de couleur personnalisée 'bg-coal' et une bordure noire. */}
            <footer className="text-gray-50 flex-grow text-center max-w-6xl ml-[23.5%] p-8">  {/* Section de footer avec alignement centré, texte clair et marge interne. */}
                {/* Texte du footer avec un copyright et une note sur le site communautaire. */}
                <p>&copy; 2025 Minecraft Guide. <br />Site Communautaire qui n'a aucun lien avec Mojang</p>
                
                {/* Navigation du footer contenant des liens */}
                <nav>
                    {/* Lien vers la page de contact */}
                    <a className="text-gray-50 hover:text-gray-300" href="/contact">Contact</a> |  {/* Séparateur entre les liens */}
                    
                    {/* Lien vers la page des mentions légales */}
                    <a className="text-gray-50 hover:text-gray-300" href="/terms"> Mentions légales</a>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;  // Exportation du composant Footer pour l'utiliser ailleurs dans l'application.
