/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {


            fontFamily: {

                'sans': ['"Prompt"', ...defaultTheme.fontFamily.sans],
                
                'display': ['"Roboto"', 'monospace'], // Adds a new `font-display` class
                
                },
                

            colors: {
                'pink': {
                
                    100:'#FFEEEE',
                    200:'#',
                    300:'#',
                    400:'#',
                    500: '#',
                    600:'#',
                    700:'#',
                    800:'#',
                    900:'#',

                  },

                  'rod': {
                    600:'#730D19',
                    300:'#E6253C'
                  }
            }
        }
    },
  };