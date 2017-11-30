import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 可以把state看成是store的data
const state = {
    name: "显亮",
    age: 25
}


// 可以把getters看成是store的computed
const getters = {
    getName: function (state) {
        return '连' + state.name
    }
}

// 可以把mutations看成是store的methods（同步）
const mutations = {
    mutationsChangeAge: function (state, data) {
        state.age += data
    },
    mutationsChangeAgeAnsyc: function (state, data) {
        state.age += data
    },
}

// 可以把mutations看成是store的methods（异步）
const actions = {
    //设置延时
    actionsChangeAge: function (context, value) {
        console.log("vuex-actions-context", context)
        setTimeout(function () {
            //提交事件
            context.commit('mutationsChangeAgeAnsyc', value);
        }, 1500)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})