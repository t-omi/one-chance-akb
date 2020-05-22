<template>
  <div class="main-box">
    <h2 class="page-title">Meids</h2>
    <template>
      <MaidTable></MaidTable>
    </template>
  </div>    
</template>

<script>
import MaidTable from "~/components/maid-table";

export default {
  head () {
   return {
     title: "めいど | 秋葉原メイドバー わんちゃんす"
   }
 },
  components: {
    MaidTable
  }
};
</script>

<style>
@import "~/assets/css/maid.css";
</style>
