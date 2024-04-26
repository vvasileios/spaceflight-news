<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import ArticleBox from "../components/ArticleBox.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

onMounted(() => store.dispatch("fetchArticle", route.params.id));

const article = computed(() => store.getters.getArticle);

const handleBack = () => router.push({ name: "home" });

const handleFullArticle = (link) => window.open(link, "_blank");
</script>

<template>
  <ArticleBox
    :single-article="article"
    @goBack="handleBack"
    @fullArticle="handleFullArticle"
  />
</template>
