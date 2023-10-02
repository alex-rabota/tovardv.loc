$(".menu-mobile-toggle").click(function() {
    if(!$(this).hasClass("active")) {
        $(this).addClass("active");
        $(".header-nav-menu").css("left", "0");
        $(".menu-bg").show();
    }
});

$(".menu-bg").click(function(){
    if($(".menu-mobile-toggle").hasClass("active")) {
        $(".menu-mobile-toggle").removeClass("active");
        var widthMenu = $(".header-nav-menu").width();
        widthMenu = "-" + widthMenu + "px";
        $(".header-nav-menu").css({
            "left": widthMenu
        });
        $(".menu-bg").hide();
    }

    if($(".header-catalog").hasClass("z-index-3")) {
        if($(".header-catalog-btn i").hasClass("rotate-180")) {
            $(".header-catalog-btn i").toggleClass("rotate-180");
        }
        $(".sub-menu").css("display", "none");
        $(".header-catalog").toggleClass("z-index-3");
        $(".menu-bg").hide();
    }
});

function mobileScrenn(){
    $(".header-catalog-btn i").click(function(){
        $(this).toggleClass("rotate-180");
        $(this).parents("li").children(".sub-menu").toggle();
        $(".header-catalog").toggleClass("z-index-3");
        $(".menu-bg").toggle();
        return false;
    });

    $("<i class='icon-angle-down'></i>").appendTo(".sub-menu-item > a");

    $(".sub-menu-item > a i").click(function(){
        $(this).toggleClass("rotate-180");
        $(this).parents(".sub-menu-item").children(".sub-menu-lev-2").toggleClass("display-block");
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#cart-fixed').show();
        } else {
            $('#cart-fixed').hide();
        }
    });

    var location = window.location.href;
    var strHost = "http://" + document.domain;
    location = location.replace(strHost, "");
    $('.sub-menu li').each(function () {
        var link = $(this).find('a').attr('href');
        link = "/" + link;
        if (location == link) {
            $(this).children().addClass('menu-active');
        }
    });

    $(".top-cart-price").text("Корзина");
}

if($(window).width() <= 991) {
    mobileScrenn();
}

$(".header-menu-ul a.menu-active").parents("ul.sub-menu-lev-2").addClass("display-block");