import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx, ts, tsx}",
    "./public/index.html",
    flowbite.content(), // Añade contenido de flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Añade el plugin de flowbite
  ],
};
