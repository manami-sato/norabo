<template>
  <header class="head">
    <h1 class="head__logo">
      <NuxtLink to="/">
        norabo
        <!-- <Logo /> -->
      </NuxtLink>
    </h1>
    <ul class="head__account">
      <li v-for="(link, i) in links" :key="i">
        <NuxtLink :to="link.url" class="head__account--link">{{
          link.name
        }}</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
// import Logo from "@/assets/img/logo.svg";
export default {
  // components: {
  //   Logo,
  // },
  name: "Head",
  data() {
    return {
      links: [
        {
          url: "#",
          name: "ログイン",
        },
        {
          url: "#",
          name: "会員登録",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 96px;
  background: $white;
  border-bottom: 2px solid $pailgray;
  padding: 0 4vw 8px;
  &__logo {
    height: 32px;
  }
  &__account {
    display: flex;
    gap: 8px;
    font-size: 1.4rem;
    &--link {
      color: lighten($color: #007aff, $amount: 10%);
    }
  }
}
</style>
