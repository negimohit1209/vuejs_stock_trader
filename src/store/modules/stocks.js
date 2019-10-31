import stocks from '../../data/stocks';

const state = {
    stocks: [],
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    // eslint-disable-next-line no-unused-vars
    'RND_STOCKS'(state) {

    }
}

const actions = {
    // eslint-disable-next-line no-unused-vars
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStock: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomiseStock: ({ commit }) => {
        commit('RND_STOCKS');
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default { state, mutations, actions, getters };