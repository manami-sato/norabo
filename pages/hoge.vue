<template>
  <div>
    <button @click="sendApi">ok</button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: [],
    };
  },
  // async asyncData({ $axios }) {
  //   const params = JSON.stringify({
  //     email: "email@aaa.jp",
  //     nick_name: "nickname",
  //     age: "1",
  //     pw: "pw",
  //     gender: "1",
  //   });
  //   const response = await $axios.$post(
  //     "https://click.ecc.ac.jp/ecc/msatou/comp_php/sign_up.php",
  //     {
  //       mode: "cors",
  //       params,
  //     }
  //   );
  //   return {
  //     res: response,
  //   };
  // },
  // async asyncData({ $axios }) {
  //   const params = {
  //     user_id: "10",
  //   };
  //   const response = await $axios.$post(
  //     "https://click.ecc.ac.jp/ecc/msatou/json_test/json_test.php",
  //     params
  //   );
  //   return {
  //     res: response,
  //   };
  // },
  methods: {
    async sendApi() {
      const params = JSON.stringify({
        email: "email@aaa.jp",
        nick_name: "nickname",
        age: "1",
        pw: "pw",
        gender: "1",
      });
      const response = await this.$axios.$post(
        "https://click.ecc.ac.jp/ecc/msatou/comp_php/sign_up.php",
        {
          mode: "cors",
          params,
        }
      );
      return {
        res: response,
      };
    },
  },
};
</script>
