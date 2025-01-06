import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import GuidePage from './pages/GuidePage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-amber-50">

        {/* Barre de Navigation */}
        
        <Navbar />

        <div className="w-3/4 bg-beige-50 p-6 flex-1">
          {/* Définition des routes */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
