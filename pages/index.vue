<template>
  <main class="index">
    <Head />
    <Navigation
      @getTabActive="num = $event"
      @getFilteringActive="filteringFlag = $event"
    />
    <div class="index__btn" @click="createToggle()">ルームを作成する</div>
    <RecruitBnr :data="recruitBnrData[num]" />
    <Spacer size="120px" />
    <div
      :class="[
        createFlag ? 'createMatchingActive' : 'disCreateMatchingActive',
        'index__createMatching',
      ]"
    >
      <div class="index__createMatching--swipe" @click="createToggle()" />
      <Filtering />
      <div class="index__createMatching--btn" @click="createToggle()">
        ルームを作成する
      </div>
      <Spacer size="8px" />
    </div>
    <IndexFiltering
      :getFlag="filteringFlag"
      @getBackActive="filteringFlag = $event"
      v-if="filteringFlag"
    />
    <transition name="fade">
      <div class="index__bg" v-if="createFlag"></div>
    </transition>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import RecruitBnr from "@/components/RecruitBnr.vue";
import Spacer from "@/components/Spacer.vue";
import IndexFiltering from "@/components/IndexFiltering.vue";
import Filtering from "@/components/Filtering.vue";

export default Vue.extend({
  components: {
    Head,
    Navigation,
    RecruitBnr,
    Spacer,
    Filtering,
    IndexFiltering,
  },
  name: "Index",
  data() {
    return {
      recruitBnrData: [
        [
          // recommend
          {
            heading: "ルームに参加する",
            hit: 1,
          },
          {
            heading: "あなたにおすすめ",
            hit: 3,
          },
        ],
        [
          // casual
          {
            heading: "誰とでも",
            hit: 3,
          },
          {
            heading: "雰囲気○",
            hit: 3,
          },
          {
            heading: "女子限定",
            hit: 3,
          },
          {
            heading: "社会人",
            hit: 3,
          },
        ],
        [
          // rank
          {
            heading: "ルーキー",
            hit: 3,
          },
          {
            heading: "ブロンズ/シルバー",
            hit: 3,
          },
          {
            heading: "ゴールド",
            hit: 3,
          },
          {
            heading: "ダイヤ",
            hit: 3,
          },
          {
            heading: "マスター/プレデター",
            hit: 3,
          },
        ],
      ],
      num: 0,
      createFlag: false,
      filteringFlag: false,
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
@import "@/assets/scss/common";

@keyframes createAnimation {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes disCreateAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
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
    background: $white;
    position: fixed;
    inset: auto 0 0 0;
    z-index: 10;
    transform: translateY(100%);
    &--swipe {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 40px;
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
    }
    &--btn {
      @include btn;
      margin: auto;
    }
  }
  &__bg {
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.7);
    position: fixed;
    inset: 0 0 auto auto;
  }
}
.createMatchingActive {
  animation: createAnimation 0.3s;
  transform: translateY(0);
}
.disCreateMatchingActive {
  animation: disCreateAnimation 0.3s;
  // transform: translateY(100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
