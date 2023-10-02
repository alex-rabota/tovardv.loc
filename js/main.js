//Slider
$("#slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: false,
    autoplaySpeed: 6000,
    appendArrows: $('.append-arrows'),
    nextArrow: '<div class="slider-arrow arrow-right"><i class="icon-right-open"></i></div>',
    prevArrow: '<div class="slider-arrow arrow-left"><i class="icon-left-open"></i></div>'
});

//Slide show
$(window).ready(function(){
    $(".slidelist").css("display", "block");
    $(".slide-text").css("display", "block");
});

//Left menu
$(".product-categories li.selected").parent("ul").css("display", "block").parent("ul").css("display", "block");
$(".product-categories li.selected").parent("ul").parent().parent("ul").css("display", "block");
$(".product-categories li.cat-item").append("<div class='cat-item-arrow'><i class='icon-angle-down'></i></div>");
$(".cat-item-arrow").on("click", function() {
    $(this).parent().children("ul").toggle(300);
    $(this).toggleClass("turn-arrow");
});
$(".product-categories li.selected").parent("ul").parent().children(".cat-item-arrow").addClass("turn-arrow");

//To top
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').show();
        } else {
            $('#scroller').hide();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

//Modal
$(document).on('click', '[data-modal-id]', function(e) {
    var modalLocation = $(this).attr('data-modal-id');
    $('#'+modalLocation).removeClass("modal-none");
    $(".modal-window-msg").addClass("modal-window-visible");
    return false;
});

function modalClose() {
    $("#modal-window-call").addClass("modal-none");
    $(".modal-window-msg").removeClass("modal-window-visible");
}

$("#modal-window-call").click(function(){
    modalClose();
});

$(".modal-window-close").click(function(){
    modalClose();
});

$(".modal-window-msg").click(function(){
    event.stopPropagation();
});

//Agree
$('.skibidiAgree').click(function(event) {
    /* Act on the event */
    if(event.target.tagName == "A"){
        return;
    }
    var Chekbox = $(this).children('.skibidiChekboxAgree'),
        Button = $(this).closest('form').find('.skibidi-form-submit');
    if(Chekbox.hasClass('checked')) {
        Button.fadeOut(200,function() {
            $(this).addClass('hidden').css({display: 'inline-block', opacity: 0});
        });
        Chekbox.removeClass('checked');
    } else {
        Button.removeClass('hidden').removeAttr('style').css({display: 'none'}).fadeIn(200);
        Chekbox.addClass('checked');
    }
});

//Price fly
$(".add-to-cart").on("click",function(){
    id = $(this).attr("data-id-product");
    $(".product-price-"+id)
        .clone()
        .css({
            'position' : 'absolute',
            'z-index' : '11100',
            top: $(this).offset().top-45,
            left:$(this).offset().left-125,
            width: 70
        })
        .appendTo("body")
        .animate({
            opacity: 0.05,
            left: $(".cart-fixed-content").offset()['left']-50,
            top: $(".cart-fixed-content").offset()['top'],
            width: 70}, 1000, function() {
            $(this).remove();
        });
    return false;
});

//Viev mode toggle
$(".view-mode a").click(function(){
    if(!$(this).hasClass("active")) {
        $(this).addClass("active").siblings("a").removeClass("active");
        $(".products").toggleClass("list-view");
    }
    return false;
});

//Fixed menu
$(window).scroll(function() {
    if($(window).width() > 480) {
        var height = $(window).scrollTop();
        var heightMenu = $('.header-top').height() + $('.header-nav').height();
        var heightHeader = $('header').height();
        if(height > heightMenu) {
            $('.header-bottom').addClass('menu-fexed');
            $('header').css('height', heightHeader+'px');
        } else {
            $('.header-bottom').removeClass('menu-fexed');
            $('header').css('height', 'auto');
        }
    }
});

//Easy zoom
$(".zoom").mouseover(function(){
    var link = $(this).attr("href");
    var str = $(`<div id='easy_zoom'><img src='${link}' alt='' /></div>`);
    str.appendTo($(this).parent());
});

$(".zoom").mouseout(function(){
    $('#easy_zoom').remove();
});

$(".zoom").click(function(){
    return false;
});