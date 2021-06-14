<template>
  <div class="main-box">
    <h2 class="page-title">Recruit</h2>
    <div class="recruit-box">
      <p class="title">募集要項</p>
      <div class="recruit-detail">
        <div class="recruit-row">
          <dt>時給</dt>
          <dd>1050円〜</dd>
        </div>
        <div class="recruit-row">
          <dt>年齢</dt>
          <dd>18歳〜</dd>
        </div>
        <div class="recruit-row">
          <dt>福利厚生</dt>
          <dd>交通費支給、制服貸与</dd>
        </div>
      </div>
    </div>
    <p class="greet">
      髪色・ネイル自由!
      <br />興味がある方は、Twitter(
      <a href="https://twitter.com/ONE_CHANCE_AKB">@ONE_CHANCE_AKB</a>)
      のDM又はお店までお電話お待ちしております。
    </p>
  </div>
</template>

<script>
export default {
  head () {
   return {
     title: "りくるーと | 秋葉原メイドバー わんちゃんす"
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
@import "../assets/css/recruit.css";
</style>
