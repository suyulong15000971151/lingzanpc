/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-29 14:04:31
 * @version $Id$
 */

 var n = 0;
 function uploads(obj){
	//alert(obj.files.length);
	if (!obj.value.match(/.jpg|.gif|.png|.bmp/i))
	{
		alert("请选择图片文件！");
	}else{
		n = obj.files.length;
		var html = "";
		for (var i=0;i<n ;i++ )
		{
			var url = window.URL.createObjectURL(obj.files[i]);
			var txt = obj.files[i].name.split(judge(obj.files[i]));
			//txt = txt.split("")
			console.log(url);
			html += `<div class='imgBox'>
			<div class='bg' style='background:url(`+url+`) no-repeat center;background-size:100% 100%'>
			</div>
			<p>`+txt[0]+`
			</p>
			</div>`;
		}
		$("#imgs").html('')
		$("#imgs").append(html);
		


	}
}
function judge(obj){
	var str = '';
	if (obj.name.match(/.jpg/i))
	{
		str = ".jpg";
	}else if (obj.name.match(/.png/i))
	{
		str = ".png";
	}else if (obj.name.match(/.gif/i))
	{
		str = ".gif";
	}else if (obj.name.match(/.bmp/i))
	{
		str = ".bmp";
	}
	return str;
}