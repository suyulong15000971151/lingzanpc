$(function() {

	//这里是消息导航栏效果

//$("header .right .item").hover(function(){
//	$("header .right .item #new").slideDown()
//},function(){
//	$("header .right .item #new").slideUp()
//	
//})
//	clearTimeout(m)
m=null;
$("header .right .item").hover(function(){

	
	t=setTimeout(function(){
		$("header .right .item #new").css("display","block")
	},200)
	clearTimeout(m)
		
},function(){
	clearTimeout(t)
	
	m=setTimeout(function(){
		$("header .right .item #new").css("display","none")
	},500)

	
})

//这里是消息里面的私信弹窗
		
	$("#new .letter-new em").click(function(){
		$(window).scrollTop(0);
		$('body').css("overflow", 'hidden')
		$("#letter").css("display","block")
	})
	$("#letter .letter-box").click(function(event){
		event.stopPropagation()
		$('body').css("overflow", 'scroll')
		$("#letter").css("display","none")
	})
	$("#letter .letter-box .content").click(function(event){
		event.stopPropagation()
		$("#letter").css("display","block")
		
	})
	$("#letter .letter-box .content .title i").click(function(event){
		event.stopPropagation();
		$('body').css("overflow", 'scroll')
		$("#letter").css("display","none")
	})
			
	
	$('header .right .item #new .new-box .new-nav .new-title p').click(function() {
		$(this).offsetParent().addClass("act").siblings().removeClass("act")
	})
	
	$("header .right .item #new .new-box .new-nav .new-title .navs p").eq(0).click(function(){
		$("header .right .item #new .new-box .new-nav .new-content .letter-box").css("display","none")
		$("ul.first").css("display","block")
	})
		$("header .right .item #new .new-box .new-nav .new-title .navs p").eq(1).click(function(){
		$("ul.first").css("display","none")
		$("header .right .item #new .new-box .new-nav .new-content .letter-box").css("display","block")
		
	})
		//这里是子菜单切换
		$("#new .new-content ul li").click(function(){	
		var index=$("#new .new-content ul li").index(this);
		$("#new .new-box .newsub-mater").eq(index).css("display","block").siblings().css("display","none")
	})
		$(".new-back").click(function(){
		$("#new .new-box .new-nav").css("display","block")
		$("#new .new-box .newsub-mater").css("display","none")
	})
		//这里是子菜单里面的点击删除调理
		$("#new .new-box .mater-item b").click(function(){
			$(this).offsetParent().remove()
		})
		
		

	//这是导航栏材思库hover事件
	s=null
	$('header .right .addmin').hover(function() {
		c=setTimeout(function(){
			$('header .right .addmin .library').css("display","block")
		},200);
			clearTimeout(s)
		
		}, function() {
			s=setTimeout(function(){
			$('header .right .addmin .library').css("display","none")
		},500)
			clearTimeout(c)
		})
		//这是导航栏个人头像hover事件
		f=null
	$('header .right .person').hover(function() {
		g=setTimeout(function(){
			$('header .right .person #person').css("display","block")
		},200)
			clearTimeout(f)
		
		}, function() {
			clearTimeout(g)
			f=setTimeout(function(){
			$('header .right .person #person').css("display","none")
		},500)
			
		})
		//这是瀑布流 采集小按钮
	$('.container .box a').hover(function() {
		$(this).find('i').eq(0).css("opacity", "1")
	}, function() {
		$(this).find('i').eq(0).css("opacity", "0")
	})

	//这里是关注弹窗
	$(".praise-tan").click(function(event) {
		event.preventDefault();
		event.cancelBubble
		event.stopPropagation();
		$(window).scrollTop(0);
		$('body').css("overflow", 'hidden')
		$("#interset").css('display', 'block');

	})
	$(".container .box a").click(function(event) {
		//		event.preventDefault()
		event.stopPropagation();
	})
	$("#interset .interset-box .interset-content .interset-title i").click(function(event) {
		event.preventDefault()
		event.stopPropagation();
		//		$(window).scrollTop(0);
		$('body').css("overflow", 'scroll')
		$("#interset").css('display', 'none')
	})
	$("#interset .interset-box").click(function(event) {
		//		event.preventDefault()
		event.stopPropagation();
		$('body').css("overflow", 'scroll')
		$("#interset").css('display', 'none')

	})
	$("#interset .interset-box .interset-content").click(function(event) {
		//		event.preventDefault()
		event.stopPropagation();

	});
	
	//这里是个人导航下标对应来回切换
	$('#account .account-content .case .case-left ul li').click(function(){
		var index=$('#account .account-content .case .case-left ul li').index(this);
		$('#account .account-content .case .case-left ul li').eq(index).addClass("admin").siblings().removeClass("admin");
		$("#account .account-content .case .case-right .information .info").eq(index).css("display","block").siblings().css("display","none")
	})
	//这里是个人中心里面账户管理里面修改手机号点击事件
	$("#account .account-content .case .case-right .information .info-tow .phone-modi span").eq(0).click(function(){
		$('#account .account-content .case .case-right .information .info-tow').css("display","none")
		$('#account .account-content .case .case-right .modify-phone').css("display","block")
	})
	$("#account .account-content .case .case-right .information .info-tow .phone-modi i").click(function(){
		$('#account .account-content .case .case-right .information .info-tow').css("display","none")
		$('#account .account-content .case .case-right .psd-phone').css("display","block")
	})
	$("#account .account-content .case .case-right .self-back").click(function(){
		$('#account .account-content .case .case-right .information .info-tow').css("display","block")
		$('#account .account-content .case .case-right .modify-phone').css("display","none")
		$('#account .account-content .case .case-right .psd-phone').css("display","none");
		$('#account .account-content .case .case-right .unbind-email').css("display","none");
		$('#account .account-content .case .case-right .bind-email').css("display","none");
	})
	  function back(){
            history.back();
//          history.go(-1);
        }
	$("#account .account-content .title i").click(function(){
		back()
	})
	$("#account .safe .cancle").click(function(){
		back()
	})
	
	function checkEmail(str) {

					if(str == "") {
						alert('邮箱不能为空')
					} else {
						var re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
						if(re.test(str)) {
							
							$("#account .account-content .case .case-right .information .info-tow .target i").eq(1).text(str);
							$('#account .account-content .case .case-right .information .info-tow .phone-modi span').eq(1).text("解除绑定")
						} else {
							alert("邮箱格式错误！");
						}
					}
				}
	$("#account .account-content .case .case-right .information .info-tow .phone-modi span").eq(1).click(function(){
		var text=$("#account .account-content .case .case-right .information .info-tow .phone-modi span").eq(1).text()
		if(text=="解除绑定"){
			$("#account .account-content .case .case-right .information .info-tow").css("display","none")
			$("#account .account-content .case .case-right .unbind-email").css("display","block")
		}else{
			$("#account .account-content .case .case-right .information .info-tow").css("display","none")
			$("#account .account-content .case .case-right .bind-email").css("display","block")
//			checkEmail(valus)
//			$("#account .account-content .case .case-right .unbind-email input").val(valus)
		}
		
	})
	
	$("#account .account-content .case .case-right .bind-email button").click(function(){
		var valus=$("#account .account-content .case .case-right .bind-email input").val();
		checkEmail(valus)
		$("#account .account-content .case .case-right .unbind-email input").val(valus)
		
	})
	//解除绑定
	$("#account .account-content .case .case-right .unbind-email button").click(function(){
		$("#account .account-content .case .case-right .information .info-tow .target i").eq(1).text("未绑定");
		$('#account .account-content .case .case-right .information .info-tow .phone-modi span').eq(1).text("绑定邮箱")
		
	})
	
	
	//这里是转换开关按钮
	var fag=true;
	$('#account .account-content .case .case-right .information .info-stree .title .switch').click(function(){
		if(fag){
			$(this).find("span").animate({left:'40px',position:"absolute"},200)
			$(this).css("background",'#055cfc');
			$(this).find('span').css("background",'#fff');
		
			fag=false
		}else{
			$(this).find("span").animate({left:'1px'},200)
			$(this).css("background",'#fff');
			$(this).find('span').css("background",'#919191');
			fag=true;
		}
	})

	//
})

//导航栏滚动事件
$(window).scroll(function() {
	var scrollheight = $('body').scrollTop() || document.documentElement.scrollTop;
	//	console.log(scrollheight)
	if(scrollheight >= 300) {
		$('header').slideUp()
	} else {
		$('header').slideDown()
	}
})

//这是分享弹出层

$(".product .right .title span").click(function(event) {
	event.preventDefault();
	event.cancelBubble
	event.stopPropagation();
	$(window).scrollTop(0);
	$('body').css("overflow", 'hidden')
	$("#share").css('display', 'block');

})

//	$(".container .box a").click(function(event){
////		event.preventDefault()
//		event.stopPropagation();
//	})
$("#share .share-content .share-title i").click(function(event) {
	event.preventDefault()
	event.stopPropagation();
	//		$(window).scrollTop(0);
	$('body').css("overflow", 'scroll')
	$("#share").css('display', 'none')
})
$("#share .play-share").click(function(event) {
	//		event.preventDefault()
	event.stopPropagation();
	$('body').css("overflow", 'scroll')
	$("#share").css('display', 'none')

})
$("#share .share-content ").click(function(event) {
	//		event.preventDefault()
	event.stopPropagation();

});

//

//这里是采集弹窗
$(".container .box a").click(function(event) {
	//		event.preventDefault()
	event.stopPropagation();
})
$("#pick .pick-box .pick-content .pick-title i").click(function(event) {
	event.preventDefault()
	event.stopPropagation();
	//		$(window).scrollTop(0);
	$('body').css("overflow", 'scroll')
	$("#pick").css('display', 'none')
})
$("#pick .pick-box").click(function(event) {
	//		event.preventDefault()
	event.stopPropagation();
	$('body').css("overflow", 'scroll')
	$("#pick").css('display', 'none')

})
$("#pick .pick-box .pick-content").click(function(event) {
	//		event.preventDefault()
	event.stopPropagation();

});

//这里是里面弹窗里面的 输入效果
var inputVal = $('#pick .pick-box .pick-content .pick-show .pick-right .output input') /*这里是弹出窗上面的输入框*/
inputVal.on("keyup", function() {
	var values = inputVal.val();

	if(values == "") {
		$("#pick .pick-box .pick-content .pick-show .pick-right .select .select-show").css("display", 'block');
		$("#pick .pick-box .pick-content .pick-show .pick-right .creat .creat-box").css("display", 'none');
	} else {
		$("#pick .pick-box .pick-content .pick-show .pick-right .select .select-show").css("display", 'none');
		$("#pick .pick-box .pick-content .pick-show .pick-right .creat .creat-box").css("display", 'block');
		$("#pick .pick-box .pick-content .pick-show .pick-right .creat .creat-box i").text(values);
	}

})

//点击选择已创建的材思库
$("#pick .pick-box .pick-content .pick-show .pick-right .select-box .item").on("click", function() {
	$(this).addClass('addselect').siblings().removeClass("addselect")
})

//添加到已创建的材思库

$("#pick .pick-box .pick-content .pick-show .pick-right .creat .creat-box").on("click", function() {

	var length = $('#pick .pick-box .pick-content .pick-show .pick-right .select-box .item').length;
	var values = inputVal.val();
	var item = document.getElementsByClassName("item")
	var atr = []
	for(i = 0; i < length; i++) {
		if(atr.indexOf(item[i].innerText) <= -1) {
			atr.push(item[i].innerText)
		}
		//					return atr
	}

	if(atr.indexOf(values) >= 0) {
		alert("已创建这个材思库")
	} else {
		$('#pick .pick-box .pick-content .pick-show .pick-right .select-show').css("display", 'block')
			//				var div=document.createElement('<div class="item"></div>')

		$('#pick .pick-box .pick-content .pick-show .pick-right .select-box').append("<div class='item'>" + values + "</div>");

		$('#pick .pick-box .pick-content .pick-show .pick-right .select-box .item').eq(length).insertBefore($('#pick .pick-box .pick-content .pick-show .pick-right .select-box .item').eq(0))
	}

	$("#pick .pick-box .pick-content .pick-show .pick-right .select-box .item").on("click", function() {
		$(this).addClass('addselect').siblings().removeClass("addselect")
	})

})