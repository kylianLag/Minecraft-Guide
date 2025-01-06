import React from "react";

function Footer(){
    return(
        <div>
            <footer class = "flex-grow">
                <p>&copy; 2025 Minecraft Guide. Tous droits réservés.</p>
                <nav>
                    <a href="/contact">Contact</a> | <a href="/terms">Mentions légales</a>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;