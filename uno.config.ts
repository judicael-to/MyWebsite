// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  theme: {
    boxShadow: {
      custom: `2px 2px 0`,
      "custom-hover": `1px 1px 0`,
    },
    fontFamily: {
      sans: ["CabinetGrotesk", "Satoshi"],
    },
    gridTemplateRows: {
      "auto-250": "repeat(auto-fill, 250px)",
    },
    gridTemplateColumns: {
      "4-minmax": "repeat(4, minmax(150px, 1fr))",
    },
    colors: {
      lightblue: {
        50: "#F0F7FF",
        100: "#E0EFFF",
        200: "#B8DBFF",
        300: "#8FC7FF",
        400: "#66B3FF",
        500: "#3D9FFF",
        600: "#147AFF",
        700: "#0062E6",
        800: "#004BB3",
        900: "#003380"
      },
      blue: {
        50: "#E6F1FF",
        100: "#CCE4FF",
        200: "#99C9FF",
        300: "#66AEFF",
        400: "#3393FF",
        500: "#0078FF",
        600: "#0060CC",
        700: "#004899",
        800: "#003066",
        900: "#001833"
      },
      darkblue: {
        50: "#E6EDF5",
        100: "#CCDAEB",
        200: "#99B5D6",
        300: "#668FC2",
        400: "#336AAD",
        500: "#004599",
        600: "#00377A",
        700: "#00295C",
        800: "#001C3D",
        900: "#000E1F"
      },
      navy: {
        50: "#E6ECF2",
        100: "#CCD8E6",
        200: "#99B1CC",
        300: "#668AB3",
        400: "#336399",
        500: "#003C80",
        600: "#003066",
        700: "#00244D",
        800: "#001833",
        900: "#000C1A"
      },
      skyblue: {
        50: "#F0FAFF",
        100: "#E1F5FF",
        200: "#C3EBFF",
        300: "#A5E0FF",
        400: "#87D6FF",
        500: "#69CCFF",
        600: "#4BC2FF",
        700: "#2DB8FF",
        800: "#0FADFF",
        900: "#0099F2"
      },
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      darkslate: {
        50: "#3D3D3D",
        100: "#2C2C2C",
        200: "#262626",
        300: "#202020",
        400: "#1A1A1A",
        500: "#171717" /* Exactly your example for the background */,
        600: "#141414",
        700: "#111111",
        800: "#0E0E0E",
        900: "#0B0B0B" /* Deeper and darker */,
      },
      primary: {
        100: "#F9CDD3",
        200: "#F3A3AA",
        300: "#EC7981",
        400: "#E64F59",
        500: "#E63946",
        600: "#CF2F3D",
        700: "#B82534",
        800: "#A01B2B",
        900: "#891321",
      },
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: ["Cabinet Grotesk", "Satoshi"],
        serif: "Zodiak",
      },
    }),
  ],
});
