import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //background Color
        primaryBackground: "#1e1e1e",
        secondaryBackground: "#0b0b0b",
        // primary Color
        primary: "#B4A258",
        primaryLight: "#c6bb7e",
        primaryDark: "#a6904c",
        // secondary Color
        secondary: "#5C5C5C",
        secondaryLight: "#6d6d6d",
        secondaryDark: "#4f4f4f",
      },

      
      
      screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',

        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} satisfies Config;
