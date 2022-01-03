const colors = require("tailwindcss/colors");

module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    extend: {
      backgroundColor: {
        'navy': '#081937',
        'navy-secondary': '#0C2041',
        'navy-ascent': '#122647',
        'color-none': 'transparent',
        'pink': '#f17674',
        'purple': '#846ff4',
        'grey': '#424242'
      },
      textColor: {
        'pink': '#f17674',
        'purple': '#846ff4'
      },
      borderColor: {
        'pink': '#f17674',
        'purple': '#846ff4'
      },
      colors: {
        grey: colors.grey
      },
      backgroundImage: (theme) => ({
        dragomaniabackground: "url('/background.png')",
      }),
    },
  },
  variants: {},
  plugins: [
  ],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
