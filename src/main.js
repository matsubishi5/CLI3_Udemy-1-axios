import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL =
  'https://firestore.googleapis.com/v1/projects/vuejs-http-fe1b1/databases/(default)/documents';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
