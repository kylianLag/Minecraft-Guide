import React from "react";
import { Link } from "react-router-dom";
import block_brique from "../assets/icons/block_brique.webp";
import creeper from "../assets/icons/creeper.webp";
import diamond from "../assets/icons/diamond.webp";
import diamond_pickaxe from "../assets/icons/diamond_pickaxe.webp";
import Animated from "../components/HoverAnimation";
import Introduction from "../components/Introduction";
import MinecraftButton from "../components/MinecraftButton";
function Home() {
    return (
        
                <main className="bg-amber-50 max-w-6xl ml-[23.5%] p-8">
                    <header className="App-Header mb-8">
                    <Introduction
                        title="Bienvenue sur Minecraft Guide !"
                        content="Bienvenue sur le site de référence des joueurs Minecraft ! Découvrez un guide complet pour profiter pleinement de l'expérience de jeu, accompagné de nombreuses astuces pour vos constructions et votre aventure. Vous y trouverez également une liste d'objectifs à accomplir, pour pimenter votre gameplay et repousser vos limites !"
                    />
                </header>

                {/* Liste des Fonctionnalités */}
                <section className="features">
                    <h3 className="text-center text-2xl font-bold mb-6">Ce que vous trouverez sur Minecraft Guide :</h3>
                    <ul className="text-center items-center space-y-4 ">
                        <Animated src={diamond_pickaxe} alt="Pioche en diamant" className="w-6 h-6" title = "Un Guide Complet : " text = "Découvrez tous les secrets du jeu pour bien démarrer et aller plus loin dans vos aventures Minecraft."/>
                        <li className="gap-2 inline-flex hover:scale-105 transition-transform duration-300">
                            <img class = "w-6" src={block_brique} alt="block de brique" className="w-6 h-6" /> <strong>Astuces de Construction : </strong> Améliorez vos constructions grâce à nos astuces qui vont révolutionner vos constructions.
                        </li>
                        <li className="gap-2 inline-flex hover:scale-105 transition-transform duration-300">
                            <img class = "w-8 mr-1"src={creeper} alt="slime" className="w-6 h-6" /> <strong>Les Mobs :</strong> Une liste complète des animaux et monstres que vous pouvez rencontrer dans le jeu, avec leurs caractéristiques et leurs loots.
                        </li>
                        <li className="gap-2  inline-flex hover:scale-105 transition-transform duration-300">
                            <img class = " w-6" src={diamond} alt="diamond" className="w-6 h-6" /> <strong>Les Minerais :</strong> Une liste détaillée des minerais que vous pouvez extraire, avec leurs caractéristiques.
                        </li>
                        <li className="gap-2 inline-flex hover:scale-105 transition-transform duration-300 p-2">
                            🎯 <strong>Liste d'Objectifs :</strong> Atteignez les objectifs que nous avons élaborés pour un gameplay plus immersif et stimulant.
                        </li>
                    </ul>

                    {/* Bouton */}
                    <div className="flex justify-center mt-8">
                        <Link to="/guide">
                            <MinecraftButton
                                text="Explorer le Guide"
                                className="hover:bg-green-700 transition-colors duration-300"
                            />
                        </Link>
                    </div>
                </section>

                {/* Section Astuce du jour */}
                <section className="text-center mx-auto max-w-5xl p-8 featured bg-yellow-100 max-w-4xl p-6 mt-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">💡 Astuce du jour :</h3>
                    <p>Savez-vous que les Endermen deviennent neutres si vous portez une citrouille ? Essayez-le lors de votre prochaine aventure !</p>
                </section>

                <section className="call-to-action mt-10 bg-green-100 p-4 text-center">
                    <h3 className="text-lg font-bold">Envie d'ajouter vos astuces Minecraft ?</h3>
                    <p className="text-sm">Rejoignez notre communauté et partagez vos secrets avec d'autres joueurs !</p>
                    <Link to="/community" className="text-blue-500 underline">
                        En savoir plus
                    </Link>
                </section>
                
                


            </main>
        
    );
}

export default Home;
