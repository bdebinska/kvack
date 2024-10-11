/** @type {import('tailwindcss').Config} */
export default {
  
content: [
  './src/**/*.{js,jsx,ts,tsx}',
],

  theme: {
    extend: {},
  },
  plugins: [],
}

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});
