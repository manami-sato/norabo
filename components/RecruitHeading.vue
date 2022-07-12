<template>
  <h3 class="recruit__heading">{{ heading }}</h3>
</template>

<script lang="ts">
export default {
  name: "RecruitHeading",
  props: ["heading"],
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
</style>
