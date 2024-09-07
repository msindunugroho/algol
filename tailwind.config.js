/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        1: "#00154b",
        2: "#000f36",
        3: "#000b27",
        4: "#00071a",
        5: "#00040f",
    },
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
        quaternary: {
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
        transparent_light: {
          0: "rgba(235, 235, 235, 0.0)",
          1: "rgba(235, 235, 235, 0.1)",
          2: "rgba(235, 235, 235, 0.2)",
          3: "rgba(235, 235, 235, 0.3)",
          4: "rgba(235, 235, 235, 0.4)",
          5: "rgba(235, 235, 235, 0.5)",
          6: "rgba(235, 235, 235, 0.6)",
          7: "rgba(235, 235, 235, 0.7)",
          8: "rgba(235, 235, 235, 0.8)",
          9: "rgba(235, 235, 235, 0.9)",
        },
        transparent_dark: {
          0: "rgba(0, 0, 0, 0.0)",
          1: "rgba(0, 0, 0, 0.1)",
          2: "rgba(0, 0, 0, 0.2)",
          3: "rgba(0, 0, 0, 0.3)",
          4: "rgba(0, 0, 0, 0.4)",
          5: "rgba(0, 0, 0, 0.5)",
          6: "rgba(0, 0, 0, 0.6)",
          7: "rgba(0, 0, 0, 0.7)",
          8: "rgba(0, 0, 0, 0.8)",
          9: "rgba(0, 0, 0, 0.9)",
        },
    },
    fontFamily: {
      ubuntu:  ["Ubuntu", "sans-serif"],
    },
    extend: {
      boxShadow: {
        atrBg_tertiary: "0px 0px 200px 200px rgba(96,88,255,0.5);", 
        atrBg_tertiary_lg: "0px 0px 400px 200px rgba(96,88,255,0.5);", 
        atrBg_quaternary: "0px 0px 200px 200px rgba(162,89,255,0.5);", 
        atrBg_quaternary_lg: "0px 0px 400px 200px rgba(162,89,255,0.5);", 
      },
      animation:{
        beat: "beat 1.5s ease-out infinite",
      },
      keyframes: {
        beat: {
          "from": {"box-shadow": "0px 0px 0px 0px #a259ff"},
          "to": {"box-shadow": "0px 0px 0px 10px #a259ff00"},
        }
      }
    },
  },
  plugins: [],
}

