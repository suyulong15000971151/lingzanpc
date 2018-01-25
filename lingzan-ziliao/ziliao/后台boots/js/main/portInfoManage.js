require.config({
	urlArgs: '',
    baseUrl: 'js',
    paths: {
        "jquery": 'lib/jquery-1.8.3.min',
		"Calendar":"lib/ECode.calendar",
		"template":"lib/template",
		"pagination":"lib/pagination"
    }	
});

require(['jquery','template','Calendar',"pagination"],function($,template,Calendar,pagination){
	//初始化
	function initAll(){
		this.init();
	}
	
	initAll.prototype = {
		//执行方法
		init:function(){
			this.leftListClick();
			this.pageJump();
			this.events();
		},
		
		events:function(){//点击事件
			//点击添加按钮
				$('.port-operate-add').click(function(){
					$('.click-port-info-add').show();
					$('.mark').show();
				})
				$('.click-port-info-add h3 i').click(function(){
					$('.click-port-info-add').hide();
					$('.mark').hide();
				})
				$('.click-port-info-add .close-panel span').click(function(){
					$('.click-port-info-add').hide();
					$('.mark').hide();
				})
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
		},
	
	
	
		//分页
		pageJump:function(){
			var params = {
						postParams: {
							pageSize: '10'
						},
                        // 获取页面的查询条件
                        getSearchConditions: function() {
                            return {
                                fundType: $('#portContent').val()
                            };
                        },
                        
                        url: "http://f.apiplus.cn/bj11x5.json",
                        $listWrap: $(".J_listContent"),
				
                        // 模版 id
                        jsonp:"callback",
                        dataType:"jsonp",
                        
                        tpls: {
                            list: "list-tpl",
                            wait: "wait-tpl",
                            empty: "empty-tpl"
                        },

                        // 渲染数据之前处理数据的工作
                        beforeRender: function(data) {
                            // 处理后台返回数据
                            return data;
                        },

                        // 渲染表格之后的操作
                        afterRender: function(data) {
                           console.log("成功")
                        },
                       

                        // 注册自定义搜索
                        registerCustomSearch: function(query) {
                            $(".search-btn").click(function() {
                                query();
                            });
                        }
                    };

                    new pagination(params);
		}
	}
	
	return new initAll();
})
