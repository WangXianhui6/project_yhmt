//不带参数
//首页的逻辑代码
//文档加载完成

/*
 * 轮播
 * 1.计算carosoal-slide 的宽度 ，图片的宽度*图片的长度
 *
 * */
window.onload=function(){
	carosoul()
}
function carosoul(){
	//移动盒子
	if(autoInterVal){
		clearInterval(autoInterVal);
	}
	var index = 1;
	var dotIndex = 0;
	var autoInterVal = null;
	var speed=-10;
	
	//获取存放轮播图最外面的div
	var bannerCarosoul = document.querySelector('.banner-cursol');
	
	//获取存放轮播图 图片的div
	var carosoalSlide = document.querySelector(".carosoal-slide");
	
	//获取所有图片
	var carosoalImg = document.querySelectorAll(".carosoal-slide img");
	
	//获取左右按钮
	var aBtn = document.querySelectorAll('.carosoul-btn');
	
	//获取取存放小按钮的li
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
			speed=-Math.abs(speed)
			animate();
		}, 2000)
	}
	
	//2.让图片运动起来
	function animate() {
	
		changeDot();
		
		var timer = setInterval(function() {
			var left = carosoalSlide.offsetLeft + speed;
			carosoalSlide.style.left = left + 'px';
	
			var curIndex = 0;//表示即将要运行的图片的下标
			if(speed<0) {
				curIndex = index + 1;
			} else {
				curIndex = index - 1;
			}
	
			if((left <= -(curIndex) * imgWidth && speed < 0) || (left >= -curIndex * imgWidth && speed > 0)) {
				clearInterval(timer);
				index = curIndex;
				//4.判断当图片运动到最后一张时显示的是第一张， 
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
	
	
	function changeDot() {
	
		if(speed<0) {
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
				//点击左按钮向右移,左边的图片出来
				speed=Math.abs(speed);
				animate();
	
			} else {
				//点击右按钮向左移，右边的图片出来
				speed=-Math.abs(speed);
				animate();
			}
		}
	}
	
	//给小圆点加点击事件
	for(var i=0;i<aDot.length;i++){
		aDot[i].dot=i;
		aDot[i].onclick=function(){
			if(this.dot<dotIndex){
				speed=Math.abs(speed);
				index=this.dot+2;
				dotIndex=this.dot+1;
				
			}else{
				speed=-Math.abs(speed);
				index=this.dot;
				dotIndex=this.dot-1;
			}
			animate();
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
	
	
	//逻辑  与页面操作  分离
	countDownHtml();
	
	var countInterval=setInterval(countDownHtml,1000)
	
	function countDownHtml(){
		//倒计时
		var countDownTime=countDown('2019-8-14 22:02:00');
		
		if(parseInt(countDownTime)<=0){
			clearInterval(countInterval);
		}
		
		//将字符串转为数组
		var arrTime=countDownTime.split('')
		
		var html=`
				<span>本场还剩</span>
				<span class="time">${arrTime[0]}</span>
				<span class="time">${arrTime[1]}</span>
				<span>:</span>
				<span class="time">${arrTime[2]}</span>
				<span class="time">${arrTime[3]}</span>
				<span>:</span>
				<span class="time">${arrTime[4]}</span>
				<span class="time">${arrTime[5]}</span>`
	
		//count-down 倒计时内容的容器
		document.querySelector('.count-down').innerHTML=html;
	}
}
