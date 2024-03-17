<template>
  <div class="container mx-auto mt-8 shadow-xl">
    <table class="w-full">
      <thead class="bg-white-200 border-2 shadow-xl">
        <tr>
          <th class="p-4 text-xl font-bold text-left">Title</th>
          <th class="p-4 text-xl font-bold text-left">Date</th>
          <th class="p-4 text-xl font-bold text-left">Time</th>
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
          <td class="p-4 font-semibold">{{ date(article.published_at) }}</td>
          <td class="p-4 font-semibold">
            {{ time(article.published_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapGetters({
      articles: "getArticles",
    }),
  },

  created() {
    this.$store.dispatch("fetchArticles");
  },

  methods: {
    showArticle(article) {
      this.$router.push({ name: "show", params: { id: article.id } });
    },

    date(date) {
      return moment(date).format("MMM Do YY");
    },

    time(time) {
      return moment(time).format("LT");
    },
  },
};
</script>
