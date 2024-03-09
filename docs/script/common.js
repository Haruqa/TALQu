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

//選択されたページでヘッダーリストアイテムをハイライトする
function HighlightHeader() {
    const current_pagename = location.pathname.split("/").reverse()[0];
    const header_item_htmlcollection = document.querySelector("#nav > nav > ul").getElementsByTagName("li");
    const header_item_list = Array.from(header_item_htmlcollection);
    header_item_list.forEach(function(element){
        const element_pagefile = element.childNodes[0].getAttribute("href").split("/").reverse()[0];
        if(element_pagefile == current_pagename){
            element.childNodes[0].className = "header_highlighted_a";
        }
    });
}

$(window).on('load', function(){
    HighlightHeader();
});
