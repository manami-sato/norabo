import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $height(): void  // ここに ＄hoge を定義
  }
}