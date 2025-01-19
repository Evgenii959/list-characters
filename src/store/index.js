import Vue from 'vue';
import Vuex from 'vuex';
import { fetchCharacters } from '../api/characters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    totalPages: 0,
  },
  mutations: {
    SET_CHARACTERS(state, payload) {
      state.characters = payload.results;
      state.totalPages = payload.info.pages;
    },
  },
  actions: {
    async getCharacters({ commit }, params) {
      const response = await fetchCharacters(params);
      commit('SET_CHARACTERS', response.data);
    },
  },
});
