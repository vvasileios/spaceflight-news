<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const article = computed(() => store.getters.getArticle);

onMounted(() => store.dispatch("fetchArticle", route.params.id));
</script>

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
