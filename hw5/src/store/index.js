import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: []
  },
  getters: {
    getPaymentList: state => state.paymentList,
    getFullPaymentValue: state => {
      return state.paymentList.reduce((res, cur) => res + +cur.count, 0)
    },
    getCategoryList: state => state.categoryList
  },
  mutations: {
    setPaymentListData(state, payload){
      state.paymentList = payload
    },
    addToPaymentList(state, payload){
      state.paymentList.push(payload)
    },
    ediPaymentListFirstElement(state, payload){
      Vue.set(state.paymentList, 0, payload)
      // state.paymentList[0] = payload
      // state.paymentList = [ ... state.paymentList ]
    },
    setCategories(state, payload) {
      state.categoryList = payload
    }
  },
  actions: {
    fetchData({commit}){
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i <= 50; i++){
            items.push({
              date: '14.07.2025',
              category: 'sport',
              counter: i,
              count: 500,
              id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now()) + i)
            })
          } resolve(items)
        }, 2000)
      }).then(res => {
        commit('addToPaymentList', res)
      })
    },
    fetchCategoryList({commit}) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve (['Food', 'Transport', 'Sport', 'Education'])
        }, 100)
      }).then(res => {
            commit('setCategories', res)
          })
    }
  },
  modules: {
  }
})
