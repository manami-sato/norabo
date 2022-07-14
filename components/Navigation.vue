<template>
  <nav class="nav">
    <ul class="nav__tab">
      <li
        v-for="(tab, i) in tabs"
        :class="[
          'nav__tab--contents',
          { 'nav__tab--contents--on': i == tabActive },
        ]"
        :key="i"
        @click="tabClick(i)"
      >
        {{ tab }}
      </li>
    </ul>
    <div class="nav__filter" @click="backToggle()">絞り込み</div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navigation",
  data() {
    return {
      tabs: ["おすすめ", "カジュアル", "ランク"],
      tabActive: 0,
      backFlag: false,
    };
  },
  methods: {
    tabClick(i: number) {
      this.tabActive = i;
      this.$emit("getTabActive", i);
    },
    backToggle() {
      this.backFlag = !this.backFlag;
      this.$emit("getFilteringActive", this.backFlag);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background: $white;
  border-bottom: 1px solid $pailgray;
  margin: 0 0 32px;
  padding: 0 4vw;
  &__tab {
    display: flex;
    gap: 16px;
    color: $primary500;
    font-weight: bold;
    font-size: 1.4rem;
    &--contents {
      display: flex;
      align-items: center;
      height: 56px;
      padding: 4px 2px 0;
      border-bottom: 4px solid transparent;
      &--on {
        border-bottom: 4px solid $primary500;
      }
    }
  }
  &__filter {
    display: flex;
    align-items: center;
    height: 100%;
    color: $primary900;
    font-weight: bold;
    font-size: 1.3rem;
  }
}
.filterActive {
}
</style>
