$('.nextbt').click(function(){
	var contbox=$(this).closest('.verify')
	var index=$(this).closest('.verify').index()-1
	var myreg=/(1[3-9]\d{9}$)/;
	var value=contbox.find('input[name=telphone]').val()
	if(value==''){
		alert('电话号码不能为空')

	}else if(!myreg.test(value)){
		$('.vertical').eq(index).removeClass('on').next().addClass('on')
	}else{
		step(1)
		//改变的内容
		$(this).parent().removeClass('active').next().addClass('active')
	}
})


$('.updatebt').click(function(){
	var index=$(this).closest('.verify').index()-1
	var pwd1=$('.verify input[name=pwd1]').val()
	var pwd2=$('.verify input[name=pwd2]').val()
	if(pwd1==''){
		
		alert('密码不能为空！')
		
	}else{
		if(pwd2==''){
		
		alert('请再次输入密码！')
		
		}else if(pwd1!=pwd2){
		
			alert('两次输入的密码不一致，请重新输入！')
		
		}else{
		
			step(0)
			//改变的内容
			$(this).parent().removeClass('active').next().addClass('active')
		}
	}
})

function step(num){
	//获取当前点击的index
	var index=$('.stepbt').closest('.verify').index()-num
	//	改变步骤颜色
	$('.step').eq(index+1).addClass('on')

	//改变字的颜色
	$('.step-list').eq(index).next().addClass('on')

	//进度条颜色
	$('.gray-hr').eq(index).addClass('on')
}
