import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueNumberInput from '@chenfengyuan/vue-number-input';

import 'vue-toast-notification/dist/theme-sugar.css';
import VueToast from 'vue-toast-notification';
Vue.use(VueToast);

import VueCordova from 'vue-cordova'
Vue.use(VueCordova)

Vue.component('vue-number-input', VueNumberInput);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
