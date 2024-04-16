/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import nameClass from 'tailwindcss/lib/util/nameClass';

export default {
  darkMode: 'class',
  content: [
    './src/**/**/*.js',
    './src/**/*.js',
    './src/pages/**/*.md',
    './src/pages/*.md',
  ],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        slate: colors.slate,
        dodgerBlue: {
          50: '#E8F4FF',
          100: '#D1E9FF',
          200: '#A3D3FF',
          300: '#75BEFF',
          400: '#47A8FF',
          500: '#1992FF',
          600: '#007BEA',
          700: '#0063BC',
          800: '#004B8E',
          900: '#003360',
        },
        facebook: '#3b5998',
        linkedin: '#0077b5',
        github: '#333',
        messenger: '#0084ff',
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui'],
      },
      minHeight: {
        'screen-75': '75vh',
      },
      fontSize: {
        tiny: [
          '.5rem',
          {
            lineHeight: '.75rem',
          },
        ],
        55: '55rem',
      },
      opacity: {
        80: '.8',
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        '-100': '-100%',
        '-225-px': '-225px',
        '-160-px': '-160px',
        '-150-px': '-150px',
        '-94-px': '-94px',
        '-50-px': '-50px',
        '-29-px': '-29px',
        '-20-px': '-20px',
        '25-px': '25px',
        '40-px': '40px',
        '95-px': '95px',
        '145-px': '145px',
        '195-px': '195px',
        '210-px': '210px',
        '260-px': '260px',
      },
      height: {
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px',
      },
      maxHeight: {
        '860-px': '860px',
      },
      maxWidth: {
        '100-px': '100px',
        '120-px': '120px',
        '150-px': '150px',
        '180-px': '180px',
        '200-px': '200px',
        '210-px': '210px',
        '580-px': '580px',
      },
      minWidth: {
        '140-px': '140px',
        48: '12rem',
      },
      backgroundSize: {
        full: '100%',
      },
      spacing: {
        '1/10': '10%',
        '1/9': '11.1111111%',
        '1/8': '12.5%',
        '1/7': '14.2857143%',
        '1/6': '16.6666667%',
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33.3333333%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '2/3': '66.6666667%',
        '3/4': '75%',
        '4/5': '80%',
        '5/6': '83.3333333%',
        '6/7': '85.7142857%',
        '7/8': '87.5%',
        '8/9': '88.8888889%',
        '9/10': '90%',
        100: '100%',
      },
    },
  },
  plugins: [
    forms,
    typography,
    plugin(function ({ addUtilities, theme }) {
      const createClipPathUtility = () => {
        let utilities = {};

        Object.entries(theme('spacing')).forEach(([key, value]) => {
          const classNameTopLeft = nameClass('slant-tl', key);
          const classNameTopRight = nameClass('slant-tr', key);
          const classNameBottomRight = nameClass('slant-br', key);
          const classNameBottomLeft = nameClass('slant-bl', key);

          utilities[classNameTopLeft] = {
            '--tw-clip-polygon-a': `0 ${value}`,
            'clip-path': `polygon(var(--tw-clip-polygon))`,
          };
          utilities[classNameTopRight] = {
            '--tw-clip-polygon-b': `100% ${value}`,
            'clip-path': `polygon(var(--tw-clip-polygon))`,
          };
          utilities[classNameBottomRight] = {
            '--tw-clip-polygon-c': `100% calc(100% - ${value})`,
            'clip-path': `polygon(var(--tw-clip-polygon))`,
          };
          utilities[classNameBottomLeft] = {
            '--tw-clip-polygon-d': `0 calc(100% - ${value})`,
            'clip-path': `polygon(var(--tw-clip-polygon))`,
          };
        });

        return utilities;
      };

      addUtilities(createClipPathUtility(theme('spacing')));

      addUtilities({
        '*': {
          '--tw-clip-polygon': `var(--tw-clip-polygon-a), var(--tw-clip-polygon-b), var(--tw-clip-polygon-c), var(--tw-clip-polygon-d)`,
          '--tw-clip-polygon-a': `0 0`,
          '--tw-clip-polygon-b': `100% 0`,
          '--tw-clip-polygon-c': `100% 100%`,
          '--tw-clip-polygon-d': `0 100%`,
        },
      });
    }),
  ],
};
