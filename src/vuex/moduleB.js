const moduleB = {
    state:()=>({
            count:444,
    }),
    mutations:{
        b(state){
            console.log(state.count)
        }
    },
    getters:{

    },
    actions:{

    }
}
export default moduleB