import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './moduleA';
import moduleB from './moduleB';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count:22
    },
    mutations: {
        increment (state) {
            console.log(99991);
            state.count++
        }
    },
    modules:{
        moduleA,
        moduleB
    }
})
export default store