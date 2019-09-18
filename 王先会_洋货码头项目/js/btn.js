(function($){	
	$.fn.btn=function(){
		//打开列表页 获取列表页数据 只要求页码和页数当前页面
		//获取页码以及数量
		
		//存储端口
		var requestUrl = 'http://192.168.97.231:3001/'
		//1.从当前地址上获取页码以及数量
		
		var page = getQueryParam('page')||1
		var count = getQueryParam('count')||2
		var total=0
		//2.获取请求的参数 发送请求
		$.ajax({
			type:"get",
			url:requestUrl+'list',
			async:true,
			data:{
				page:page,
				count:count
			},
			success:function(res){
				//找到页码总数
				
				var pageHtml=''
				total = res.total
				for(var i=0;i<res.total;i++){
					if(i+1==page) {
						pageHtml += `<li class="footer-bt-list page on">${[i+1]}</li>`
						
					}else {
						pageHtml += `<li class="footer-bt-list page ">${[i+1]}</li>`
						
					}

				}
				//在列表第一个a标签后面插入的页码
				$(".footer-bt-lists .pageup:first").after(pageHtml)
			}
			
		});
		
		
		//点击上一步和下一步
		$(".page-btn").click(function(){
			
			if(page<=1 && $(this).hasClass('pageup')){
				return
			}if(page>=total && $(this).hasClass('pagedown')){
				return
			}
			if($(this).hasClass('pageup')){
				page--	
			}else{
				page++
			}
			
			window.location.href = "index5.0.html?page="+page+'&count='+count
		})
		
		function getQueryParam(name){
		var search=window.location.search
		
			//截取字符串不要问号
			search=search.substr(1)
			
			var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
			
			//math 从一个字符串中匹配与正则相符的字符串
			//返回的第一个参数为匹配的字符串
			//以小括号包起来的字符
			var match = search.match(reg)
			
			if(match){
				return match[2]
			}
			return ''
			console.log(search.match(reg))
		}
	}
})(jQuery)
$(".page-btn").btn()

window.onload = function(){
	//单击每一页，更换背景色
	$(".footer-bt-lists").on('click', '.page', function(){
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		console.log($(this))
	})
		
		
	//上一页
	$(".pageup").click(function(){
		$(this).parents('.footer-bt').find('.page.on').prev('.page').addClass('on');
		$(this).parents('.footer-bt').find('.page.on').next().removeClass('on');
	})
	
	//下一页
	$(".pagedown").click(function(){
		$(this).parents('.footer-bt').find('.page.on').next('.page').addClass('on');
		$(this).parents('.footer-bt').find('.page.on').prev().removeClass('on');
	})
				
}
