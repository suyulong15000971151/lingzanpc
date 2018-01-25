$(function(){
	$('header .right a.log').click(function(){
		$('header #user').slideToggle()
	});
	$('.content .content-box .address').click(function(){
		$('.content .content-box .address .selfadd').css({display:'block'})
	})
	
	//这里是删除地址信息
	$('.content .content-box .address .address-content a').click(function(){
		$('.content .content-box .address .address-content').css({display:'none'})
	})
		
	$('.out1').click(function(){
		$(document).scrollTop(0);
		$('.out').css('display','block');
		$('.out').css('opacity','1');
		$('body').css('overflow','hidden')
	})


	$('.out span').click(function(){
		$(document).scrollTop(0);
		$('.out').css('display','none');
		$('body').css('overflow','scroll')
	})
})
