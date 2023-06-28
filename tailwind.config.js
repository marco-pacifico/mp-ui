/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        nudge: {
          "0%, 100%": { transform: "translateX(25%)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: { 
        nudge: "nudge 1.5s ease-out infinite" 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
