import React from "react";
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <main className="bg-amber-50 max-w-6xl ml-[23.5%] p-8">
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>404 - Page Introuvable</h1>
                <p>Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
                <br/>
                <br/>
                
                Il s'agit d'une erreur ? Veuillez Contacter un Administrateur !
                </p>
                <Link to="/" style={{ color: '#007BFF', textDecoration: 'underline'}}>
                    Retourner à l'accueil
                </Link>
            </div>
        </main>
    );
}
export default NotFound;