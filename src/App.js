import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GuidePage from './pages/GuidePage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex bg-amber-50">
        {/* Barre de Navigation */}
        <Navbar />

        {/* Contenu de la page */}
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      
      <Footer />
    </Router>
  );
}

export default App;
