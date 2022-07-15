<template>
  <div class="start" :style="{ height: height + 'px' }">
    <h2 class="start__heading">{{ data[num].heading }}</h2>
    <Spacer size="32px" />
    <a
      v-for="(item, i) in loginPlatforms"
      :href="item.url"
      target="page"
      :key="i"
      class="start__login"
      >{{ item.name }}で{{ data[num].do }}</a
    >
    <Spacer size="40px" />
    <div class="start__or">または</div>
    <Spacer size="8px" />
    <form action="" class="start__form">
      <input
        class="start__form--text"
        v-for="(item, i) in input"
        :key="i"
        :type="item.type"
        :placeholder="item.placeholder"
      />
      <Spacer size="32px" />
      <p v-if="data[num].linkFlag" class="start__form--attention">
        noraboの<NuxtLink to="/">利用規約</NuxtLink>と<NuxtLink to="/"
          >プライバシーポリシー</NuxtLink
        >に同意して
      </p>
      <button class="start__form--button">{{ data[num].button }}</button>
    </form>
    <NuxtLink :to="data[num].other.url" class="start__link"
      >{{ data[num].other.text }} ></NuxtLink
    >
  </div>
</template>

<script lang="ts">
import Spacer from "./Spacer.vue";
export default {
  components: { Spacer },
  name: "Index",
  props: ["num"],
  data() {
    return {
      data: [
        {
          heading: "新規登録",
          do: "はじめる",
          linkFlag: true,
          button: "新規登録する",
          other: {
            text: "登録済みの方はこちらからログイン",
            url: "/start-login",
          },
        },
        {
          heading: "ログイン",
          do: "ログイン",
          linkFlag: false,
          button: "ログインする",
          other: {
            text: "会員でない方はこちらから新規登録",
            url: "/start-new",
          },
        },
      ],
      loginPlatforms: [
        {
          url: "/",
          name: "Google",
          icon: "",
        },
        {
          url: "/",
          name: "Twitter",
          icon: "",
        },
      ],
      input: [
        {
          type: "text",
          placeholder: "メールアドレス",
        },
        {
          type: "password",
          placeholder: "パスワード",
        },
      ],
      height: 0,
    };
  },
  mounted() {
    // @ts-ignore
    this.height = window.innerHeight;
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common";
.start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffffff 0%, #e7f2f3 100%);
  &__heading {
    width: fit-content;
    color: $primary500;
    font-size: 1.8rem;
  }
  &__login {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 70vw;
    max-width: 320px;
    height: 56px;
    font-weight: bold;
    border-radius: 9999px;
    box-shadow: 0px 2px 2px rgba($color: #000000, $alpha: 0.15);
    &:nth-of-type(1) {
      background: $white;
      margin: 0 0 24px;
    }
    &:nth-of-type(2) {
      color: $white;
      background: #1da1f2;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--text {
      width: 70vw;
      max-width: 320px;
      background: $white;
      border: 1px solid $primary100;
      padding: 14px 12px;
      font-size: 1.6rem;
      border-radius: 2px;
      margin: 16px 0 0;
      &::placeholder {
        color: lighten($color: $gray, $amount: 10%);
      }
      &:focus {
        outline: 0;
        background: lighten($color: $primary100, $amount: 10%);
      }
    }
    &--attention {
      font-size: 1rem;
      color: $gray;
      margin: 0 0 8px;
      a {
        color: $primary900;
      }
    }
    &--button {
      @include btn;
      width: 70vw;
      max-width: 320px;
    }
  }
  &__link {
    color: darken($color: $gray, $amount: 10%);
    font-size: 1.2rem;
    margin: 16px 0 0;
    text-decoration: underline;
  }
}
</style>
