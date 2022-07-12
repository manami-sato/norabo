<template>
  <form class="createMatching">
    <div v-for="(item, i) in formData" :key="'formData' + i">
      <div class="createMatching__heading">{{ item.heading }}</div>
      <div class="createMatching__value">
        <label
          class="createMatching__value--item"
          v-for="content in item.contents"
          :key="'label' + content.value"
        >
          <input
            :type="item.type"
            :name="item.name"
            :value="content.value"
            :id="content.value"
            v-model="checkedData[i]"
          />
          <div :for="content.value">
            {{ content.text }}
          </div>
        </label>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Spacer from "./Spacer.vue";
export default {
  components: { Spacer },
  name: "CreateMatching",
  props: ["size"],
  data() {
    return {
      formData: [
        {
          heading: "プレイスタイル",
          name: "playstyle",
          contents: [
            {
              value: "casual",
              text: "カジュアル",
              checked: true,
            },
            {
              value: "rank",
              text: "ランク",
              checked: false,
            },
          ],
          type: "radio",
        },
        {
          heading: "ランク",
          name: "rank",
          contents: [
            { value: "beginner", text: "ビギナー", checked: true },
            { value: "bronze", text: "ブロンズ/シルバー", checked: false },
            { value: "gold", text: "ゴールド", checked: false },
            { value: "platina", text: "プラチナ", checked: false },
            { value: "diamond", text: "ダイアモンド", checked: false },
            { value: "master", text: "マスター/プレデター", checked: false },
          ],
          type: "radio",
        },
        {
          heading: "募集人数",
          name: "recruit",
          contents: [
            {
              value: "1",
              text: "1",
              checked: false,
            },
            {
              value: "2",
              text: "2",
              checked: true,
            },
          ],
          type: "radio",
        },
        {
          heading: "タグ",
          name: "tag",
          contents: [
            {
              value: "everyone",
              text: "誰とでも",
            },
            {
              value: "enjoy",
              text: "雰囲気○",
            },
            {
              value: "lady",
              text: "女子限定",
            },
            {
              value: "society",
              text: "社会人",
            },
          ],
          type: "checkbox",
        },
      ],
      checkedData: [[], [], [], []],
      checkedFlag: [false, false, false, false],
      formFlag: false,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";

.createMatching {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__heading {
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
      min-width: fit-content;
      height: 48px;
      background: $pailgray;
      color: $gray;
      border-radius: 8px;
      overflow: hidden;
      div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 16px;
      }
      input {
        display: none;
      }
      input:checked + div {
        background: $primary400;
        color: $white;
      }
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
