$(function(){
	$(".container .box .boximg i").click(function(event){
		event.preventDefault();
		event.cancelBubble
		event.stopPropagation();
		$(window).scrollTop(0);
		$('body').css("overflow",'hidden')
	    $("#pick").css('display','block');
	    var src=$(this).prev().attr("src");
	    $("#pick .pick-box .pick-content .pick-show .pick-left img").attr("src",src)
	
	})
	})