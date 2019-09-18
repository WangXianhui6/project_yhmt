//登录——》注册切换
$('.login-bt').click(function(){
	$('.login').css({
		display:'block'
	})
	$('.register').css({
		display:'none'
	})
	
})
//注册——》登录切换
$('.register-bt').click(function(){
	$('.login').css({
		display:'none'
	})
	$('.register').css({
		display:'block'
	})
	
})


$.extend($.validator,{
	messages:{
		required: "该字段不能为空",//必填
		remote: "Please fix this field.",//发送请求，远程
		email: "请输入正确的邮箱",//邮箱字段
		url: "请输入正确的地址",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "请输入相同的密码",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "请输入6到18为字符" ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	}
});

//验证规则
$('.validateform').validate({
	//规则
	rules:{
		//tel 文本框名字
		email:{
			//规则
			required:true,
			email:true
		},
		pwd1:{
			required:true,
			rangelength:[6,18]
		},
		pwd2:{
			equalTo:$('input[name=pwd2]')
			
		},
		tel:{
			required:true,
			tel:true
		}
	},
	messages:{
		email:{
			required:'邮箱不能为空'
		}
	}
})


//添加规则  自定义验证$.validator.addMethod(验证名字,验证的方法，验证错误信息)
$.validator.addMethod('tel',function(value,element){
//	console.log(value,element)
	var reg=/^1[345678]\d{9}$/;
	
	return reg.test(value)
	
},'请输入正确的电话号码')




//获取cookia 存在继续倒计时
var cookia=$.cookie('cookia')
console.log(cookia)
if(cookia){
	countDown(cookia)
}

//获取验证码倒计时
console.log(1)
$('.get-code').click(function(){
	console.log($('.get-code'))
	var _this=this
	
	if($(this).hasClass('disabled')){
		return;
	}
	countDown(5)
})


function countDown(count){
	$('.get-code').addClass('disabled')

	$('.get-code').html('重新获取（'+count+'s）')
	console.log(count)
	//开启倒计时
	var timer=setInterval(function(){
		count--
		console.log(count)
		$('.get-code').html('重新获取（'+count+'s）')
		//3.设置cookie
		$.cookie('cookia',count)
		//2.结束倒计时
		if(count<=0){
			clearInterval(timer)
			$('.get-code').removeClass('disabled').html('重新获取')
			$.removeCookie('cookia')
		}
	},1000)
}