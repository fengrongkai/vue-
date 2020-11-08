import Vue from 'vue'
import App  from './App.vue'
const firstApp = App
// import router from './route'
// import store from './vuex'

Vue.config.productionTip = false

new Vue({
    // router,
    // store,
    data(){
        return {}

    },
  render: h => h(firstApp),   // 这里h就是createElement方法
}).$mount('#html-app')
