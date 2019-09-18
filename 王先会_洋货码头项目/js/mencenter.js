var index=$('.menber-content')
var indexbt=$('.change-bt')
$('.menber-list').click(function(){
	console.log($(this).parent().siblings().children())
	$(this).css({
		color:'#ff2d52'
	}).siblings().css({
		color:'#000'
	}).parent().siblings().children().css({
		color:'#000'
	})
	var showpage=$(this).attr('data-on')
	$('.'+showpage).addClass('show').siblings().removeClass('show')
	
})

//点击会员中心回到默认页
$('.vipcenter').click(function(){
	var showpage=$(this).attr('data-on')
	$('.'+showpage).addClass('show').siblings().removeClass('show')
	$('.menber-list').css({
		color:'#000'
	})
})
//认证切换
$('.authbt').click(function(){
	$('.authbt').parent().removeClass('show')
	$('.authbt').parent().next().addClass('show')
})


//图片切换
$('.picture-box .pic-content').click(function(){
	$(this).addClass('on').siblings().removeClass('on')
})
//左边切换
$('.leftbt').click(function(){
	$(this).parents('.shop-info').find('.picture-box .pic-content.on').prev().addClass('on')
	$(this).parents('.shop-info').find('.picture-box .pic-content.on').next().removeClass('on')
})

$('.rightbt').click(function(){
	$(this).parents('.shop-info').find('.picture-box .pic-content.on').next().addClass('on')
	$(this).parents('.shop-info').find('.picture-box .pic-content.on').prev().removeClass('on')
})
