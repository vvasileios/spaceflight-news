import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      articles: [],
      article: {}
    },

    getters: {},

    mutations: {
      GET_ARTICLES(state, articles) {
        state.articles = articles
      },
      GET_ARTICLE(state, article) {
        state.article = article
      }
    },

    actions: {
      fetchArticles({ commit }) {
        // fetching 20 articles from API
        // and then commit the mutation to update the state
        axios
        .get('https://api.spaceflightnewsapi.net/v4/articles/?limit=20')
        .then(response => {
          console.log(response.data.results)
          commit('GET_ARTICLES', response.data.results)
        })
        .catch(error => {
          console.log(error);
        })
      },
      fetchArticle({ commit, state }, articleId) {
        // Check if the selected article exists in the store
        // If not, API request to fetch the article
        // and then commit the mutation to the state
        if (state.article && state.article.id === articleId) {
          return;
        }

        axios
        .get(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}`)
        .then(response => {
          console.log(response.data);
          commit('GET_ARTICLE', response.data)
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
})
