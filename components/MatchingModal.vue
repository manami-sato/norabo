<template>
  <div>
    <div class="matching__modal">
      <div
        class="matching__modal--question"
        :class="{ 'matching__modal--attention': text[0].attention }"
      >
        {{ text[0].text }}
      </div>
      <div
        class="matching__modal--answer1"
        :class="{ 'matching__modal--attention': text[1].attention }"
        @click="modalToggle()"
      >
        {{ text[1].text }}
      </div>
      <NuxtLink
        to="/"
        :class="[
          'matching__modal--answer2',
          { 'matching__modal--attention': text[2].attention },
        ]"
      >
        {{ text[2].text }}
      </NuxtLink>
    </div>
    <div class="matching__bg" :style="{ height: $height() + 'px' }"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MatchingModal",
  props: ["text", "getFlag"],
  data() {
    return {
      styleObj: {
        color: "#ff0000",
      },
      modalFlag: false,
    };
  },
  mounted() {
    this.modalFlag = this.getFlag;
  },
  methods: {
    modalToggle() {
      this.modalFlag = !this.modalFlag;
      this.$emit("getModalFlag", this.modalFlag);
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/common";
.matching {
  &__modal {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 96px 48px;
    width: 80vw;
    height: calc(96px + 48px);
    background: $white;
    font-size: 1.2rem;
    margin: auto;
    position: fixed;
    inset: 0;
    z-index: 20;
    border-radius: 8px;
    &--question {
      grid-column: 1/3;
      grid-row: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: $pailgray 1px solid;
    }
    &--answer1 {
      grid-column: 1;
      grid-row: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: $pailgray 1px solid;
    }
    &--answer2 {
      grid-column: 2;
      grid-row: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &--attention {
      color: #ff0000;
    }
  }
  &__bg {
    width: 100vw;
    background: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    inset: 0 0 auto auto;
    z-index: 10;
    pointer-events: none;
  }
}
</style>
