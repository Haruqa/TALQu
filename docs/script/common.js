function FixedAnime() {
    // ヘッダーメニュー固定
    var headerH = $('header').outerHeight(true)/2 + $('#site_title').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll > headerH){
        if(!$('header').hasClass('fixed')){
            $('header').addClass('fixed');
        }
    }else{
        if($('header').hasClass('fixed')){
            $('header').removeClass('fixed');
        }
    }
}

$(window).scroll(function () {
    FixedAnime();
});

