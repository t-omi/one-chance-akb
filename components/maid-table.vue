<template lang="html">
  <div class="maid-box">
    <div class="maid-table" v-for="item in items" :key="item.id">
      <div class="img-area">
        <img v-bind:src="item.imgURL.url" />
      </div>
      <div class="profile-area">
        <h2 class="maid-name">{{item.name}}</h2>
        <div class="profile-box">
          <div class="que-and-ans">
            <dt class="que-container">
              <span>誕生日</span>
            </dt>
            <dd class="ans-container">
              <span>{{item.birthday}}</span>
            </dd>
          </div>
          <div class="que-and-ans">
            <dt class="que-container">
              <span>好きなドリンク</span>
            </dt>
            <dd class="ans-container">
              <span>{{item.favDrink}}</span>
            </dd>
          </div>
          <div class="que-and-ans">
            <dt class="que-container">
              <span>好きなフード</span>
            </dt>
            <dd class="ans-container">
              <span>{{item.favFood}}</span>
            </dd>
          </div>
          <div class="que-and-ans">
            <dt class="que-container">
              <span id="font-small">好きな異性のタイプ</span>
            </dt>
            <dd class="ans-container">
              <span>{{item.oppositeType}}</span>
            </dd>
          </div>
          <div class="que-and-ans">
            <dt class="que-container">
              <span>Twitter</span>
            </dt>
            <dd class="ans-container">
              <span>
                <a v-bind:href="item.twitterURL">{{item.twitterID}}</a>
              </span>
            </dd>
          </div>
          <div class="que-and-ans">
            <dt class="que-container">
              <span>ひとこと</span>
            </dt>
            <dd class="ans-container">
              <span>{{item.message}}</span>
            </dd>
          </div>
        </div>
      </div>
      <div class="clear-fix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: ""
    };
  },
  head() {
    return {
      script: [
        { src: '/fontReload.js' }
        ]
    }
  },
  mounted() {
    this.asyncData();
  },
  methods: {
    async asyncData() {
      await axios
        .get("https://one-chance-akb.microcms.io/api/v1/maids", {
          headers: { "X-API-KEY": "605cd2f5-930f-4f7c-8dd1-189b74757d8f" }
        })
        .then(res => {
          this.items = res.data.contents;
        });
    }
  }
};
</script>

<style>
@import "~/assets/css/maid.css";
</style>