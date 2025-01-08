import React from 'react';

const MinecraftButton = ({ text }) => {
  return (
    <button className="relative px-6 py-3 font-bold text-green-900 bg-green-400 border-4 border-green-700 hover:bg-green-500 active:translate-y-1 active:border-green-900 focus:outline-none focus:ring focus:ring-green-300 shadow-md hover:shadow-lg transition-all duration-200"
    >
      {text}
    </button>
  );
};
// Retourne le bouton avec le texte dynamique et les styles définis.
export default MinecraftButton;
