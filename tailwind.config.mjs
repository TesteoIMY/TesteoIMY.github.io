import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pistachio: {
          50: '#F5F9ED',
          100: '#E6EFCF',
          200: '#CFDFAC',
          300: '#B5CC82',
          400: '#9BB75D', // Verde pistacho/oliva dominante
          500: '#87A348',
          600: '#6C8635',
          700: '#526827',
          800: '#3A4B1A',
          900: '#23300F',
        },
        forest: {
          700: '#345729',
          800: '#243D1D', // Verde bosque profundo elegante
          900: '#172B12',
          950: '#0F1E0B',
        },
        paper: '#F4F7EE', // Fondo crema suave
        ink: {
          900: '#11170F',
          800: '#212B1E',
          700: '#344230',
          600: '#4D5E48',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.900'),
            a: {
              color: theme('colors.forest.800'),
              textDecoration: 'underline',
              fontWeight: '600',
              '&:hover': {
                color: theme('colors.forest.950'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.forest.900'),
              fontWeight: '700',
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.forest.900'),
              fontWeight: '700',
            },
            blockquote: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: theme('colors.forest.800'),
              borderLeftColor: theme('colors.forest.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin],
};
