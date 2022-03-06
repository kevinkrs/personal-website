const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        kevinkrs: {
          DEFAULT: '#01B5E2',
          50: '#FFFFFF',
          100: '#EDFEFF',
          200: '#ABF8FF',
          300: '#69ECFE',
          400: '#27DBFE',
          500: '#01B5E2',
          600: '#01B5E2',
          700: '#015372',
          800: '#00283A',
          900: '#000203',
        },
        code: {
          DEFAULT: '#01B5E2',
          50: '#FFFFFF',
          100: 'rgb(100 116 139/var(--tw-text-opacity))', // <
          200: 'rgb(243 114 182/var(--tw-text-opacity))', // element
          300: 'rgb(203 213 225/var(--tw-text-opacity))', // attribute
          400: 'rgb(100 116 139/var(--tw-text-opacity))', // =
          500: 'rgb(100 116 139/var(--tw-text-opacity))', // "
          600: '#01B5E2', // value
          700: 'rgb(100 116 139/var(--tw-text-opacity))', // "
          800: 'rgb(100 116 139/var(--tw-text-opacity))', // >
          900: 'rgb(148 163 184/var(--tw-text-opacity))', // comment
        },
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
