
function ajaxPackge(options){
	//创建请求
	var request=new XMLHttpRequest();

	//打开请求 request.open(请求类型,请求的地址,同步还是异步)
	request.open(options.type||'get',options.url,options.async||true)
	
	request.send(options.Date||null)
	request.onreadystatechange=function(){
		if(request.readyState ==4 && request.status == 200){
			var data=request.responseText
			if(options.dataType=='json'){
				data = JSON.parse(data)
			}
			options.success(data)
		}
	}
}
