//jquery 版本
var timer;
var index = 0;
//自动播放
timer = setInterval(play, 3000)

function play() {
    index++;
    if (index > 2) {
        index = 0
    }
    console.log(index)
    $(".banner-cursol ul li").eq(index).css({
        "background": "#ff2d52",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background":  "rgba(0,255,255,0.5)",
        "border": "1px solid gray"
    })

    $(".carosoal-slide .img").eq(index).fadeIn(2000).siblings().fadeOut(200);
};

//点击鼠标 图片切换
$(".banner-cursol ul li").click(function() {

    $(this).css({
        "background": "#ff2d52",
        "border": "1px solid #ffffff"
    }).siblings().css({
        "background": "rgba(0,255,255,0.5)"

    })
    //获取索引 图片索引与按钮的索引是一一对应的
    var index = $(this).index(); 

	// siblings  找到 兄弟节点(不包括自己）
    $(".carosoal-slide .img").eq(index).fadeIn(2000).siblings().fadeOut(200); 
});


//鼠标移进  移出
$(".banner-cursol ul li,.carosoal-slide .img").hover(
    //鼠标移进
    function() {
        clearInterval(timer);

    },
    //鼠标移开
    function() {
        timer = setInterval(play, 3000)
        function play() {
            index++;
            if (index > 2) {
                index = 0
            }
            $(".banner-cursol ul li").eq(index).css({
                "background": "#ff2d52",
                "border": "1px solid #ffffff"
            }).siblings().css({
                "background":  "rgba(0,255,255,0.5)"
            })
            $(".carosoal-slide .img").eq(index).fadeIn(2000).siblings().fadeOut(200);
        }
    })




//积分兑换
$('.ticket-buttom-bt').click(function(){
	$('.discount-out').addClass('show')
		
})

$('.canceled').click(function(){
	$('.discount-out').removeClass('show')
})

$('.cancelbt').click(function(){
	$('.discount-out').removeClass('show')
})


//倒计时
var addTimer = function () {  
    var list = [],  
        interval;  
  
    return function (id, time) {  
        if (!interval)  
            interval = setInterval(go, 1000);  
            list.push({ ele: document.getElementById(id), time: time });  
        }  
  
    function go() {  
        for (var i = 0; i < list.length; i++) {  
            list[i].ele.innerHTML = getTimerString(list[i].time ? list[i].time -= 1 : 0);  
            if (!list[i].time)  
                list.splice(i--, 1);  
        }  
    }  
  
    function getTimerString(time) {  
        var not0 = !!time,  
            d = Math.floor(time / 86400),  
            h = Math.floor((time %= 86400) / 3600),  
            m = Math.floor((time %= 3600) / 60),  
            s = time % 60;  
        if (not0)  
            return d + "天" + h + "小时" + m + "分" + s + "秒后结束";  
    else return "时间到";  
    }  
}();  
  
    addTimer("timer1", 500);  
    addTimer("timer2", 10);  
    addTimer("timer3", 19);  
	addTimer("timer4", 25);  
    addTimer("timer5", 40); 

//轮播js效果
//window.onload=function(){
//	carosoul()
//}
//function carosoul(){
//	//移动盒子
//	if(autoInterVal){
//		clearInterval(autoInterVal);
//	}
//	var index = 1;
//	var dotIndex = 0;
//	var autoInterVal = null;
//	var speed=-10;
//	
//	//获取存放轮播图最外面的div
//	var bannerCarosoul = document.querySelector('.banner-cursol');
//	
//	//获取存放轮播图 图片的div
//	var carosoalSlide = document.querySelector(".carosoal-slide");
//	
//	//获取所有图片
//	var carosoalImg = document.querySelectorAll(".carosoal-slide .img");
//	
//	//获取取存放小按钮的li
//	var aDot = document.querySelectorAll('.carosoul-dot li');
//	
//	//图片的宽度等于任意一张图片的宽度
//	var imgWidth = carosoalImg[0].offsetWidth;
//	var imgLength = carosoalImg.length;
//	//console.log(imgWidth);
//	//1. 计算carosoal-slide 的宽度  图片的宽度*图片的长度
//	carosoalSlide.style.width = imgWidth * imgLength + 'px';
//	
//	//3.循环轮播
//	autoAnimate();
//	
//	function autoAnimate() {
//		autoInterVal = setInterval(function() {
//			speed=-Math.abs(speed)
//			animate();
//		}, 2000)
//	}
//	
//	//2.让图片运动起来
//	function animate() {
//	
//		changeDot();
//		
//		var timer = setInterval(function() {
//			var left = carosoalSlide.offsetLeft + speed;
//			carosoalSlide.style.left = left + 'px';
//	
//			var curIndex = 0;//表示即将要运行的图片的下标
//			if(speed<0) {
//				curIndex = index + 1;
//			} else {
//				curIndex = index - 1;
//			}
//	
//			if((left <= -(curIndex) * imgWidth && speed < 0) || (left >= -curIndex * imgWidth && speed > 0)) {
//				clearInterval(timer);
//				index = curIndex;
//				//4.判断当图片运动到最后一张时显示的是第一张， 
//				//默默将图片换到显示的第一张，排序的第二张
//				if(index >= imgLength - 1) {
//					index = 1;
//					carosoalSlide.style.left = -imgWidth + 'px';
//	
//				} else if(index <= 0) {
//					index = imgLength - 2;
//					carosoalSlide.style.left = -index * imgWidth + 'px';
//	
//				}
//			}
//	
//		}, 10)
//	}
//	
//	
//	function changeDot() {
//	
//		if(speed<0) {
//			dotIndex++
//		} else {
//			dotIndex--
//		}
//	
//		if(dotIndex > aDot.length - 1) {
//			dotIndex = 0
//		} else if(dotIndex < 0) {
//			dotIndex = aDot.length - 1
//		}
//	
//		for(var i = 0; i < aDot.length; i++) {
//	
//			aDot[i].classList.remove('on');
//		}
//	
//		aDot[dotIndex].classList.add('on');
//	
//	}
//	
//	
//	//移入轮播盒子停止动画 移处开始
//	bannerCarosoul.onmouseenter = function() {
//		clearInterval(autoInterVal);
//	}
//	bannerCarosoul.onmouseleave = function() {
//		autoAnimate();
//	}
//	
//	
//	//给小圆点加点击事件
//	for(var i=0;i<aDot.length;i++){
//		aDot[i].dot=i;
//		aDot[i].onclick=function(){
//			if(this.dot<dotIndex){
//				speed=Math.abs(speed);
//				index=this.dot+2;
//				dotIndex=this.dot+1;
//				
//			}else{
//				speed=-Math.abs(speed);
//				index=this.dot;
//				dotIndex=this.dot-1;
//			}
//			animate();
//		}
//	}
//	
//	//当浏览器最小化或者切换不同标签是执行的动作  visiblitychange
//	//document.addEventListener 监听事件
//	document.addEventListener('webkitvisibilitychange', function() {
//		var isHidden = document.webkitVisibilityState;
//		console.log(isHidden);
//		if(isHidden == 'hidden') {
//			clearInterval(autoInterVal)
//		} else {
//			autoAnimate();
//		}
//	});
//}