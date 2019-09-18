//选中改变样式 地址
$('.get-address').click(function(){
	$(this).addClass('show').siblings().removeClass('show')
})

//选中改变样式  送货方式
$('.pay-way').click(function(){
	$(this).addClass('show').siblings().removeClass('show')
})
