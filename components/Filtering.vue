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
            @click="checked(i, $event)"
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
          heading: "プラットフォーム",
          name: "platform",
          contents: [
            {
              value: "pc",
              text: "PC",
            },
            {
              value: "ps",
              text: "PlayStation",
            },
            {
              value: "xbox",
              text: "XBox",
            },
            {
              value: "Switch",
              text: "switch",
            },
          ],
          type: "radio",
        },
        {
          heading: "プレイスタイル",
          name: "playstyle",
          contents: [
            {
              value: "casual",
              text: "カジュアル",
            },
            {
              value: "rank",
              text: "ランク",
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
            },
            {
              value: "2",
              text: "2",
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
      checkedData: ["", "", "", "", []],
      formFlag: false,
      tagData: "",
      tagDataLength: 0,
    };
  },
  methods: {
    checked(i: any, e: any) {
      // @ts-ignore
      this.tagData = e.target.value;
      if (i === 4) {
        // @ts-ignore
        this.tagDataLength = this.checkedData[3].length;
        // @ts-ignore
        for (let i2 = 0; i2 < this.tagDataLength; i2++) {
          // @ts-ignore
          if (this.checkedData[i][i2] == this.tagData) {
            // @ts-ignore
            this.checkedData[i].splice(i2, 1);
          }
        }
        // @ts-ignore
        if (this.checkedData[i].length == this.tagDataLength) {
          // @ts-ignore
          this.checkedData[i].push(e.target.value);
        }
      } else {
        // @ts-ignore
        this.checkedData[i] = this.tagData;
      }
      if (
        // @ts-ignore
        this.checkedData[0] !== "" &&
        // @ts-ignore
        this.checkedData[1] !== "" &&
        // @ts-ignore
        this.checkedData[2] !== "" &&
        // @ts-ignore
        this.checkedData[3] !== "" &&
        // @ts-ignore
        this.checkedData[4].length !== 0
      ) {
        // @ts-ignore
        this.formFlag = true;
        // @ts-ignore
        this.$emit("sendCheckedData", this.checkedData);
      } else {
        // @ts-ignore
        this.formFlag = false;
      }
      // @ts-ignore
      this.$emit("sendFormFlag", this.formFlag);
    },
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
