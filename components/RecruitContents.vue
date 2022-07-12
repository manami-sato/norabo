<template>
  <ul class="recruit__contents">
    <li v-for="n in contentsNumber" :key="n">
      <nuxt-link to="/matching-1">
        <div>
          <div class="recruit__contents--mode">{{ recruitItem.mode }}</div>
          <div class="recruit__contents--member">@{{ recruitItem.member }}</div>
          <div class="recruit__contents--min">{{ recruitItem.min }}分</div>
        </div>
        <h4 class="recruit__contents--ttl">{{ recruitItem.ttl }}</h4>
        <ul class="recruit__contents--tag">
          <li
            class="recruit__contents--tag--item"
            v-for="(item, i) in recruitItem.tag"
            :key="i"
          >
            #{{ item }}
          </li>
        </ul>
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "RecruitContents",
  props: ["contentsNumber"],
  data() {
    return {
      recruitItem: {
        mode: "カジュアル",
        ttl: "エンジョイ勢で楽しくランク回していきましょう！",
        member: 1,
        min: 1,
        tag: ["誰とでも", "雰囲気○"],
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
</style>
