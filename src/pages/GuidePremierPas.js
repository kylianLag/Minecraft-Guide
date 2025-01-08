import { Link } from 'react-router-dom'; // Importation de Link de react-router-dom pour gérer la navigation sans recharger la page.
import MinecraftButton from '../components/MinecraftButton'; // Importation du composant MinecraftButton, qui semble être un bouton personnalisé pour la navigation.

function GuidePremierPas() {  // Définition du composant GuidePremierPas, représentant une page dans le guide.
    return (
        <main className="bg-amber-50 max-w-6xl ml-[23.5%] p-8">  {/* Le container principal avec un fond amber, une largeur maximale et du padding. */}
            
            <div className='flex'> {/* Un conteneur flex pour organiser les boutons de navigation dans une ligne. */}
                <Link to="/guide">  {/* Lien vers la page précédente du guide. */}
                    <MinecraftButton text="Page Précedente" />  {/* Le bouton personnalisé pour la page précédente. */}
                </Link>
                <Link to="/guide/Artisanat">  {/* Lien vers la page suivante du guide (dans ce cas, la page sur l'Artisanat). */}
                    <MinecraftButton text="Page Suivante" />  {/* Le bouton personnalisé pour la page suivante. */}
                </Link>
            </div>

        </main>
    );
}

export default GuidePremierPas;  // Exportation du composant pour qu'il puisse être utilisé dans d'autres parties de l'application.
