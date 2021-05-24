<template>
  <div class="main-box">
    <h2 class="page-title">時短営業のお知らせ</h2>
    <div class="intro-box">
      <p>
        東京都の営業時間短縮要請に伴い、
        <br />営業時間を12:00〜21:00(お酒のL.O.20:00)に変更させていただきます。
        <br />メイドさんの日替わりランチございますのでお気軽にご来店ください♪
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head () {
   return {
     title: "お知らせ | 秋葉原メイドバー わんちゃんす"
   }
 },
  mounted() {
    this.fontReload();
  },
  methods: {
    fontReload() {
      FONTPLUS.start();
    }
  }
}
</script>

<style>
@import "../assets/css/notice.css";
</style>
