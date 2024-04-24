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

const timeFormatter = (time) => moment(time).format("HH:mm");
</script>

<template>
  <div
    v-for="(article, index) in articles"
    :key="index"
    class="container mx-auto my-10 border shadow-xl rounded-xl cursor-pointer hover:opacity-50"
    @click="showArticle(article)"
  >
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-bold text-sm md:text-xl my-3">{{ article.news_site }}</h1>
      <h2 class="font-medium text-xs md:text-lg">{{ article.title }}</h2>
      <div class="w-2/3 my-5">
        <img
          :src="article.image_url"
          class="rounded-2xl"
          alt="Image of Article"
        />
      </div>
      <div class="flex gap-2 mb-5">
        <p class="font-semibold text-xs text-slate-600">
          {{ dateFormatter(article.published_at) }}
        </p>
        <p class="font-semibold text-xs text-slate-600">
          {{ timeFormatter(article.published_at) }}
        </p>
      </div>
    </div>
  </div>
</template>
