import React from "react";
import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Introuvable</h1>
            <p>Oups ! La page que vous cherchez n'existe pas ou a été déplacée.</p>
            <Link to="/" style={{ color: '#007BFF', textDecoration: 'underline' }}>
                Retourner à l'accueil
            </Link>
        </div>
    );
}
export default NotFound;