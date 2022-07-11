<template>
  <!-- <div :class="[getToggle ? createMatchingActive : '', createMatching]"> -->
  <div class="createMatching">
    <div v-for="(item, i) in matchingList" :key="i">
      <!-- <div> -->
      <div class="createMatching__headline">{{ item.name }}</div>
      <div class="createMatching__value">
        <div
          class="createMatching__value--item"
          v-for="(value, i2) in item.value"
          :key="i2"
        >
          {{ value }}
        </div>
        <!-- </div> -->
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Spacer from "./Spacer.vue";
export default {
  components: { Spacer },
  name: "CreateMatching",
  props: ["size"],
  data: () => ({
    matchingList: [
      {
        name: "プレイスタイル",
        value: ["カジュアル", "ランク"],
      },
      {
        name: "ランク",
        value: [
          "ビギナー",
          "ブロンズ/シルバー",
          "ゴールド",
          "プラチナ",
          "ダイアモンド",
          "マスター/プレデター",
        ],
      },
      {
        name: "募集人数",
        value: [1, 2],
      },
      {
        name: "タグ",
        value: ["誰とでも", "雰囲気○", "女子限定", "社会人"],
      },
    ],
  }),
};
</script>

<style lang="scss">
@import "../assets/scss/common";
.createMatching {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__headline {
    color: $primary900;
    margin: 0 0 8px;
    padding: 0 4vw;
    font-size: 1.8rem;
    font-weight: bold;
  }
  &__value {
    display: flex;
    gap: 16px;
    width: 100%;
    padding: 0 4vw;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    &--item {
      display: flex;
      align-items: center;
      min-width: fit-content;
      height: 48px;
      background: $pailgray;
      color: $gray;
      padding: 0 16px;
      border-radius: 8px;
    }
  }
  &__btn {
    width: fit-content;
    background: $primary600;
    color: $white;
    padding: 16px 24px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 9999px;
    letter-spacing: 0.1rem;
    box-shadow: 0 2px 8px rgba($color: #000000, $alpha: 0.4);
    margin: auto;
  }
}
</style>
