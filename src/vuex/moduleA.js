const moduleA = {
    state:()=>({
        count:33,
    }),
    mutations:{
        a(state){
            console.log(state.count);
            state.count++;
            console.log(state.count);
        }
    },
    getters:{
        // w(state,getter,rootState){
        //
        // }
    },
    actions:{
        c({state,commit,rootState}){
            console.log(state.count);
            console.log(rootState.count);
            var num = state.count + rootState.count;
            commit('b',num);
        }
    }
}
export default moduleA