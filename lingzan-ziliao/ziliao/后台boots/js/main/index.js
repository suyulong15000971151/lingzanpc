require.config({
	urlArgs: '',
    baseUrl: 'js',
    paths: {
        "jquery": 'lib/jquery-1.8.3.min',
		"Calendar":"lib/ECode.calendar"
    }	
});

require(['jquery','lib/template.min','Calendar'],function($,template,Calendar){
	//初始化
	function initAll(){
		this.init();
	}
	
	initAll.prototype = {
		//执行方法
		init:function(){
			this.leftListClick();
		},
		
		events:function(){//点击事件
			
		},
		
		//左侧列表的点击变化
		leftListClick:function(){
			//点击一级管理菜单
			$('.manage-list .manage-info-set').click(function(){
				$(this).parent().find('.basic-info-list').toggle();
			})
			$('.manage-list .manage-info-set').toggle(function(){
				$(this).css('background','#2e3b46 url(./css/images/minus.gif) no-repeat 10px 20px');
			},function(){
				$(this).css('background','#2e3b46 url(./css/images/plus.gif) no-repeat 10px 20px');
			});
			//点击二级管理菜单
			$('.basic-info-list li h3').click(function(){
				$(this).parent().find('ul').toggle();
			})
			$('.basic-info-list li h3').toggle(function(){
				$(this).css('background','#394a59 url(./css/images/minus.gif) no-repeat 27px 16px');
			},function(){
				$(this).css('background','#394a59 url(./css/images/plus.gif) no-repeat 27px 16px');
			});
			
		}
	}
	
	return new initAll();
})
