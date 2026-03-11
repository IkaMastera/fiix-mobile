/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // Scan all files in both apps and all packages
      '../../apps/**/*.{js,ts,jsx,tsx}',
      '../../packages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          // Brand
          amber: {
            50:  '#FFF8E7',
            100: '#FFE9A0',
            200: '#FFD060',
            300: '#F5A623',  // primary
            400: '#E08C0A',
            500: '#B86F00',
          },
          // Dark surfaces
          ink: {
            1000: '#080808',
            950:  '#0D0D0D',
            900:  '#111111',
            800:  '#1C1C1C',
            700:  '#2A2A2A',
            600:  '#333333',
            500:  '#444444',
            400:  '#606060',
            300:  '#888888',
            200:  '#AAAAAA',
            50:   '#F0F0F0',
          },
        },
        fontFamily: {
          display: ['Syne', 'Noto Sans Georgian', 'sans-serif'],
          body:    ['DM Sans', 'Noto Sans Georgian', 'sans-serif'],
        },
        borderRadius: {
          'sm':  '8px',
          'md':  '12px',
          'lg':  '18px',
          'xl':  '24px',
          '2xl': '32px',
        },
      },
    },
    plugins: [],
  }