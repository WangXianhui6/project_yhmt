var requestUrl='http://192.168.97.228:3001/'
function bannerAjax(){
	$.ajax({
		url:requestUrl+'getBanner',
		type:'get',
		async:true,
		dataType:'json',
		success:function(res){
			if(res.success){
				var lists=res.list
				var html = `<img src="${requestUrl+lists[lists.length-1].img}" />`
				for(var i=0;i<lists.length;i++){
					html +=`<img src="${requestUrl+lists[i].img}" />`
				}
				html +=`<img src="${requestUrl+lists[0].img}" />`
				$(".carosoal-slide").html(html)
			}
		}
	});
}
bannerAjax()
