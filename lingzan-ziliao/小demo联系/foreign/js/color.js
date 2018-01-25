$(function(){
	$('.color-box .left ul li.l1').click(function(){
		$('.color-box .right ul li.r1').css('background','#e4b9bb');
		$('.color-box .right ul li.r2').css('background','#a69091');
		$('.color-box .right ul li.r3').css('background','#bd575c');
		$('.color-box .right ul li.r4').css('background','#e70510');
		$('.color-box .right ul li.r5').css('background','#890a10');
		$('.color-box .right ul li.r6').css('background','#cd444b');
	});
	
	$('.color-box .left ul li.l2').click(function(){
		$('.color-box .right ul li.r1').css('background','#433f3f');
		$('.color-box .right ul li.r2').css('background','#635f5f');
		$('.color-box .right ul li.r3').css('background','#3f3838');
		$('.color-box .right ul li.r4').css('background','#2f201f');
		$('.color-box .right ul li.r5').css('background','#280e0d');
		$('.color-box .right ul li.r6').css('background','#0d0100');
	});
	
	$('.color-box .left ul li.l3').click(function(){
		$('.color-box .right ul li.r1').css('background','#f9f908');
		$('.color-box .right ul li.r2').css('background','#e7e717');
		$('.color-box .right ul li.r3').css('background','#d5d521');
		$('.color-box .right ul li.r4').css('background','#bebe26');
		$('.color-box .right ul li.r5').css('background','#aaaa2b');
		$('.color-box .right ul li.r6').css('background','#83831e');
	});
	$('.color-box .left ul li.l4').click(function(){
		$('.color-box .right ul li.r1').css('background','#f3f312');
		$('.color-box .right ul li.r2').css('background','#e2e21d');
		$('.color-box .right ul li.r3').css('background','#e4e44e');
		$('.color-box .right ul li.r4').css('background','#b6b636');
		$('.color-box .right ul li.r5').css('background','#9f9f0a');
		$('.color-box .right ul li.r6').css('background','#a5a557');
	});
	$('.color-box .left ul li.l5').click(function(){
		$('.color-box .right ul li.r1').css('background','#0af50a');
		$('.color-box .right ul li.r2').css('background','#19e319');
		$('.color-box .right ul li.r3').css('background','#24ce24');
		$('.color-box .right ul li.r4').css('background','#2cb42c');
		$('.color-box .right ul li.r5').css('background','#0c8e0c');
		$('.color-box .right ul li.r6').css('background','#095309');
	});
	$('.color-box .left ul li.l6').click(function(){
		$('.color-box .right ul li.r1').css('background','#b1a9a9');
		$('.color-box .right ul li.r2').css('background','#cfc4c4');
		$('.color-box .right ul li.r3').css('background','#8d8585');
		$('.color-box .right ul li.r4').css('background','#5f5959');
		$('.color-box .right ul li.r5').css('background','#464242');
		$('.color-box .right ul li.r6').css('background','#eee');
	});
	
	$('.color-box .right ul li span').click(function(){
		$(this).offsetParent().css('background','none')
	});
	
	$('.color-box .right .contion .remove').click(function(){
		$('.color-box .right ul li').css('background','none')
	});
})
