import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
    render: function(h) { return h(App) },
    router
}).$mount('#app')