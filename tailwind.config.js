/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundColor:{
        "brand-red":"#CF222E",
        "brand-black":"#000000",
        "brand-blue":"#34b4eb",
        "brand-brown":"#916211",
        "brand-white":"#d1d1d1"
      }
    },
  },
  plugins: [],
}
