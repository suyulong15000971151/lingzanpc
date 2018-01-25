window.onload=function(){
	window.onresize = resize;
	function resize(){
		var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 375);
		document.getElementsByTagName("html")[0].style.fontSize=deviceWidth / 3.75+'px';
		console.log(document.getElementsByTagName("html")[0].style.fontSize)
	};
	resize();
}
	