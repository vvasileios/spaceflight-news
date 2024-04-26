<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { dateFormatter, timeFormatter } from "../utils/formatter.js";

const store = useStore();
const router = useRouter();
const route = useRoute();

onMounted(() => store.dispatch("fetchArticle", route.params.id));

const article = computed(() => store.getters.getArticle);

const goBack = () => router.push({ name: "home" });

const hyperLink = (link) => window.open(link, "_blank");
</script>

<template>
  <div
    class="container flex flex-col relative mx-auto my-10 border shadow-xl rounded-xl"
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
    <div class="flex justify-between mx-10 mb-5">
      <button
        class="bg-transparent hover:bg-blue-700 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="goBack"
      >
        Back
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="hyperLink(article.url)"
      >
        Full Article
      </button>
    </div>
  </div>
</template>
