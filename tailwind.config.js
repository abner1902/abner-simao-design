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
        'marquee-fast': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
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
      fontWeight: {
        ultra: '950',
      },
      fontSize: {
        // DISPLAY — Hero, títulos de página
        'display-xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '900' }],    // 56px
        'display-lg': ['2.5rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '900' }],    // 40px

        // HEADING — Títulos de seção (h2) — v2.2 Abner
        'heading-lg': ['2rem',   { lineHeight: '1.1', letterSpacing: '0.025em', fontWeight: '950' }],  // 32px - tracking-wide + ultra
        'heading-md': ['1.5rem', { lineHeight: '1.1', letterSpacing: '0.025em', fontWeight: '950' }],  // 24px - tracking-wide + ultra

        // LABEL — Categoria, tag, badge
        'label-lg': ['0.75rem', { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '700' }],      // 12px
        'label-sm': ['0.625rem', { lineHeight: '1', letterSpacing: '0.12em', fontWeight: '700' }],     // 10px

        // BODY — Parágrafos
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '500' }],         // 18px
        'body-md': ['1rem',     { lineHeight: '1.6', letterSpacing: '0', fontWeight: '500' }],         // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],         // 14px
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