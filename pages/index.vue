<template>
  <div class="main-box">
  <div class="header-info">
    <nuxt-link to="/notice">【時短営業】12/17まで22時閉店となります</nuxt-link>
  </div>
    <div class="slideshow">
      <img src="../static/image/slideshow/index01.jpeg" />
      <img src="../static/image/slideshow/index02.jpeg" />
      <img src="../static/image/slideshow/index03.jpeg" />
      <img src="../static/image/slideshow/index04.jpeg" />
      <img src="../static/image/slideshow/index05.jpeg" />
    </div>
    <div class="notice">
      <div class="notice-title">
        <p>＜お知らせ＞</p>
      </div>
      <template>
        <NoticeTable></NoticeTable>
      </template>
      <div class="twitter-box">
        <a
          class="twitter-timeline"
          data-height="100%"
          data-wight="100%"
          data-chrome="transparent nofooter"
          href="https://twitter.com/ONE_CHANCE_AKB?ref_src=twsrc%5Etfw"
        >
          Tweets
          by ONE_CHANCE_AKB
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
      <div class="clear-fix"></div>
    </div>
  </div>
</template>

<script>
import NoticeTable from "../components/notice-table";

export default {
  head () {
   return {
     title: "秋葉原メイドバー わんちゃんす"
   }
 },
  components: {
    NoticeTable
  },
  mounted() {
    this.slideshow();
  },
  methods: {
    slideshow() {
      $('.slideshow').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 3500,
      dots: true,
      fade: true,
    });
    }
  }
};
</script>

<style>
@import "../static/slick/slick-theme.css";
@import "../static/slick/slick.css";
</style>
