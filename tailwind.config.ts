import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('/main_background.png')",
        'about-image': "url('/about_background.png')",
      },
      colors: {
        primary: '#AFD500',
      },
    },
  },
  plugins: [],
});

export default config;
