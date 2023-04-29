/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-24': 'linear-gradient(190deg, var(--tw-gradient-stops))',
        'gradient-1': 'linear-gradient(130deg, var(--tw-gradient-stops))',
        'gradient-2': 'linear-gradient(10deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
     
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '57': '57%',
      },
      rotate: {
        '82': '-82deg',
      }
    },
  },
  plugins: [],
}
