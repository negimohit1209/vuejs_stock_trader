import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store';

Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return `$${value.toLocaleString()}`;
})

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
