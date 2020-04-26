$('head').append(
        '<style type="text/css">#wrap { display: none; } #fade, #loader { display: block; }</style>'
    );
      
    jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
        var pageH = $("#wrap").height();
      
        $("#fade").css("height", pageH).delay(900).fadeOut(800);
        $("#loader").delay(600).fadeOut(300);
        $("#wrap").css("display", "block");
    
        slideshow();
    });