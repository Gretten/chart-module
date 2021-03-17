import Vue from 'vue';
import Vuex from 'vuex'
import delayingApi from '../api/api'
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
  },
  actions: {
    fetchDataChart({ commit }) {
        delayingApi()
            .then(res => {
                commit('setData', res)
            })
    },
  },
});

