/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#000b27",
      secondary: {
        1: "#2f7cff",
        2: "#0c4fff",
        3: "#0447ff",
        4: "#063ecd",
        5: "#103c9f",
        } ,
        tertiary: {
        1: "#9ca7ff",
        2: "#7578ff",
        3: "#6058ff",
        4: "#4e36f5",
        5: "#432ad8",
        },
        quaterbary: {
        1: "#d2b0ff",
        2: "#b77eff",
        3: "#a259ff",
        4: "#842af3",
        5: "#711ad6",
        },
        grey: {
        1:"#e3e3e3",
        2: "#d1d1d1",
        3: "#bfbfbf",
        4: "#aaaaaa",
        5: "#969696",
        },
        dark_grey: {
        1: "#6d6d6d",
        2: "#5d5d5d",
        3: "#4c4c4c",
        4: "#454545",
        5: "#3d3d3d",
        },
        white: {
        1: "#ffffff",
        2: "#efefef",
        3: "#dcdcdc",
        4: "#bdbdbd",
        5: "#989898"
        },
        
    },
    fontFamily: {
      ubuntu:  ["Ubuntu", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

