import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  'html, body': {
    w: '100vw',
    h: '100vh'
  },
  'body': {
    background: 'url("/img/skyline.gif") repeat-x bottom, linear-gradient(to top,#001752 0 50%, #04133a 100%)',
    fontFamily: 'comic sans ms',
  }
})

export default defineConfig({
  globalCss,

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
