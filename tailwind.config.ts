import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
       
       
        'xs': { 'max': '1023px' },
        'sm' : {'min': '768px', 'max': '1023px'  },
        'md': { 'min': '1024px' },
        'lg': '1281px',
        'xl': '1430px',
        '2xl': '1700px',
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        white: 'white'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'spin-slow': {
          from: { transform: 'rotae(-360deg)' },
          to: { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
