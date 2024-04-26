<script setup>
import { ref } from "vue";
import { dateFormatter } from "../utils/formatter.js";

defineProps({
  articles: Array,
});

const headerRowClasses = ref("p-4");
const tableRowClasses = ref("p-4");

const emit = defineEmits(["articleSelected"]);

const showArticle = (article) => {
  emit("articleSelected", article);
};
</script>

<template>
  <div class="container mx-auto my-10 shadow-2xl bg-white overflow-auto">
    <table class="w-full">
      <thead class="border-2">
        <tr class="text-lg md:text-xl text-left">
          <th :class="[headerRowClasses]">Agency</th>
          <th :class="[headerRowClasses]">Title</th>
          <th :class="[headerRowClasses]">Date</th>
        </tr>
      </thead>
      <tbody class="border-2">
        <tr
          v-for="(article, index) in articles"
          :key="index"
          class="cursor-pointer hover:opacity-50 text-sm md:text-lg border-b-2"
          @click="showArticle(article)"
        >
          <td :class="[tableRowClasses]">{{ article.news_site }}</td>
          <td :class="[tableRowClasses]">{{ article.title }}</td>
          <td :class="[tableRowClasses]">
            {{ dateFormatter(article.published_at) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
