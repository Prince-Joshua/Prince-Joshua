import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/epilogue/400.css";
import "@fontsource/epilogue/600.css";
import "@fontsource/epilogue/700.css";
import "@fontsource/epilogue/400-italic.css";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: "bg.default",
      color: "fg.default",
      fontFamily: "Epilogue, sans-serif",
    },
    "*": {
      boxSizing: "border-box",
    },
  },

  theme: {
    tokens: {
      colors: {
        bg: {
          default: { value: "#0F1117" }, // main background
          subtlee: { value: "#1A1C23" }, // card/bg subtle
          surface: { value: "#181B22" },
          elevated: { value: "222630" },
        },
        fg: {
          default: { value: "#F1F5F9" }, // main text
          mute: { value: "#94A3B8" }, // secondary text
        },
        primary: {
          default: { value: "#14B8A6" }, // teal
          emphasized: { value: "#0D9488" },
        },
        secondary: {
          default: { value: "#2DD4BF" },
        },
        border: {
          default: { value: "#1E293B" },
        },
        accent: {
          yellow: { value: "#FACC15" },
          red: { value: "#EF4444" },
        },
      },
      fonts: {
        heading: { value: "Poppins, sans-serif" },
        body: { value: "Epilogue, sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
