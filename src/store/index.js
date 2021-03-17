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
        state.images = dummyData;
      },
    setLoadngStatus(state, isLoading) {
        state.images = isLoading;
    },
  },
  actions: {
    fetchDataChart({ commit }) {
        return async () => {
            commit('setLoadngStatus', true),
            await setTimeout(() => {
                commit('setData', data)
            }, 2500)
        }
    },
  },
});