<template>
  <main>
    <Head />
    <Spacer size="24px" />
    <MatchingComponent
      :data="pageData"
      :getFlag="modalFlag"
      @getModalFlag="modalFlag = $event"
    />
    <MatchingModal
      :text="modal"
      :getFlag="modalFlag"
      v-if="modalFlag"
      @getModalFlag="modalFlag = $event"
    />
  </main>
</template>

<script lang="ts">
import Head from "@/components/Head.vue";
import MatchingComponent from "@/components/MatchingComponent.vue";

export default {
  components: {
    Head,
    MatchingComponent,
  },
  name: "Matching",
  data() {
    return {
      pageData: {
        name: "マッチング完了！",
        description: "リーダーの方はフレンド申請を行なってください！",
        readerNumber: 0,
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
        backText: "",
        endText: "マッチングを終了",
      },
      modal: [
        {
          text: `ゲーム内及びDiscordにて
マッチングメンバーとフレンドになりましたか？`,
          attention: false,
        },
        {
          text: "まだ",
          attention: false,
        },
        {
          text: "なった！",
          attention: false,
        },
      ],
      modalFlag: false,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
.matching {
  display: flex;
  flex-direction: column;
  height: auto;
  &__cancel {
    @include btn;
    margin: auto auto 32px;
    // color: $primary400;
    // margin: auto auto 24px;
    // font-size: 1.2rem;
    // text-decoration: underline;
  }
}
</style>
