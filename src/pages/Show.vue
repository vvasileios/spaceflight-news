<template>
  <div class="flex items-center justify-center mt-10">
    <div class="bg-white-200 shadow-xl border-2 p-8 max-w-sm">
      <h2 class="text-xl font-bold mb-4">{{ article.title }}</h2>
      <img v-if="article.image_url" :src="article.image_url" class="mb-4">
      <p class="mb-4">{{ article.summary }}</p>
      <a :href="article.url" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">Open Article</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // define the initial data
  data() {
    return {
      // initialize values
      article: {
        title: '',
        url: '',
        image_url: '',
        summary: ''
      }
    };
  },
  created() {
    // store the :id 
    const articleId = this.$route.params.id;

      // API call to fetch the article by ID
      axios
        .get(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}`)
        .then(response => {
          console.log(response.data);
          this.article = response.data;
        })
        .catch(error => {
          console.log(error);
        })
  }
}
</script>



