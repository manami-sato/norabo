<template>
  <div>
    <div v-for="(item, i) in data" :key="i">
      <RecruitHeadline :headline="item.headline" />
      <RecruitContents :contentsNumber="item.hit" />
    </div>
  </div>
</template>

<script lang="ts">
import RecruitHeadline from "./RecruitHeadline.vue";
import RecruitContents from "./RecruitContents.vue";
export default {
  name: "RecruitBnr",
  props: ["data"],
};
</script>

<style lang="scss">
@import "../assets/scss/common";
.recruit {
  &__headline {
    color: $primary500;
    padding: 0 4vw;
    font-size: 1.8rem;
  }
  &__contents {
    display: flex;
    gap: 16px;
    width: 100%;
    padding: 0 4vw;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    > li {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 60vw;
      background: $white;
      margin: 12px 0 32px;
      padding: 20px 16px;
      border-radius: 12px;
      box-shadow: 0 0 12px rgba($color: #000000, $alpha: 0.1);
      > * {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
    &--mode {
      display: flex;
      align-items: center;
      height: 32px;
      background: tomato;
      color: $white;
      padding: 0 8px;
      font-size: 1.2rem;
    }
    &--member {
      display: flex;
      align-items: center;
      height: 32px;
      background: $pailgray;
      color: $gray;
      padding: 0 8px;
      font-size: 1.2rem;
    }
    &--min {
      color: $gray;
      font-size: 1.3rem;
      font-weight: bold;
    }
    &--tag {
      &--item {
        background: $pailgray;
        color: $gray;
        padding: 4px 12px;
        font-size: 1.2rem;
        border-radius: 9999px;
      }
    }
  }
}
</style>
