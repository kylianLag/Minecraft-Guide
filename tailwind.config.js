/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajoute tous les fichiers React
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraftia: ['Minecraftia', 'sans-serif'],
      }
    }, // Tu peux personnaliser ici
  },
  plugins: [],
};
