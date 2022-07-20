<template>
  <div class="filtering" :style="{ height: $height() + 'px' }">
    {{ res }}
    <div class="filtering__heading">
      <div class="filtering__heading--back" @click="backToggle()"></div>
      <div class="filtering__heading--text">ルームの絞り込み</div>
      <div class="filtering__heading--clear" @click="clearToggle()">クリア</div>
    </div>
    <Filtering
      @sendFormFlag="formFlag = $event"
      @sendCheckedData="checkedData = $event"
    />
    <div
      :class="['filtering__search', { 'filtering__search--on': formFlag }]"
      @click="sendApi()"
    >
      {{ formFlag }}のルームがあります
    </div>
  </div>
</template>

<script lang="ts">
import Filtering from "@/components/Filtering.vue";
export default {
  components: {
    Filtering,
  },
  name: "IndexFiltering",
  props: ["getFlag"],
  data() {
    return {
      backFlag: true,
      formFlag: false,
      checkedData: ["", "", "", "", []],
      res: [],
    };
  },
  mounted() {
    // @ts-ignore
    this.backFlag = this.getFlag;
  },
  methods: {
    backToggle() {
      // @ts-ignore
      this.backFlag = !this.backFlag;
      // @ts-ignore
      this.$emit("getBackActive", this.backFlag);
    },
    clearToggle() {
      // @ts-ignore
      this.formFlag = !this.formFlag;
    },
    // async sendApi({ $axios }) {
    //   const params = {
    //     platt: this.checkedData[0],
    //     // $game = $_POST["game"];　//ゲーム名(Apex固定)
    //     // $same = strval($_POST["same"]);	　　　　//同性チェック
    //     // $style = strval($_POST['style']);　　　//プレイヤーのスタイル
    //     // $rank = strval($_POST['rank']);//ランク
    //     // $title = $_POST["title"];             //ルーム名
    //     // $area_text = $_POST["area_text"];　　 //ルームの内容
    //     // $filter = $same.$style.$rank;
    //   };
    //   const response = await $axios.$post(
    //     // "https://click.ecc.ac.jp/ecc/msatou/json_test/json_test.php",
    //     "https://click.ecc.ac.jp/ecc/msatou/comp_php/make_room.php",
    //     params
    //   );
    //   return {
    //     res: response,
    //   };
    // },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
.filtering {
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: $white;
  position: fixed;
  inset: 0 0 auto auto;
  z-index: 20;
  &__heading {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 64px;
    margin: 0 0 32px;
    &--back {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 24px;
      position: relative;
      &::before,
      &::after {
        content: "";
        display: block;
        background: #000000;
        width: 24px;
        height: 2px;
        border-radius: 9999px;
        position: absolute;
        inset: auto;
      }
      &::before {
        transform: rotateZ(45deg);
      }
      &::after {
        transform: rotateZ(-45deg);
      }
    }
    &--text {
      font-weight: bold;
    }
    &--clear {
      color: $primary500;
    }
  }
  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    color: $white;
    background: $primary300;
    margin: auto 0 0;
    font-weight: bold;
    &--on {
      background: $primary500;
    }
  }
}
</style>
