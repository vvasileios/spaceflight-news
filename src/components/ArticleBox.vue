<script setup>
import { dateFormatter, timeFormatter } from "../utils/formatter.js";

defineProps({
  singleArticle: Object,
});

const emit = defineEmits(["goBack", "fullArticle"]);

const goBack = () => emit("goBack");

const hyperLink = (url) => emit("fullArticle", url);
</script>

<template>
  <div
    class="container flex flex-col relative mx-auto my-10 border shadow-xl rounded-xl"
  >
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-bold text-sm md:text-xl my-3">
        {{ singleArticle.news_site }}
      </h1>
      <h2 class="font-medium text-xs md:text-lg">{{ singleArticle.title }}</h2>
      <div class="w-2/3 my-5">
        <img
          :src="singleArticle.image_url"
          class="rounded-2xl"
          alt="Image of Article"
        />
      </div>
      <div class="flex gap-2 mb-5">
        <p class="font-semibold text-xs text-slate-600">
          {{ dateFormatter(singleArticle.published_at) }}
        </p>
        <p class="font-semibold text-xs text-slate-600">
          {{ timeFormatter(singleArticle.published_at) }}
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
        @click="hyperLink(singleArticle.url)"
      >
        Full Article
      </button>
    </div>
  </div>
</template>
