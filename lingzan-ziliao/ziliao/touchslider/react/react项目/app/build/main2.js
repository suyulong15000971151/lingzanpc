ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(Header, null), React.createElement(Category, null)
	)
		,
    document.getElementById('app')
);
$(function(){
	TouchSlide({
	    slideCell: "#focus",
	    titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	    mainCell: ".bd ul",
	    effect: "left",
	    //autoPlay:true,//自动播放
	    autoPage: true, //自动分页
	    //switchLoad: "_src" //切换加载，真实图片路径为"_src" 
	});
})