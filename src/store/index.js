import Vue from 'vue';
import Vuex from 'vuex'
import data from '../api/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      dummyData: {},
      isLoading: false,
  },
  getters: {
    getData: state => state.dummyData,
  },
  mutations: {
    setData(state, dummyData) {
        state.dummyData = dummyData;
      },
    setLoadngStatus(state, isLoading) {
        state.isLoading = isLoading;
    },
  },
  actions: {
    fetchDataChart({ commit }) {
        commit('setLoadngStatus', true),
        setTimeout(() => {
            commit('setData', data)
            commit('setLoadngStatus', false)
        }, 2500)
    },
  },
});