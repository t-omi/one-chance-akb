<template>
  <div ref="container" class="container">
    <i class="fas fa-chevron-circle-up" v-on:click="scrollTop" v-show="scrollY > 300"></i>
    <div id="loader">
      <img src="../static/image/load.gif" alt="Now Loading..." />
    </div>
    <div id="fade"></div>
    <div id="wrap">
      <header class="header">
        <nuxt-link to="/">
          <img class="logo01" src="../static/image/logo01.jpeg" />
          <img class="logo02" src="../static/image/logo02.jpeg" />
        </nuxt-link>
        <div class="header-textbox">
          <p>秋葉原駅から徒歩20秒! お酒の種類にこだわったメイドバーです✨</p>
          <p>麻雀プロ在籍中 あのプロにも会えるかも？ 18:00から翌4:30（L.O.4:00）まで毎日休まず営業中♡</p>
        </div>
        <div class="hamburger">
          <div ref="nav_toggle" id="nav-toggle" v-on:click="switchNav">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="gloval-nav">
            <nav>
              <ul>
                <li v-on:click="switchNav">
                  <nuxt-link to="/">
                    <i class="fas fa-home fa-fw"></i>ほーむ
                  </nuxt-link>
                </li>
                <li v-on:click="switchNav">
                  <nuxt-link to="/about">
                    <i class="fas fa-question-circle fa-fw"></i>あばうと
                  </nuxt-link>
                </li>
                <li v-on:click="switchNav">
                  <nuxt-link to="/system">
                    <i class="fas fa-yen-sign fa-fw"></i>しすてむ
                  </nuxt-link>
                </li>
                <li v-on:click="switchNav">
                  <nuxt-link to="/maid">
                    <i class="fas fa-award fa-fw"></i>めいど
                  </nuxt-link>
                </li>
                <li v-on:click="switchNav">
                  <nuxt-link to="/menu">
                    <i class="fas fa-glass-martini-alt fa-fw"></i>めにゅー
                  </nuxt-link>
                </li>
                <li v-on:click="switchNav">
                  <nuxt-link to="/access">
                    <i class="fas fa-map-marker-alt fa-fw"></i>あくせす
                  </nuxt-link>
                </li>
                <li v-on:click="switchNav">
                  <nuxt-link to="/recruit">
                    <i class="fas fa-user fa-fw"></i>りくるーと
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div class="top-bar">
        <ul>
          <li>
            <nuxt-link to="/">
              <i class="fas fa-home fa-fw"></i>ほーむ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              <i class="fas fa-question-circle fa-fw"></i>あばうと
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/system">
              <i class="fas fa-yen-sign fa-fw"></i>しすてむ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/maid">
              <i class="fas fa-award fa-fw"></i>めいど
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/menu">
              <i class="fas fa-glass-martini-alt fa-fw"></i>めにゅー
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/access">
              <i class="fas fa-map-marker-alt fa-fw"></i>あくせす
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/recruit">
              <i class="fas fa-user fa-fw"></i>りくるーと
            </nuxt-link>
          </li>
        </ul>
      </div>
      <nuxt />
      <div class="footer">
        <div class="footer-box">
          <section class="ft-block">
            <h3 class="ft-title">店舗情報</h3>
            <div class="ft-textbox">
              <strong>Address</strong>
              <p>
                〒101-0025
                <br />東京都千代田区神田佐久間町1-20 2F
              </p>
              <p>Tel 03-3525-8880</p>
              <strong>Open 18:00</strong>
              <p>Close 翌4:30(L.O.4:00)</p>
            </div>
          </section>
          <section class="sd-block">
            <h3 class="sd-title">サイトマップ</h3>
            <div class="sd-textbox">
              <ul>
                <li>
                  <nuxt-link to="/">
                    <i class="fas fa-home fa-fw"></i>ほーむ
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about">
                    <i class="fas fa-question-circle fa-fw"></i>あばうと
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/system">
                    <i class="fas fa-yen-sign fa-fw"></i>しすてむ
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/maid">
                    <i class="fas fa-award fa-fw"></i>めいど
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/menu">
                    <i class="fas fa-glass-martini-alt fa-fw"></i>めにゅー
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/access">
                    <i class="fas fa-map-marker-alt fa-fw"></i>あくせす
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/recruit">
                    <i class="fas fa-user fa-fw"></i>りくるーと
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </section>
          <div class="clear-fix"></div>
          <div class="credit">
            <p>© 2020 わんちゃんす Created by かにぱん</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    switchNav: function() {
      const containerElement = this.$refs.container
      const hamburgerElement = this.$refs.nav_toggle
      
      this.isOpen = !this.isOpen
      
      if(this.isOpen){
        containerElement.setAttribute('class','container open');
      } else {
        containerElement.setAttribute('class','container');
      }
    },
    scrollTop: function(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll: function () {
      this.scrollY = window.scrollY;
    }
  }
}
</script>

<style>
@import "~/assets/css/hamburger.css";
@import "~/assets/css/page-top.css";
@import "~/assets/css/loader.css";
</style>