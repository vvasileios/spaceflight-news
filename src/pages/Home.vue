<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import moment from "moment";

const store = useStore();

const router = useRouter();

const articles = computed(() => store.getters.getArticles);

onMounted(() => store.dispatch("fetchArticles"));

const showArticle = (article) =>
  router.push({ name: "show", params: { id: article.id } });

const dateFormatter = (date) => moment(date).format("MMM Do YY");

const timeFormatter = (time) => moment(time).format("LT");
</script>

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
          class="cursor-pointer hover:opacity-50"
        >
          <td class="p-4 font-semibold">{{ article.title }}</td>
          <td class="p-4">
            {{ dateFormatter(article.published_at) }}
          </td>
          <td class="p-4">
            {{ timeFormatter(article.published_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
