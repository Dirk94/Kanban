import Vue from "vue";
import Vuex from "vuex";
import AuthService from "./services/AuthService";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false
    },
    mutations: {
        SET_IS_LOADING(state, isLoading) {
            state.isLoading = isLoading;
        }
    },
    actions: {
        async register({ commit }, user) {
            commit("SET_IS_LOADING", true);

            const response = await AuthService.register(user);

            commit("SET_IS_LOADING", false);

            return response;
        }
    },
    modules: {}
});
