const { createStore } = require("vuex");

const store_main = createStore({
    state() {
        return {
            username: undefined
        }
    },
    mutations: {
        tryLogin(state) {

        }
    }
})

export default store_main;