$(function(){
	$('.sub-left .select h4').css('background','url(img/SEARCHicon2.png) no-repeat right center')
	$('.sub-left .select h4').eq(0).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(0).slideToggle();
		$('.sub-left .select h4').eq(0).toggleClass('add');
	});
	$('.sub-left .select h4').eq(1).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(1).slideToggle();
		$('.sub-left .select h4').eq(1).toggleClass('add');
	});
	$('.sub-left .select h4').eq(2).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(2).slideToggle();
		$('.sub-left .select h4').eq(2).toggleClass('add');
	});
	$('.sub-left .select h4').eq(3).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(3).slideToggle();
		$('.sub-left .select h4').eq(3).toggleClass('add');
	});
	$('.sub-left .select h4').eq(4).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(4).slideToggle();
		$('.sub-left .select h4').eq(4).toggleClass('add');
	});
	$('.sub-left .select h4').eq(5).css('background','url(img/SEARCHicon.png) no-repeat right center');
	
	
	//这是自按钮
	$('.sub-select .span1').html('<i class="iconfont icon-shangxiajiantou1"></i>')
	$('.sub-select .span1').click(function(){
		$('.wid-sub').slideToggle()
		$('span i').toggleClass('icon-shangxiajiantou1')
		$('span i').toggleClass('icon-shangxiajiantou')
	})
	
})
