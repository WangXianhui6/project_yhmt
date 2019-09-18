var checkAll=$(".ck-all");

var checkList=$(".ck");

checkAll.change(function(){
//	console.log(this),当前元素的js对象

//  console.log($this),当前的jquery对象

	if(this.checked){
//		改变属性
		checkList.prop('checked',true);
		$(".list-content").css("background","#FFF9F5");
	}else{
		checkList.prop('checked',false);
		$(".list-content").css("background","none");
	}
})

checkList.change(function(){
	if(this.checked){
		$(this).closest(".list-content").css("background","#FFF9F5");
	}else{
		$(this).closest(".list-content").css("background","none");
	}
})


//数量加减
$(function(){
	var num =$('.countprice')
	$('.add').click(function(){
		var num = $(this).prev('.shop-num-count')
		num.val(parseInt(num.val())+1)
		$(this).siblings(".countprice").html((parseInt(num.val())*189.00).toFixed(2));
	})
	
	$('.dicres').click(function(){
		var num = $(this).next('.shop-num-count')
		if(num.val()<1){
			return
		}
		num.val(parseInt(num.val())-1)
		var a=$(this).siblings(".countprice").html((parseInt(num.val())*189.00).toFixed(2));
	})
})





///****点击增加按钮****/
//$('.add').click(function(){
//  //修改数量
//  var n=$(this).next().html();
//  var num=parseInt(n)+1;
//  $(this).next().html(num);
//  //计算价格
//  var c= $(this).parent().siblings().children('.price').html();
//  parseInt(c);
//  var subPrice = num * c;
//  var sub_price = subPrice.toFixed(2); //保留小数点后面两位小数
//  $(this).parent().siblings().children('.sub_total').html(sub_price);
// 
//  //计算总价
//  var total=0;
//  $('.sub_total').each(function(){
//      var price=parseInt($(this).html());
//      total+=price;
//      var total_price = total.toFixed(2);
//      $('.total b').html(total_price);
//  });
//});
// 
// 
///****点击减少按钮****/
//$('.reduce').click(function(){
//  //修改数量
//  var n=$(this).prev().html();
//  var num=parseInt(n)-1;
//  if(num==0){return;}//数量减到0就能再减了
//  $(this).prev().html(num);
// 
//  //计算价格
//  var c= $(this).parent().siblings().children('.price').html();
//  parseInt(c);
//  var subPrice = num * c;
//  subPrice.toFixed(2);
//  var sub_price = subPrice.toFixed(2);
//  $(this).parent().siblings().children('.sub_total').html(sub_price);
// 
//  //计算总价
//  var total=0;
//  $('.sub_total').each(function(){
//      var price=parseInt($(this).html());
//      total+=price;
//      var total_price = total.toFixed(2);
//      $('.total b').html(total_price);
//  });
//});
