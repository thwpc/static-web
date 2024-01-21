import {createStore} from 'vuex'
export default createStore({
    state:{
        num:0
    },
    mutations:{
        "home/add":()=>{
            console.log("store mutations");
            return 6;
        }
    },
    actions:{

    },
    modules:{

    }
})