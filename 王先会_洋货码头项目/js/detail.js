//填写评论和填写问题
//点击显示 填写评论
$(function(){
	$('.commend-bt').click(function(){
		$('.add-commend').toggle(1000);
	})
})

//点击显示 填写问题
$(function(){
	$('.hint-bt').click(function(){
		$('.add-ask').toggle(1000);
	})
})

//发表评论
var sendcom=$(".send");
sendcom.click(function(){
	var value = $(".add-commend [name=content]").val();
	if(value){
		var html=`
				<li class="comment-content clearfix">
					<div class="img-pic">
						<img src="img/5abcb6792ca5b.jpg"/>
						<span>h***0</span>
					</div>
					<div class="comment-content-everyone fr">
						<p>
							<span>好评</span>
							<span>|</span>
							<span>2016-11-29</span>
							<span>16:10:45</span>
						</p>
						<p class="everyone-think">${value}</p>
					</div>
				</li>`
		$(".person-commend").prepend(html);
		$(".add-commend [name=content]").val('');
		$('.add-commend').css({
			display:'none'
		})
		
	}
})
	
	
//发表问题
var sendask=$(".send");
sendask.click(function(){
	var value = $(".add-ask [name=content]").val();
	if(value){
		var html=`
				<li class="comment-content clearfix hint-cont">
						<div class="img-pic">
							<img src="img/001.jpg"/>
							<span>h***0</span>
						</div>
						
						<div class="comment-content-everyone fr">
							<p>
								<span>2016-11-29</span>
								<span>16:10:45</span>
							</p>
							<p class="everyone-think">${value}</p>
						</div>
					</li>`
		$(".person-ask").prepend(html);
		$(".add-ask [name=content]").val('');
		$('.add-ask').css({
			display:'none'
		})
	}
})
	

//数量加减
$('.add').click(function(){
	var num = $(this).prev('.shop-num-count')
	num.val(parseInt(num.val())+1)
})

$('.dicres').click(function(){
	var num = $(this).next('.shop-num-count')
	if(num.val()<1){
		return
	}
	num.val(parseInt(num.val())-1)
})


//图片切换
$('.img-lists img').click(function(){
	$(this).addClass('on').siblings().removeClass('on')
})
//左边切换
$('.imgbt-left').click(function(){
	$(this).parents('.img-detail').find('.img-lists img.on').prev().addClass('on')
	$(this).parents('.img-detail').find('.img-lists img.on').next().removeClass('on')
	
})

$('.imgbt-right').click(function(){
	$(this).parents('.img-detail').find('.img-lists img.on').next().addClass('on')
	$(this).parents('.img-detail').find('.img-lists img.on').prev().removeClass('on')
})


//倒计时
 var starttime = new Date("2019/11/20");
    setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);
//	$('.timespan').html(day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒");
    $('.day').html(day)
    $('.hour').html(hour)
    $('.minute').html(minute)
    $('.seconds').html(seconds)
}, 1000);