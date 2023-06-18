/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function({ addUtilities }) { // https://qiita.com/oedkty/items/067434af65a5d121742d
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px darkgrey"
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px darkgrey"
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px darkgrey"
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px darkgrey"
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px darkgrey"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };
      addUtilities(newUtilities);
    }
  ],
}
