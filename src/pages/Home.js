import React from "react";
import Introduction from "../components/Introduction";
function Home(){
    return(
        <div>
            <main>
                <header className='App-Header'>
                    <Introduction
                        title = "Bienvenue sur Minecraft Guide !"
                        content = "Bienvenue sur le site de référence des joueurs Minecraft ! Découvrez un guide complet pour profiter pleinement de l'expérience de jeu, accompagné de nombreuses astuces pour vos constructions et votre aventure. Vous y trouverez également une liste d'objectifs à accomplir, pour pimenter votre gameplay et repousser vos limites !"
                    />
                
                </header>
                {/* Liste des Fonctionnalités */ }
                <section className="features">
    <h3>Ce que vous trouverez sur le site</h3>
    <ul>
        <li>
            <strong>Un Guide Complet :</strong> Découvrez tous les secrets du jeu pour bien démarrer et aller plus loin dans vos aventures Minecraft.
        </li>
        <li>
            <strong>Astuces de Construction :</strong> Améliorez vos constructions grâce à nos conseils d'experts.
        </li>
        <li>
            <strong>Les Mobs :</strong> Une liste complète des animaux et monstres que vous pouvez rencontrer dans le jeu, avec leurs caractéristiques et leurs loots.
        </li>
        <li>
            <strong>Les Minerais :</strong> Une liste détaillée des minerais que vous pouvez extraire, avec leurs caractéristiques.
        </li>
        <li>
            <strong>Liste d'Objectifs :</strong> Atteignez les objectifs que nous avons élaborés pour un gameplay plus immersif et stimulant.
        </li>
    </ul>
</section>

            </main>
        </div>
    );
}
export default Home;