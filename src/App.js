import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Importe les composants nécessaires pour la gestion des routes.
import Footer from './components/Footer'; // Importe le composant Footer.
import Navbar from './components/Navbar'; // Importe le composant Navbar.
import ScrollToTop from './components/ScrollToTop'; // Importe le composant ScrollToTop, probablement pour faire défiler la page vers le haut après une navigation.
import GuidePage from './pages/GuidePage'; // Importe la page GuidePage.
import GuidePremierPas from './pages/GuidePremierPas'; // Importe la page GuidePremierPas.
import Home from './pages/Home'; // Importe la page d'accueil (Home).
import NotFound from './pages/NotFound'; // Importe la page NotFound pour gérer les routes non trouvées.

function App() {
  return (
    <Router> {/* Définit la route principale avec Router. */}
      <div className='text-center'> {/* Conteneur principal avec un alignement centré. */}
      
        <div className="flex bg-amber-50"> {/* Div de type flex, avec un fond de couleur ambrée. */}
        
          <Navbar /> {/* Affiche le composant de la barre de navigation. */}

          <ScrollToTop /> {/* Affiche le composant ScrollToTop, probablement pour réinitialiser le scroll en haut de la page à chaque changement de route. */}

          {/* Définition des routes de l'application */}
          <Routes>
            <Route exact path="/" element={<Home />} /> {/* Route pour la page d'accueil. */}
            <Route path="/guide" element={<GuidePage />} /> {/* Route pour la page GuidePage. */}
            <Route path="/guide/premier pas" element={<GuidePremierPas />} /> {/* Route pour la page GuidePremierPas. */}
            <Route path="*" element={<NotFound />} /> {/* Route par défaut pour gérer les 404 (page non trouvée). */}
          </Routes>
          
        </div>
        
        <Footer /> {/* Affiche le footer en bas de la page. */}
      </div>
      
      {/* Ferme le composant Router pour gérer la navigation dans l'application. */}
    </Router> 
  );
}

export default App; // Exporte le composant App pour qu'il soit utilisé ailleurs (par exemple dans index.js).
