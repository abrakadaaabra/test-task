import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getUsers({ commit }) {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw Error(response.statusText);
        }

        const users = await response.json();

        commit('setUsers', users);
      } catch (error) {
        throw Error('Something went wrong with fetching users data!');
      }
    },
  },
});
