<template>
  <div class="main-box">
    <h2 class="page-title">Access</h2>
    <div class="text-box">
      <p>住所</p>
      <p>
        〒101-0025
        <br />東京都千代田区神田佐久間町1-20 2F
      </p>
      <p>最寄り駅</p>
      <p>JR線「秋葉原駅」昭和通り口 徒歩30秒</p>
    </div>
    <div class="map-box">
      <map>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2167.547108623851!2d139.77451643499404!3d35.69777701186139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea8672ed5ed%3A0x29cd90f3ac9a052e!2z44CSMTAxLTAwMjUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw5L2Q5LmF6ZaT55S677yR5LiB55uu77yS77yQ!5e0!3m2!1sja!2sjp!4v1570448625192!5m2!1sja!2sjp"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </map>
    </div>
    <div class="clear-fix"></div>
  </div>
</template>

<script>
export default {
  head () {
   return {
     title: "あくせす | 秋葉原メイドバー わんちゃんす"
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
@import "../assets/css/access.css";
</style>
