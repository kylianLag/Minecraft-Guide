import { Link } from 'react-router-dom'; // Importation de Link de react-router-dom pour gérer la navigation sans recharger la page.
import Minecraft_Accueil from '../assets/img/Minecraft_Accueil.webp'; // Importation de l'image de couverture pour la page d'accueil du guide.
import Introduction from '../components/Introduction';
import MinecraftButton from '../components/MinecraftButton'; // Importation du composant MinecraftButton, qui semble être un bouton personnalisé pour la navigation.
import SommaireAnimation from '../components/SommaireAnimation';
function GuidePremierPas() {  // Définition du composant GuidePremierPas, représentant une page dans le guide.
    return (
        <main className="bg-amber-50 max-w-6xl ml-[23.5%] p-8">  {/* Le container principal avec un fond amber, une largeur maximale et du padding. */}
            <Introduction
                title="Minecraft-Guide - Guide de Survie - Premier Pas "
                content="Prêt à débuter votre aventure dans Minecraft ? Tout commence par la création de votre monde !
                    Dans cette section, nous vous guidons pas à pas pour créer un monde qui correspond à vos envies.
                    Découvrez les différentes options du menu de création de monde, apprenez à choisir les bons paramètres, et comprenez les réglages essentiels pour personnaliser votre expérience.
                    Que vous souhaitiez un terrain d'exploration infini ou un défi à relever, cette page vous aidera à poser les premières pierres de votre aventure solo."
                />
      
            {/* Le composant SommaireAnimation, probablement pour afficher un sommaire animé (affiché sous l'introduction). */}
            <SommaireAnimation/>
            <Introduction 
                title="Premier Pas"
                content="Vous venez d'acheter Minecraft et vous êtes prêt à plonger dans l'aventure ! En lançant le jeu, vous arrivez sur le menu principal : un point de départ essentiel pour créer votre premier monde. Découvrons ensemble comment naviguer dans les options et personnaliser votre expérience dès le début."
            />
            <img className="mt-8" src={Minecraft_Accueil} alt="Écran d'accueil de Minecraft" />

            Avant toute chose, pour votre confort et le confort de tous, nous allons modifier la langue du jeu ! 
            Pour cela cliquer sur options , cela va vous conduire vers un nouveau menu comme celui ci dessous :  

            






























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
