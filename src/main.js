import Vue from 'vue'
import App from './App.vue'
// import router from './route'
// import store from './vuex'

Vue.config.productionTip = false

new Vue({
    // router,
    // store,
    data(){
        return {}

    },
  render: h => h(App),
}).$mount('#app')
