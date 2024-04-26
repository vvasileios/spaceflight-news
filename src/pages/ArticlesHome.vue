<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ArticlesTable from "../components/ArticlesTable.vue";

const store = useStore();

const router = useRouter();

const articles = computed(() => store.getters.getArticles);

onMounted(() => store.dispatch("fetchArticles"));

const handleSelectedArticle = (article) => {
  router.push({ name: "show", params: { id: article.id } });
};
</script>

<template>
  <ArticlesTable
    :articles="articles"
    @articleSelected="handleSelectedArticle"
  />
</template>
