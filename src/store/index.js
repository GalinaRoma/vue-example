import Vue from 'vue';
import Vuex from 'vuex';
import userForm from './modules/userForm';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        userForm,
    },
    strict: debug,
})