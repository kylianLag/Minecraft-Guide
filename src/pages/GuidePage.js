import React from 'react'; // Importation de React pour pouvoir utiliser JSX dans ce composant.
import { Link } from 'react-router-dom'; // Importation du composant Link pour gérer la navigation entre les pages.
import Minecraft_Accueil from '../assets/img/Minecraft_Accueil.webp'; // Importation de l'image de couverture pour la page d'accueil du guide.
import AnnoncePartage from '../components/AnnoncePartage'; // Importation du composant AnnoncePartage qui semble afficher une annonce ou un appel à la communauté.
import Introduction from '../components/Introduction'; // Importation du composant Introduction pour afficher l'introduction du guide.
import MinecraftButton from '../components/MinecraftButton'; // Importation du composant MinecraftButton pour afficher des boutons personnalisés.
import SommaireAnimation from '../components/SommaireAnimation'; // Importation du composant SommaireAnimation, probablement pour afficher un sommaire animé.

function GuidePage() {  // Définition du composant principal GuidePage.
  return (
    <main className="bg-amber-50 max-w-6xl ml-[23.5%] p-8">  {/* Le conteneur principal, avec un fond amber, une largeur maximale et du padding. */}
      
      {/* Introduction du guide, avec le titre et la description du guide de survie. */}
      <Introduction
        title="Minecraft-Guide - Guide de Survie"
        content="Nouveau sur Minecraft, perdu face à l'immensité du jeu ? Pas de souci, ce guide est fait pour vous ! 
        Découvrez les bases du jeu, maîtrisez vos premières constructions et partez à l'aventure en toute simplicité. 
        Nous avons préparé des astuces pratiques, des conseils pour optimiser vos constructions et une liste d'objectifs pour enrichir votre expérience. 
        Que vous soyez un explorateur ou un constructeur, ce guide vous aidera à tirer le meilleur parti de Minecraft."
      />
      
      {/* Le composant SommaireAnimation, probablement pour afficher un sommaire animé (affiché sous l'introduction). */}
      <SommaireAnimation/>
      
      {/* Section "Pourquoi un guide de survie ?", expliquant l'importance du guide. */}
      <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Pourquoi un guide de survie ?</h3>
        <p>
            Minecraft est un jeu aux multiples facettes, avec un monde vaste et une liberté de jeu immense. Que vous souhaitiez construire une ville monumentale, explorer des cavernes profondes, ou simplement survivre face à des créatures hostiles, chaque aspect du jeu demande une approche différente. Ce guide est conçu pour vous fournir les bases et les astuces nécessaires pour survivre, prospérer et profiter pleinement de l'expérience Minecraft. 
        </p>
      </section>
      
      {/* Affichage de l'image de couverture du guide, probablement liée au jeu Minecraft. */}
      <img className="mt-8" src={Minecraft_Accueil} alt="Image d'accueil de Minecraft" />
      
      {/* Section avec un appel à l'action pour inviter les utilisateurs à partager leurs conseils avec la communauté. */}
      <AnnoncePartage
        title="Envie d'ajouter vos Conseils Minecraft ?"
        content="Rejoignez notre communauté et partagez vos secrets avec d'autres joueurs !"
      />
      
      {/* Section "Comment utiliser ce guide ?", expliquant comment les utilisateurs peuvent suivre le guide. */}
      <section className="p-6 mt-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Comment utiliser ce guide ?</h3>
        <p className='mb-8'>
          Ce guide est conçu pour être suivi étape par étape. Chaque section du guide vous fournira des informations clés et des astuces pour avancer dans Minecraft, du début à la fin. N'hésitez pas à revenir aux sections précédentes si vous avez des doutes ou si vous souhaitez approfondir un sujet particulier. 
          <br/>
          Nous vous recommandons de commencer par l'introduction et de progresser jusqu'aux sections avancées lorsque vous vous sentez prêt à relever de nouveaux défis.
        </p>
        
        {/* Lien pour commencer le guide, redirigeant l'utilisateur vers la page "premier pas". */}
        <Link to="/guide/premier pas">
          <MinecraftButton
            text="Je Commence Le guide !"  
          />
        </Link>
      </section>

    </main>
  );
}

export default GuidePage;  // Exportation du composant GuidePage.
