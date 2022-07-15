<template>
  <main class="index">
    <StartComponent :num="1" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import StartComponent from "@/components/StartComponent.vue";

export default Vue.extend({
  components: {
    StartComponent,
  },
  name: "start-login",
});
</script>

<style lang="scss">
@import "@/assets/scss/common";
</style>
