import Vue from "vue";
import Vuex from "vuex";
import AuthService from "./services/AuthService";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
        user: null
    },
    mutations: {
        SET_IS_LOADING(state, isLoading) {
            state.isLoading = isLoading;
        },

        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        async register({ commit }, user) {
            commit("SET_IS_LOADING", true);

            const response = await AuthService.register(user);

            commit("SET_IS_LOADING", false);

            return response;
        },

        async login({ commit }, credentials) {
            commit("SET_IS_LOADING", true);

            const user = await AuthService.login(credentials);

            commit("SET_USER", user);
            commit("SET_IS_LOADING", false);

            return user;
        }
    },
    modules: {}
});
