import jsonData from '../../API/authors.json';
import jsonData2 from '../../API/news.json';

export default {
  namespaced: true,
  state: {
    authors: [],
    news: [],
    loading: false,
  },
  getters: {
    GET_AUTHORS (state) {
      return state.authors
    },
    GET_NEWS (state) {
      return state.news
    },
    GET_LOADING (state) {
      return state.loading
    }
  },
  mutations: {
    SET_AUTHORS (state, authors) {
      state.authors = authors
    },
    SET_NEWS (state, news) {
      state.news = news
    },
    SET_LOADING (state, loading) {
      state.loading = loading;
    }
  },
  actions: {

    async fetchAuthors (context) {
      context.commit("SET_LOADING", true)

      context.commit('SET_AUTHORS', jsonData["authors"])

      context.commit("SET_LOADING", false)
    }, 

    async fetchNews (context) {
      context.commit("SET_LOADING", true)

      context.commit('SET_NEWS', jsonData2["news"])

      context.commit("SET_LOADING", false)
    }, 
   
  }
}
