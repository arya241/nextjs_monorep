/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app1/**/*.{js,ts,jsx,tsx}",
  "./app2/**/*.{js,ts,jsx,tsx}",
  "./host-app/**/*.{js,ts,jsx,tsx}",
"./app1/styles"],
  theme: {
    extend: { colors: {
        primary: '#4285f4', 
        secondary: '#ea4335', 
        lightPink: '#e69d9d', 
        lightGreen: 'rgb(226, 225, 132)', 
        lightBlue: 'rgb(126, 226, 171)',
    }},
  },
  screens: {},
  plugins: [],
}

