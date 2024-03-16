<template>
  <div class="flex items-center justify-center mt-10">
    <div class="bg-white-200 shadow-xl border-2 p-8 max-w-sm">
      <h2 class="text-xl font-bold mb-4">{{ article.title }}</h2>
      <img v-if="article.image_url" :src="article.image_url" class="mb-4" />
      <p class="mb-4">{{ article.summary }}</p>
      <a
        :href="article.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 hover:underline"
        >Open Article</a
      >
    </div>
  </div>
</template>

<script>
// import helper function to easily access the state properties
import { mapState } from "vuex";

export default {
  computed: mapState({
    article: (state) => state.article,
  }),
  created() {
    // store the :id
    const articleId = this.$route.params.id;
    // dispatch action from the store
    this.$store.dispatch("fetchArticle", articleId);
  },
};
</script>
