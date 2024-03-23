/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],  theme: {
      screens: {
        'sm': '250px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite/plugin'),
]
}

