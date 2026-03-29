/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2ff',
          100: '#dde4ff',
          200: '#c3cdfe',
          300: '#9eabfc',
          400: '#7880f8',
          500: '#5b5cf1',
          600: '#4a3de5',
          700: '#3f30ca',
          800: '#1e2235',
          850: '#171b2e',
          900: '#0f1225',
          950: '#0a0d1a',
        },
        electric: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        slate: {
          750: '#293548',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.electric.400'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-code': theme('colors.electric.300'),
            '--tw-prose-pre-bg': theme('colors.navy.900'),
            '--tw-prose-pre-code': theme('colors.gray.200'),
          },
        },
      }),
    },
  },
  plugins: [],
};
