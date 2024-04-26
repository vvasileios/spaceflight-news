<script setup>
import moment from "moment";

defineProps({
  articles: Array,
});

const emit = defineEmits(["articleSelected"]);

const showArticle = (article) => {
  emit("articleSelected", article);
};

const dateFormatter = (date) => moment(date).format("MMM Do YY");

const timeFormatter = (time) => moment(time).format("HH:mm");
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
          class="cursor-pointer hover:opacity-50"
          @click="showArticle(article)"
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
