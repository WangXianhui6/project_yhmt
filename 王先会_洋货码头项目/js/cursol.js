//带参数
//首页的逻辑代码
//文档加载完成

/*
 * 轮播
 * 1.计算carosoal-slide 的宽度 ，图片的宽度*图片的长度
 *
 * */
//移动盒子
var index = 1;
var dotIndex = 0;
var autoInterVal = null;
var bannerCarosoul = document.querySelector('.banner-cursol');

var carosoalSlide = document.querySelector(".carosoal-slide");
//图片的宽度等于任意一张图片的宽度
var carosoalImg = document.querySelectorAll(".carosoal-slide img");

var aBtn = document.querySelectorAll('.carosoul-btn');

var aDot = document.querySelectorAll('.carosoul-dot li');

//图片的宽度等于任意一张图片的宽度
var imgWidth = carosoalImg[0].offsetWidth;
var imgLength = carosoalImg.length;
//console.log(imgWidth);
//1. 计算carosoal-slide 的宽度  图片的宽度*图片的长度
carosoalSlide.style.width = imgWidth * imgLength + 'px';

//3.循环轮播
autoAnimate();

function autoAnimate() {
	autoInterVal = setInterval(function() {
		animate(-10, 'left');
	}, 2000)
}

//2.运动起来
function animate(speed, position) {

	changeDot(position);
	var timer = setInterval(function() {
		var left = carosoalSlide.offsetLeft + speed;
		carosoalSlide.style.left = left + 'px';

		var curIndex = 0;
		if(position == 'left') {
			curIndex = index + 1;
		} else {
			curIndex = index - 1;
		}

		if((left <= -(curIndex) * imgWidth && speed < 0) || (left >= -curIndex * imgWidth && speed > 0)) {
			clearInterval(timer);
			index = curIndex;
			//4.判断当图片运动到最后一张显示的是第一张， 
			//默默将图片换到显示的第一张，排序的第二张
			if(index >= imgLength - 1) {
				index = 1;
				carosoalSlide.style.left = -imgWidth + 'px';

			} else if(index <= 0) {
				index = imgLength - 2;
				carosoalSlide.style.left = -index * imgWidth + 'px';

			}
		}

	}, 10)
}

function changeDot(position) {

	if(position == 'left') {
		dotIndex++
	} else {
		dotIndex--
	}

	if(dotIndex > aDot.length - 1) {
		dotIndex = 0
	} else if(dotIndex < 0) {
		dotIndex = aDot.length - 1
	}

	for(var i = 0; i < aDot.length; i++) {

		aDot[i].classList.remove('on');
	}

	aDot[dotIndex].classList.add('on');

}
//左按钮单独
//	function leftAnimate(speed){
//		var timer2=setInterval(function(){
//			var left=carosoalSlide.offsetLeft+speed;
//			carosoalSlide.style.left=left+'px';
//			if(left >= -(index - 1) * imgWidth){
//				clearInterval(timer2);
//				index--;
//				console.log(index)
//				if(index <= 0){
//					index = imgLength - 2;
//					carosoalSlide.style.left= - (imgLength - 2) * imgWidth+'px';
//				}
//			}
//		},10)
//	}

//移入轮播盒子停止动画 移处开始
bannerCarosoul.onmouseenter = function() {
	clearInterval(autoInterVal);
}
bannerCarosoul.onmouseleave = function() {
	autoAnimate();
}
//给左右的按钮加点击事件

for(var i = 0; i < aBtn.length; i++) {
	aBtn[i].onclick = function() {
		var curIndex = index;
		var className = this.className;
		if(className.indexOf('prev') >= 0) {
			//点击左按钮向右移
			animate(10, 'right');

		} else {
			//点击右按钮向左移
			animate(-10, 'left');
		}
	}
}
//当浏览器最小化或者切换不同标签是执行的动作  visiblitychange
//document.addEventListener 监听事件

document.addEventListener('webkitvisibilitychange', function() {
	var isHidden = document.webkitVisibilityState;
	console.log(isHidden);
	if(isHidden == 'hidden') {
		clearInterval(autoInterVal)
	} else {
		autoAnimate();
	}
});