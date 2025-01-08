import React from "react";

function Footer(){
    return(
        <div className=" bg-coal border-solid border-2 border-black ">
            <footer class = " text-gray-50 flex-grow text-center max-w-6xl ml-[23.5%] p-8">
                <p>&copy; 2025 Minecraft Guide. <br/>Site Communautaire qui n'a aucun lien avec Mojang</p>
                <nav>
                <a className="text-gray-50 hover:text-gray-300" href="/contact">Contact</a> | 
                <a className="text-gray-50 hover:text-gray-300" href="/terms"> Mentions légales</a>

                </nav>
            </footer>
        </div>
    );
}

export default Footer;