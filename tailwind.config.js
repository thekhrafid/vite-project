/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'paprika': ['Paprika'],
        'opensan': ['Open Sans'],
      },
      colors: {
        'bgcolor': '#160C6D',
        'hoverclr': '#1BBF00',
        'banner': '#6a62c5d8',
        'htextclr': '#FAFAFE',
        'ptextclr': '#E6E5F3',
        'cardclr': '#C4C4C4',
        'ptext': '#141135',
        'circleclr': '#CBC8F0',
        'servcebg': '#FDFDFD',
        'dobg': '#F6F8FF',
        'workbg': '#6B62C5',
        'doptext': '#6C7D93',
        'wrkhvr': '#6001D3',
        'slidetclr': '#726E9E',
        'btnhv': '#1BBF00',
      },
      maxWidth: {
        'maxwith': '1320px',
      }
    },
  },
  plugins: [],
}

