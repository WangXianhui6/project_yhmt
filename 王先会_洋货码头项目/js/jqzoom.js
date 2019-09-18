(function($){
	$.fn.jqzoom = function(options){
		var _this=this
		//当前图片
		var smallImg=$(_this).find('img');
		
//		当前图片的宽高
		var smallWidth=smallImg.width()
		var smallHeight=smallImg.height()
		
		//存弹出选择范围的宽高
		var popwidth = 0, popheight = 0
		 
		var bigWith = 0, bigHeight = 0 
		//添加移入的图片上的区域选择盒子
		$(_this).mouseenter(function(){
			var smallSrc = smallImg[0].src
			var bightml=`<div class="bigImg" style="width:${options.offwidth}px;height:${options.offheight}px">
				               <img src='${smallSrc}'/>
							</div>`
			$(_this).append('<div class="popDiv"></div>')
			$(_this).append(bightml)
			
			var bigImg=$(_this).find('.bigImg img')
			console.log($(_this).width())
			
			//大图的宽高
			bigWidth = bigImg.width()
			bigHeight = bigImg.height()
			
			var popx = smallWidth/bigWidth*options.offwidth
			var popy = smallHeight/bigHeight*options.offheight
			
			//白色小图的宽高
			popwidth = popx
			popheight = popy
			
			$(_this).find('.popDiv').css({
				//宽高
				width:popx,
				height:popy
			})
		})
		
		$(_this).mouseleave(function(){
			$(_this).find('.popDiv').remove()
			$(_this).find('.bigImg').remove()
		})
		
		//鼠标移动时限制小图移动位置
		$(_this).mousemove(function(){
			//当前鼠标的位置距离页面的坐标
			var pagex=event.pageX
			var pagey=event.pageY
			

			//当前图片距离页面的位置
			var positionx=smallImg.offset().left;
			var positiony=smallImg.offset().top;
			
			//坐标 计算弹出的left top
			var popx = pagex-positionx - popwidth/2
			var popy = pagey-positiony - popheight/2
			

			//如果弹出来的top,left<0,那么就赋值为0,否则就位弹出来的top,left
			popx = popx < 0 ? 0 : popx
			
			popy = popy < 0 ? 0 : popy
			
			popx = popx > (smallWidth - popwidth) ? (smallWidth - popwidth) : popx
			popy = popy > (smallHeight - popheight) ?  (smallHeight - popheight) : popy
		
			$(".popDiv").css({
				left:popx,
				top:popy
			})
			
			$(_this).find('.bigImg img').css({
				left: -popx*bigWidth/smallWidth,
				
				top: -popy*bigHeight/smallHeight
			})
			
		})
	}
})(jQuery)
