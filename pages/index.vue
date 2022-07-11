<template>
  <div class="index">
    <Head />
    <Navigation @getTabActive="num = $event" />
    <div class="index__btn" @click="createToggle()">ルームを作成する</div>
    <!-- <CreateMatchingBtn @getCreateFlag="createFlag = $event" /> -->
    <RecruitBnr :data="recruitBnrData[num]" />
    <!-- <RecruitBnr :data="num == 2 ? Mode.rank : recruitBnrData[num]" /> -->
    <Spacer size="120px" />
    <div
      :class="[
        createFlag ? 'createMatchingActive' : '',
        'index__createMatching',
      ]"
    >
      <Spacer size="40px" />
      <Matching data />
      <div class="index__createMatching--btn" @click="createToggle()">
        ルームを作成する
      </div>
      <Spacer size="8px" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";
import RecruitBnr from "@/components/RecruitBnr.vue";
import Spacer from "@/components/Spacer.vue";
import Mode from "../mixins/mode";
import Matching from "@/components/Matching.vue";

export default Vue.extend({
  components: {
    Navigation,
    // CreateMatchingBtn,
    RecruitBnr,
    Spacer,
    Matching,
  },
  name: "Index",
  data() {
    return {
      recruitBnrData: [
        [
          // recommend
          {
            headline: "ルームに参加する",
            hit: 1,
          },
          {
            headline: "あなたにおすすめ",
            hit: 3,
          },
        ],
        [
          // casual
          {
            headline: "誰とでも",
            hit: 3,
          },
          {
            headline: "雰囲気○",
            hit: 3,
          },
          {
            headline: "女子限定",
            hit: 3,
          },
          {
            headline: "社会人",
            hit: 3,
          },
        ],
        [
          // rank
          {
            headline: "ルーキー",
            hit: 3,
          },
          {
            headline: "ブロンズ/シルバー",
            hit: 3,
          },
          {
            headline: "ゴールド",
            hit: 3,
          },
          {
            headline: "ダイヤ",
            hit: 3,
          },
          {
            headline: "マスター/プレデター",
            hit: 3,
          },
        ],
      ],
      num: 0,
      createFlag: false,
    };
  },
  methods: {
    createToggle() {
      this.createFlag = !this.createFlag;
    },
  },
});
</script>

<style lang="scss">
@import "../assets/scss/common";
.index {
  background: $bgGray;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
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
    position: fixed;
    inset: auto 0 40px 0;
    margin: auto;
    z-index: 1;
  }
  &__createMatching {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: #fff;
    position: fixed;
    inset: auto 0 0 0;
    z-index: 10;
    transform: translateY(100%);
    &::before {
      content: "";
      display: block;
      background: $primary400;
      width: 40px;
      height: 6px;
      margin: auto;
      border-radius: 9999px;
      position: absolute;
      inset: 16px 0 auto 0;
    }
    &--btn {
      width: fit-content;
      background: $primary600;
      color: $white;
      padding: 16px 24px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 9999px;
      letter-spacing: 0.1rem;
      box-shadow: 0 2px 8px rgba($color: #000000, $alpha: 0.4);
      inset: auto 0 32px 0;
      margin: auto;
      z-index: 1;
    }
  }
  .createMatchingActive {
    transform: translateY(0);
  }
}
</style>
