$(document).ready(function() {
	$(".moreLi").mouseover(function() {
		$(this).children('img').attr('src', 'img/up_arrow.png');
		$(this).children('.moreNav').slideDown();
	});
	$(".moreLi").mouseleave(function() {
		$(this).children('img').attr('src', 'img/down_arrow.png');
		$(this).children('.moreNav').slideUp();
	});
	$(".header .navBody .nav ul li").mouseover(function() {
		$(this).addClass('addBg');
	});
	$(".header .navBody .nav ul li").mouseleave(function() {
		$(this).removeClass('addBg');
	});
	$(".serviceList").slideDown(1500);
	$(window).scroll(function() {
    	
    	if ($(window).scrollTop()>150) {
    		$(".mayorTable").fadeIn(1000);
    	};
    	if ($(window).scrollTop()>250) {
    		$(".serviceOutBody").fadeIn(500);
    	};
    	if ($(window).scrollTop()>400) {
    		$(".contBody .processBody .showBody").fadeIn(500);
    	};
    	if ($(window).scrollTop()<250) {
    		$(".serviceOutBody").fadeOut(500);
    	};
    });
    $(".header .serviceOutBody .serviceBody2 .serviceList2 li a").mouseover(function() {
		$(this).children(".pic1").css('display', 'none');
		$(this).children(".pic2").css('display', 'inline-block');
	});
	$(".header .serviceOutBody .serviceBody2 .serviceList2 li a").mouseleave(function() {
		$(this).children(".pic1").css('display', 'inline-block');
		$(this).children(".pic2").css('display', 'none');
	});
});
