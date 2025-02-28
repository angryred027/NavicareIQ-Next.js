import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        poppy: {
          100: '#B3C2DF',
          200: '#8DA4CF',
          300: '#6785BF',
          500: '#4167AF',
          800: '#34528C',
          900: '#273E69',
        },
        midnight: {
          100: '#C6C5E0',
          200: '#AAA9D1',
          300: '#8D8CC1',
          500: '#716FB2',
          800: '#5A598E',
          900: '#44436B',
        },
        bark: {
          100: '#D4EEF4',
          200: '#BEE6EE',
          300: '#A8DEE9',
          500: '#7DCDDD',
          800: '#51BDD2',
          900: '#26ACC7',
        },
        coral: {
          100: '#FCDAD5',
          200: '#FBC8C1',
          300: '#F9B5AC',
          500: '#F8A397',
          800: '#DA867A',
          900: '#BC695D',
        },

        system: {
          dark: {
            100: '#E6E9EA',
            200: '#B5BCC2',
            300: '#959DA3',
            500: '#757B80',
            800: '#515253',
            900: '#000005',
          },
          light: {
            100: '#F6F9FA',
            200: '#E6F0F8',
            300: '#EBF0FF',
            500: '#E1E6F5',
            800: '#BFCFDA',
            900: '#D0DBFE',
          },
        },

        status: {
          error: {
            200: '#FDEDED',
            300: '#FADDDD',
            600: '#F16666', 
          },
          warning: {
            200: '#FDF7ED',
            300: '#FFEDCF',
            600: '#D6972A',
          },
          success: {
            200: '#E8F7EF',
            300: '#A2E8C4',
            600: '#3DBD7B',
          },
        }
      },

      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'h1': ['2rem', {        // 32px
          lineHeight: '2.75rem', // 44px
          fontWeight: '700'
        }],
        'h2': ['1.5rem', {      // 24px
          lineHeight: '2.25rem', // 36px
          fontWeight: '700'
        }],
        'h3': ['1.25rem', {     // 20px
          lineHeight: '2rem',    // 32px
          fontWeight: '700'
        }],
        'h4': ['1.125rem', {    // 18px
          lineHeight: '1.75rem', // 28px
          fontWeight: '700'
        }],
        'h5': ['1rem', {        // 16px
          lineHeight: '1.5rem',  // 24px
          fontWeight: '700'
        }],

        'body': ['0.875rem', {   // 14px
          lineHeight: '1.25rem',  // 20px
          fontWeight: '400'
        }],
        'body-medium': ['0.875rem', { // 14px
          lineHeight: '1.25rem',     // 20px
          fontWeight: '600'
        }],
        'body-bold': ['0.875rem', { // 14px
          lineHeight: '1.25rem',     // 20px
          fontWeight: '700'
        }],

        'caption': ['0.75rem', {     // 12px
          lineHeight: '1rem',        // 16px
          fontWeight: '400'
        }],
        'caption-bold': ['0.75rem', { // 12px
          lineHeight: '1rem',         // 16px
          fontWeight: '600'
        }],

        'supportive': ['0.625rem', {    // 10px
          lineHeight: '1rem',           // 16px
          fontWeight: '400'
        }],
        'supportive-bold': ['0.625rem', { // 10px
          lineHeight: '1rem',             // 16px
          fontWeight: '600'
        }],
      }
    },
  },
  plugins: [],
} satisfies Config;
