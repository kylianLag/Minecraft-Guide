import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Chaque fois que la route change, on scroll vers le haut

  return null; // Ce composant n'a pas besoin de rendre quelque chose
}

export default ScrollToTop;