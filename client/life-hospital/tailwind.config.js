/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
       backgroundColor: {
           bgx: "#f5fafd"
       },
       fontSize: {
        50: "50px",
        30: "30px",
        10:"10px",
        15:"15"
       },
       width: {
        30: "120px"
       },
       height: {
        '80vh': '80vh',
       },
       screens: {
        'xs': {'max': '399px'},
       },
    },
    
  },
  plugins: [],
}
