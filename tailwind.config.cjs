/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: { // crea una clase bg- personalizada, sirve para reutilizarlos en distintos puntos de la app (y achicar la pila de clases)
        'mobile-light': 'url("/img/bg-mobile-light.jpg")',
        'mobile-dark': 'url("/img/bg-mobile-dark.jpg")',
        'desktop-light': 'url("/img/bg-desktop-light.jpg")',
        'desktop-dark': 'url("/img/bg-desktop-dark.jpg")'
      }
    },
  },
  plugins: [],
  darkMode: 'class' // esta propiedad deshabilita la detección automática de modo oscuro según el SO y pasa a ser manual
}
