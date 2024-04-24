import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      articles: [],
      article: {},
    };
  },

  getters: {
    getArticle(state) {
      return state.article;
    },

    getArticles(state) {
      return state.articles;
    },
  },

  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },

    SET_ARTICLE(state, article) {
      state.article = article;
    },
  },

  actions: {
    fetchArticles({ commit }) {
      axios
        .get("https://api.spaceflightnewsapi.net/v4/articles/?limit=50")
        .then((response) => {
          console.log(response.data);
          commit("SET_ARTICLES", response.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    fetchArticle({ commit, state }, article) {
      // if (state.article && state.article.id === article) {
      //   return;
      // }
      axios
        .get(`https://api.spaceflightnewsapi.net/v4/articles/${article}`)
        .then((response) => {
          console.log(response.data);
          commit("SET_ARTICLE", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
