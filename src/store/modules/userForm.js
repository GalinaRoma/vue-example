const state = {
    cities: null,
    fullName: null,
    phone: null,
    email: null,
    gender: null,
    cityId: 1,
};

const actions = {
    loadCities ({ commit }) {
        fetch('https://api.myjson.com/bins/amtzq', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => commit('setCities', data.cities));
    },
};

// mutations
const mutations = {
    setCities (state, cities) {
        state.cities = cities;
    },
    setFullName(state, name) {
        state.fullName = name;
    },
    setPhone(state, phone) {
        state.phone = phone;
    },
    setEmail(state, email) {
        state.email = email;
    },
    setGender(state, gender) {
        state.gender = gender;
    },
    setCityId(state, cityId) {
        state.cityId = cityId;
    },
};


export default {
    namespaced: true,
    state,
    actions,
    mutations
}