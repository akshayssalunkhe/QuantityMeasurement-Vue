import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false

// Vue.use(VueAxios)
// Vue.use(axios)
Vue.prototype.$VueAxios=VueAxios

Vue.prototype.$axios=axios
Vue.use(VueRouter)

Vue.use(VueMaterial)

export const bus = new Vue();

const router =new VueRouter({
  routes:Routes
})

new Vue({
  render: h => h(App),
  router:router,

}).$mount('#app')
