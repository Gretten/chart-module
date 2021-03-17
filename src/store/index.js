import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      dummyData: {},
  },
  getters: {
    getImages: state => state.dummyData,
  },
  mutations: {
    setImages(state, dummyData) {
        state.images = dummyData;
      },
  },
  actions: {
    // fetchImages({ commit }) {
    //     apiInstance.retrieve()
    //         .then(res => {
    //             commit('setImages', res.map(el => {
    //                 el.key = el.id;
    //                 return el;
    //             }))
    //         })
    // },
  },
});
