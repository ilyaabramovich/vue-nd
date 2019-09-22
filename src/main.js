import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

const data = { auth: false };

Vue.config.productionTip = false;

new Vue({
  data,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
