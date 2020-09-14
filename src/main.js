import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueNumberInput from '@chenfengyuan/vue-number-input';

import VueToast from 'vue-toast-notification';
// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

Vue.component('vue-number-input', VueNumberInput);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
