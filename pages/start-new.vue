<template>
  <main class="index">
    <StartComponent :num="0" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import StartComponent from "@/components/StartComponent.vue";

export default Vue.extend({
  components: {
    StartComponent,
  },
  name: "start-new",
});
</script>

<style lang="scss">
@import "@/assets/scss/common";
</style>
