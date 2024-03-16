<template>
  <div class="container mx-auto mt-8 shadow-xl">
    <table class="w-full">
      <thead class="bg-white-200 border-2 shadow-xl">
        <tr>
          <th class="p-4 text-xl font-bold text-left">Title</th>
          <th class="p-4 text-xl font-bold text-left">Published Date</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white-200 border-2">
        <tr
          v-for="(article, index) in articles"
          :key="index"
          @click="showArticle(article)"
          class="cursor-pointer hover:underline"
        >
          <td class="p-4 font-semibold">{{ article.title }}</td>
          <td class="p-4 font-semibold">{{ article.published_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import helper function to easily access the state properties
import { mapState } from "vuex";

export default {
  computed: mapState({
    articles: (state) => state.articles,
  }),
  created() {
    // dispatch action from the store
    this.$store.dispatch("fetchArticles");
  },
  methods: {
    // go to show page for a specific article (:id) when clicked
    showArticle(article) {
      this.$router.push({ name: "show", params: { id: article.id } });
    },
  },
};
</script>
