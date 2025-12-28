/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-dark': '#2E2E2E',
        'text-muted': '#6B6B6B',
        'primary-blue': '#0B5ED7',
        'primary-dark-blue-start': '#0A3D91',
        'primary-dark-blue-end': '#0B5ED7',
        'background-cream': '#F3F0E4',
        'background-light-yellow': '#FBF5B7',
        'background-dark-brown': '#4B2E24',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif']
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'section': '80px',
      },
      borderRadius: {
        'card': '16px',
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 14px rgba(11, 94, 215, 0.2)',
      },
      transitionProperty: {
        'button': 'transform, box-shadow',
      },
    },
  },
  plugins: [],
}
