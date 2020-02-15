import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#c9e7ff',
        secondary: '#edf7ff',
        accent: '#446db3',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        list: '#e0f1ff'
      },
      dark:{
        primary: '#3d3d3d',
        secondary: '#2e2e2e',
        accent: '#1594DE',
        list: '#3d3d3d'
      }
    },
  },
  icons: {
    iconfont: 'md',
  },
});
