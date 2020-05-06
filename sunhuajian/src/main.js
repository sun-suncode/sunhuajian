import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import "./assets/css/font-awesome-4.7.0/css/font-awesome.css"
import router from "./router"
import Router from 'vue-router'
Vue.use(Router)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
