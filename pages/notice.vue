<template>
  <div class="main-box">
    <h2 class="page-title">時短営業のお知らせ</h2>
    <div class="intro-box">
      <p>
        東京都の営業時間短縮要請に伴い、
        <br />11/28(土)〜12/17(木)の営業時間を17:00〜22:00(L.O.21:30)に変更させていただきます。
        <br />また、12/17(木)までの土日はランチ営業として12:00〜22:00(L.O.21:30)の営業とさせていただきます。
      </p>
    <h2 class="page-title">年末年始営業のお知らせ</h2>
      <p>
        年末年始の営業は下記の日程で行います。
        <br />12/29,30　12:00〜翌4:30
        <br />12/31〜1/3　休業
        <br />1/4 18:00〜　営業再開
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
@import "~/assets/css/notice.css";
</style>