<template>
  <div :style="{ height: size }"></div>
</template>

<script lang="ts">
export default {
  name: "Spacer",
  props: ["size"],
};
</script>

<style lang="scss">
@import "../assets/scss/common";
</style>
