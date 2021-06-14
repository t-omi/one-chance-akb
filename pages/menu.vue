<template>
  <div class="main-box">
    <h2 class="page-title">Menu</h2>
    <div class="menu-page">
      <img class="menu01" src="../static/image/menu/menu01.jpg" />
      <img class="menu02" src="../static/image/menu/menu02.jpg" />
      <div class="clear-fix"></div>
      <img class="menu03" src="../static/image/menu/menu03.jpg" />
      <img class="menu04" src="../static/image/menu/menu04.jpg" />
      <div class="clear-fix"></div>
      <img class="menu05" src="../static/image/menu/menu05.jpg" />
      <img class="menu06" src="../static/image/menu/menu06.jpg" />
      <div class="clear-fix"></div>
      <img class="menu07" src="../static/image/menu/menu07.jpg" />
      <img class="menu08" src="../static/image/menu/menu08.jpg" />
      <div class="clear-fix"></div>
      <img class="menu09" src="../static/image/menu/menu09.jpg" />
      <img class="menu10" src="../static/image/menu/menu10.jpg" />
    </div>
    <div class="clear-fix"></div>
  </div>
</template>

<script>
export default {
  head () {
   return {
     title: "めにゅー | 秋葉原メイドバー わんちゃんす"
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
@import "../assets/css/menu.css";
</style>
