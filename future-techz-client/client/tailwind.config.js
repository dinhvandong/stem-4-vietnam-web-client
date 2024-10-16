/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        delete: '#ff4d4f',
        edit: '#1e90ff ',
        insert: '#10B981',
        history:'#4C1A71',
        base_color:'#2F4842',
        brown_color:'#B77855',
        bg_color:'#FFFFFFFF',
        header_color:'#EEA048',
       
      },
      fontFamily: {
        'sacramento': ['Sacramento', 'cursive'],
      },
    },
  },
  plugins: [],
}