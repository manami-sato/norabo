<template>
  <ul>
    <li v-for="(article, i) of articles" :key="i">{{ article.title }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get("/data/hoge.json");
    return {
      articles: res.articles,
    };
  },
};
</script>
