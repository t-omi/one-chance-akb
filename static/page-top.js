$(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 250); //0.25秒かけてトップへ移動
        return false;
    });
});

var timer = false;
$(window).scroll( function(){
  if( timer !== false ){
    clearTimeout( timer );
    $('.fa-chevron-circle-up').removeClass('hide')
  }
  timer = setTimeout( function(){
    var scroll_top = $(this).scrollTop();  
    $('.fa-chevron-circle-up').addClass('hide')
  }, 1000 );//スクロール停止後1秒たったら透過
});