<template>
  <div class="flex items-center justify-center mt-60">
    <div class="bg-white-200 shadow-xl border-2 p-8 max-w-xl">
      <h2 class="text-xl font-bold mb-4">{{ article.title }}</h2>
      <img
        v-if="article.image_url"
        :src="article.image_url"
        class="mb-10 mt-10"
      />
      <p class="mb-4">{{ article.summary }}</p>
      <a
        :href="article.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 hover:cursor-pointer hover:underline"
      >
        Open Article
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      article: "getArticle",
    }),
  },

  created() {
    this.$store.dispatch("fetchArticle", this.$route.params.id);
  },
};
</script>
