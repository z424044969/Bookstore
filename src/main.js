import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: Routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
