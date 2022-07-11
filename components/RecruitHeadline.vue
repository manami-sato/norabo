<template>
  <h3 class="recruit__headline">{{ headline }}</h3>
</template>

<script lang="ts">
export default {
  name: "RecruitHeadline",
  props: ["headline"],
};
</script>

<style lang="scss">
@import "../assets/scss/common";
</style>
