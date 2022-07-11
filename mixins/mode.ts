export default {
  data: () => ({
    filter: [
      {
        name: "プレイスタイル",
        value: ["カジュアル", "ランク"],
      },
      {
        name: "ランク",
        value: [
          "ビギナー",
          "ブロンズ/シルバー",
          "ゴールド",
          "プラチナ",
          "ダイアモンド",
          "マスター/プレデター",
        ],
      },
      {
        name: "募集人数",
        value: [1, 2],
      },
      {
        name: "タグ",
        value: ["誰とでも", "雰囲気○", "女子限定", "社会人"],
      },
    ],
    casual: [
      {
        nameJa: "カジュアル",
        nameEn: "casual",
        hit: 3,
      },
    ],
    rank: [
      {
        nameJa: "ビギナー",
        nameEn: "beginner",
        hit: 3,
      },
      {
        nameJa: "ブロンズ/シルバー",
        nameEn: "bronze-silver",
        hit: 3,
      },
      {
        nameJa: "ゴールド",
        nameEn: "gold",
        hit: 3,
      },
      {
        nameJa: "プラチナ",
        nameEn: "platina",
        hit: 3,
      },
      {
        nameJa: "ダイアモンド",
        nameEn: "diamond",
        hit: 3,
      },
      {
        nameJa: "マスター/プレデター",
        nameEn: "master-predator",
        hit: 3,
      },
    ],
  }),
  methods: {
    myMethod() {
      console.log("my method");
    },
  },
};
