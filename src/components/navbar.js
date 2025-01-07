import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-1/6 h-screen bg-green-600 py-8 flex flex-col items-center shadow-2xl font-minecraftia z-10">
      <h1 className="text-white text-3xl font-semibold mb-8">Minecraft Guide</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-white text-lg hover:text-gray-300">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/guide" className="text-white text-lg hover:text-gray-300">
            Guide
          </Link>
        </li>
        <li className="text-white text-lg hover:text-gray-300">Mobs</li>
        <li className="text-white text-lg hover:text-gray-300">Minerais</li>
        <li className="text-white text-lg hover:text-gray-300">Objectifs</li>
      </ul>
    </div>
  );
};

export default Navbar;
