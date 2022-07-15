<template>
  <div class="matching" :style="{ height: height + 'px' }">
    <div class="matching__heading">
      <h2 class="matching__heading--title">
        {{ data.name }}
      </h2>
      <div class="matching__heading--reader" v-if="data.readerNumber !== 0">
        <span v-for="(item, i) in data.readerNumber" :key="i + 'reader'"
          >.</span
        >
      </div>
    </div>
    <Spacer size="4px" v-if="data.description !== ''" />
    <span class="matching__description" v-if="data.description !== ''">{{
      data.description
    }}</span>
    <Spacer size="16px" />
    <div v-for="(item, i) in data.userData" :key="i">
      <MatchingUser :data="item" />
    </div>
    <div
      class="matching__cancel"
      @click="modalToggle()"
      v-if="data.backText !== ''"
    >
      {{ data.backText }}
    </div>
    <div
      class="matching__end"
      @click="modalToggle()"
      v-if="data.endText !== ''"
    >
      {{ data.endText }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["data", "getFlag"],
  name: "Matching",
  data() {
    return {
      height: 0,
      modalFlag: false,
    };
  },

  mounted() {
    // @ts-ignore
    this.modalFlag = this.getFlag;
    // @ts-ignore
    this.height = window.innerHeight - 96 - 24;
  },
  methods: {
    modalToggle() {
      // @ts-ignore
      if (this.modalFlag) {
        // @ts-ignore
        this.modalFlag = !this.modalFlag;
      }
      // @ts-ignore
      this.modalFlag = !this.modalFlag;
      // @ts-ignore
      this.$emit("getModalFlag", this.modalFlag);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
.matching {
  display: flex;
  flex-direction: column;
  height: auto;
  &__heading {
    display: flex;
    justify-content: center;
    color: $primary500;
    &--title {
      font-size: 2.2rem;
    }
    &--reader {
      width: 20px;
      font-size: 2.2rem;
    }
  }
  &__description {
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
  &__cancel {
    color: $primary400;
    margin: auto auto 24px;
    font-size: 1.2rem;
    text-decoration: underline;
  }
  &__end {
    @include btn;
    margin: auto auto 32px;
  }
}
</style>
