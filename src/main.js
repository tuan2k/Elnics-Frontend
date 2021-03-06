import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);

Vue.config.productionTip = false

new Vue({
  mode:history,
  router: router,
  render: h => h(App)
}).$mount('#app')
