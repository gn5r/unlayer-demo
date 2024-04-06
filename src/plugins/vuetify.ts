import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export default createVuetify({
  defaults: {
    VTextField: { variant: "solo" },
    VTextarea: { variant: "solo" },
  },
  theme: {
    defaultTheme: isDark ? "dark" : "light",
    themes: {
      light: {
        colors: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      dark: {
        colors: {
          primary: "#2196F3",
          secondary: "#424242",
          accent: "#FF4081",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
});
