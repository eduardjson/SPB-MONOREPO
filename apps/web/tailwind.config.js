/** @type {import('tailwindcss').Config} */
export default {
  // Переключаем dark mode на использование класса
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
