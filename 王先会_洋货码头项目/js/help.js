$(document).ready(function() {
//	第一个title的箭头默认为下箭头
	$('.help-title').eq(0).children('.right-arrow').css({display:'none'})
	$('.help-title').eq(0).children('.bottom-arrow').css({display:'block'})
	
	$(".help-title").click(function() {
		var parent = $(this).parent();
		if(parent.hasClass('on')) {
			parent.removeClass('on');
		} else {
			parent.addClass('on');
			//箭头切换
			$(this).children('.right-arrow').css({display:'none'})
			$(this).children('.bottom-arrow').css({display:'block'})
	
			$(this).parent().siblings().children().children('.right-arrow').css({display:'block'})
			$(this).parent().siblings().children().children('.bottom-arrow').css({display:'none'})
			parent.siblings().removeClass('on');
			
			parent.siblings().find('.panel').slideUp();
		}
		$(this).addClass('on').parent('.help-list').siblings().children('.help-title').removeClass('on')
		$(this).next().slideToggle(300)
	})
});

$('.menu-list').click(function(){
	$(this).addClass('on').siblings().removeClass('on')
})
