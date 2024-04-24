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
    class="container mx-auto my-10 shadow-xl rounded cursor-pointer hover:opacity-50"
    @click="showArticle(article)"
  >
    <div class="flex flex-col justify-center items-center">
      <h1>{{ article.news_site }}</h1>
      <div class="w-2/3">
        <img :src="article.image_url" alt="Image of Article" />
      </div>

      <h2>{{ article.title }}</h2>
      <p>{{ dateFormatter(article.published_at) }}</p>
      <p>{{ timeFormatter(article.published_at) }}</p>
    </div>
  </div>
</template>
