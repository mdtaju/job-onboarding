/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "not-black": "#737373",
      },

      screens: {
        sm5: "430px",
        sm4: "500px",
        sm3: "400px",
        sm2: "450px",
        md3: "792px",
        md2: "766px",
        lg9: "1300px",
        lg8: "1400px",
        lg7: "1280px",
        lg6: "1061px",
        lg5: "1428px",
        lg4: "954px",
        lg3: "1227px",
        lg2: "1314px",
        
      }
    },
  },
  plugins: [],
}
