import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
          screens:{ 
       "max-lg" : {"max":"1000px"},
          },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",


       primary:"#FF9F0D",

      },
    

    },
  },
  plugins: [],
};
export default config;
