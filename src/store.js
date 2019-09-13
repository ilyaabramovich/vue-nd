import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
  },
  mutations: {
    login(state, payload) {
      localStorage.setItem('user', JSON.stringify(payload));
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
      localStorage.removeItem('user');
      router.push('/login');
    },
  },
  actions: {
    login(context, payload) {
      context.commit('login', payload);
    },
    logout(context) {
      context.commit('logout');
    },
  },
});
