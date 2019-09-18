//tab切换
$(".tab-title").click(function(){
	
	$(".tab-title").removeClass('active');
	//addClass(类名) 添加类名
	//removeClass(类名) 移除
	//sibling() 找到当前的兄弟姐妹
	$(this).addClass('active');
	$(this).siblings().removeClass('active')
	
	//index() 获取当前元素的下标
	var index=$(this).index();
	
	//找到当前元素的祖先 tab-box
	var parent=$(this).parents('.tab-box');
	
	var ele =parent.find(".tab-lists");
	ele.eq(index).addClass('active');
	ele.eq(index).siblings().removeClass('active')
})
