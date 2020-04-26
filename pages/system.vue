<template>
  <div class="main-box">
    <h2 class="page-title">System</h2>
    <p id="intro">わんちゃんすでは以下のシステムにて、明朗会計をお約束しております。</p>
    <div class="system-box">
      <p id="title">＜チャージ料＞</p>
      <div class="chage-detail">
        <p>
          お一人様 1,000円のテーブルチャージ料をいただいております。
          <br />
          <br />タイムチャージではございませんので、ごゆっくりお楽しみいただけます。
          <br />※閉店までのお時間中の再来店はチャージ料はいただきません。
          <br />※女性の場合、チャージ料が半額の500円となります。
        </p>
      </div>
      <p id="title">＜消費税・サービス料＞</p>
      <div class="tax-detail">
        <p>
          メニューは全て税抜価格となっております。
          <br />お会計時には、消費税+5%のサービス料を合わせていただいております。
          <br />
          <br />よって、合計額 + サービス料 + チャージ料 の総額がお会計額となります。
        </p>
      </div>
      <p id="title">＜注意事項＞</p>
      <div class="caution-detail">
        <p>
          お1人様1時間に1品以上のオーダーをいただいております。
          <br />お支払方法は
          <a id="under-line">現金のみ</a>となりますので、ご注意ください。
          <br />
          <br />わんちゃんすはテーブルチェック制となっておりますので、
          <br />お会計の際はお声がけいただき、お席に座ってお待ちください。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
   return {
     title: "しすてむ | 秋葉原メイドバー わんちゃんす"
   }
 }
}
</script>

<style>
@import "~/assets/css/system.css";
</style>