<template>
  <div class="filtering" :style="{ height: $height() + 'px' }">
    <div class="filtering__heading">
      <div class="filtering__heading--back" @click="backToggle()"></div>
      <div class="filtering__heading--text">ルームの絞り込み</div>
      <div class="filtering__heading--clear" @click="clearToggle()">クリア</div>
    </div>
    <Matching />
    <div class="filtering__search">{{ clearFlag }}のルームがあります</div>
  </div>
</template>

<script lang="ts">
import Matching from "@/components/Filtering.vue";
export default {
  components: {
    Matching,
  },
  name: "Filtering",
  props: ["getFlag"],
  data() {
    return {
      backFlag: true,
      clearFlag: false,
    };
  },
  mounted() {
    // @ts-ignore
    this.backFlag = this.getFlag;
  },
  methods: {
    backToggle() {
      // @ts-ignore
      this.backFlag = !this.backFlag;
      // @ts-ignore
      this.$emit("getBackActive", this.backFlag);
    },
    clearToggle() {
      // @ts-ignore
      this.clearFlag = !this.clearFlag;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
.filtering {
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: $white;
  position: fixed;
  inset: 0 0 auto auto;
  z-index: 20;
  &__heading {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 64px;
    margin: 0 0 32px;
    &--back {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 24px;
      position: relative;
      &::before,
      &::after {
        content: "";
        display: block;
        background: #000000;
        width: 24px;
        height: 2px;
        border-radius: 9999px;
        position: absolute;
        inset: auto;
      }
      &::before {
        transform: rotateZ(45deg);
      }
      &::after {
        transform: rotateZ(-45deg);
      }
    }
    &--text {
      font-weight: bold;
    }
    &--clear {
      color: $primary500;
    }
  }
  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    color: $white;
    background: $primary300;
    margin: auto 0 0;
    font-weight: bold;
  }
}
</style>
