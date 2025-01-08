import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import GuidePage from './pages/GuidePage';
import GuidePremierPas from './pages/GuidePremierPas';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Router>
      <div className='text-center'>
      
        <div className="flex bg-amber-50">
        {/* Barre de Navigation */}
        <Navbar />

        {/* Contenu de la page */}
        <ScrollToTop/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/guide/premier pas" element={<GuidePremierPas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
        </div>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
