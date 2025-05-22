import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      fuchsia: "#E74B7E",
      navy_blue: "#1a253b",
    },
    extend: {
      fontFamily: {
        shareTech: ["Share Tech Mono", "monospace"],
      }
    },
  },
  plugins: [],
}
