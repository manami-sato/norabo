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
import MatchingModal from "@/components/MatchingModal.vue";

export default {
  components: {
    Head,
    MatchingComponent,
    MatchingModal,
  },
  name: "Matching",
  data() {
    return {
      pageData: {
        name: "マッチング中",
        description: "",
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
        backText: "このマッチングから退出",
        endText: "",
      },
      modal: [
        {
          text: "本当にこのマッチングから退出しますか？",
          attention: false,
        },
        {
          text: "退出しない",
          attention: false,
        },
        {
          text: "退出する",
          attention: true,
        },
      ],
      modalFlag: false,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
</style>
