$(function () {
    //导航条鼠标滑动效果
    $(".nav-list").find("li").hover(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    
    //轮播自动滚动
    $('#slides').slidesjs({
        width: 1600,
        heigth: 400,
        navigation: {
            active: false
        },
        play: {
             active: true,
            auto: true,
            interval: 3000,
            swap: true,
            restartDelay: 100
        },
        callback: {
            complete: function (number) {
                if (window.sjstimeout != undefined)
                    clearTimeout(window.sjstimeout);
                $('.slidesjs-container').css({ width: '100%', height: '500px' });
                $('.slidesjs-control').css({ width: '100%', height: '500px' });
                window.sjstimeout = setTimeout(function (number) {
                    if (!$('a.slidesjs-playing').length)
                        $('.slidesjs-play').trigger('click');
                }, 3000);
            }
        }
    });
    
    //car-gallery hover效果
    $("#cars-gallery li").hover(function () {
        $(this).find(".car-hide-text").animate({
            top: 0
        }, 500);
        $(this).find(".car-image").animate({
            top: 240
        }, 300);
    }, function () {
        $(this).find(".car-hide-text").animate({
            top: 240
        }, 300);
        $(this).find(".car-image").animate({
            top: 0
        }, 500);
    });
});