import Vue from 'vue'
import App from './App3.vue'
import router from './router'

//import "bootstrap"; // 從nodeModule中載入Bootstrap
//import "bootstrap/dist/css/bootstrap.min.css"; // Import css file

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')