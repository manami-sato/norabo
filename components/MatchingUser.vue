<template>
  <div class="matching__user">
    <div>
      <div class="matching__user--icon">
        <!-- <img :src="data.img" :alt="data.name" /> -->
      </div>
      <div class="matching__user--name">{{ data.name }}</div>
    </div>
    <div>
      <div>
        <!-- <span>フレンドコード</span> -->
        <span>{{ data.cord.friend }}</span>
      </div>
      <div>
        <!-- <span>Discord ID</span> -->
        <span>{{ data.cord.voice }}</span>
      </div>
    </div>
    <ul class="matching__user--tag">
      <li>{{ data.rank }}</li>
      <li v-for="(item, i) in data.tag" :key="i">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "MatchingUser",
  props: ["data"],
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
.matching {
  &__user {
    display: grid;
    grid-template-columns: 96px auto;
    grid-template-rows: auto auto;
    gap: 12px 8px;
    width: 90vw;
    padding: 0 16px 16px 16px;
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
        gap: 8px;
        width: fit-content;
      }
      &:nth-of-type(2) {
        grid-column: 2;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: calc(100% - 40px - 16px);
        margin: auto 0 0;
      }
    }
    &--name {
      font-size: 1.6rem;
      font-weight: bold;
    }
    &--icon {
      width: 72px;
      height: 72px;
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
}
</style>
