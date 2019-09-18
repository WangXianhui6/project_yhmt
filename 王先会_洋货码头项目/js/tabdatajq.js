var requestUrl='http://192.168.97.228:3001/'
	
for(var j=0;j<3;j++){
	sendAjax(j)
}
function sendAjax(id){
	$.ajax({
		url:requestUrl+'lists?id='+id,
		type:'get',
		async:true,
		dataType:'json',
		success:function(res){
			if(res.success){
				var lists=res.list
				var html=''
				for(var i=0;i<lists.length;i++){
					
					html += `<li class="goods-recom-list">
								<img src="${requestUrl+lists[i].img}"/>
								<div class="text-ellipone margin-tb-10">${lists[i].title}</div>
								<div><span class="font-14 title-color">${lists[i].price}</span></div>
							</li>
				`;
				}
				$(".goods-recom-lists").eq(id).html(html)
			}
		}
	});
}