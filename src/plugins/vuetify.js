import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1c4978",
        secondary: "#6990b8",
        accent: "#1c4978",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        list: "#6990b8",
      },
      dark: {
        primary: "#4b94db",
        secondary: "#424242",
        accent: "#FFFFFF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        list: "#363636",
      },
    },
  },
  icons: {
    iconfont: "md",
  },
});
