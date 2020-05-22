<template>
  <div class="notice-box">
    <div class="notice-table" v-for="item in items" :key="item.id">
      <img :src="item.imgURL.url" />
      <p>
        <a :href="item.noticeURL">{{item.title}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
      return{
         items:""
      }
  },
  mounted(){
     this.asyncData();
     this.fontReload();
  },
  methods:{
    async asyncData(){
      await axios
        .get("https://one-chance-akb.microcms.io/api/v1/notice?limit=99", {
          headers: { "X-API-KEY": "605cd2f5-930f-4f7c-8dd1-189b74757d8f" }
        })
        .then(res => {
          this.items = res.data.contents;
        });
    },
    fontReload() {
      FONTPLUS.start();
    }
  }
}
</script>
