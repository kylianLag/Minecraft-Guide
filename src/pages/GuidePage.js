import React from 'react';
import { Link } from 'react-router-dom';
import Minecraft_Accueil from '../assets/img/Minecraft_Accueil.webp';
import AnnoncePartage from '../components/AnnoncePartage';
import Introduction from '../components/Introduction';
import MinecraftButton from '../components/MinecraftButton';
function GuidePage() {
  return (
    <main className="bg-amber-50 max-w-6xl ml-[23.5%] p-8">
      <Introduction
        title="Minecraft-Guide - Guide de Survie"
        content="Nouveau sur Minecraft, perdu face à l'immensité du jeu ? Pas de souci, ce guide est fait pour vous ! 
        Découvrez les bases du jeu, maîtrisez vos premières constructions et partez à l'aventure en toute simplicité. 
        Nous avons préparé des astuces pratiques, des conseils pour optimiser vos constructions et une liste d'objectifs pour enrichir votre expérience. 
        Que vous soyez un explorateur ou un constructeur, ce guide vous aidera à tirer le meilleur parti de Minecraft."

      />
      <h2 className='pb-3'><strong>Sommaire du Guide de Survie</strong></h2>
      <ul>
        <li className=' pb-1'>Introduction</li>
        <li className=' pb-1'>Premier Pas</li>
        <li className=' pb-1'>Maîtrise de l'Artisanat et des Recettes de Craft</li>
        <li className=' pb-1'>Survivre aux Premiers Ennemi et Monstres</li>
        <li className=' pb-1'>Explorer les Cavernes et Miner des Ressources Précieuses</li>
        <li className=' pb-1'>Créer un Système de Fermes et de Ressources Illimitées</li>
        <li className=' pb-1'>Comprendre les Enchantements et Améliorer vos Équipements</li>
        <li className=' pb-1'>Le Nether</li>
        <li className=' pb-1'>Les Potions</li>
        <li className=' pb-1'>L'end et L'Ender Dragon</li>
        <li className=' pb-1'>La Suite aprés la fin</li>
        <li className=' pb-1'>Conclusion</li>
        
      </ul>

      <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Pourquoi un guide de survie ?</h3>
        <p>
            Minecraft est un jeu aux multiples facettes, avec un monde vaste et une liberté de jeu immense. Que vous souhaitiez construire une ville monumentale, explorer des cavernes profondes, ou simplement survivre face à des créatures hostiles, chaque aspect du jeu demande une approche différente. Ce guide est conçu pour vous fournir les bases et les astuces nécessaires pour survivre, prospérer et profiter pleinement de l'expérience Minecraft. 
        </p>
      </section>
        <img className = "mt-8" src={Minecraft_Accueil}/>
      <AnnoncePartage 
        title ="Envie d'ajouter vos Conseils Minecraft ?"
        content = "Rejoignez notre communauté et partagez vos secrets avec d'autres joueurs !"
      />

      <section className=" p-6 mt-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Comment utiliser ce guide ?</h3>
        <p className='mb-8'>
          Ce guide est conçu pour être suivi étape par étape. Chaque section du guide vous fournira des informations clés et des astuces pour avancer dans Minecraft, du début à la fin. N'hésitez pas à revenir aux sections précédentes si vous avez des doutes ou si vous souhaitez approfondir un sujet particulier. 
          <br/>
          Nous vous recommandons de commencer par l'introduction et de progresser jusqu'aux sections avancées lorsque vous vous sentez prêt à relever de nouveaux défis.
        </p>
        <Link to = "/guide/premier pas">
        <MinecraftButton
          text= "Je Commence Le guide !"
        />
        </Link>
      </section>

    </main>
   
  );
}

export default GuidePage;
