<template>
  <div class="container mx-auto mt-8 shadow-xl">
    <table class="w-full overflow-auto">
      <thead class="bg-white-200 border-2 shadow-xl">
        <tr>
          <th class="p-4 text-xl font-bold tracking-wide text-left">Title</th>
          <th class="p-4 text-xl font-bold tracking-wide text-left">Published Date</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white-200 border-2">
        <tr v-for="(article, index) in articles" :key="index" @click="showArticle(article)" class="cursor-pointer hover:underline">
          <td class="p-4 font-semibold">{{ article.title }}</td>
          <td class="p-4 font-semibold"> {{ article.published_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // define the initial data
  data() {
    return {
      // array to store the retrieved articles
      articles: []
    }
  },
  created() {
    // fetching 20 articles from API
    axios
      .get('https://api.spaceflightnewsapi.net/v4/articles/?limit=20')
      .then(response => {
        console.log(response.data.results)
        this.articles = response.data.results;
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods: {
    // go to show page for a specific article (:id) when clicked
    showArticle(article) {
      this.$router.push({ name: 'show', params: {id: article.id} })
    }
  }
}
</script>
