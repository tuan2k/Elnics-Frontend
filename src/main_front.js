import Vue from 'vue'
import App_front from './App_front.vue'
import routerFront from './router/router_front.js'
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);


Vue.config.productionTip = false

new Vue({
  router:routerFront,
  render: h => h(App_front)
}).$mount('#app-front')
