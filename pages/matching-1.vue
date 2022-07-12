<template>
  <div class="matching">
    <Head />
    <Spacer size="24px" />
    <h2 class="matching__heading">
      マッチング中
      <div class="matching__heading--reader">
        <span v-for="(item, i) in readerNumber" :key="i + 'reader'">.</span>
      </div>
    </h2>
    <Spacer size="20px" />
    <div v-for="(item, i) in userData" :key="i">
      <MatchingUser :data="item" />
    </div>
    <div class="matching__cancel">このマッチングから退出</div>
    <div class="matching__modal">
      <div>本当にこのマッチングから退出しますか？</div>
      <div class="matching__modal--back">退出しない</div>
      <div class="matching__modal--enter">退出する</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "@/components/Navigation.vue";
import MatchingUser from "@/components/MatchingUser.vue";

export default Vue.extend({
  components: {
    Navigation,
    MatchingUser,
  },
  name: "Matching",
  data() {
    return {
      readerNumber: 3,
      userData: [
        {
          icon: "",
          name: "まゆずみかい",
          cord: {
            friend: "mayuzumi_x",
            voice: "mayuzumi_y",
          },
          playstyle: "ランク",
          rank: "プラチナ",
          tag: ["aaa", "bbb"],
        },
      ],
    };
  },
  methods: {},
});
</script>

<style lang="scss">
@import "@/assets/scss/common";
.matching {
  display: flex;
  flex-direction: column;
  &__heading {
    display: flex;
    justify-content: center;
    color: $primary500;
    font-size: 2.2rem;
    &--reader {
      width: 20px;
    }
  }
  &__user {
    display: grid;
    grid-template-columns: 80px auto;
    grid-template-rows: auto auto;
    gap: 8px;
    width: 90vw;
    padding: 16px;
    position: relative;
    margin: auto;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: calc(100% - 40px);
      border: 2px solid $primary100;
      position: absolute;
      inset: auto auto 0;
      z-index: -1;
    }
    > div {
      &:nth-of-type(1) {
        grid-column: 1;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        width: fit-content;
      }
      &:nth-of-type(2) {
        grid-column: 2;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: calc(100% - 40px);
        margin: auto 0 0;
      }
    }
    &--name {
      font-size: 1.6rem;
      font-weight: bold;
    }
    &--icon {
      width: 64px;
      height: 64px;
      background: $gray;
      border-radius: 9999px;
      overflow: hidden;
    }
    &--tag {
      grid-column: 1/3;
      grid-row: 2;
      display: flex;
      gap: 8px;
      font-size: 1.2rem;
      li {
        display: flex;
        align-items: center;
        height: 28px;
        color: $gray;
        background: $pailgray;
        font-weight: bold;
        padding: 0 12px;
      }
    }
  }
  &__cancel {
    @include btn;
    margin: auto 0 0;
  }
}
</style>
