/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      kondolar: ["Kondolar Thai", ...defaultTheme.fontFamily.serif],
      ibmplex: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
      serif: ["Kondolar Thai", ...defaultTheme.fontFamily.serif],
      sans: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      wv: "#3904e9",
      bg: "#fffcf1",
      senate: {
        green: "#177932",
        blue: "#1152b5",
        pink: "#ffa9d1",
      },
      vote: {
        เห็น: "#60C1AF",
        ไม่เห็น: "#F92D46",
        งด: "#C5C5C5",
        ไม่ลง: "#eee",
        ไม่เข้า: "#000",
      },
    },
    spacing: {
      0: "0",
      4: "4px",
      5: "5px",
      10: "10px",
      15: "15px",
      20: "20px",
      30: "30px",
      40: "40px",
      50: "50px",
      60: "60px",
      80: "80px",
      100: "100px",
      120: "120px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
    },
    borderRadius: {
      5: "5px",
      10: "10px",
      full: "9999px",
    },
    extend: {
      gridTemplateRows: {
        "0fr": "0fr",
        "1fr": "1fr",
        "2auto": "auto auto",
      },
      gridTemplateColumns: {
        choosepm: "1fr auto auto",
        "2eq": "1fr 1fr",
        "4eq": "repeat(4,1fr)",
      },
    },
  },
  plugins: [],
};
