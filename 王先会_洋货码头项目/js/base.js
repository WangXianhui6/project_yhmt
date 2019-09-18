//底部、侧边、头部等公共部分
//document.getElementById  只能获取一个，数据类型 对象{}
//document.getElemenetsByName  获取多个， 数组[]
//document.getElementsByTagName
//document.getElementsByClassName

//document.querySelector()  获取一个 第一个， 对象{}
//document.querySelectorAll() 获取多个  数组[] 这两个要加符号前缀，如. #

//获取存放会员中心、客服中心、二维码的li
var asidelists = document.querySelectorAll(".asidebar-bar-slide");
//侧边栏控件 鼠标移入 给每一个加
//不能整体添加移入时间， 给每一个单独添加移入时间
for(var i = 0; i < asidelists.length; i++) {
	asidelists[i].onmouseenter = function() {
		//this  指向当前函数的执行的对象  li ,没有指向window

		//获取子节点
		console.log(this.children[1]);
		var bar = this.children[1];
		if(!bar) {
			return;
		}
		//需要right的值从45 变到 35
		//定时器  让一个时间延迟执行  时间可以自定义
		//setInterval(延迟执行的动作， 延迟的时间)
		var right = 45;
		var timer = setInterval(function() {
			right = right - 1;
			if(right < 35) {
				clearInterval(timer);
				//clearInterval(定时器名字)
			} else {
				bar.style.right = right + 'px';
			}
		}, 10);
	}
}

//返回顶部
//获取返回顶部的li
var returnTopElem = document.querySelector('.return-top');
returnTopElem.onclick = function() {
	//scrollTop  滚动条距离顶部的距离

	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var timer = setInterval(function() {
		scrollTop = scrollTop - 50;
		document.body.scrollTop = scrollTop;
		document.documentElement.scrollTop = scrollTop;
		if(scrollTop <= 0) {
			clearInterval(timer);
		}

	}, 1);

	//针对chrome
	//document.body.scrollTop=0;
	//针对ie 、firefox
	//document.documentElement.scrollTop=0;
}
//点击控件 购物车 以及客服滑出
//获取存放购物车 客服中心的li
var slideBars = document.querySelectorAll('.aside-slide-bar');

//获取滑出区域的div
var asideSlide = document.querySelector('.aside-slide');

//获取存放购物车内容，客服内容的div
var asideSlideList = document.querySelectorAll('.aside-slide .shop-display');
var index;

for(var i = 0; i < slideBars.length; i++) {
	slideBars[i].index = i;
	asideSlideList[i].index = i;
	slideBars[i].onclick = function() {
		//currentStyle获取css样式属性值的
		//getComputedStyle(要获取属性的元素,false)
		//console.log(asideSlide.currentStyle.right);

		//		index = this.index;
		for(var j = 0; j < asideSlideList.length; j++) {
			//			asideSlideList[j].style.display = 'none';
			if(getComputedStyle(asideSlideList[j], false)['display'] == 'block') {
				index = j;
				console.log(index)
			}
		}
		var right = '';
		if(asideSlide.currentStyle) {
			right = asideSlide.currentStyle.right;
		} else {
			right = getComputedStyle(asideSlide, false)['right'];
			//			console.log(right);

		}
		right = parseInt(right);
		var speed = 0;
		if(right > -264) {
			//回去35px 到-264px
			speed = -12;
		} else {
			//出来 -264px 到35px
			speed = 12;
		}

		if(right == 35) {
			if(this.index == index) {
				console.log('index-->' + index + '\n this.index-->' + this.index)
				var timer = window.setInterval(function() {
					right += speed;
					right += 10;
					asideSlide.style.right = right + 'px';
					if((right > 35 && speed > 0)) {
						asideSlide.style.right = 35 + 'px';
						clearInterval(timer);
					} else if((right <= -264 && speed < 0)) {
						asideSlide.style.right = -264 + 'px';
						clearInterval(timer);
					}
				}, 10);

			} else {
				for(var j = 0; j < asideSlideList.length; j++) {
					asideSlideList[j].style.display = 'none';
				}
				asideSlideList[this.index].style.display = 'block';
			}
		} else {
			console.log('index-->' + index + '\n this.index-->' + this.index)
			var timer = window.setInterval(function() {
				right += speed;
				right += 10;
				asideSlide.style.right = right + 'px';
				if((right > 35 && speed > 0)) {
					asideSlide.style.right = 35 + 'px';
					clearInterval(timer);
				} else if((right <= -264 && speed < 0)) {
					asideSlide.style.right = -264 + 'px';
					clearInterval(timer);
				}
			}, 10);
			for(var j = 0; j < asideSlideList.length; j++) {
				asideSlideList[j].style.display = 'none';
			}
			asideSlideList[this.index].style.display = 'block';
		}
	}
}

//删除购物车的商品
//点击删除时 删除当前父节点li
var aLists = document.querySelectorAll('.delete');
var listParent = document.querySelectorAll('.shop-car-lists');
for(var i = 0; i < aLists.length; i++) {
	aLists[i].onclick = function() {
		var aList=document.querySelector('.shop-car-list');
		console.log(aList);
		aList.parentNode.removeChild(aList);
	}
}
