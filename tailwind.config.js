/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        blue: {
          900: '#005B80',
        },
        emerald: {
          300: '#6EE7B7',
          400: '#34D399',
          600: '#059669',
        },
      },
      fontFamily: {
        gotham: ['Gotham', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};