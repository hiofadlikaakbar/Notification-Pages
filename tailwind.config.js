const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans"],
    },
    extend: {
      colors: {
        primaryRed: "hsl(1, 90%, 64%)",
        primaryBlue: "hsl(219, 85%, 26%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        vlGrayishBlue: "hsl(210, 60%, 98%)",
        lGrayishBlue1: "hsl(211, 68%, 94%)",
        lGrayishBlue2: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        dGrayishBlue: " hsl(219, 12%, 42%)",
        vdBlue: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
