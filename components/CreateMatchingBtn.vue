<template>
  <div class="createRoom" @click="createToggle()">ルームを作成する</div>
</template>

<script lang="ts">
export default {
  name: "CreateMatchingBtn",
  data() {
    return {
      createFlag: false,
    };
  },
  methods: {
    createToggle() {
      this.createFlag = !this.createFlag;
      this.$emit("getCreateFlag", this.createFlag);
      console.log(this.createFlag);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common";
.createRoom {
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
  inset: auto 0 32px 0;
  margin: auto;
  z-index: 1;
}
</style>
