import typography from '@tailwindcss/typography'
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
				sans: ['Figtree', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
			},
      colors: {
        accent: {
          DEFAULT: "#ffc629",
          '50': '#fffbeb',
          '100': '#fff5c6',
          '200': '#ffe988',
          '300': '#ffd74a',
          '400': '#ffc629',
          '500': '#f9a207',
          '600': '#dd7a02',
          '700': '#b75506',
          '800': '#94410c',
          '900': '#7a350d',
          '950': '#461b02',
        },    
      },
    },
  },
  plugins: [
    typography,
  ],
});
